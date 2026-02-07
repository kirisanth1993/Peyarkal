import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NameList from './components/nameList/NameList.component.jsx';
import Layout from './components/layout/Layout.component.jsx';
import NameNumerCalculator from './components/nameNumberCalculation/NameNumerCalculator.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/calculate" element={<NameNumerCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
