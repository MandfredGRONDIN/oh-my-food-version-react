export default function Starter({ card, title }) {
   console.log(title);
   const starterName = card.name;
   const starterBot = card.nameBot;
   const price = card.price;
   return (
      <div className="card__menu">
         <p className="card__title">{title}</p>
         {starterName.map((test, index) => (
            <div className={`card ${index}`}>
               <div className="card-left">
                  <p className="dish-top">{test}</p>
                  <div className="dish-bot">
                     {starterBot
                        .filter((testbot, index2) => index === index2)
                        .map((testbot, index3) => (
                           <p className="dish">{testbot}</p>
                        ))}
                     {price
                        .filter((testprice, index2) => index === index2)
                        .map((priceDish, index3) => (
                           <p className="price">{priceDish} €</p>
                        ))}
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
