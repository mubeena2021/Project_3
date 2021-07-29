
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
       <h3>Click on Todo to create your tasks for today</h3>
    </div>
  </div> 
  </>
  ); }

/* TODO PAGE */
function Todo(){

const [query, setQuery] = useState("");
const [itemList, updateList] = useState([]);
const [filter, setFilter] = useState([]);




//Adds task when add button is clicked
const addToList = () => { 
  if(query == ""){
    return alert("Please enter a task!");
  }
updateList([...itemList,{ item:query, completed: false, key:Date.now()} ]);
setQuery("");
};

//Adds task when enter key is pressed
const keyPressed = ({ key }) => {
  if (key === "Enter") {
   addToList()
  }
}

// Updates input box
const updateQuery =  e => {
 setQuery(e.currentTarget.value)
};

//Input Box, add button and  list of task
return(
  <>
 <div className="container ">
  <div className=" container wrapper">
  
    <div className="container d-flex justify-content-between input-wrapper">

    <input value={query} onChange={updateQuery} onKeyPress={keyPressed} className="form-control w-100" type="text"></input>
    <button onClick={addToList} className="btn btn-secondary rounded ">Add</button>
    </div>
  </div>
    <View itemslist = {itemList} updateList={updateList}  filter={filter} setFilter={setFilter} />
    <List itemslist = {itemList} updateList={updateList}/>
    
 </div>
</>
); }






function View(props){
  const [all, allitems] = useState("");
  const [allcomplete, allcompleteditems] = useState("");
  const [alluncomplete, alluncompleteditems] = useState("");
  

const allTasks = () => {
 let c = props.itemslist.map((k) =>{
return k.item, console.log(k.item , "ALL ")
})
allitems(c); console.log(c)
};


const completeTasks = (e) => {
  e.itemslist.filter((k) => {
if(k.completed !== false) {
return console.log(k)
}
})}


 const incompleteTasks = (e) => {
    e.itemslist.map((k) =>{
     if(k.completed !== true) {
       return console.log(k)
}
})}





 console.log(props)
 // View of all, incomplete and completed tasks

   return(
    <>
  <div className="container ">
       <div className=" container filter-btn ">
         <button onClick={ ()=>allTasks(props)}  className="btn-lg btn-secondary border border-dark rounded ">
          All 
          </button>
        <button onClick={ ()=>completeTasks(props)}  className="btn-lg btn-secondary border border-dark rounded ">
          Completed 
        </button>
        <button onClick={ ()=>incompleteTasks(props)} className="btn-lg btn-secondary border border-dark rounded ">
          Incomplete
        </button>
        </div>
    </div> 
   

</>
);}


// Creates list of tasks
function List(props){

  const deleteItem = (key) => {
  const newlist = props.itemslist.filter((item) => {
   return item.key !== key;
  });
  props.updateList(newlist);
  };

  const completeItem = (key) => {
  const itemComplete = props.itemslist.map((k) =>{
    //console.log( k.key === key);
  if(k.key === key){
   return { ...k , completed: true}
  }
  return k;
  })
  props.updateList(itemComplete)
  }


// Task box with complete and delete button
return (
<>
{props.itemslist.map((key) =>{
  return <div className="container ">
         <div className="container taskInputBox w-75 ">
            <p className={`taskBox key={key.key} ${key.completed ? "completed ": ''}`}> {key.item} </p>
            <button onClick={ ()=>completeItem(key.key) }className=" complete-Btn btn btn-sm btn-success ">Complete</button>
            <button onClick={ ()=>deleteItem(key.key)} className=" del-Btn btn btn-sm btn-light">Delete</button>      
         </div>
         </div>
})
}
</>
);}




/* CONTACT PAGE */
  function Contact(){
    return(
  <>
  <div className="container contactContainer ">
  <div className ="m-2 ">
  <label for ="exampleFormControlInput1" className ="form-label text-light"> First Name:</label>
  <input type ="text" className ="form-control  " id ="FirstName" placeholder="First Name"></input>
  </div>
  <div className="m-2 ">
  <label for="exampleFormControlInput1" className="form-label text-light">Last Name:</label>
  <input type="text" className="form-control " id="LastName" placeholder="Last Name"></input>
  </div>
  <div className="m-2 ">
  <label for="exampleFormControlInput1" className="form-label text-light">Email:</label>
  <input type="email" className="form-control " id="Email" placeholder="Email"></input>
  </div>
  <div className="m-2">
  <label for="exampleFormControlTextarea1" className="form-label text-light">Message:</label>
  <textarea className=" form-control " id="Message" rows="5" placeholder="Message"></textarea>
  </div>
  <div className="m-2 ">
  <button className="btn contactBtn btn-secondary w-25 p-2 mt-3" type="button">Send</button>
 </div>
 </div>
  </>
); } 
  



/* NAVAGATION  */
function Mynav(){
  return(
<>
   <ul className=" container nav nav-container pl-2 ">
      <li className="navbar-brand ">MyTasks</li>
      <li className="nav-item">
         <a className="nav-link" href="/Home">Welcome</a>
      </li>
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