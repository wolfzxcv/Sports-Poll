import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import data from '../../asset/test-assignment.json';
import { AppContext } from '../../context/AppContext';

const Board = () => {
  const {
    display,
    setDisplay,
    displayOdds,
    setDisplayOdds,
    chooseNext,
  } = useContext(AppContext);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('sport poll'));
    const getOdds = JSON.parse(localStorage.getItem('sport odds'));
    if (getData) {
      setDisplay(getData);
      setDisplayOdds(getOdds);
    } else {
      const noFinishedEvent = data.filter(d => d.status !== 'FINISHED');

      const chooseOne =
        noFinishedEvent[Math.floor(Math.random() * noFinishedEvent.length)];

      const odds1 = (Math.random() * (4 - 1) + 1).toFixed(2);
      const odds2 = (Math.random() * (4 - 1) + 1).toFixed(2);
      const odds3 = (Math.random() * (4 - 1) + 1).toFixed(2);

      setDisplay(chooseOne);
      setDisplayOdds([odds1, odds2, odds3]);
      localStorage.setItem('sport poll', JSON.stringify(chooseOne));
      localStorage.setItem('sport odds', JSON.stringify([odds1, odds2, odds3]));
    }
  }, []);

  return (
    <StyledBoard>
      <div className='category'>{display.sport}</div>
      <div className='status-and-country'>
        <div className='status'>{display.state}</div>
        <div className='country'>{display.country}</div>
      </div>
      <div className='group'>{display.group}</div>
      <div className='teams'>
        <div onClick={chooseNext}>
          <div className='team-name'>{display.homeName}</div>
          <div className='odds'>{displayOdds[0]}</div>
        </div>
        <div onClick={chooseNext}>
          <div className='draw'>Draw</div>
          <div className='odds'>{displayOdds[1]}</div>
        </div>
        <div onClick={chooseNext}>
          <div className='team-name'>{display.awayName}</div>
          <div className='odds'>{displayOdds[2]}</div>
        </div>
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
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .category {
    display: flex;
    flex-grow: 2;
    flex-shrink: 1;
    flex-basis: 0%;
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSize[3]};
    font-family: ${props => props.theme.fonts.category};
  }

  .status-and-country {
    display: flex;
    font-family: ${props => props.theme.fonts.status};
    background: ${props => props.theme.colors.orange};
    font-weight: bold;
    font-size: ${props => props.theme.fontSize[2]};
    div {
      margin: 0 5px;
    }
    .status {
      text-align: left;
      width: 50vw;
    }
    .country {
      text-align: right;
      width: 50vw;
    }
  }

  .group {
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
    line-height: 2;
    font-size: ${props => props.theme.fontSize[2]};
  }

  .teams {
    display: flex;
    flex-grow: 6;
    flex-shrink: 1;
    flex-basis: 0%;

    div {
      height: 100%;
      width: 100%;
      border: 1px solid yellow;

      .team-name {
        height: 80%;
        border: 1px solid green;
      }
      .draw {
        height: 80%;
        border: 1px solid blue;
      }
      .odds {
        height: 20%;
        border: 1px solid red;
        line-height: 2;
        font-size: ${props => props.theme.fontSize[1]};
      }
    }
  }
  @media only screen and (min-width: 769px) {
    /* tablets and desktop */
    width: 768px;
    height: 400px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 20px;
    .category {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    .teams {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
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
