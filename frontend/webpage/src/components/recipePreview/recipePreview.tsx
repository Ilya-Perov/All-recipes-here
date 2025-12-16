import './recipePreview.css';
import TagsContainer from './__tagsContainer/recipePreview__tagsContainer';
import { RecipePreviewProps } from '../../types';

const RecipePreview = (props: RecipePreviewProps) => {
  const { title, description, image, tags } = props;

  return (
    <div className="recipePreviewContainer">
      <div className="recipePreviewImageWrapper">
        <img
          className="recipePreviewImage"
          src={image ?? '/placeholder.png'}
          alt="Изображение для рецепта"
        />
      </div>

      <div className="recipePreviewTextContainer">
        <div className="recipePreviewName">{title}</div>
        <div className="recipePreviewDescription">{description}</div>
      </div>

      <div className="recipePreviewTags">
        {tags.length > 0 ? (
          tags.map((tag) => <TagsContainer name={tag} key={tag} />)
        ) : (
          <span>Без тегов</span>
        )}
      </div>
    </div>
  );
};

export default RecipePreview;
