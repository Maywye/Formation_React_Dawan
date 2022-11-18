import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Presentation from './pages/Presentation';
import Routage from './pages/Routage';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Static from './pages/Static';
import State from './pages/State';
import Props from './pages/Props';
import Connexion from './pages/Connexion';
import { BackBtn } from './components/Buttons';
import Effects from './pages/Effects';
import Request from './pages/Request';
import Forms from './pages/Forms';
import Footer from './components/Footer';
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound';
import Redux from './pages/Redux';

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
            <Route path="/login" element={<Connexion/>}></Route>
            <Route path="/effects" element={<Effects/>}></Route>
            <Route path="/request" element={<Request/>}></Route>
            <Route path="/forms" element={<Forms/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/redux" element={<Redux/>}></Route>
            <Route path="/user/:id" element={<UserDetail/>}></Route>
          </Routes>
          <BackBtn />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
