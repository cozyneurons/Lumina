import { useEffect, useRef } from 'react';

const CursorBackground = () => {
    const backgroundRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (backgroundRef.current) {
                const x = e.clientX;
                const y = e.clientY;
                backgroundRef.current.style.setProperty('--x', `${x}px`);
                backgroundRef.current.style.setProperty('--y', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="cursor-background-container">
            <div ref={backgroundRef} className="cursor-gradient"></div>
        </div>
    );
};

export default CursorBackground;
