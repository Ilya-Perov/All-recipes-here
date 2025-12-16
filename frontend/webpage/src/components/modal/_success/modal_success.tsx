import { useEffect } from 'react';
import './modal_success.css';

interface SuccessModalProps {
  message: string;
  onClose: () => void;
}

const SuccessModal = ({ message, onClose }: SuccessModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // не позволяет закрыть модалку при клике по содержимому
  };

  return (
    <div
      className="successModalOverlay"
      onClick={handleOverlayClick}
      data-testid="successModalOverlay"
    >
      <div
        className="successModalContent"
        onClick={handleContentClick}
        data-testid="successModalOverlay"
      >
        <div className="successMessage">{message}</div>
        <button className="modalCloseButton" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
