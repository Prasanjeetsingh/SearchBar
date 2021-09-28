import React from 'react';
import classes from './Searchbar.css';
import Button from '../UI/Button/Button';
const searchbar = (props) => {

  const   elementConfig = {
                    options: [
                        {value: '>', displayValue: '>'},
                        {value: '=', displayValue: '='},
                        {value: '<', displayValue: '<'}
                    ],
                   properties: [
                     {value: 'price', displayValue: 'price'},
                     {value: 'quantity', displayValue: 'quantity'}
                   ]

                };

return (
  <div >
    <select className={classes.Select}
        value={props.property}
        onChange={event => props.inputChangeHandler(event , 'property')}
          >
        {elementConfig.properties.map(option => (
            <option key={option.value} value={option.value}>
                {option.displayValue}
            </option>
        ))}
    </select>
    <select className={classes.Select}
        value={props.sign}
        onChange={event => props.inputChangeHandler(event , 'sign')}
          >
        {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
                {option.displayValue}
            </option>
        ))}
    </select>
    <input className={classes.Input} type="Number" step="0.01" placeholder="Enter the value..."
    onChange={event => props.inputChangeHandler(event , 'searchTerm')}
      />
    <Button btnType='Success' clicked={props.submitedHandler}>✢</Button>
  </div>
);
}

export default searchbar ;
