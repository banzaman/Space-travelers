import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/nav';
import Rockets from './components/rockets';

function App() {
  return (
    <Router>
      <Nav />
      <section>
        <Routes>
          <Route path="/" element={<Rockets />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
