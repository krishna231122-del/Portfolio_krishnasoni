import { useState } from "react";
import { motion } from "motion/react";
import { mySocials } from "../constants";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const socials = mySocials.filter(s => s.name === "GitHub" || s.name === "Linkedin");

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Krishna Soni
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex items-center gap-6">
            <Navigation />
            <div className="flex gap-4 ml-2 border-l border-neutral-700 pl-4 h-5 items-center">
              {socials.map((social, index) => (
                <a
                  href={social.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <img src={social.icon} className="w-5 h-5 filter brightness-90 hover:brightness-100" style={social.name === "GitHub" ? { filter: "brightness(0) invert(1)" } : {}} alt={social.name} />
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-xs font-semibold px-3 py-1 border border-lavender rounded-full text-lavender hover:bg-lavender hover:text-white transition-all duration-200"
              >
                Resume
              </a>
            </div>
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5 flex flex-col items-center gap-4">
            <Navigation />
            <div className="flex gap-6 mt-2 justify-center items-center">
              {socials.map((social, index) => (
                <a
                  href={social.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <img src={social.icon} className="w-6 h-6" style={social.name === "GitHub" ? { filter: "brightness(0) invert(1)" } : {}} alt={social.name} />
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-1.5 border border-lavender rounded-full text-lavender hover:bg-lavender hover:text-white transition-all duration-200 mt-2"
            >
              Resume
            </a>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
