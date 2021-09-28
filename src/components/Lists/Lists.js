import React from 'react';
import List from './List/List';
import classes from './Lists.css';
const Lists = (props) => {

  let transformedList = null;
  if(props.list){
    console.log("i am here");
   transformedList = props.list
  .map((liskey) => {
        console.log(liskey.property);
    return  (
      <List key={liskey.id}
      listItem ={liskey}
      changed={(event) => props.change(event , liskey.id)}
      removed={() => props.Removed(liskey.id)}
       />
    )
  });
}

    return (
      <div className={classes.ListsControls}>
        {transformedList}
      </div>
    );
};
 export default Lists;
