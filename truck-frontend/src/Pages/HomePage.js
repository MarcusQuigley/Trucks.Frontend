import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
 
import axios from 'axios';
function HomePage(props){
    const [trucks, setTruck] = useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
            const {data} =await axios.get("/api/trucks");
            console.log(data);
            setTruck(data);
        }
        fetchData();
        return ()=>{

        };
    }, []);
    return  <ul className="trucks">
        {
        trucks.map(t=>
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