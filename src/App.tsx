import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <main>
      <Header />
      <Card
        cityInfo={ {
          city: '',
          country: '',
          imageUrl: '',
          viseted: undefined,
        } }
      />
    </main>
  );
}

export default App;
