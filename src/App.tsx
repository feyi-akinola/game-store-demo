import NavBar from "./sections/NavBar";
import Main from "./sections/Main";
import TopSellers from "./sections/TopSellers";
import NewReleases from "./sections/NewReleases";

export default function App() {
  return (
    <div className="bg-black w-full min-h-screen text-white tracking-wider">
      <NavBar />

      <Main />

      <TopSellers />

      <NewReleases />
    </div>
  );
};
