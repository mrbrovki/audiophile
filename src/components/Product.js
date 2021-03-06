import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import data from '../data.json'
import { Context } from './App'


export const dot = (num) =>{
 const numStr = String(num);
 const numArr = numStr.split('');
 const newArr = [];
 for(let i = numArr.length - 1; i > 0; i--){
  newArr.unshift(numArr[i])
  if((numArr.length - i) % 3 == 0){
   newArr.unshift('.')
  }
 }
 newArr.unshift(numArr[0]);
 return newArr.join('');
}

const Product = ({index, type}) => {
 const {responsive, setProducts} = useContext(Context);
 const {name, image, description, new: isNew, price, category} = data[index];
 const [amount, setAmount] = useState(0);
  const handleClick = () => {
    if(amount > 0){
      setProducts(prev => {
        let isMatch = false;
        const newArr = prev.map(item =>{
          if(item.index === index){
            isMatch = true;
            return {index: item.index, amount: item.amount + amount};
          }
          else{
            return item;
          }
        });
        if(isMatch){
          return newArr;
        }
        else{
          return [...newArr, {index: index, amount: amount}];
        }
      });
    }
  };
if(type === 'prodPage'){
    return (
      <section className='flex-container'>
       <img src={image[`${responsive}`].slice(1)} className={'product-image-' + responsive}/>
       <section className={'ndpc ndpc-' + responsive}>
         <p className='new'>{isNew && 'NEW PRODUCT'}</p>
         <h1 className='name'>{name}</h1>
         <p className='description'>{description}</p>
         <p className='price'>$ {dot(price)}</p>
         <section>
            <div className='flex-container counter'>
          <span className='decrease' onClick={() => setAmount(prev => {
            return prev === 0 ? 0 : prev - 1; })}>-</span>
          <span style={{color: '#000'}}>{amount}</span>
          <span className='increase' onClick={() => setAmount(prev => prev + 1)}>+</span>
           </div>
           <div className='add-to-cart-btn' onClick={handleClick}>add to cart</div>
         </section>
     </section>
    </section>
  )

}
else {
    return(
      <section className={'flex-container flex-container-' + responsive}>
        {responsive === 'tablet' ? <div className='background'>
       <img src ={image[`${responsive}`]}  className={'product-image-' + responsive}/>
        </div> : <img src ={image[`${responsive}`]}  className={'product-image-' + responsive}/>}
       <section className={'ndpc ndpc-' + responsive}>
         <p className='new'>{isNew && 'NEW PRODUCT'}</p>
         <h1 className='name'>{name}</h1>
         <p className='description'>{description}</p>
         <Link to={'/' + category + '/' + (index + 1)} className='btn orange'>SEE PRODUCT</Link>
     </section>
    </section>
  )

}
}

export default Product
