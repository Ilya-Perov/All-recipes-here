import { useState, useEffect } from 'react';
import { RecipeInput } from './__input/recipeConstructor__input';
import RecipePreview from '../recipePreview/recipePreview';
import Header from '../header/header';
import RecipeDisplay from '../recipeDisplay/recipeDisplay';
import { createRecipe } from '../../api/api';
import SuccessModal from '../modal/_success/modal_success';
import FailureModal from '../modal/_failure/modal_failure';
import placeholder from '../../images/placeholder.png';
import './recipeConstructor.css';
import Footer from '../footer/footer';

export const RecipeConstructor = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagsInput, setTagsInput] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientsInput, setIngredientsInput] = useState('');
  const [cookingTime, setCookingtime] = useState(0);
  const [serving, setServing] = useState(0);
  const [instructions, setInstructions] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const isFormValid =
    title.trim() !== '' &&
    description.trim() !== '' &&
    image.trim() !== '' &&
    tags.length > 0 &&
    ingredients.length > 0 &&
    cookingTime > 0 &&
    serving > 0 &&
    instructions.trim() !== '';

  useEffect(() => {
    setTagsInput(tags.join(', '));
  }, [tags]);

  useEffect(() => {
    setIngredientsInput(ingredients.join(', '));
  }, [ingredients]);

  const handleSubmit = async () => {
    const payload = {
      title,
      description,
      ingredients,
      instructions,
      cooking_time: cookingTime,
      servings: serving,
      image_url: image,
      tags,
    };

    try {
      await createRecipe(payload);
      setShowSuccessModal(true);
      handleReset();
    } catch (err) {
      setShowFailureModal(true);
    }
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setIngredients([]);
    setIngredientsInput('');
    setCookingtime(0);
    setServing(0);
    setImage('');
    setTags([]);
    setTagsInput('');
    setInstructions('');
  };

  return (
    <div className="content">
      <div className="recipeConstructor">
        <Header />
        <div className="recipeConstructorTitle">Конструктор рецептов</div>
        <div className="recipeConstructorDivider"></div>

        <div className="recipeConstructorTitle">Превью рецепта</div>
        <div className="recipeConstructorBody">
          <div className="recipePreviewWrapper">
            <RecipePreview
              title={title || 'Без названия'}
              description={description || 'Без описания'}
              image={image || placeholder}
              tags={tags.length > 0 ? tags : ['Без тегов']}
            />
          </div>

          <RecipeInput
            title={title}
            description={description}
            image={image}
            tags={tags}
            tagsInput={tagsInput}
            ingredients={ingredients}
            ingredientsInput={ingredientsInput}
            cookingTime={cookingTime}
            serving={serving}
            instructions={instructions}
            setTitle={setTitle}
            setDescription={setDescription}
            setImage={setImage}
            setTags={setTags}
            setTagsInput={setTagsInput}
            setIngredients={setIngredients}
            setIngredientsInput={setIngredientsInput}
            setCookingTime={setCookingtime}
            setServing={setServing}
            setInstructions={setInstructions}
          />
        </div>

        <div className="recipeConstructorDivider"></div>
        <div className="recipeConstructorTitle">Превью полного рецепта</div>
        <RecipeDisplay
          title={title || 'Без названия'}
          description={description || 'Без описания'}
          image={image || placeholder}
          tags={tags}
          ingredients={ingredients}
          cookingTime={cookingTime}
          servings={serving}
          instructions={instructions || 'Нет инструкции'}
        />

        <div className="formButtonContainer">
          <button
            className="formButton save"
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Сохранить
          </button>
          <button className="formButton reset" onClick={handleReset}>
            Сбросить
          </button>
        </div>

        {showSuccessModal && (
          <SuccessModal
            message="Рецепт успешно сохранён!"
            onClose={() => setShowSuccessModal(false)}
          />
        )}

        {showFailureModal && (
          <FailureModal
            message="Ошибка! Рецепт не был сохранен!"
            onClose={() => setShowFailureModal(false)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};
