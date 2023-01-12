import './App.css';

import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
   <div className='app-container'>
    <div>
      <Header />
    </div>
    <div>
      <Body />
    </div>
   </div>
  );
}

export default App;
