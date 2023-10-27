// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'react-router-dom';

// Page
import Home from './pages/Home';

// fontawesomeicon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

library.add( faCalendar )

function App() {
  let element = useRoutes([
    { path:'/', element:<Home /> }
  ])

  return element;
}

export default App
