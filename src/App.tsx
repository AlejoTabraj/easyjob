import { PerfilAvatar } from './components/Molecules/PerfilAvatar';
import { Title } from './components/Molecules/Title';
import './style/style.scss';

function App() {
  return (
    <main className="App">
      <Title></Title>
      <PerfilAvatar href={'#'}/>
    </main>
  );
}

export default App;
