import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Cv from './Pages/Work'
import Contact from '../src/Pages/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from './Pages/Work'
import Header from '../src/Components/Header'


function App() {
  return (

    <Router>
      <div>
        <Header />
      </div>
     
      <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Work' component={Work} />
              <Route exact path='/Contact' component={Contact} />
          </Switch>

      </Router>
      )
}

export default App;
