import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import OrderList from './components/OrderList';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import AppStateProvider from './providers/AppstateProvider';

function App() {
  return (
    <BrowserRouter>
      <AppStateProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<OrderList />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </AppStateProvider>
    </BrowserRouter>
  );
}

export default App;
