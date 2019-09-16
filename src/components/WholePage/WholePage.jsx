import React from 'react';
import styled from 'styled-components';
import Board from '../Board/Board';
import bg from '../../asset/bg.jpg';

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
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default WholePage;
