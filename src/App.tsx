import NavBar from "./sections/NavBar";
import Main from "./sections/Main";

export default function App() {
  return (
    <div className="bg-black w-full min-h-screen text-white tracking-wider">
      <NavBar />

      <Main />
    </div>
  );
};
