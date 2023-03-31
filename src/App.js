import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route,Routes} from "react-router-dom" ;
import Overview from './components/Overview';
import Statistics from './pages/Statistics/Statistics';
import Analytics from './pages/Analytics/Analytics';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './components/Footer';


function App() {
  return (
    <div>
    
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/"          element={<Overview />}  />
      <Route path="/statistics" element={<Statistics />}  />
      <Route path="/analytics"  element={<Analytics />}  />
      <Route path="/dashboard"  element={<Dashboard />}  />
     </Routes>
     <Footer />
     </BrowserRouter>
    

    </div>
  );
}

export default App;
