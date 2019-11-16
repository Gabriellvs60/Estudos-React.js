import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className="App-body">
      <header className="App-header">
      <ul className="navigation-list">
        <li className="navigation-item">Posts</li>
        <li className="navigation-item">products</li>
        <li className="navigation-item">About Us</li>
      </ul>
      </header>
      <aside className="App-aside">
        <p>My super Awesome Sidebar</p>
      </aside>
      <main className="App-main">
        <h1>CSS Grid or Flexbox</h1>
        <p>When should you use which?</p>
      </main>
      <footer className="App-footer">
        <ul className="navigation-list">
          <li className="navigation-item">Posts</li>
          <li className="navigation-item">products</li>
        </ul>
      </footer>
    </body>
  );
}

export default App;
