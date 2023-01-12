import { useContext } from 'react';
import RobotContext from '../context/RobotsContext'
import Card from './Card';
const CardList = () => {
    const {robots} = useContext(RobotContext)
    return (
        <div className="card-container">

            <div className="card-list">
            {robots.length > 0 ? robots.map(item =>  (
                <Card key={item.id} item ={item} />        
            )): <h1 className='info'>No Items Matched</h1>
        
        }   
        </div>

        </div>
        
    )
};

export default CardList;