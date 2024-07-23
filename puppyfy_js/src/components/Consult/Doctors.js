import { motion } from "framer-motion";
import "./Allvets.css"
import "../Essentials/Wishlist.css"
import { FaStar } from "react-icons/fa";


function Doctors ({movie}){
    return (
      <motion.div animate={{ opacity:1}} 
      initial={{opacity :0}} 
      exit={{opacity:0}}
      transition={{duration:0.5}}
      layout
      className="product-essentials-consult">
        
        <img className ="product-image-consult" src={movie.image_url } alt="" />
        <div className="image-overlay-consult">
        <span className="rating-consult">{movie.voting_average}</span>
        <span className="rating_icon-consult"><FaStar className="star-icon"/></span>
        <span className="votes-consult text-gray">| {movie.voters_count}</span>
      </div>
        <div className="product-details-consult">
        <h2 className="product-title-consult">{movie.name}</h2>
        <h5 className="product-description-consult">Experience :  {movie.experience}</h5>
        <h5 className="product-description-consult">{movie.description}</h5>
  
        
        
        <div className="price-segment-consult">
          <h6 className='text-gray product-description-consult' style={{ textDecoration: 'line-through' }}>₹{movie.base_price}/m</h6>
          <h6 className="product-description-consult" style={{ fontWeight:'bold' }}>₹{movie.actual_price}</h6>
          <h6 className='offpercentage product-description-consult'><b><i>{movie.percentage_off}% OFF</i></b></h6>
        </div>
      </div>
      </motion.div>  
    );
}

export default Doctors;