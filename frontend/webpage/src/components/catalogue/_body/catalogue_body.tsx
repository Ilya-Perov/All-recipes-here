import { useEffect, useState } from 'react';
import RecipePreview from '../../recipePreview/recipePreview';
import { Recipe } from '../../../types';
import { fetchRecipes } from '../../../api/api';
import './catalogue_body.css';
import RecipeModal from '../../modal/_recipe/modal_recipe';

const CatalogueBody = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (error) {
        console.error('Ошибка загрузки рецептов:', error);
      }
    };

    loadRecipes();
  }, []);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipe(null);
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleCloseRecipe();
    }
  };

  const handleEscPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseRecipe();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return (
    <div className="catalogueContainer">
      <div className="catalogueHeader">
        <h1 className="catalogueTitle">Каталог рецептов</h1>
        <p className="catalogueDescription">
          Здесь вы найдёте разнообразные рецепты на каждый день — от быстрых
          завтраков до изысканных ужинов. Выберите блюдо, нажмите на него,
          откройте рецепт и готовьте с удовольствием!
        </p>
      </div>

      <div className="catalogueGrid">
        {recipes.map((recipe) => (
          <div
            key={recipe.title}
            className="catalogueItem"
            onClick={() => handleRecipeClick(recipe)}
          >
            <RecipePreview
              title={recipe.title}
              description={recipe.description}
              image={recipe.image_url}
              tags={recipe.tags}
            />
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={handleCloseRecipe} />
      )}
    </div>
  );
};

export default CatalogueBody;
