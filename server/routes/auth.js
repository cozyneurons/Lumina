import express from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/google", async (req, res) => {
    const { credential } = req.body;

    if (!credential) {
        return res.status(400).json({ message: "Credential required" });
    }

    try {
        // 1. Verify Google Token
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { sub: googleId, email, name, picture } = payload;

        // 2. Find or Create User
        let user = await User.findOne({ googleId });

        if (!user) {
            user = await User.create({
                name,
                email,
                picture,
                googleId,
            });
        }

        // 3. Generate Session Token (JWT)
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({ user, token });
    } catch (error) {
        console.error("Auth Error:", error);
        res.status(400).json({ message: "Invalid token" });
    }
});

export default router;
