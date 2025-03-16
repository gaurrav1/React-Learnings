import React from 'react'
import Home from '../components/Home';
import About from '../components/About';
import Store from '../components/Store';

function WithoutLibrary() {
    let component;
    const url = window.location.pathname;
    switch (url) {
      case '/':
        component = <Home />;
        break;
      case '/about':
        component = <About />;
        break;
      case '/store':
        component = <Store />;
        break;
      default:
        component = <Home />;
    }
    console.log(url);
  
    return <>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      {component}
    </>
}

export default WithoutLibrary