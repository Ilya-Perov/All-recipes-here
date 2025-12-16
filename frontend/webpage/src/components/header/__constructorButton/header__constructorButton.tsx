import { useNavigate } from 'react-router-dom';
import './header__constructorButton.css';

const HeaderConstructorButton = () => {
  const navigate = useNavigate();

  const goToConstructor = () => {
    navigate('/recipeConstructor');
  };

  return (
    <div>
      <button
        type="button"
        className="headerConstructorButton"
        onClick={goToConstructor}
      >
        Конструктор
        <br />
        рецептов
      </button>
    </div>
  );
};

export default HeaderConstructorButton;
