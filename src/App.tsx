
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Architecture from './pages/Architecture';
import Technical from './pages/Technical';
import TerrainSimulationDetails from './pages/TerrainSimulationDetails';
import CostComparison from './pages/CostComparison';
import FeedbackSystemDetails from './pages/FeedbackSystemDetails';
import Safety from './pages/Safety';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/terrain-simulation" element={<TerrainSimulationDetails />} />
        <Route path="/feedback-system" element={<FeedbackSystemDetails />} />
        <Route path="/cost-comparison" element={<CostComparison />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
