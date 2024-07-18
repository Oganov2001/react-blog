import './App.css';
import Navigation from './components/Navigation/navigation';
import Header from './components/Header/header';
import Posts from './components/Posts/posts';

function App() {
  return (
    <div className="app">
      <Navigation></Navigation>
      <Header></Header>
      <Posts></Posts>
    </div>
  );
}

export default App;
