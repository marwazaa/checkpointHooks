import React from 'react';
import Cardd from './Cardd';
import {Container} from 'react-bootstrap'



function MovieList({tabmouvies}) {
    return (
        <div className='movielist'>
         {tabmouvies.map (elcard=><Cardd elcard={elcard}/>)}
        </div>
        
    )
}

export default MovieList
