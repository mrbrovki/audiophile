import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/Checkout.css'
import { Context } from '../App';
import Summary from '../Summary';
const Checkout = () => {
  const {responsive} = useContext(Context);
 const navigate = useNavigate(); 
 const [isEMoney, setIsEMoney] = useState(true);
 return (
  <div className='checkout-background'>
   <button onClick={() => navigate(-1)} className='go-back'>Go Back</button>
   <div className={'flex-container flex-container-'+responsive}>
   <section className='checkout'>
     <form>
     <fieldset>
      <h1>checkout</h1>
      <p>BILLING DETAILS</p>
     <section className='billing-details'>
      <label htmlFor='name'>Name
      <input type='text' id='name' placeholder='Alexi Ward' />
      </label>
      <label htmlFor='email'>Email Address
      <input type='email' id='email' placeholder='alexei@mail.com' />
      </label>
      <label htmlFor='phone'>Phone Number
      <input type='text' id='phone' placeholder='+1 202-555-0136' />
      </label>
      </section>
      <p>SHIPPING INFO</p>
      <section className='shipping-info'>
      <label htmlFor='address'>Address
      <input style={{width: '100%'}} type='text' id='address' placeholder='1137 Williams Avenue' />
      </label>
      <label htmlFor='zip'>ZIP Code
      <input type='text' id='zip' placeholder='1137 Williams Avenue' />      
      </label>
      <label htmlFor='city'>City
      <input type='text' id='city' placeholder='New York' />            
      </label>
      <label htmlFor='country'>Country
      <input type='text' id='country' placeholder='United States' />   
      </label>
      </section>
      <p>PAYMENT DETAILS</p>
      <section className='payment-details'>
       <span style={{fontWeight: '700'}}>Payment Method</span>
       <label htmlFor='e-money' 
       className={'border ' + `${isEMoney && 'border-checked'}`}
       onClick={() => setIsEMoney(true)}>
       <input type='radio' id='e-money' name='method' value='e-money' defaultChecked/>        
        e-Money</label>
       <label htmlFor='cash' 
       className={'border ' + `${!isEMoney && 'border-checked'}`} 
       onClick={() => setIsEMoney(false)}>
       <input type='radio' id='cash' name='method'  value='cash'/>
        Cash on Delivery</label>
      </section>
       {isEMoney && 
      <section className='e-money'>
      <label htmlFor='e-money-number'>e-Money Number
      <input type='text' id='e-money-number' placeholder='238521993' />
      </label>
      <label htmlFor='e-money-number'>e-Money PIN
      <input type='text' id='e-money-pin' placeholder='6891' />
      </label>
      </section>}
     </fieldset>
    </form>
   </section>
   <section className='summary'>
    <Summary />
   </section>
   </div>
  </div>
 )
}

export default Checkout
