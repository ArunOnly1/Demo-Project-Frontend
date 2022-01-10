import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  MarketPlace,
  SingleCoursePage,
  Home,
  Login,
  Register,
  MyCourse,
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        {/* <Header /> */}
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/market'>
          <MarketPlace />
        </Route>
        <Route path='/course/:id'>
          <SingleCoursePage />
        </Route>
        <Route path='/mycourses'>
          <MyCourse />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
