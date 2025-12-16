import './header.css';
import logo from '../../images/logo.png';
import HeaderSearchButton from './__searchButton/header__searchButton';
import HeaderCatalogueButton from './__catalogueButton/header__catalogueButton';
import GoToConstructorButtonHeader from './__constructorButton/header__constructorButton';

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <a href="/">
            <img
              className="headerImage"
              src={logo}
              alt='Лого вебсайта "Все рецепты здесь"'
            />
          </a>
          <div className="headerText">Все рецепты здесь</div>
        </div>
        <div className="headerText"></div>
        <div className="headerButtonContainer">
          <HeaderCatalogueButton />
          <HeaderSearchButton />
          <GoToConstructorButtonHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
