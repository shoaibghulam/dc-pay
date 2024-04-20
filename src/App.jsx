import  {  lazy } from 'react';
import {
  Routes,
  Route,
  
} from 'react-router-dom';


const Home = lazy(() => import('./pages/Home'));

// Import pages

function App() {


  return (
    <>
      <Routes>
   
  
      <Route  index element={ <Home />} />
     
      </Routes>
    </>
  );
}

export default App;
