import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Inicio from './components/inicio';
import Contacto from './components/contacto';
import Platos from './components/platos';
import NavbarExample from './layouts/navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavbarExample /> }>
          <Route index element={<Inicio /> } />
          <Route path='platos' element={<Platos /> } />
          <Route path='contacto' element={<Contacto /> } />
          <Route path='*' element={ <Navigate replace to="/" /> }>

          </Route>

        </Route>
      </Routes>
      </BrowserRouter>

  
    </div>
  );
}

export default App;
