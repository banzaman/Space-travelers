import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/missions" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
