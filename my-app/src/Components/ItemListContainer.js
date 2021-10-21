import React from "react";




function Greetings({bienvenida ,bienvenida2}){
    return (
    <div className="bienvenida">
        <h1 className="bienvenida">{bienvenida}</h1>
        <h2 className="bienvenida2">{bienvenida2}</h2> 
    </div>

    )
}

export default Greetings;