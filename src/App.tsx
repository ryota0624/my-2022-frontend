import { Button, ChakraProvider, Image, Link, Text } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import './App.css';
import * as Counter from './counter';
import logo from './logo.svg';

function App() {
  const [count, increment] = Counter.useCounter();
  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <Text>Hello Vite + React!</Text>
        <Text>
          <Button type="button" onClick={increment} textColor="gray">
            count is: {count}
          </Button>
        </Text>
        <Text>fibo(coutner) = {Counter.useCounterFibonattiState()}</Text>
        <Text>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </Text>
        <Text>
          <Link color={"lightblue"}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
          {' | '}
          <Link color={"lightblue"}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </Link>
        </Text>
      </header>
    </div>
  );
}

export default function () {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChakraProvider>
  );
}
