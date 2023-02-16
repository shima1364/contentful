import './App.css';
import RecipeList from './recipe/RecipeList';
import SingleRecipe from './recipe/SingleRecipe';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Pista Recipe</Navbar.Brand>
      </Container>
    </Navbar>
  
    <Router>
      <Routes>
        <Route path="/RecipeDetails/:id" element={<SingleRecipe />}/>
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/" element={<RecipeList/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;