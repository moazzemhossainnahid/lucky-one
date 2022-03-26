import './App.css';
import LoadData from './components/LoadData/LoadData';
import 'bootstrap/dist/css/bootstrap.min.css';
import SetText from './components/SetText/SetText';


function App() {
  return (
    <div className="App">
      <LoadData></LoadData>
      <SetText></SetText>
    </div>
  );
}

export default App;
