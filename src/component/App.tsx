import React from 'react';
import logo from './logo.svg';
import '../style/App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <header className="App-header">
        <Header/>
      </header>

      <main>
        <Main/>
      </main>

      <footer>
        <Footer/>
      </footer>
      
      </>
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //   <title>Document</title>
    // </head>
    // <body>
      
    // </body>
    // </html>
  );
}

export default App;
