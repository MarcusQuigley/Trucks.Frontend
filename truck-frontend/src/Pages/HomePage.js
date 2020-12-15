import react from 'react';
import {Link} from 'react-router-dom';
import data from '../data.js'
function HomePage(props){
    return  <ul className="trucks">
        {
        data.trucks.map(t=>
        <li key={t.Id}>
            <div className="truck">
                <Link to={'/trucks/' + t.Id}>
                    <img className="truck-img" src={t.ImagePath} alt="truck"/>
                </Link>
                <div className="truck-name">
                   <Link to={'/trucks/' + t.Id}>{t.Name}</Link> 
                </div>
                <div className="truck-year">{t.Year}</div>
                <div className="truck-price">{t.Price}</div>
            </div>
        </li>)
        }
    </ul>
}
export default HomePage;