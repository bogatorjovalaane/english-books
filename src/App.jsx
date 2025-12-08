import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Books from "./components/Books";
import Book from "./components/Book";
import HowToUse from "./components/HowToUse";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/books/:id" element={<Book />}></Route>
        <Route path="/howtouse" element={<HowToUse/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
