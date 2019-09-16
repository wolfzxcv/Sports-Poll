import React from 'react';
import styled from 'styled-components';
import Board from '../Board/Board';

const WholePage = () => {
  return (
    <StyledWholePage>
      <Board />
    </StyledWholePage>
  );
};

const StyledWholePage = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.black};
  background-image: url('https://cdna.artstation.com/p/assets/images/images/000/697/518/large/tj-foo-mayan-throne-room.jpg');
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default WholePage;
