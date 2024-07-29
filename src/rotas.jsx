import App from './pages/app/App';
import Sobre from './pages/Sobre/sobre.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Navegacao() {
    return (
        < BrowserRouter >
            < Routes >
                <Route path='/' element={<App />} />
                <Route path='/Sobre' element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}
