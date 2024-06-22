// store.js
import { create } from 'zustand';

// Создаем Zustand store
const useStore = create((set) => ({
  // Начальные состояния для счетчиков
  counter1: 0,
  counter2: 0,
  // Действия для изменения состояния
  incrementCounter1: () => set((state) => ({ counter1: state.counter1 + 1 })),
  decrementCounter1: () => set((state) => ({ counter1: state.counter1 - 1 })),
  incrementCounter2: () => set((state) => ({ counter2: state.counter2 + 1 })),
  decrementCounter2: () => set((state) => ({ counter2: state.counter2 - 1 }))
}));

export default useStore;
