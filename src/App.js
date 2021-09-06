import logo from './logo.svg';
import './App.css';
import Img1 from './images/1.jpeg';
import Img2 from './images/2.jpeg';
import Img3 from './images/3.jpeg';
import Img4 from './images/4.jpeg';
import Img5 from './images/5.jpeg';
import Img6 from './images/6.jpeg';
import Img7 from './images/7.jpeg';
import Img8 from './images/8.jpeg';
import Img9 from './images/9.jpeg';
import Img10 from './images/10.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <img alt="img" src={Img1}/>
      <img alt="img" src={Img2}/>
      <img alt="img" src={Img3}/>
      <img alt="img" src={Img4}/>
      <img alt="img" src={Img5}/>
      <img alt="img" src={Img6}/>
      <img alt="img" src={Img7}/>
      <img alt="img" src={Img8}/>
      <img alt="img" src={Img9}/>
      <img alt="img" src={Img10}/>
    </div>
  );
}

export default App;
