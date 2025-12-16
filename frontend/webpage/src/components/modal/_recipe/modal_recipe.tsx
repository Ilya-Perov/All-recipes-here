import React, { useEffect } from 'react';
import { Recipe } from '../../../types';
import RecipeDisplay from '../../recipeDisplay/recipeDisplay';
import './modal_recipe.css';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleEscPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modalContent">
        <button onClick={onClose} className="closeButton">
          Закрыть
        </button>
        <RecipeDisplay
          title={recipe.title}
          description={recipe.description}
          image={recipe.image_url}
          tags={recipe.tags}
          ingredients={recipe.ingredients}
          cookingTime={recipe.cooking_time}
          servings={recipe.servings}
          instructions={recipe.instructions}
        />
      </div>
    </div>
  );
};

export default RecipeModal;
