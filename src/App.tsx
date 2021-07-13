import './App.css'
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Screens from './pages/Screens'
import LoginScreen from './pages/LoginScreen'

function App() {
  return (
    <div className="App">
      <Screens />
      <LoginScreen />
      {/* <Router>
        <Switch>
          <Redirect path="/" to="/login"  />
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/screens">
            <Screens />
          </Route>
        </Switch>
      </Router> */}
    </div>
  )
}

export default App
