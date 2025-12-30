import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    return (
        <div className="particle-background-container">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            <div className="grid-overlay"></div>

            {/* Floating Symbols */}
            <div className="floating-symbol symbol-1">{"{ }"}</div>
            <div className="floating-symbol symbol-2">{"</>"}</div>
            <div className="floating-symbol symbol-3">{"ƒ(x)"}</div>
            <div className="floating-symbol symbol-4">{"Σ"}</div>
            <div className="floating-symbol symbol-5">{"#"}</div>
        </div>
    );
};

export default ParticleBackground;
