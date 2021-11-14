import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <NavBar/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
