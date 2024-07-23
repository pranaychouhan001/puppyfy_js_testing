import React, {useState} from 'react'
import "./CartItems.css"
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";

import { MdDelete } from "react-icons/md";

function CartItems() {

  //keeping track of the quantity and the price
  const [quantity,setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity+1)
  };
  const handleDecrement =() => {
    setQuantity(quantity-1)
  }
  return (
    <div class="cart-item">
    <div class="cart-header">
      <h5>My Shopping Cart</h5>
    </div>
    <div class="cart-item-content">
    <div className="cart-description">
      <img src="https://5.imimg.com/data5/SELLER/Default/2021/3/TD/IW/OB/124562624/drools-gravy.jpg" alt="" />
      <div className="product-details">
        <h5 className="product-title">Drools</h5>
        <h5>Real Chicken Gravy Wet Dog Food, For Adult, 150gm</h5>
        <div className="price-segment">
          <h6>₹ {quantity*599}</h6>
          <h6 className='text-gray' style={{ textDecoration: 'line-through' }}>₹{quantity*800}</h6>
          <h6 className='offpercentage'><b><i>10% OFF</i></b></h6>
        </div>
        <div className="cart-items-counter">
          <h3 onClick={handleDecrement}><IoIosRemoveCircleOutline /></h3>
          <h5>{quantity}</h5>
          <h3 onClick={handleIncrement}><IoAddCircleOutline /></h3>
          <h4 className='delete-cart-item'><MdDelete /></h4>
        </div>
      </div>
    </div>

    <div className="cart-description">
      <img src="https://i.pinimg.com/736x/3e/29/d6/3e29d6e7d4fbfcd2157fed869cae4cb8.jpg" alt="" />
      <div className="product-details">
        <h5>Buy Drools Puppy Nutrition Starter 10kg Online</h5>
        <div className="price-segment">
          <h6>₹ 699</h6>
          <h6 className='text-gray' style={{ textDecoration: 'line-through' }}>₹900</h6>
          <h6 className='offpercentage'><b><i>20% OFF</i></b></h6>
        </div>
        <div className="cart-items-counter">
          <h4><IoIosRemoveCircleOutline /></h4>
          <h5>3</h5>
          <h4><IoAddCircleOutline /></h4>
          <h4 className='delete-cart-item'><MdDelete /></h4>
        </div>
      </div>
    </div>

    <div className="cart-description">
      <img src="https://i.pinimg.com/736x/3e/29/d6/3e29d6e7d4fbfcd2157fed869cae4cb8.jpg" alt="" />
      <div className="product-details">
        <h5>Buy Drools Puppy Nutrition Starter 10kg Online</h5>
        <div className="price-segment">
          <h6>₹ 699</h6>
          <h6 className='text-gray' style={{ textDecoration: 'line-through' }}>₹900</h6>
          <h6 className='offpercentage'><b><i>20% OFF</i></b></h6>
        </div>
        <div className="cart-items-counter">
          <h4><IoIosRemoveCircleOutline /></h4>
          <h5>3</h5>
          <h4><IoAddCircleOutline /></h4>
          <h4 className='delete-cart-item'><MdDelete /></h4>
        </div>
      </div>
    </div>

    <div className="cart-description">
      <img src="https://i.pinimg.com/736x/3e/29/d6/3e29d6e7d4fbfcd2157fed869cae4cb8.jpg" alt="" />
      <div className="product-details">
        <h5>Buy Drools Puppy Nutrition Starter 10kg Online</h5>
        <div className="price-segment">
          <h6>₹ 699</h6>
          <h6 className='text-gray' style={{ textDecoration: 'line-through' }}>₹900</h6>
          <h6 className='offpercentage'><b><i>20% OFF</i></b></h6>
        </div>
        <div className="cart-items-counter">
          <h4><IoIosRemoveCircleOutline /></h4>
          <h5>3</h5>
          <h4><IoAddCircleOutline /></h4>
          <h4 className='delete-cart-item'><MdDelete /></h4>
        </div>
      </div>
    </div>

    <div className="cart-description">
      <img src="https://i.pinimg.com/736x/3e/29/d6/3e29d6e7d4fbfcd2157fed869cae4cb8.jpg" alt="" />
      <div className="product-details">
        <h5>Buy Drools Puppy Nutrition Starter 10kg Online</h5>
        <div className="price-segment">
          <h6>₹ 699</h6>
          <h6 className='text-gray' style={{ textDecoration: 'line-through' }}>₹900</h6>
          <h6 className='offpercentage'><b><i>20% OFF</i></b></h6>
        </div>
        <div className="cart-items-counter">
          <h4><IoIosRemoveCircleOutline /></h4>
          <h5>3</h5>
          <h4><IoAddCircleOutline /></h4>
          <h4 className='delete-cart-item'><MdDelete /></h4>
        </div>
      </div>
    </div>

    <div className="cart-description">
      <img src="https://i.pinimg.com/736x/3e/29/d6/3e29d6e7d4fbfcd2157fed869cae4cb8.jpg" alt="" />
      <div className="product-details">
        <h5>Buy Drools Puppy Nutrition Starter 10kg Online</h5>
        <div className="price-segment">
          <h6>₹ 699</h6>
          <h6 className='text-gray' style={{ textDecoration: 'line-through' }}>₹900</h6>
          <h6 className='offpercentage'><b><i>20% OFF</i></b></h6>
        </div>
        <div className="cart-items-counter">
          <h4><IoIosRemoveCircleOutline /></h4>
          <h5>3</h5>
          <h4><IoAddCircleOutline /></h4>
          <h4 className='delete-cart-item'><MdDelete /></h4>
        </div>
      </div>
    </div>

    <div className="cart-description">
      <img src="https://th.bing.com/th/id/OIP.he3Pm_XT4LTsnLyIcZ2EUQHaHa?rs=1&pid=ImgDetMain" alt="" />
      <div className="product-details">
        <h5>Royal Canin Mini Starter (Mother & Babydog) Puppy Dry Food (MIST) 3kg</h5>
        <div className="price-segment">
          <h6>₹ 799</h6>
          <h6 className='text-gray' style={{ textDecoration: 'line-through' }}>₹900</h6>
          <h6 className='offpercentage'><b><i>15% OFF</i></b></h6>
        </div>
        <div className="cart-items-counter">
          <h4><IoIosRemoveCircleOutline /></h4>
          <h5>3</h5>
          <h4><IoAddCircleOutline /></h4>
          <h4 className='delete-cart-item'><MdDelete /></h4>
        </div>
      </div>
    </div>

    <div className="cart-description">
      <img src="https://th.bing.com/th/id/OIP.he3Pm_XT4LTsnLyIcZ2EUQHaHa?rs=1&pid=ImgDetMain" alt="" />
      <div className="product-details">
        <h5>Royal Canin Mini Starter (Mother & Babydog) Puppy Dry Food (MIST) 3kg</h5>
        <div className="price-segment">
          <h6>₹ 3499</h6>
          <h6 className='text-gray' style={{ textDecoration: 'line-through' }}>₹3800</h6>
          <h6 className='offpercentage'><b><i>15% OFF</i></b></h6>
        </div>
        <div className="cart-items-counter">
          <h4><IoIosRemoveCircleOutline /></h4>
          <h5>3</h5>
          <h4><IoAddCircleOutline /></h4>
          <h4 className='delete-cart-item'><MdDelete /></h4>
        </div>
      </div>
    </div>


    <div className="cart-description">
      <img src="https://i.pinimg.com/736x/3e/29/d6/3e29d6e7d4fbfcd2157fed869cae4cb8.jpg" alt="" />
      <div className="product-details">
        <h5>Buy Drools Puppy Nutrition Starter 10kg Online</h5>
        <div className="price-segment">
          <h6>₹ 899</h6>
          <h6 className='text-gray' style={{ textDecoration: 'line-through' }}>₹900</h6>
          <h6 className='offpercentage'><b><i>18% OFF</i></b></h6>
        </div>
        <div className="cart-items-counter">
          <h4><IoIosRemoveCircleOutline /></h4>
          <h5>3</h5>
          <h4><IoAddCircleOutline /></h4>
          <h4 className='delete-cart-item'><MdDelete /></h4>
        </div>
      </div>
    </div>
    </div>
    

    <button className="login-button-home" style={{ verticalAlign: 'middle' }} title="Order Me Now !">
    <span>Order Now</span>
    </button>

    

  </div>
  )
}

export default CartItems