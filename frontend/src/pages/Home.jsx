/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import "./LandingPage.css"; // Import CSS for landing page and footer styles

const LandingPage = ({ onLearnMoreClick }) => (
  <div className="landing-container">
    <div className="title-container">
      <h1 className="main-title">Gadget Galaxy</h1>
      <p className="tagline">*Discover the Future of Innovation*</p>
      <div className="buttons-container">
        <Link to="/shop" className="cta-button">Explore Now</Link>
        <button onClick={onLearnMoreClick} className="cta-button">Learn More</button>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-about">
        <h2 className="footer-title">Gadget Galaxy</h2>
        <p>Discover the latest innovations in tech and gadgets, all in one place. Join us on the journey to explore the future of technology.</p>
      </div>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Gadget Galaxy. All rights reserved.</p>
    </div>
  </footer>
);

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  // Scroll function for smooth scrolling to the next section
  const scrollToContent = () => {
    document.getElementById("main-content").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Show Landing Page only if no keyword search is active */}
      {!keyword && <LandingPage onLearnMoreClick={scrollToContent} />}
      {!keyword && <Header />}

      <div id="main-content"> {/* Target section to scroll to */}
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Message variant="danger">
            {isError?.data?.message || isError.error}
          </Message>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
                Special Products
              </h1>
              <Link
                to="/shop"
                className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
              >
                Shop
              </Link>
            </div>

            <div className="flex justify-center flex-wrap mt-[2rem]">
              {data && data.products ? (
                data.products.map((product) => (
                  <div key={product._id}>
                    <Product product={product} />
                  </div>
                ))
              ) : (
                <Message variant="info">No products found.</Message>
              )}
            </div>
          </>
        )}
      </div>

      {/* Footer added here */}
      <Footer />
    </>
  );
};

export default Home;
