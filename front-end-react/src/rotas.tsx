import {BrowserRouter, Routes,
    Route} from 'react-router-dom';
  import Users from './pages/Users';
  import RegisterUser from './pages/RegisterUser';
  import { Login } from './pages/Login';
  
  export function RoutesApp() {
    return (
      <div>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Login/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/register" element={<RegisterUser/>} />
        </Routes>
      </BrowserRouter>
      </div>
    );
  }
  
  