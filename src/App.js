import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Presentation from './pages/Presentation';
import Routage from './pages/Routage';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Static from './pages/Static';
import State from './pages/State';
import Props from './pages/Props';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Tous les composants en dehors de la balise Routes est du contenu static : commun à toutes les pages. Plus précisement il ne se rechargera pas quand on clique sur un lien */}
        <Logo />
        <Navigation />
        <div className='main'>
          <Routes> {/* Avec le router, tous les code JSX, les composants ou autre qu'on souhaite mettre dans App doit se mettre entre ces balises */}
            <Route path="/" element={<Presentation/>}></Route>
            <Route path="/routing" element={<Routage/>}></Route>
            <Route path="/static" element={<Static/>}></Route>
            <Route path="/hooks" element={<State/>}></Route>
            <Route path="/props" element={<Props/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
