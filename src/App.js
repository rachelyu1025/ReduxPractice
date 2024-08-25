import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrease = () => {
    dispatch({ type: 'DECREMENT', payload: { num: 2 } });
  };

  return (
    <div className='App'>
      <strong>{count}</strong>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

export default App;
