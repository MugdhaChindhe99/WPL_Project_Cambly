import React,{Component} from 'react';

class HeaderPage extends Component{
    render (){
        return(
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <img src="../images/blackT.png" width="50" height="60" class="d-inline-block align-top" alt="" />
            <p class="nav-item">TeachMe</p>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Courses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>

          </ul>
        </div>
      </nav>
        );
    }
}

export default HeaderPage;