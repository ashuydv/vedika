import {
  Header,
  Hero,
  Featured,
  Brands,
  Payment,
  Statistics,
  Testimonials,
  Footer,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Brands />
      <Payment />
      <Statistics />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
