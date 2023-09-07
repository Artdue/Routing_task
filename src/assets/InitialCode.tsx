/**
 * App.tsx
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Team from './components/Team';
import About from './components/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/team' element={<Team />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

 * NavBar.tsx
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <button onClick={() => navigate(-1)}>⬅️</button>
      <button onClick={() => navigate(+1)}>➡️</button>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/team')}>Team</button>
      <button onClick={() => navigate('/contacts')}>Contacts</button>
      <button onClick={() => navigate('/about')}>About</button>
    </div>
  );
}

 * Other components
import { Link } from 'react-router-dom';
import '../index.css';

export default function Component_name() {
  return (
    <div className='Component_name'>
      <h1>Component_name</h1>
      <Link to='/link_to_Component_name'>To Component_name</Link>
    </div>
  );
}

 */
