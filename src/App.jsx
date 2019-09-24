import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Feed from './routes/Feed';
import SubTopics from './routes/SubTopics';
import Segments from './routes/Segments';
import Publishers from './routes/Publishers';


const App = () => (
  <Container>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/feed" component={Feed} />
        <Route path="/sub-topics" component={SubTopics} />
        <Route path="/Segments" component={Segments} />
        <Route exact path="/" component={Publishers} />

      </Switch>
    </Router>

  </Container>

);


const Container = styled.div`

  margin:3rem 5rem;
  padding:0;
  font-family:'Poppins', sans-serif;
`;
export default App;
