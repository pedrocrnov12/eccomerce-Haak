import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Props {
  onBuyClick: () => void;
  onHistoryClick: () => void;
}

export const Emergente: React.FC<Props> = ({ onBuyClick, onHistoryClick }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  function handleBuyClick() {
    setShowModal(false);
    onBuyClick();
  }

  function handleHistoryClick() {
    setShowModal(false);
    onHistoryClick();
  }

  return (
    <>
      <style jsx>{`
        .overlay {
          
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          height: 100vh;
          justify-content: center;
          position: fixed;
          top: 0;
          width: 80%;
          z-index: 999;
        }

        .modal {
          animation: slide-up 0.5s ease-in-out;
          background-color: #ffffa2;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          padding: 20px;
          text-align: center;
          
        }

        @keyframes slide-up {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .buttonContainer {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .buyButton {
          background-color: #007bff;
          border: none;
          border-radius: 5px;
          color: #fff;
          cursor: pointer;
          margin-right: 10px;
          padding: 10px 20px;
        }

        .buyButton::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #fff;
          transform: translateX(-50%);
          transition: width 0.2s ease-in-out;
        }

        .historyButton:hover::before {
          width: 100%;
        }

        .historyButton {
          background-color: #6c757d;
          border: none;
          border-radius: 5px;
          color: #fff;
          cursor: pointer;
          padding: 10px 20px;
          position: relative;
        }
      `}</style>

      <div className="overlay" style={{ display: showModal ? 'flex' : 'none' }}>
        <div className="modal">
          <h2>Bienvenido/a</h2>
          <img style={{height:'50vh', width:'50vh'}} src="/2.jpeg" alt="Imagen" />
          <p>¡Gracias por visitar Kaab Haak! ¿Qué te gustaría hacer?</p>
          <div className="buttonContainer">
            <button className="buyButton" onClick={handleBuyClick}>
             Comprar
            </button>
            <button className="historyButton" onClick={handleHistoryClick}>
             
              <Link href='/History'> ¡Conocer nuestra historia!</Link>
    </button>
  </div>
</div>
</div>
</>
);
}

