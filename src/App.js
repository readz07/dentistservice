
import Header from './Pages/Common/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Common/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog'
import Reviews from './Pages/Reviews/Reviews'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/signin" element={<SignIn></SignIn>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
