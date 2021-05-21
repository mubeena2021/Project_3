
import React, { useState }  from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





function Home(){
  return(
  <>
 

  <div className="container">
    <div className="">
         <h1> Welcome! Click on Todo to create tasks</h1>
    </div>
  </div> 
  </>
  ); }


  
function Todo(){
 
const [taskTxt, setText] = useState([]);

const updateItemTxt = async (event) => {
  setText(event.currentTarget.value);
};

const addItem = async () => {
    
};


  return(
  <>
  <div className="p-2">
    <div className=" ">
         <label for="todolist" className="form-label ">Tasks:</label>

         <input value={taskTxt} onChange={updateItemTxt} className="form-control " type="search" ></input>
        
         <button onClick={addItem} className="btn btn-secondary mt-3 w-100 " type="submit">Add</button>
    </div>  
    <p>Txt is:  {taskTxt}</p> 
   {<ul>
     <li >{taskTxt}</li>
    </ul>} 
              
  </div> 
  </>
  ); }


  function Contact(){
    return(
  <>

  <div className ="m-2">
  <label for ="exampleFormControlInput1" className ="form-label"> First Name:</label>
  <input type ="text" className ="form-control  " id ="FirstName" placeholde r="First Name"></input>
  </div>
  <div className="m-2 ">
  <label for="exampleFormControlInput1" className="form-label">Last Name:</label>
  <input type="text" className="form-control" id="LastName" placeholder="Last Name:"></input>
  </div>
  <div className="m-2 ">
  <label for="exampleFormControlInput1" className="form-label">Email:</label>
  <input type="email" className="form-control" id="Email" placeholder="email@.com"></input>
  </div>

  <div className="m-2">
  <label for="exampleFormControlTextarea1" className="form-label ">Message:</label>
  <textarea className=" form-control " id="Message" rows="5" placeholder="Message"></textarea>
  </div>
  <div className="m-2">
  <button className="btn btn-primary w-100 p-2 mt-3" type="button">Send</button>
 </div>
 



  </>
  ); } 
  

  
function Mynav(){
  return(
<>

   <ul className=" nav pl-2 ">
      <a className="navbar-brand " href="/Home">MyTasks</a>
      <li className="nav-item">
         <a className="nav-link" href="/Todo">Todo</a>
      </li>
     <li className="nav-item">
         <a className="nav-link" href="/Contact">Contact</a>
    </li> 
   </ul>

</>
); } 






function App() {
  
  
  return (


   <Router>
    <div className="container-fluid" >
    
    <Mynav/>
  
    <Switch>
    <Route path="/Home" component={Home}/>
    <Route path="/Todo" component={Todo}/>
    <Route path="/Contact" component={Contact}/>
    </Switch>

  </div> 
  </Router>
  ); }


ReactDOM.render(
  <App/> ,
  document.getElementById('root'),
  );


  export default App;