import React from 'react';
import Nav from './Nav';
import "./index.css";
import TopBar from './TopBar';
function Explore(){
    return (
        <div className="index-main grid-container">
        <div className="ind-top"><TopBar/></div>
        <div className="ind-nav"><Nav/></div>
        <div className="ind-comp">
        <div className="dash-main">
           explore page   
        </div>
       </div>
       </div>
    );
}


export default Explore;