import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Cv from '../src/Pages/Cv'
import Contact from '../src/Pages/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuBar from './Components/MenuBar'
import Header from '../src/Components/Header'


function App() {
  return (

    <Router>
        <div style={{}}>
          <MenuBar />
      </div>
      <div>
        <Header />
      </div>
     
      <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Cv' component={Cv} />
              <Route exact path='/Contact' component={Contact} />
          </Switch>

      </Router>
      )
}

export default App;
