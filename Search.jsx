import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Card from "./Card";

import './Search.css';

export default function Search(){
    let [searchData,setData] = React.useState("");
    let [response,responseData] = React.useState([]);
    let [click,setClick]=React.useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    let searchValue = (event)=>{
        setData(event.target.value);
    }
    let searched = async ()=>{
        let val = searchData;
        
        setData("");
        response= await fetch("http://localhost:5000/images/:"+val)
        .then(response=>response.json())
        .then(response=>response);
        responseData(response);
        click=[0,0,0,0,0,0,0,0,0,0,0,0];
        setClick(click);
    }
    function clicked(index){
        // console.log(index);
        let list = [...click];
        list[index]++;   
        setClick(list);
    }
    return (
        <> 
            <div className="search-form">
                <input type="text" value={searchData} onChange={searchValue} id="search" placeholder="search"></input>
                <button onClick={searched} ><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                <h3>For Now Three Things are Present</h3>
                <h4>Pants | Shoes | T-shirt</h4>
            </div>
            <div className="card-images">
                {
                    response.map((data,index) => {
                        return (
                            <>
                            <div className="mycard">
                            <button key={index} onClick={()=>clicked(index)} >
                            <Card value={data}></Card>
                            </button>
                            <p>{click[index]}</p>
                            </div>
                            </>
                            
                        );
                    })
                }
            </div>
        </>
    );
}
//