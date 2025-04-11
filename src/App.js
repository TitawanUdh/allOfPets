import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Error from "./pages/Error";
import NavBar from "./components/nav-bar";
import CommunitiesPage from "./pages/communities";
import Cafe from "./components/Communities/cafe";
import Hospital from "./components/Communities/hospital";
import PetShop from "./components/Communities/pet-shop";
import Other from "./components/Communities/other";
import Grooming from "./components/Communities/grooming";
import Hotel from "./components/Communities/hotel";
import Department from "./components/Communities/department";
import Restaurant from "./components/Communities/restaurant";
import CafeDetail from "./components/Communities/cafe-detail";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="/communities/cafe" element={<Cafe />} />
        <Route path="/communities/cafe/details" element={<CafeDetail />} />
        <Route path="/communities/restaurant" element={<Restaurant />} />
        <Route path="/communities/department" element={<Department />} />
        <Route path="/communities/hotel" element={<Hotel />} />
        <Route path="/communities/grooming" element={<Grooming />} />
        <Route path="/communities/hospital" element={<Hospital />} />
        <Route path="/communities/pet-shop" element={<PetShop />} />
        <Route path="/communities/other" element={<Other />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
