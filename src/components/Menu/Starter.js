export default function Starter({ card, title }) {
   const starterName = card.name;
   const starterBot = card.nameBot;
   const price = card.price;

   return (
      <div className="card__menu">
         <p className="card__title">{title}</p>
         {starterName.map((test, index) => (
            <div className={"card__dish"} key={index}>
               <div className="card-left">
                  <p className="dish-top">{test}</p>
                  <div className="dish-bot">
                     {starterBot
                        .filter((testbot, index2) => index === index2)
                        .map((testbot, index3) => (
                           <p className="dish" key={index3}>
                              {testbot}
                           </p>
                        ))}
                     {price
                        .filter((testprice, index2) => index === index2)
                        .map((priceDish, index3) => (
                           <p className="price" key={index3}>
                              {priceDish} €
                           </p>
                        ))}
                  </div>
               </div>
               <div className="card-right">
                  <i className="fa-solid fa-circle-check check"></i>
               </div>
            </div>
         ))}
      </div>
   );
}
