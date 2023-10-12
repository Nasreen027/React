// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import DisplayCount from './components/displayCount/displayCount';
import ContactUsForm from './components/contactUsForm/contactUsForm';

function App() {
  const [count,setCount] = useState(0);
  const incrementBtnHandler = () =>{
    // console.log("increment");
    setCount(count + 1);
    // console.log(count);
  }
  const decrementBtnHandler = () =>{
    if(count <= 0){
      return;
    }
    // console.log("decrement");
    setCount(count - 1);
  }
  return (
    <div className="App">
     <DisplayCount count={count}/>
      <button onClick={incrementBtnHandler}>Increment</button>
      <button onClick={decrementBtnHandler}>Decrement</button>
      <ContactUsForm />
    </div>
  );
}

export default App;
