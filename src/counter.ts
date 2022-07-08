import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const counterState = atom({
  key: 'counter',
  default: 0,
});

const counterSnapshotState = atom<CounterSnapshot[]>({
    key: 'counterSnapshot',
    default: [],
  });

export function useCounter(): [number, () => void] {
  const [counter, setCounter] = useRecoilState(counterState);

  const increment = () => {
    setCounter(counter + 1);
  };

  return [counter, increment];
}

export type CounterSnapshot = {
    count: number,
    takedAt: Date
}

export function useCounterSnapshot(): [CounterSnapshot[], () => void] {
    const [counter] = useRecoilState(counterState);
    const [snapshot, setSnapshot] = useRecoilState(counterSnapshotState);

    const takeSnapshot = () => {
      if (snapshot.find(s => s.count == counter) !== undefined) {
        return
      }  
      const newSnapshot: CounterSnapshot = {
        count: counter,
        takedAt: new Date(Date.now())
      }
      setSnapshot([...snapshot, newSnapshot])
    };
  
    return [snapshot, takeSnapshot];
  }

const counterFibonattiState = selector({
  key: 'counterFibonattiState',
  get: ({get}) => {
    const counter = get(counterState);
    return fibonatti(counter);
  },
});

function fibonatti(i: number): number {
  if (i < 0) return 1;
  switch (i) {
    case 0:
      return 1;
    case 1:
      return 1;
    default:
      return fibonatti(i - 1) + fibonatti(i - 2);
  }
}

export function useCounterFibonattiState(): number {
  return useRecoilValue(counterFibonattiState);
}
