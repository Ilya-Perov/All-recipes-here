import { useNavigate } from 'react-router-dom';
import './home__toConstructorButton.css';

const ToConstructorButton = () => {
  const navigate = useNavigate();

  const goToConstructor = () => {
    navigate('/recipeConstructor');
  };

  return (
    <div className="buttonContainer">
      <button
        type="button"
        className="constructorButton"
        onClick={goToConstructor}
      >
        Конструктор
        <br />
        рецептов
      </button>
    </div>
  );
};

export default ToConstructorButton;
