import { BrowserRouter } from "react-router-dom"
import { Routes, Route, Navigate } from "react-router"
import Header from "./components/Header";
import "../src/styles/App.scss"
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DogsPage from "./pages/DogsPage";
import CatsPage from "./pages/CatsPage";
import Navbar from "./components/Navbar";
import ClientsPage from "./pages/ClientsPage";
import NewClientPage from "./pages/NewClientPage";
import EditClientPage from "./pages/EditClientPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/add" element={<NewClientPage />} />
        <Route path="/clients/:id" element={<EditClientPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
