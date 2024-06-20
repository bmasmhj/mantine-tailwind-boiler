
import AsideNav from "./components/AsideNav"
import MainPage from "./pages/Index";

export default function App() {
  return (
    <div className="flex w-full">
        <AsideNav />
        <main className=" ">
          <MainPage />
        </main>
    </div>
  );
}
