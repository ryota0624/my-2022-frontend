import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Container,
  extendTheme,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  VStack
} from '@chakra-ui/react';

import * as C from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import './App.css';
import * as Counter from './counter';
import logo from './logo.svg';

const footerHeight = '50px'


function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

function Body() {
  const [count, increment] = Counter.useCounter();
  const [snapshot, {takeSnapshot, restore}] = Counter.useCounterSnapshot();
  return (
    <Container
      h="100%"
      className="App"
      backgroundColor={'blackAlpha.500'}
      scrollBehavior="smooth"
    >
      <VStack>
        <Button type="button" onClick={increment} textColor="gray" margin={'1'}>
          count is: {count}
        </Button>
        <Text>fibo(coutner) = {Counter.useCounterFibonattiState()}</Text>
        <Button type='button' onClick={takeSnapshot} textColor='gray'>
          take snapshot
        </Button>
        <SnapshotTabel snapshot={snapshot} restore={restore}/>
        <Spacer paddingBottom={footerHeight}/>
      </VStack>
    </Container>
  );
}

type SnapshotProps = {
  snapshot: Counter.CounterSnapshot[],
  restore: (n: number) => void
}
function SnapshotTabel(props: SnapshotProps) {
  const body = props.snapshot.map(({count, takedAt}) => {
    return (
      <C.Tr h='10px' key={`counter-table-row-${count}`}>
        <C.Td>{count}</C.Td>
        <C.Td>{takedAt.toUTCString()}</C.Td>
        <C.Td>
          <Button type='button' onClick={() => props.restore(count)}>DO</Button>
        </C.Td>
      </C.Tr>
    )
  })
  return (
    <Container h='250px' overflow={'auto'}>
    <C.Table>
      <C.Thead bgColor='lightblue' position={'sticky'} top='0' left='0' zIndex={2}>
        <C.Tr>
          <C.Th>
            count
          </C.Th>
          <C.Th>
            taked at
          </C.Th>
          <C.Th>
            restore
          </C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {body}
      </C.Tbody>
    </C.Table>
    </Container>
  )
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
        <HStack w="100%" h={footerHeight}>
          <Box flex={1}>
            <Center>
              <Link
                color={'lightblue'}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </Link>
            </Center>
          </Box>
          <Box flex={1}>
            <Center>
              <Link
                color={'lightblue'}
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Docs
              </Link>
            </Center>
          </Box>
          <Box flex={1}>
            <Center>
              <Link
                color={'lightblue'}
                href="https://chakra-ui.com/getting-started"
                target="_blank"
                rel="noopener noreferrer"
              >
                chakra-ui
              </Link>
            </Center>
          </Box>
        </HStack>
      </Container>
    </Center>
  );
}

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        height: '100%',
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxWidth: '100%',
      },
    },
  },
});

export default function () {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChakraProvider>
  );
}
