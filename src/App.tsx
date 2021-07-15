import { Header } from "./components/Organisms/Header";
import { RecentJobs } from "./components/Organisms/RecentJobs";
import "./style/style.scss";

function App() {
  return (
    <main className="App">
      <Header />
      <RecentJobs />
    </main>
  );
}

export default App;
