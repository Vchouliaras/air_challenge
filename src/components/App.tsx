import Assets from './Assets';
import Boards from './Boards';
import Header from './Header';

const App = () => {
  return (
    <main className="relative mt-6 min-h-full mx-flex h-fit flex-1 flex-col mx-[70px]">
      <Header />
      <Boards />
      <Assets />
    </main>
  );
}

export default App;
