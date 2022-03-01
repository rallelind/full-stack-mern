import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from "./components/welcomePage/WelcomePage";
import { BrowserRouter as Router, Routes, Route }from "react-router-dom"
import About from "./components/aboutPage/About";
import Pricing from "./components/pricingPage/Pricing";
import Features from "./components/featuresPage/Features";
import RegisterPage from './components/registerPage/RegisterPage';
import LoginPage from './components/loginPage/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import UploadProduct from './components/uploadProductPage/UploadProduct';
import { ProductPage } from './components/productPage/ProductPage';
import ProfilePage from './components/profilePage/ProfilePage';
import BookingPage from './components/bookingPage/BookingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<WelcomePage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/pricing" element={<Pricing />}/>
            <Route path="/features" element={<Features />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/product/upload" element={<UploadProduct />}/>
            <Route path="/productpage/:id" element={<ProductPage />}/>
            <Route path="/profilepage" element={<ProfilePage />}/>
            <Route path="/bookingpage" element={<BookingPage />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
