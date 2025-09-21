import { createRoot } from "react-dom/client";
import logo from "./assets/react-logo.png";

function MainContent() {
  return <h1>React is great 1</h1>;
}

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <Main />
  </div>
);

function Main() {
  return (
    <div>
      <header>
        <img src={logo} alt="React Logo" width="40px" />
      </header>
      <main>
        <h1>Fun facts about React!</h1>
        <ul>
          <li>Was first release in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
      <footer>
        <small>© 2025 MOKAIRY development. All rights reserved.</small>
      </footer>
    </div>
  );
}
