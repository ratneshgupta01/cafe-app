import Banner from "./components/banner";
import Blog from "./components/blog";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Products from "./components/products";




function App() {
  return (
    <>
    <Header/>
    <main className="main">
    <Banner/>
    </main>
    <Main/>
    <Products/>
    <Blog/>
    <Footer/>
    </>
  );
}

export default App;
