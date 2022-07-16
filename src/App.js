import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
const [day, setDay] = useState(data.length)
const [info, setInfo] = useState(data)
  const clearInfo = () => {
    setDay(0)
    setInfo([])
  }
// console.log(info);
  console.log(data.length)
  return(
  <main>
    <div className='container'>
    <h3>{day} birthdays today</h3>
    <List info={info} clearInfo={clearInfo}/>
    <button onClick={clearInfo}>Clear All</button>
    </div>
  </main>
  ) 
}

export default App;
