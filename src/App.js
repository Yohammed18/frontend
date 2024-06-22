import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Container } from 'react-bootstrap'
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage"; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App(prop) {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} exact/>
              <Route path="/product/:id" element={<ProductPage />} ></Route>
            </Routes>
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
