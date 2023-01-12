import CardList from './components/CardList';
import Search from './components/Search';
import { RobotProvider } from './context/RobotsContext';
import {FaHeart} from 'react-icons/fa'

function App() {

  const cYear = new Date().getFullYear(); 
  
  return (
    <div className="App">
      <h1 className="header-text">Random Robots</h1>
      <RobotProvider>
        <Search/>
        <CardList />
      </RobotProvider>
      
      <footer className='footer'>Random Robots &copy; {cYear} | coded with <FaHeart style={{color: 'red'}} /> by Anu Olusanya WTF class of 2022/2023</footer> 
    </div>
  )
}

export default App;
