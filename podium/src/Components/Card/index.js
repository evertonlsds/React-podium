import './style.css';


function Card({characters}){
    return(
        <>
            {characters.map(item =>(
               <div className="card" key={item.id}>
               <h3>{item.name}</h3>
               <img src={item.img} alt="" className= "img-character"/>
               <div className="buttons-card">
                   <button className="button-gold">+</button>
                   <button className="button-black">-</button>
               </div>
           </div>  
            ))
           
        }
        </>
    );
}



export default Card;