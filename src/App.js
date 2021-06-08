import logo from './logo.svg';
import './App.css';
import Page from "../src/pages/index";

function App() {
  return (
    <div className="container">
      <div className="language">
        <p>. English</p>
        <p>عربى</p>
        <p>русский</p>
      </div>
      <div style={{ paddingTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <img src={"https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net/-/mediadh/dh/hospitality/e-menu/menus/jhrlogo.jpg"} className="jum-logo" alt="logo" />
        <button style={{ backgroundColor: "tomato", color: "white" }}>My Orders</button>
      </div>
      <div>
        <Page />
      </div>

    </div>
  );
}

export default App;
