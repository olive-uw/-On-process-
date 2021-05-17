import logo from './logo.svg';
// import picture from './asset/image.webp';
import './App.css';
import { useState } from "react"
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Routes />
      </Router>
    </>
  );
  //const [num,setNum]=useState(0);
  //const handleIncrement=()=>{
  // setNum(num +1);
  //};

  //return (

  //<div className="App">
  //<p>output: {num}</p>

  //<button onClick={handleIncrement}>increment</button>  
  // <button >decrement</button>
  // </div>
  //);
}

export default App;
