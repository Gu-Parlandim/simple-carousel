import React, {useState, useEffect} from "react"


function RequestApi(){
    const [date, setDate] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000//static/shoes.json",{
            method: "Get",
            headers: {"content-Type": "application/json",}
        })
        .then(async response => {
            if(response.ok){
                setDate( await response.json())
            }
        })
        
          
    },[])
    return date

}

export default RequestApi