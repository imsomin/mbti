import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';

import {Routes, Route} from 'react-router-dom';
import './App.css';


//'/'는 기본 경로이며, 엘리먼트를 이용해서 컴포넌트를 렌더링해 줄 수 있다
function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />}  />
    <Route path='/quesiton' element={<Question/>} />
    <Route path='/result' element={<Result/>} />
    </Routes>
  );
}

export default App;
