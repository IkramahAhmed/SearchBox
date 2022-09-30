import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import data from './data';


function App() {
const [filter,setFilter] = useState('')
const searchText =(event) =>{
  setFilter(event.target.value);
}

let dataSearch =data.cardData.filter(item =>{
  return Object.keys(item).some(key=>
    item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()) 
    )
});
  return (
    <>
    <h1>Search</h1>
    <div className="text-center">
<input type="text"  value={filter} onChange={searchText.bind(this)} ></input>
</div>
    <div className="main">
{dataSearch.map((item,index)=>{
    return(
<div class="card">
 <img src={item.img} className="card-img-top" width={300}></img>
  <div class="container">
    <h4 className="card-title">{item.title}</h4> 
    <p className="card-text">{item.desc}</p> 
  </div>
</div>
    );
   })}   

</div>
    </>

    
  );
}

export default App;
