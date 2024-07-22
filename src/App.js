import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Posts from './components/posts';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Posts></Posts>
    </div>
  );
}

export default App;
