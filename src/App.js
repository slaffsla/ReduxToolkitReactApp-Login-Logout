import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/changeColor";
export default function App() {
  return (
    <div className="App">
      <ChangeColor />
      <Profile />
      <Login />
    </div>
  );
}
