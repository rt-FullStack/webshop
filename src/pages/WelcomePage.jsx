import { motion } from "framer-motion"; // Importing Framer Motion for animations
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation
import Footer from "../components/Footer"; // Importing Footer component
import "../WelcomePage.scss"; // Importing styles for the WelcomePage

const WelcomePage = () => {
  // This component renders a welcome page with animations and a button to enter the shop
  return (
    <>
      {" "}
      {/* Fragment (<>) för att gruppera flera element */}
      <motion.div // Main container for the welcome page
        className="welcome-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="welcome-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
            }}
          >
            Välkommen till ebshop!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Upptäck här unika produkter!
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/home" className="enter-button">
              Handla nu 👉
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default WelcomePage;
