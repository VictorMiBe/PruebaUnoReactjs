import React, { useState } from 'react';

function ejemploHooks(){
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Estas clickeando {count} veces</p>
            <button onClick = {() => setCount(count+1)}>
                Clickeame
            </button>
        </div>
    )
}

export default ejemploHooks;