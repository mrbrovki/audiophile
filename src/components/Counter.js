import React, { useContext, useState, useEffect } from 'react'
import { Context } from './App'
const Counter = (props) => {
 const [amount, setAmount] = useState(props.amount);
 const {products, setProducts} = useContext(Context);
 const getAmountByID = index => products.find(el => el.index === index).amount;

 useEffect(() => {
  setProducts(prev =>{
        const newArr = prev.map(item =>{
          if(item.index === props.index){
            return {index: item.index, amount: amount};
          }
          else{
            return item;
          }
        });
        return newArr;
  })
}, [amount]);   
 return (
  <div className='cart-counter'>
          <span className='decrease' onClick={() => setAmount(getAmountByID(props.index) === 0 ? 0 : getAmountByID(props.index) - 1)}>-</span>
          <span style={{color: '#000'}}>{getAmountByID(props.index)}</span>
          <span className='increase' onClick={() => setAmount(getAmountByID(props.index) + 1)}>+</span>
           </div>
 )
}

export default Counter;
