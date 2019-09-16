import React, { useEffect } from 'react';
import styled from 'styled-components';

const Board = () => {
  return (
    <StyledBoard>
      <div>FOOTBALL</div>
      <div className='status-and-country'>
        <div>Status</div>
        <div>Country </div>
      </div>
      <div className='group'>Group</div>
      <div className='teams'>
        <div>Home</div>
        <div>Draw</div>
        <div>Away</div>
      </div>
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    border: 1px solid red;
  }

  .status-and-country {
    display: flex;
  }

  .teams {
    display: flex;
  }
  @media only screen and (min-width: 769px) {
    /* tablets and desktop */
    width: 768px;
    height: 400px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 20px;
  }

  @media only screen and (max-width: 768px) and (orientation: landscape) {
    /* landscape phones */
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.white};
  }

  @media only screen and (max-width: 768px) and (orientation: portrait) {
    /* portrait phones */
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.white};
    .teams {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Board;
