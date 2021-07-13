/*
 * @Author: tangzhicheng
 * @Date: 2021-07-13 11:17:30
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-07-13 17:20:40
 * @Description: file content
 */
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Screens from './pages/Screens'
import LoginScreen from './pages/Screens/LoginScreen'

function App() {
  return (
    <div className="App">
      {/* <Screens />
      <LoginScreen /> */}
      <Router>
        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/screens">
            <Screens />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
