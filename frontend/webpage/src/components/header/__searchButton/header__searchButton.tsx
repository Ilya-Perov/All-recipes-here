import './header__searchButton.css';
import { useNavigate } from 'react-router';

const HeaderSearchButton = () => {
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate('/search');
  };
  return (
    <button type="button" className="searchButton" onClick={goToSearch}>
      Поиск
      <br />
      рецептов
    </button>
  );
};

export default HeaderSearchButton;
