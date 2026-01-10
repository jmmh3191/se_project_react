import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">Developed by Jesús Montero</p>
      <p className="footer__text-year">{currentYear}</p>
    </footer>
  );
}

export default Footer;
