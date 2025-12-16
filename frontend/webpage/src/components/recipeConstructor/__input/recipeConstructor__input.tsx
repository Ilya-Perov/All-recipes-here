import { useState, useEffect } from 'react';
import './recipeConstructor__input.css';

interface RecipeInputProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  image: string;
  setImage: (value: string) => void;
  tags: string[];
  setTags: (value: string[]) => void;
  tagsInput: string;
  setTagsInput: (value: string) => void;
  ingredients: string[];
  setIngredients: (value: string[]) => void;
  ingredientsInput: string;
  setIngredientsInput: (value: string) => void;
  cookingTime: number;
  setCookingTime: (value: number) => void;
  serving: number;
  setServing: (value: number) => void;
  instructions: string;
  setInstructions: (value: string) => void;
}

export const RecipeInput = ({
  title,
  setTitle,
  description,
  setDescription,
  image,
  setImage,
  tags,
  setTags,
  tagsInput,
  setTagsInput,
  ingredients,
  setIngredients,
  ingredientsInput,
  setIngredientsInput,
  cookingTime,
  setCookingTime,
  serving,
  setServing,
  instructions,
  setInstructions,
}: RecipeInputProps) => {
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    image: '',
    tags: '',
    ingredients: '',
    cookingTime: '',
    serving: '',
    instructions: '',
  });

  useEffect(() => {
    const newErrors = {
      title: title.trim() ? '' : 'Название обязательно',
      description: description.trim() ? '' : 'Описание обязательно',
      image: image.trim() ? '' : 'Ссылка на изображение обязательна',
      tags: tags.length ? '' : 'Укажите хотя бы один тег',
      ingredients: ingredients.length ? '' : 'Введите хотя бы один ингредиент',
      cookingTime: cookingTime > 0 ? '' : 'Укажите время приготовления',
      serving: serving > 0 ? '' : 'Укажите количество порций',
      instructions: instructions.trim() ? '' : 'Инструкции обязательны',
    };
    setErrors(newErrors);
  }, [
    title,
    description,
    image,
    tags,
    ingredients,
    cookingTime,
    serving,
    instructions,
  ]);

  const getClassName = (field: keyof typeof errors) =>
    `recipeInputField ${errors[field] ? 'error' : ''}`;

  return (
    <div className="recipeInputBody">
      {/* Название */}
      <div className="recipeInputText">Введите название</div>
      <input
        className={getClassName('title')}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <div className="errorText">{errors.title}</div>}

      {/* Описание */}
      <div className="recipeInputText">Введите описание</div>
      <input
        className={getClassName('description')}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && (
        <div className="errorText">{errors.description}</div>
      )}

      {/* Изображение */}
      <div className="recipeInputText">Введите ссылку на изображение</div>
      <input
        className={getClassName('image')}
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="url"
      />
      {errors.image && <div className="errorText">{errors.image}</div>}

      {/* Теги */}
      <div className="recipeInputText">Введите теги (через запятую)</div>
      <input
        className={getClassName('tags')}
        value={tagsInput}
        onChange={(e) => setTagsInput(e.target.value)}
        onBlur={() =>
          setTags(
            tagsInput
              .split(', ')
              .map((i) => i.trim())
              .filter((i) => i.length > 0),
          )
        }
      />
      {errors.tags && <div className="errorText">{errors.tags}</div>}

      {/* Ингредиенты */}
      <div className="recipeInputText">Введите ингредиенты (через запятую)</div>
      <input
        className={getClassName('ingredients')}
        value={ingredientsInput}
        onChange={(e) => setIngredientsInput(e.target.value)}
        onBlur={() =>
          setIngredients(
            ingredientsInput
              .split(', ')
              .map((i) => i.trim())
              .filter((i) => i.length > 0),
          )
        }
      />
      {errors.ingredients && (
        <div className="errorText">{errors.ingredients}</div>
      )}

      {/* Время приготовления */}
      <div className="recipeInputText">
        Введите время приготовления (в минутах)
      </div>
      <input
        className={getClassName('cookingTime')}
        type="number"
        min="0"
        value={cookingTime}
        onChange={(e) => setCookingTime(Number(e.target.value))}
      />
      {errors.cookingTime && (
        <div className="errorText">{errors.cookingTime}</div>
      )}

      {/* Кол-во порций */}
      <div className="recipeInputText">Введите количество порций</div>
      <input
        className={getClassName('serving')}
        type="number"
        min="0"
        value={serving}
        onChange={(e) => setServing(Number(e.target.value))}
      />
      {errors.serving && <div className="errorText">{errors.serving}</div>}

      {/* Инструкции */}
      <div className="recipeInputText">Введите инструкции</div>
      <textarea
        className={getClassName('instructions')}
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        rows={6}
      />
      {errors.instructions && (
        <div className="errorText">{errors.instructions}</div>
      )}
    </div>
  );
};
