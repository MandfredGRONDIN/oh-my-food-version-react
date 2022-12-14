export default function Section3() {
   return (
      <div>
         <section id="section3">
            <h2>Fonctionnement</h2>
            <div className="function">
               <div className="function__bars">
                  <div className="function__bars-num">
                     <i className="fa-solid fa-1"></i>
                  </div>
                  <div className="function__inside">
                     <div className="function__icone">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                     </div>
                     <div className="function__p">
                        <p>Choisissez un restaurant</p>
                     </div>
                  </div>
               </div>
               <div className="function__bars">
                  <div className="function__bars-num">
                     <i className="fa-solid fa-2"></i>
                  </div>
                  <div className="function__inside">
                     <div className="function__icone">
                        <i className="fa-solid fa-list-ul"></i>
                     </div>
                     <div className="function__p">
                        <p>Composez votre menu</p>
                     </div>
                  </div>
               </div>
               <div className="function__bars">
                  <div className="function__bars-num">
                     <i className="fa-solid fa-3"></i>
                  </div>
                  <div className="function__inside">
                     <div className="function__icone">
                        <i className="fa-solid fa-store"></i>
                     </div>
                     <div className="function__p">
                        <p>Dégustez au restaurant</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
