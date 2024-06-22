import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Container } from 'react-bootstrap'
import HomePage from "./Pages/HomePage";


function App(prop) {
  return (
    <div>
      <Header />
        <main className="py-3">
          <Container>
            <HomePage />
          </Container>
        </main>
      <Footer />
    </div>
  );
}

export default App;
