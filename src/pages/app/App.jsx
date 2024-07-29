import './App.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-home">

      <div className='cabeçalho'>

        <div className='lg'>
        <img src="/assets/images/logofrei.png" alt="" />
        <h3> React FreiS </h3>
        </div>

        <div className='nav'>
        <Link to='/'> Inicio </Link>
        <Link to='/sobre'> Sobre </Link> 
        </div>
        
      </div>

    </div>
  );
}