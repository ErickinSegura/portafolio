import React from 'react';
import StarryBackground from "./components/background/StarryBackground";

const App = () => {
    return (
        <div>
            <StarryBackground />

            <div className="glass-container">
                <h1>🚧 En construcción 🚧</h1>
                <p>¡Vuelve pronto!</p>
            </div>

            <style>{`
                .glass-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(255, 255, 255, 0.05); /* Más transparente */
                    backdrop-filter: blur(20px); /* Más desenfoque */
                    -webkit-backdrop-filter: blur(20px);
                    border-radius: 15px;
                    border: 1px solid rgba(255, 255, 255, 0.4); /* Bordes más definidos */
                    box-shadow: 
                        inset 0 0 15px rgba(255, 255, 255, 0.1), 
                        0 4px 8px rgba(0, 0, 0, 0.3); /* Brillo interno + sombra */
                    padding: 40px;
                    text-align: center;
                    color: white;
                    font-size: 1.5rem;
                    width: 80%;
                    max-width: 400px;
                }
                
                h1, p {
                    margin: 10px 0;
                    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5); /* Mejor legibilidad */
                }
            `}</style>
        </div>
    );
};

export default App;
