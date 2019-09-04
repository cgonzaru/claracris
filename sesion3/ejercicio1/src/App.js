import React from 'react';
import './App.scss';
import profilePhoto from './img/fotoperfil.jpg';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">

        <header className="top">
          <img className="profile-photo" src={profilePhoto} alt="foto de perfil"/>
          <div>
            <h2 className="title">Sandra Martín</h2>
            <h3 className="date">Miércoles 4 de septiembre de 2019</h3>
          </div>
        </header>

       
        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In repellat nihil odio blanditiis reprehenderit animi voluptates inventore, temporibus nisi consequatur eos, consequuntur tempore architecto beatae provident eius consectetur ratione doloribus?
        </p>

        <p className="more-info">Leer más...</p>
        <div className="icon">
          <p>37 <span className="icon-heart">❤︎</span> </p> 
          
        </div>
        
      </div>
    );
  }
}

export default App;
