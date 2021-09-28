import React from 'react';
import classes from './List.css';

const list = (props) => (
  <div className={classes.ListControl}>
    <p>{props.listItem.property} </p>
    <p>{props.listItem.sign}</p>
    <input className={classes.Input} type="Number" step="0.01"
    onChange={props.changed}
    value = {props.listItem.searchTerm}
      />
  <button className={classes.Delete} onClick={props.removed}> ❌ </button>
  </div>
);

export default list ;
