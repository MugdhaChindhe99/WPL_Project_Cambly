import './App.css';
import React,{Component} from 'react';
import TutorList from './components/TutorList';

class App extends Component{
  state = {
    tutors:[]
  }

  componentDidMount(){
    fetch('tutors.json', {
      headers:{
        'Content-Type' : 'application/json',
        'Accept':'application/json'
      }
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({tutors: data})
      console.log(this.state.tutors)
    })
    .catch(console.log)
  }

  render (){
    return(
      <div className="wrapper">
           <TutorList tutorlist = {this.state.tutors} />
      </div>
     
    );
  }
}

export default App;
