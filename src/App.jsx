import { Route, Routes } from 'react-router-dom';

import './App.css';
import Login_SignUp from './Components/LogIn_SignUp/Login_SignUp.jsx';

function App() {
    return (
        <div id="App">
            <Routes>
                <Route path="/register" exact element={<Login_SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
