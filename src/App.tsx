import Banner from "./components/Banner"
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";


function App() {
  return (
    <>
    <Header />
    <Banner src="../public/Imagens/Banner Desktop.png" 
    alt="Banner principal do site" />
    <MovieSection />
    <Banner src="../public/Imagens/Banner.png" alt="combo"/>
    <Newsletter />
    <Footer />
    </>
  );
}

export default App;
