import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 border-t-4 border-customBlue text-center text-customBlue text-sm">
      {/* Liens principaux */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-20 font-semibold mb-4">
        <a href="#" className="hover:text-orange transition-colors duration-200">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-orange transition-colors duration-200">
          Terms of Service
        </a>
        <a href="#" className="hover:text-orange transition-colors duration-200">
          Contact
        </a>
        <a href="#" className="hover:text-orange transition-colors duration-200">
          FAQ
        </a>
      </div>

      <div className="flex justify-center gap-6 m-6 text-2xl">
        <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors duration-200">
          <FaFacebook />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-200">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-200">
          <FaInstagram />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-800 transition-colors duration-200">
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs font-medium">&copy; 2024 Haven. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
