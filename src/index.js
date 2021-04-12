import React from 'react';
import ReactDOM from 'react-dom';
//import RandomAnime from 'random-anime';
//import CoolImages from 'cool-images';
import './index.css';


let currDate = new Date(2021, 4, 8 , 19.44);
currDate = currDate.getHours();

let greeting = "";
const lightpink = "#fa9191";
let cssStyle = {};
// const randomanime = require('random-anime').anime();

// const img = {
//   width: '300px',
//   height: '500px',
//   paddingRight: '20px'
// }

if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morning";
}else if(currDate >= 12 && currDate < 17){
  greeting = "Good Afternoon";
  cssStyle.color= "orange";
}else if(currDate >= 17 && currDate < 20 ){
  greeting = "Good Evening";
  cssStyle.color= "green";
}
else{
  greeting = "Good Night";
  cssStyle.color = "black"
}

const head1 = {
  color: lightpink,
  textAlign: 'center',
  margin: '20px 20px',
  fontWeight: 'bold',
  fontSize: '2rem',
  textTransform: 'capitalize',
  padding: '20px',
  background: 'rgba(0,168,255,0.3)',
  borderRadius: '10px',
  border: '4px solid white'
}

ReactDOM.render(
  <>
  <div className="center">
  <h1 style= {head1} >Hello Sir/Madam, <span style={cssStyle}> {greeting} </span></h1>
  </div>
</>,
document.getElementById('root'));

// <img src={randomanime} alt="random images"/>
// <img src={randomanime} alt="random images"/>
// <img src={randomanime} alt="random images"/>