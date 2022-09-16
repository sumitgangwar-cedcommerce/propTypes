import './App.css';
import Display from './Display';
import DisplayName from './DisplayName';
import Validator from './Validator';

function App() {
  var name = "Hello World"
  var marks = 8
  var score = 10

  return (
    <div className="App">
      <Display
        name = {name}
        marks = {marks}
        total = {Math.max(1 , score)}   
      />

      <Validator
        string = "Hello"
        object = {{name : "Rohit"}}
        number = {10}
        boolean = {true}
        fun = {()=>{console.log("hello")}}
        symbol = {Symbol("m")}
      />

      <DisplayName myName = "Sumit Gangwar" /> 
    </div>
  );
}

export default App;
