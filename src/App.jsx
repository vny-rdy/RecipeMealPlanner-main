import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/landing';
import FindRecipes from './pages/FindRecipes';
import About from './pages/About';
import GroceriesList from './pages/GroceriesList';
import MealType from './pages/MealType';
import RecipeDetail from './pages/RecipeDetail';
import Weeklyplan from './components/WeekCard';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/findRecipes" element={<FindRecipes />} />
            <Route path="/about" element={<About />} />
            <Route path="/groceries" element={<GroceriesList />} />
            <Route path="/meals/:type" element={<MealType />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/weeklyplan" element={<Weeklyplan />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;