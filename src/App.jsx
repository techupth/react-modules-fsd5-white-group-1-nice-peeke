import "./App.css";
import {
  Header,
  FAQ,
  Footer,
  MainContent,
  ProductSection,
} from "../components/WebSections";

import Button from "../components/common/Button";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
