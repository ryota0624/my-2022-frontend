import {atom, selector, useRecoilState, useRecoilValue} from 'recoil';

const counterState = atom({
  key: 'counter',
  default: 0,
});

export function useCounter(): [number, () => void] {
  const [counter, setCounter] = useRecoilState(counterState);

  const increment = () => {
    setCounter(counter + 1);
  };

  return [counter, increment];
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
