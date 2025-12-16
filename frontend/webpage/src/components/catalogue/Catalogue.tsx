import './Catalogue.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import CatalogueBody from './_body/catalogue_body';

const Catalogue = () => {
  return (
    <div className="content">
      <Header />
      <div className="main">
        <CatalogueBody />
      </div>
      <Footer />
    </div>
  );
};
export default Catalogue;
