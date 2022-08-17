import './App.css';
import Images from './Images';
import logo from './unsplash.png';
function App() {
  return (
    <div>
      <div className='w-full flex justify-center items-center mt-10'><img className='w-10 cursor-pointer' src={logo} alt='logo'/></div>
      <Images/>
    </div>
  );
}

export default App;
