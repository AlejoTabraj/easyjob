import { Header } from "./components/Organisms/Header";
import { RecentJobs } from "./components/Organisms/RecentJobs";
import { JobsSection } from "./components/Organisms/JobsSection";
import "./style/style.scss";

function App() {
  return (
    <main className="App">
      <Header />
      <RecentJobs />
      <JobsSection />
    </main>
  );
}

export default App;
