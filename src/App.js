import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
import React, { Suspense } from 'react';

const LazyComp=React.lazy(()=>{
  return import ('./components/Home')
})


function App() {
  return (
    <div className="App">
    {/* <Home/> */}
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComp/>
    </Suspense>
    </div>
  );
}

export default App;
