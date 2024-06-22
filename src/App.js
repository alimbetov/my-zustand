import React from 'react';
import useStore from './zstnd/store';

const App = () => {
  // Получаем состояния и действия из стора
  const counter1 = useStore(state => state.counter1);
  const counter2 = useStore(state => state.counter2);
  const incrementCounter1 = useStore(state => state.incrementCounter1);
  const decrementCounter1 = useStore(state => state.decrementCounter1);
  const incrementCounter2 = useStore(state => state.incrementCounter2);
  const decrementCounter2 = useStore(state => state.decrementCounter2);

  return (
    <div>
      <h1>Counter 1: {counter1}</h1>
      {/* Кнопки для управления первым счетчиком */}
      <button onClick={incrementCounter1}>Increment Counter 1</button>
      <button onClick={decrementCounter1}>Decrement Counter 1</button>

      <h1>Counter 2: {counter2}</h1>
      {/* Кнопки для управления вторым счетчиком */}
      <button onClick={incrementCounter2}>Increment Counter 2</button>
      <button onClick={decrementCounter2}>Decrement Counter 2</button>
    </div>
  );
};

export default App;
