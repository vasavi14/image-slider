import logo from './logo.svg';
import './App.css';
import ImageSlider from './components/image-Slider';

function App() {
  return (
    <div className="App">
     <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'}limit={"10"} />
    </div>
  );
}

export default App;
