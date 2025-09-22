import logo from "../assets/react-logo.png";

export function Header() {
  return (
    <header className="header">
      <img className="reactLogo" src={logo} alt="React Logo" />
      <nav>
        <ul className="nav-bar">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
