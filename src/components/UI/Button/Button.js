import React from 'react';
import classes from './Button.module.css';

//const classes = require('').to
const Button = (props) => (
   <button
  className={[classes.Button,classes[props.btnType]].join(' ')}
  onClick={props.clicked}>{props.children}</button> 
);


export default Button;
