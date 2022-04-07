import React from 'react';

import '../style/App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import CurrentMusic from './currentMusic';


function App() {
  return (
    <>
      <header className="App-header">
        <Header/>
      </header>

      <main>
        <CurrentMusic/>
      </main>

      <footer className='fixed-bottom'>
        <Footer/>
      </footer>
      
      </>
  );
}

export default App;
