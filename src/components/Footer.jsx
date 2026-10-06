import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      &copy; {new Date().getFullYear()} Abdullah Al Azad. All rights reserved.
    </footer>
  );
};

export default Footer;
