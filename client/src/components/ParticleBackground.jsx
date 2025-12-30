import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    return (
        <div className="particle-background-container">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            <div className="grid-overlay"></div>
        </div>
    );
};

export default ParticleBackground;
