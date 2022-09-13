//CSS
import "./global.scss"
//Components
import { HomePage } from './pages/HomePage/HomePage';
import { Catalog } from "./pages/Catalog/Catalog";
import { Delivery } from "./pages/Delivery/Delivery";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { Checkout } from "./pages/Checkout/Checkout";
import { SuccessfulOrder } from "./pages/SuccessfulOrder/SuccessfulOrder";
import { NotFound } from "./pages/NotFound/NotFound";
//Instruments
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<Catalog />}>
          <Route path=":category" element={<Catalog />} />
        </Route>
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/successful-order" element={<SuccessfulOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
