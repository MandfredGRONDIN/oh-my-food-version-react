export default function Section3() {
   return (
      <div>
         <section id="Section3">
            <h2>Fonctionnement</h2>
            <div className="Function">
               <div className="Function__Bars">
                  <div className="Function__Bars-Num">
                     <i className="fa-solid fa-1"></i>
                  </div>
                  <div className="Function__Inside">
                     <div className="Function__Icone">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                     </div>
                     <div className="Function__P">
                        <p>Choisissez un restaurant</p>
                     </div>
                  </div>
               </div>
               <div className="Function__Bars">
                  <div className="Function__Bars-Num">
                     <i className="fa-solid fa-2"></i>
                  </div>
                  <div className="Function__Inside">
                     <div className="Function__Icone">
                        <i className="fa-solid fa-list-ul"></i>
                     </div>
                     <div className="Function__P">
                        <p>Composez votre menu</p>
                     </div>
                  </div>
               </div>
               <div className="Function__Bars">
                  <div className="Function__Bars-Num">
                     <i className="fa-solid fa-3"></i>
                  </div>
                  <div className="Function__Inside">
                     <div className="Function__Icone">
                        <i className="fa-solid fa-store"></i>
                     </div>
                     <div className="Function__P">
                        <p>Dégustez au restaurant</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
