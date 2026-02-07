import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.component.jsx';
import NameNumerCalculator from './components/nameNumberCalculation/NameNumerCalculator.jsx'
import GenderSelection from './components/genderSelection/GenderSelection.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/calculate" element={<NameNumerCalculator />} />
        <Route path="/gender" element={<GenderSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
