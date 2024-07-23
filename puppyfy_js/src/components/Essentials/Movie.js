import { motion } from "framer-motion";
import "./Products.css"
import "./Wishlist.css"
import { FaStar } from "react-icons/fa";


function Movie ({movie}){
    return (
      <motion.div animate={{ opacity:1}} 
      initial={{opacity :0}} 
      exit={{opacity:0}}
      transition={{duration:0.5}}
      layout
      className="product-essentials">
        
        <img className ="product-image" src={movie.image_url } alt="" />
        <div className="image-overlay">
        <span className="rating">{movie.voting_average}</span>
        <span className="rating_icon"><FaStar className="star-icon"/></span>
        <span className="votes text-gray">| {movie.voters_count}</span>
      </div>
        <div className="product-details">
        <h2 className="product-title">{movie.title}</h2>
        <h5 className="product-description">{movie.description}</h5>
        <h5 className="product-description">{movie.weight}</h5>
        
        <div className="price-segment">
          <h6 className='text-gray product-description' style={{ textDecoration: 'line-through' }}>₹{movie.base_price}</h6>
          <h6 className="product-description" style={{ fontWeight:'bold' }}>₹{movie.actual_price}</h6>
          <h6 className='offpercentage product-description'><b><i>{movie.percentage_off}% OFF</i></b></h6>
        </div>
      </div>
      </motion.div>  
    );
}

export default Movie;