import {
  Button,
  Center,
  ChakraProvider,
  Container, extendTheme, HStack,
  Image,
  Link,
  Text,
  VStack
} from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import './App.css';
import * as Counter from './counter';
import logo from './logo.svg';

function App() {
  const [count, increment] = Counter.useCounter();
  return (
    <>
      <Header />
      <Container
        className="App"
        backgroundColor={'blackAlpha.500'}
        scrollBehavior="smooth"
      >
        {' '}
        <VStack>
          <Button
            type="button"
            onClick={increment}
            textColor="gray"
            margin={'1'}
          >
            count is: {count}
          </Button>
          <Text>fibo(coutner) = {Counter.useCounterFibonattiState()}</Text>
          <Text>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </Text>
        </VStack>
      </Container>

      <Footer></Footer>
    </>
  );
}

function Header() {
  return (
    <Container border="1px" borderColor={'blue.100'}>
      <HStack backgroundColor={'white'} h="50px">
        <Image h="50px" src={logo} className="App-logo" alt="logo" />
        <Text>Hello Vite + React!</Text>
      </HStack>
    </Container>
  );
}

function Footer() {
  return (
    <Center>
      <Container
        centerContent
        position={'fixed'}
        bottom="0"
        backgroundColor={'black'}
      >
        <Center h={'50px'}>
          <Text>
            <Link
              color={'lightblue'}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </Link>
            {' | '}
            <Link
              color={'lightblue'}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </Link>
          </Text>
        </Center>
      </Container>
    </Center>
  );
}

const theme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        maxWidth: "100%"
      }
    }
  }
})

export default function () {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChakraProvider>
  );
}

