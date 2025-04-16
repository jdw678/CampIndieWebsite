import React, { useState } from 'react';
import logo from './logo.svg';
import '../css/main.css';
import Home from './Home';
import Story from './Story';

function Main() {

  const [content, setContent] = useState('Home');
  function GetContent()
  {
    switch(content)
    {
      case 'Home':
        return <Home />;
      case 'Story':
        return <Story />;
    }
  }

  return (
    <div>

      <header>
        <nav>
          <div className="nav-item" onClick={() => setContent('Home')}>Home</div>
          <div className="nav-item" onClick={() => setContent('Story')}>Story</div>
        </nav>
      </header>
      <main>
        {GetContent()}
      </main>
        <footer>
    
        </footer>
    </div>
  );
}

export default Main;
