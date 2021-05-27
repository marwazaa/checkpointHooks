import React, { useState } from 'react';


function SerachTitile({search})
 {

   
    return (
        <div>
            <input
        type="search"
        placeholder="Search Movie" 
        onChange={(e)=>search(e.target.value.toLowerCase())} />
        
        </div>
    )
}

export default SerachTitile
