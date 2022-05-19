import React, { Component } from 'react';
import '../styles/App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Pages from './Pages'
import Navigation from './Navigation'
import Header from './Header'
import Footer from './Footer';



class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            {<Header />}
          </header>
          <main>
            <aside>
              {<Navigation />}
            </aside>
            <section className="page">
              {<Pages />}
            </section>
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
