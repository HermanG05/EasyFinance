import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Auth} from './pages/login/Index'; 
import { Expenses } from './pages/login/expenses/expenses';
import {InvestmentTracker } from './pages/login/expenses/investment_tracker';
import { FinanceNews } from './pages/login/expenses/investment_tracker/finance_news';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expenses" element={<Expenses />}/>
          <Route path="/investment_tracker" element={<InvestmentTracker/>} />
          <Route path="/finance_rews" element={<FinanceNews />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
