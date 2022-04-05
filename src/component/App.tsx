import React from 'react';

import '../style/App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <>
      <header className="App-header">
        <Header/>
      </header>

      <main>
        <Main/>
      </main>

      <footer className='fixed-bottom'>
        <Footer/>
      </footer>
      
      </>
  );
}

export default App;
