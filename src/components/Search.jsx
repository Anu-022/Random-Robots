import { useContext } from 'react';
import RobotContext from '../context/RobotsContext'
const Search = () => {
  const {handleSearchQuery} = useContext(RobotContext)
   
    return (
        <div className="search">
            <input type="search"onChange={handleSearchQuery} className="search-input" placeholder="Search a character name" />
        </div>
    )
};

export default Search;