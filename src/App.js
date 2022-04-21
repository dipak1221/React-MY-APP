
import './App.css';
// import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';


// let name="Dipak";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="My-APPS" /> */}
      <Navbar title="My-APPS" aboutText="About Us" />
      <div className="container mb-3" >
        {/* <TextForm heading="Enter some text to analyze" /> */}
     <About/>
      </div>
    </>
  );
}


export default App;
