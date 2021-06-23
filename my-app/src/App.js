import React from 'react';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Route, Switch, withRouter } from "react-router-dom";
import Act from './Act';
import Movies from './Movies';
import TV from './Tv'
function App() {
  return (
    <div className="App" >

      {/* <div className="nav"> */}
        <Navbar bg="dark" variant="dark">
          <Nav className="container-fluid">
            <Nav.Link className="ml-auto">Movies</Nav.Link>
            <Nav.Link className="ml-auto">TV Shows</Nav.Link>
            <Nav.Link>Actors/Actresses</Nav.Link>
            
            <Form inline>
              <FormControl
                type="text" placeholder="Search" className="mr-sm-2"
                />
              <Button variant="outline-info">
                Search
              </Button>
            </Form>
          </Nav>
          
        </Navbar>


        <Switch>


          <Route exact path="/" component={App} />
          <Route exact path="/actors" component={Act} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/tv" component={TV} />


        </Switch>


      {/* </div> */}
      <header className="App-header">



        <h1>ReelTime</h1>
        <h2>A cleaner movie DB experience</h2>
      </header>
    </div>
  );
}

export default withRouter(App);
