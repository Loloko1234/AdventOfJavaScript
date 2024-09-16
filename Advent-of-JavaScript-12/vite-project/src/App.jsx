import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Winner from './winner';
import ChildComponent from './ChildComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/winner" element={<Winner />} />
        <Route path="/" element={<ChildComponent />} />
      </Routes>
    </Router>
  );
}

export default App;