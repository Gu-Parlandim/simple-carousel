import React, {useState, useEffect, useRef} from "react"
import './App.css'
import RequestApi from './RequestApi'



function App() {
    const dateApi = RequestApi()

    const carrousel = useRef(null)
   

    function handleClickLeft(e){
       e.preventDefault()
       carrousel.current.scrollLeft -= carrousel.current.offsetWidth
    }

    function handleClickRight(e){
        e.preventDefault()
        carrousel.current.scrollLeft += carrousel.current.offsetWidth
       
     }
    
    

  return (
   <div className='container'>
       <div className="carrousel_container">
            <div className='carrousel' ref={carrousel}>
                
                {dateApi.map((itens) =>{
                    const {id, image, name, oldPrice, price} = itens

                    return (
                        <div className='itens' key={id}>
                            <div className='image'>
                                <img  src={image} alt={name}/>
                            </div>

                            <div className='info'>
                                <span className='title'>{name}</span>
                                <span className='old_price'>R$ {oldPrice}</span>
                                <span className='price'>R$ {price}</span>
                            </div>
                        </div>
                        )
                    } )}
            </div>

            <button className="left" onClick={handleClickLeft}> 
                <img src="http://localhost:3000//static/images/chevron_icon.png" alt="alt" />
                </button>

            <button className="rigth" onClick={handleClickRight}>
                 <img src="http://localhost:3000//static/images/chevron_icon.png" alt="alt" />
            </button>
        </div>
   </div>
     
  )
}

export default App
