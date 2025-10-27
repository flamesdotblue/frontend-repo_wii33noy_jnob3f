import HeaderHero from "./components/HeaderHero";
import Services from "./components/Services";
import Work from "./components/Work";
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderHero />
      <Services />
      <Work />
      <ContactFooter />
    </div>
  );
}

export default App;
