import { motion } from 'framer-motion';

const ScrollReveal = ({ children, width = "fit-content", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export const RevealList = ({ children, interval = 0.1 }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: interval
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
};

export const RevealItem = ({ children }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
