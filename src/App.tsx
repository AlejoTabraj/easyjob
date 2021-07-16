import { Header } from "./components/Organisms/Header";
import { RecentJobs } from "./components/Organisms/RecentJobs";
import { JobsSection } from "./components/Organisms/JobsSection";
import { FooterNav } from "./components/Molecules/FooterNav";
import "./style/style.scss";

function App() {
  return (
    <main className="App">
      <Header />
      <RecentJobs />
      <JobsSection />
      <FooterNav />
    </main>
  );
}

export default App;
