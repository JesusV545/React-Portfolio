import './App.css';
// import Project from './components/Project';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation"



function App() {
  return (
    <div className=' bg-cyan-900 m-0 min-h-screen flex flex-col'> 
      <Header title = 'Jesus A. Vazquez' className='text-gray-200'/>

      <Navigation />

      <Footer />
    </div>

  );

}

export default App;
