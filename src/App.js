
import React, { useState }  from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* HOME PAGE */

function Home(){
  return(
  <>
  <div className="container">
    <div className="homeContainer">
         <h2>Welcome!</h2>
         <h2>Click on Todo to create tasks</h2>
    </div>
  </div> 
  </>
  ); }


  /* TODO PAGE */

function Todo(){

const [query, setQuery] = useState(null);
const [itemList, updateList] = useState([]);
//const [currentFilter, setCurrentFilter] = useState('');

// Adds the search to list when add button clicked

//setSearches(searches => [...searches, searches.concat(query)])

const addToList = () => {
updateList([...itemList,{ item:query, completed: false, key:Date.now()} ]);
setQuery("");

};
 // e.preventDefault();
//setSearches(searches => searches.concat(query))
//setCurrentFilter(currentFilter => currentFilter.concat(query));
//console.log("itemlist", itemList);

// Updates input box
const updateQuery =  e => {
 setQuery(e.currentTarget.value)
  console.log(e.currentTarget.value)
};


//Adds search when enter key is pressed
//const keyPressed = ({ key }) => {
  //if (key === "Enter") {
   // handleClick()
  //}
//}

  return(
  <>
 <div className="container ">
  <div className=" container wrapper">
    <div className="container d-flex justify-content-between input-wrapper">
    <input value={query} onChange={updateQuery} className="form-control w-75" type="text"></input>
    <button onClick={addToList} className="btn btn-success w-25">Add</button>
    </div>

  </div>
    <List itemslist = {itemList}/>
 </div>
  
  </>
  ); }


function List(props){
console.log(props);
return (
<>
{props.itemslist.map((key) =>{
  return <div className="container  w-75"><div className="taskInputBox" >{key.item}</div></div>
})

}


</>



);
}


/* CONTACT PAGE */
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
  

/* NAVAGATION  */
function Mynav(){
  return(
<>
   <ul className=" container nav nav-container pl-2 ">
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
    <div className="container d-flex flex-column w-100 ">
    
    <Mynav/>
   
    <Switch>
    <Route path="/Home" component={Home} />
    <Route path="/Todo" component={Todo} />
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