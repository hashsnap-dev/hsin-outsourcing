import { Spinner } from '@chakra-ui/spinner';
import { FC } from 'react';
import styled from 'styled-components';
import {createPortal} from 'react-dom';
import { Text } from '@chakra-ui/layout';
import { VStack } from '@chakra-ui/react';

const Shadow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const Loading: FC<{
  show: boolean;
  msg: string;
}> = ({show, msg}) => {
  return show ? createPortal(<Shadow>
    <VStack>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text fontSize="xl" color="white">{msg}</Text>
    </VStack>
  </Shadow>, document.getElementById('modal') as HTMLDivElement) : null;
};

export default Loading;