const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Rudy Robert. Tous droits réservés.</p>
      <a href="https://fr.freepik.com/search">Icône de Marz Gallery</a>
      <p>
        Données fournies par{" "}
        <a
          href="https://meowfacts.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meow Facts API
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
