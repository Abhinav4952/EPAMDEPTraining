import React from 'react';
const person=(props)=>{
return <p> Hi Persons,{(Math.random()*10)} {props.name} and my age is {props.age},{props.children}</p>
}
export default person;