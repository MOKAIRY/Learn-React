import logo from "../assets/react-logo.png";

export function Navbar() {
  return (
    <header className="Navbar">
      <nav>
        <img className="reactLogo" src={logo} alt="React Logo" />
        <span>React Facts</span>
      </nav>
    </header>
  );
}
