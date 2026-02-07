import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NameList from './components/nameList/NameList.component.jsx';
import Layout from './components/layout/Layout.component.jsx';
import { Grid } from '@mui/material';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
