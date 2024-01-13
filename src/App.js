import logo from './logo.svg';
import './App.css';
import ItemDate from './components/ItemDate';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Item   name="Nirma" ></Item>
      <ItemDate date="20" month="july" year="1933"   ></ItemDate>
      <Item  name="Nirma"  ></Item>
      <ItemDate date="20" month="july" year="1943"   ></ItemDate>
      <Item  name="Nirma"  ></Item>
      <ItemDate date="20" month="july" year="1943"   ></ItemDate>
      
    </div>
  );
}

export default App;
