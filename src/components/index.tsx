import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header/header';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Services from './services/services';

const Index = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </Router>
    );
}

export default Index;