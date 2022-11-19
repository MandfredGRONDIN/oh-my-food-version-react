import React, { useState } from "react";

export default function Heart() {
   const [isLike, setIsLike] = useState(false);
   console.log(isLike);

   return isLike ? (
      <div className="card__heart" onClick={() => setIsLike(false)}>
         <i className="fa-solid fa-heart heart__liked"></i>
      </div>
   ) : (
      <div className="card__heart" onClick={() => setIsLike(true)}>
         <i className="fa-regular fa-heart heart"></i>
         <i className="fa-solid fa-heart heart__like"></i>
      </div>
   );
}
