import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Calculation from './components/Calculation'
import Result from './components/Result'
import { useState } from 'react'
import Details from './components/Details'
const App = () => {
  const [val,setVal] = useState({
    height:150,
    weight:55,
  })
  function handleChange(identifer,newValue){
    setVal((preVal)=>({
      ...preVal,
      [identifer]:+newValue,
    }));
  }
  const bmi = Calculation(val.height,val.weight)
  return (<>
    <Header />
    <Home onChange={handleChange} val={val}/>
    <Result bmi={bmi} />
    <Details bmi={bmi}/>
  </>
  )
}

export default App