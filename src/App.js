import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Forms from './components/Forms';
import UpdateData from './components/UpdateData';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/booksForm" exact component={Forms} />
          <Route path="/updatedata/:id" exact component={UpdateData} />
          <Route path="/book/:id" exact component={BookDetails} />
        </Switch>
     
     </Router>
    </div>
  );
}

export default App;
