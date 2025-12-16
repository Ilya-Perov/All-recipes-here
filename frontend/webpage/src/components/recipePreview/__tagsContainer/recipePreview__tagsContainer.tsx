import './recipePreview__tagsContainer.css';

type tagsContainerProps = {
  name: String;
};

export const TagsContainer = (props: tagsContainerProps) => {
  const { name } = props;

  return <div className="tagsContainer">{name}</div>;
};

export default TagsContainer;
