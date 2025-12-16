import './header__catalogueButton.css';
import { useNavigate } from 'react-router-dom';

const HeaderCatalogueButton = () => {
  const navigate = useNavigate();

  const goToCatalogue = () => {
    navigate('/catalogue');
  };

  return (
    <button type="button" className="catalogueButton" onClick={goToCatalogue}>
      Каталог
      <br />
      рецептов
    </button>
  );
};

export default HeaderCatalogueButton;
