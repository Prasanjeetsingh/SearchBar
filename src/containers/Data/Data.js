import React , {useState } from 'react';
import classes from './Data.css';
import carData from '../../assets/MOCK_DATA.json';
import Searchbar from '../../components/Searchbar/Searchbar';
import Lists from '../../components/Lists/Lists';

const data = () => {
   const [searchTerm, setSearchTerm] = useState(Number.MIN_VALUE);
   const [sign, setSign] = useState(">");
   const [property, setProperty] = useState("price");
   const [searchbar, setSearchbar] = useState(2);
   const [list , setList] = useState([]);

const inputChangeHandler = (event , key) => {
if(key === 'property')
setProperty(event.target.value);

if(key === 'sign')
setSign(event.target.value);

if(key === 'searchTerm')
setSearchTerm(event.target.value);
}

const submitHandler = () => {
  // const curlist = [
  //   ...list,
  //   {
  //     id: searchTerm,
  //     sign: sign,
  //     property: property,
  //     searchTerm: searchTerm
  //   }
  // ];
  setList([...list,
  {
    id: searchTerm,
    sign: sign,
    property: property,
    searchTerm: searchTerm
  }]);

  console.log("i am in submitHandler", list);
}

const  handleRemove =(val) => {
    const remainder = list.filter((todo) => {
      if(todo.id !== val) return todo;
    });
    setList([...remainder]);
  }

const  editHandler = (event,key) => {
    const newlist = list.filter(item => {
      if(item.id !== key ) return item;
      else{
        item.id = event.target.value;
        item.searchTerm = event.target.value;

        return item;
      }
    })
    setList(newlist);

  }

let carData2 = carData;


const Filtering = (pro , sig , value) => {
  carData2 =
      carData2.filter(val =>{
       if(pro==='price'){
        if(sig === ">"){
           if (val.price > value) {
            return val;
          }
        }
        else if(sig === '<'){
           if (val.price < value) {
            return val;
          }
        }
        else if(sig === '='){
           if (val.price == value) {
            return val;
          }
        }
        else {
          return val;
        }
      }
      else{
        if(sig === ">"){
           if (val.quantity > value) {
            return val;
          }
        }
        else if(sig === '<'){
           if (val.quantity < value) {
            return val;
          }
        }
        else if(sig === '='){
           if (val.quantity == value) {
            return val;
          }
        }
        else {
          return val;
        }
      }
    });
}

for(let i =0 ; i< list.length ; i++){
   Filtering(list[i].property, list[i].sign, parseFloat(list[i].searchTerm));
}

Filtering(property,sign,searchTerm);


  return (
    <div className={classes.Data} >
      <Searchbar
      property={property}
      sign = {sign}
      searchTerm = {searchTerm}
      inputChangeHandler = {inputChangeHandler}
      submitedHandler = {submitHandler}
      />

      <Lists list={list}
      change={editHandler}
       Removed={handleRemove}/>

    <div className={classes.DataTable} >
     <table>
      <tr>
      <th>Car Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Description</th>
       </tr>
     {carData2.map((val,key) => {
       return (

        <tr key={key}>
          <td>{val.car_name}</td>
          <td>{val.price}</td>
          <td>{val.quantity}</td>
          <td><a href={val.description} > Go To Link </a></td>
        </tr>
       );
       })}

     </table>
     </div>
    </div>
  );
}

export default data;
