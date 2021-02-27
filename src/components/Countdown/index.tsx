import React, { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import {
    CountdownContainer,
    CountdownNumberArea,
    CountdownNumber,
    CountdownDotSeparator,
    StartCountdownButton,
    StopCountdownButton
} from './styles';

const Countdown = () => {
    const
        {
            hasFinished,
            isActive,
            minutes,
            seconds,
            resetCountdown,
            startCountdown
        } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <CountdownContainer>
                <CountdownNumberArea>
                    <CountdownNumber>{minuteLeft}</CountdownNumber>
                    <CountdownNumber>{minuteRight}</CountdownNumber>
                </CountdownNumberArea>
                <CountdownDotSeparator>:</CountdownDotSeparator>
                <CountdownNumberArea>
                    <CountdownNumber>{secondLeft}</CountdownNumber>
                    <CountdownNumber>{secondRight}</CountdownNumber>
                </CountdownNumberArea>
            </CountdownContainer>

            {hasFinished ?
                <StartCountdownButton disabled>
                    Ciclo encerrado
                </StartCountdownButton>
                :
                <>
                    {isActive ?
                        <StopCountdownButton onClick={resetCountdown} type="button">
                            Abandonar ciclo
                        </StopCountdownButton>
                        :
                        <StartCountdownButton onClick={startCountdown} type="button">
                            Iniciar ciclo
                        </StartCountdownButton>
                    }
                </>
            }

        </div>
    )
}
export default Countdown;
