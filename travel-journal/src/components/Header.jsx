import Logo from "../assets/globe.png";

export default function Header() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo" />
        <h1>My Travel journal</h1>
      </header>
    </>
  );
}
