import React from 'react';
import { Container } from 'react-bootstrap'
import { AuthProvider } from './backend/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './components/layout/Homepage'
import Layout from './components/layout/Layout'
import PrivateRoute from './components/layout/PrivateRoute'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
    <div className="glass" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Layout} />
            <Route path="/login" component={Homepage} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  </Container>
  ) 
}

export default App;
