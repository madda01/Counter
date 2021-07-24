import React, {useState} from 'react';

const Counter= () => {
    const [tot, setTot]= useState(0);

    const handleIncrement=() =>{
        setTot(tot+1);
    };

    const handleDecrement=() =>{
        setTot(tot-1);
    };

    return(
        <div>
            <p>This is the counter component</p>
            <p>The count is : {tot}

            </p>
            
            <button onClick={handleIncrement}>
                Increment  </button>

            <button onClick={handleDecrement}>
                Decrement</button>
        </div> 
    )
};

export default Counter;