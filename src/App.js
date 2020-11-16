
import Routes from "./routes/Routes";
import "./App.css";
import "./components/partials/styles/Nav.css";
import "./components/partials/styles/Footer.css";
import "./components/views/styles/Inicio.css";

function App() {
  const screenOrientation = window.screen.orientation;
  console.log(screenOrientation);

  return (
    <div position="horizontal">
      <Routes />
    </div>
  );
}

export default App;
