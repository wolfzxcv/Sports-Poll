import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../asset/test-assignment.json';

const Board = () => {
  const [display, setDisplay] = useState([]);
  const [displayOdds, setDisplayOdds] = useState([]);

  const chooseOneFunction = (category, team) => {
    const ifRepeat = category;
    let chooseOne;

    console.log(`You voted for ${team}`);

    // pick a random poll
    const makeSureNoRepeat = () => {
      chooseOne = data[Math.floor(Math.random() * data.length)];
    };

    makeSureNoRepeat();

    // after voting picking another random poll with different category
    while (chooseOne.sport === ifRepeat || chooseOne.state === 'FINISHED') {
      makeSureNoRepeat();
    }
    // generate random odds between 1 to 4
    const odds1 = (Math.random() * (4 - 1) + 1).toFixed(2);
    const odds2 = (Math.random() * (4 - 1) + 1).toFixed(2);
    const odds3 = (Math.random() * (4 - 1) + 1).toFixed(2);
    setDisplay(chooseOne);
    setDisplayOdds([odds1, odds2, odds3]);

    // set data into local storage
    localStorage.setItem('sport poll', JSON.stringify(chooseOne));
    localStorage.setItem('sport odds', JSON.stringify([odds1, odds2, odds3]));

    // let's play some music!!!!!!!!
    const playAudio = () => {
      const sound = new Audio(
        'http://www.chiptape.com/chiptape/sounds/medium/drop.wav'
      );
      const playPromise = sound.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // console.log('audio play successfully');
          })
          .catch(() => {
            console.log('error');
          });
      }
    };
    playAudio();
  };

  // when firstly rendering the app, check if there's any previous data in local storage, if yes, then get the data from local storage; if not, then generate new data
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('sport poll'));
    const getOdds = JSON.parse(localStorage.getItem('sport odds'));
    if (getData) {
      setDisplay(getData);
      setDisplayOdds(getOdds);
    } else {
      chooseOneFunction('', '');
    }
  }, []);

  return (
    <StyledBoard>
      <div className='category'>
        {display.sport === 'ICE_HOCKEY' ? 'ICE HOCKEY' : display.sport}
      </div>
      <div className='status-and-country'>
        <div
          className={
            display.state === 'STARTED' ? 'status green' : 'status red'
          }
        >
          {display.state === 'STARTED' ? 'STARTED' : 'NOT STARTED'}
        </div>
        <div className='country'>{display.country}</div>
      </div>
      <div className='group'>
        <span>{display.group}</span>
      </div>
      <div className='teams'>
        <div
          className='border-right border-bottom'
          onClick={() => chooseOneFunction(display.sport, display.homeName)}
        >
          <div className='team-name'>
            <span>{display.homeName}</span>
          </div>
          <div className='odds one'>
            <span>{displayOdds[0]}</span>
          </div>
        </div>
        <div
          className='border-right border-bottom'
          onClick={() => chooseOneFunction(display.sport, 'Draw')}
        >
          <div className='draw'>
            <span>Draw</span>
          </div>
          <div className='odds two'>
            <span>{displayOdds[1]}</span>
          </div>
        </div>
        <div onClick={() => chooseOneFunction(display.sport, display.awayName)}>
          <div className='team-name'>
            <span>{display.awayName}</span>
          </div>
          <div className='odds three'>
            <span>{displayOdds[2]}</span>
          </div>
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
  box-shadow: 20px 20px 20px 0px rgba(0, 0, 0, 0.8);
  border-radius: 20px;

  div {
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .category {
    display: flex;
    border-bottom: 2px solid ${props => props.theme.colors.white};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: rgb(2, 0, 36);
    background: radial-gradient(
      circle,
      rgba(2, 0, 36, 1) 35%,
      rgba(128, 0, 0, 1) 85%,
      rgba(255, 0, 95, 1) 100%
    );
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSize[3]};
    font-family: ${props => props.theme.fonts.category};
  }

  .status-and-country {
    display: flex;
    font-family: ${props => props.theme.fonts.status};
    background-image: linear-gradient(#3ca3ff, #005eb3);
    font-weight: bold;
    font-size: ${props => props.theme.fontSize[2]};
    border-bottom: 2px solid ${props => props.theme.colors.white};
    box-shadow: 20px 20px 20px 0px rgba(0, 0, 0, 0.8);

    .status {
      text-align: left;
      width: 50vw;
      margin-left: 20px;
    }

    .green {
      color: ${props => props.theme.colors.green};
    }
    .red {
      color: ${props => props.theme.colors.red};
    }
    .country {
      text-align: right;
      width: 50vw;
      color: ${props => props.theme.colors.darkBlue};
      margin-right: 20px;
    }
  }

  .group {
    background: rgb(255, 127, 80);
    background: radial-gradient(
      circle,
      rgba(255, 127, 80, 1) 36%,
      rgba(128, 0, 0, 1) 100%
    );
    color: ${props => props.theme.colors.white};
    line-height: 2;
    font-size: ${props => props.theme.fontSize[2]};
    border-bottom: 2px solid ${props => props.theme.colors.white};
  }

  .teams {
    display: flex;
    flex-grow: 6;
    flex-shrink: 1;
    flex-basis: 0%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    .border-right {
      border-right: 2px solid ${props => props.theme.colors.white};
    }

    div {
      height: 100%;
      width: 100%;
      &:hover {
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0 0 5px 5px rgba(131, 58, 180, 1);
      }

      .team-name,
      .draw {
        height: 80%;
        font-size: ${props => props.theme.fontSize[2]};
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.yellow};
        background: rgb(19, 11, 107);
        background: radial-gradient(
          circle,
          rgba(19, 11, 107, 1) 0%,
          rgba(2, 0, 36, 1) 0%,
          rgba(13, 16, 158, 1) 100%
        );
      }

      .odds {
        height: 20%;
        font-size: ${props => props.theme.fontSize[1]};
        color: ${props => props.theme.colors.white};
        background: rgb(32, 40, 156);
        background: linear-gradient(
          90deg,
          rgba(32, 40, 156, 1) 12%,
          rgba(51, 16, 66, 1) 100%
        );
      }
    }
  }
  @media only screen and (min-width: 769px) {
    /* tablets and desktop */
    width: 768px;
    height: 400px;
    background-color: ${props => props.theme.colors.white};

    .category {
      flex-grow: 2;
      flex-shrink: 1;
      flex-basis: 0%;
    }
    .teams {
      .team-name,
      .draw {
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    .odds {
      line-height: 2;
    }
    .one {
      border-bottom-left-radius: 20px;
    }
    .three {
      border-bottom-right-radius: 20px;
    }
  }

  @media only screen and (max-width: 768px) and (orientation: landscape) {
    /* landscape phones */
    width: 90vw;
    height: 90vh;
    background-color: ${props => props.theme.colors.white};
    .group,
    .odds {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .one {
      border-bottom-left-radius: 20px;
    }
    .three {
      border-bottom-right-radius: 20px;
    }
  }

  @media only screen and (max-width: 768px) and (orientation: portrait) {
    /* portrait phones */
    width: 90vw;
    height: 90vh;
    background-color: ${props => props.theme.colors.white};

    .group,
    .odds {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .teams {
      display: flex;
      flex-direction: column;
      .border-bottom {
        border-bottom: 2px solid ${props => props.theme.colors.white};
      }
    }

    .three {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;

export default Board;
