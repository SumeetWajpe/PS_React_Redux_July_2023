import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "bootstrap/dist/css/bootstrap.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);
