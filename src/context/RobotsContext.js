import { useState, createContext, useEffect } from "react";

const RobotContext = createContext()

export const RobotProvider = ({children}) => {
    const [robots, setRobots] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())   
        .then(data => {
          console.log(data)
           setRobots(data)
      })
      }, [])


function handleSearchQuery(event) {
    const filtered =  robots.filter((item) => {
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setRobots(filtered);
    if (event.target.value.length < 1) { 
        setRobots(filtered);
    }
  }
  return <RobotContext.Provider value ={{robots, handleSearchQuery}}> {children}</RobotContext.Provider>
  }

  export default RobotContext;