import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import './Rate.scss'
const Rate = ({id, rating, setRating, disabled}) => {
    const [hover, setHover] = useState(0);
  return(
    <div className="star_item">
    {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type='radio'
              className="rate"
              name='rating'
              disabled = {disabled ? true : false}
              value={ratingValue}
              onClick={()=> {setRating(ratingValue)}}
            >
            </input>
            <AiFillStar
              className='star'
              color={ratingValue <= (hover||rating) ? "#ffc107" : "black"}
              size={20}
              onMouseEnter={()=>setHover(ratingValue)}
              onMouseLeave={()=>setHover(null)}></AiFillStar>
          </label>
        )
    }
    )}
  </div>
  )
}
export default Rate;