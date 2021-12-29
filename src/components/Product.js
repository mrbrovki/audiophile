import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import data from '../data.json'

const Product = ({id, type}) => {
  const {name, image: {desktop}, description, new: isNew, price, category} = data[id];
  const dot = (num) =>{
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
  const [amount, setAmount] = useState(0);
if(type === 'prodPage'){
  return (
       <section className='flex-container'>
       <img src={desktop.slice(1)} className='product-image'/>
       <section className='ndpc'>
         <p className='new'>{isNew && 'NEW PRODUCT'}</p>
         <h1 className='name'>{name}</h1>
         <p className='description'>{description}</p>
         <p className='price'>$ {dot(price)}</p>
         <section>
           <div className='flex-container counter'>
             <span className='decrease' 
               onClick={() => setAmount(prev => {
                 return prev === 0 ? 0 : prev - 1; })}>-</span>
             <span style={{color: '#000'}}>{amount}</span>
             <span className='increase' onClick={() => setAmount(prev => prev + 1)}>+</span>
           </div>
           <div className='add-to-cart-btn'>add to cart</div>
         </section>
     </section>
    </section>
  )
}
else{
  return(
       <section className='flex-container'>
       <img src={desktop.slice(1)} className='product-image'/>
       <section className='ndpc'>
         <p className='new'>{isNew && 'NEW PRODUCT'}</p>
         <h1 className='name'>{name}</h1>
         <p className='description'>{description}</p>
         <Link to={'/' + category + '/' + id} className='btn orange'>SEE PRODUCT</Link>
     </section>
    </section>
  )
}
}

export default Product
