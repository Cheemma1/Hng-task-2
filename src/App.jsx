import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayNow from "./pages/PayNow";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/pay" element={<PayNow />} />
      </Routes>
    </Router>
  );
}

export default App;
