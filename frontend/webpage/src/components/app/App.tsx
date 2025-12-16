import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecipeConstructor } from '../recipeConstructor/recipeConstructor';
import Catalogue from '../catalogue/Catalogue';
import Home from '../home/home';
import SearchPage from '../searchPage/searchPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/recipeConstructor" element={<RecipeConstructor />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
