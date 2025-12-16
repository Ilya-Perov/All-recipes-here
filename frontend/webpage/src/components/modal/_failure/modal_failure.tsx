import { useEffect } from 'react';
import './modal_failure.css';

interface failureModalProps {
  message: string;
  onClose: () => void;
}

const FailureModal = ({ message, onClose }: failureModalProps) => {
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
    <div className="failureModalOverlay" onClick={handleOverlayClick}>
      <div className="failureModalContent" onClick={handleContentClick}>
        <div className="failureMessage">{message}</div>
        <button className="modalCloseButton" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default FailureModal;
