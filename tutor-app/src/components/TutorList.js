import React from 'react';
import { useState } from 'react';
const TutorList = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div>
        <h1>Find a tutor</h1>
        <input type="text" placeholder='Name, language, hobby' onChange={event => {setSearchTerm(event.target.value)}}/>
        <br>
        </br>
        { props.tutorlist.filter((val)=>{
            if(searchTerm==""){
              return val;
            }
            else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map( (tutor, id) => (

        <div className="card" key={ id }>
          <div className="card-body">
            <img src={tutor.picture} className="card-img-top"/>  
            <h5 className="card-title">{ tutor.name }</h5>
            <h6 className="card-subtitle mb-2 text-muted">{tutor.rating} </h6>
            <h6 className="card-subtitle mb-2 text-muted">{tutor.from} </h6>
            <p className="card-text">{ tutor.description } </p>
            
            
          </div>
        </div>
        ))}
      </div>
    
      );

}

export default TutorList






