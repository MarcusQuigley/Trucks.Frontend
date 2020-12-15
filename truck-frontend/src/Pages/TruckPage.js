import react from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
function TruckPage(props){
     const truck = data.trucks.find(t=> t.Id === props.match.params.id);
     return  <div >
                <div className="back-to-result">
                    <Link to="/">Back to trucks</Link>
                </div>
                <div className="truck-details">
                    <div className="truck-image">
                        <img   src={truck.ImagePath} alt="truck"/>
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                               <h4>{truck.Name}</h4>
                            </li>
                            <li>
                                {truck.Year} 
                            </li>
                            <li>
                                Price:<b>${truck.Price}</b>
                            </li>
                           
                            <li>
                                Description:
                                <div>
                                    {truck.Description}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>Price: {truck.Price}</li>
                            <li>Quantity: 
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </li>
                            <li>
                                <button className="button">Add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
 
}
export default TruckPage;