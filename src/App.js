import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import MovieList from './Componenet/MovieList';
import './App.css';
import AddMovie from './Componenet/AddMovie';
import { Container } from 'react-bootstrap';
import SerachTitile from './Componenet/SerachTitile';
import SearchRating from './Componenet/SearchRating';





function App() {
  let [tabmouvies, setTabmouvies] = useState([
  {title:"Tom and Jerry",imgsrc:"https://imgr.cineserie.com/2019/03/1825333.jpg?imgeng=/f_jpg/cmpr_0/w_212/h_318/m_cropbox&ver=1",
  year:2021,
  rating:3},
  {title:"a",imgsrc:"https://imgr.cineserie.com/2019/03/1825333.jpg?imgeng=/f_jpg/cmpr_0/w_212/h_318/m_cropbox&ver=1",
  year:2021,
  rating:4},
  {title:"b",imgsrc:"https://imgr.cineserie.com/2019/03/1825333.jpg?imgeng=/f_jpg/cmpr_0/w_212/h_318/m_cropbox&ver=1",
  year:2021,rating:2}
  ]);
   
   
  let addMovie=(newmovie)=>{

    setTabmouvies([...tabmouvies,newmovie]);
   
  }

  let search=(titleSearch)=>
  {
  setTabmouvies(tabmouvies.filter(el=>el.title.toLowerCase().includes(titleSearch)))
  }
  let searchByrating=(newRating)=>
  {
setTabmouvies(tabmouvies.filter(el=>el.rating==newRating))
  }
  return (
  <div>
    <Container>
   <SerachTitile search={search}/>
   <SearchRating searchByrating={searchByrating} />
  <MovieList tabmouvies={tabmouvies}/>
  <AddMovie addMovie={addMovie}/>
  </Container>
  </div>
  )
}
export default App






