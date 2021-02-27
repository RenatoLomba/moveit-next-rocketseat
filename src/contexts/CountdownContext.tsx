import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextProps {
    children: ReactNode;
}

interface CountdownContextData {
    hasFinished: boolean;
    isActive: boolean;
    resetCountdown: () => void;
    startCountdown: () => void;
    minutes: number;
    seconds: number;
}

export const CountdownContext = createContext({} as CountdownContextData);

const timeSeconds = 25 * 60;
let countdownTimeout: NodeJS.Timeout;

export const CountdownProvider = ({ children }: CountdownContextProps) => {
    const { newChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(timeSeconds);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const startCountdown = () => {
        setIsActive(true);
    };
    const resetCountdown = () => {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(timeSeconds);
    };

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            newChallenge();
        }
    }, [isActive, time]);

    return (
        <CountdownContext.Provider value={{
            hasFinished,
            isActive,
            resetCountdown,
            startCountdown,
            minutes,
            seconds,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}
