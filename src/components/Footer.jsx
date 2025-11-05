const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="/src/images/logo2.png"
            alt="logo"
            className="footer-logo-img"
          />
          <span className="footer-logo-text">Lessons in Literature</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Bogatõrjova Ksenia & Kelly Lääne. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
