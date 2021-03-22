import Header from './components/Header'
import Nav from './components/Nav'
import './App.css';
// import images from './components/images/bg-masthead.jpg'

function App() {
  return (
    <div className="App">
      <nav className='container'>
        <Header />
        <Nav />
      </nav>
    </div>
  );
}

export default App;
