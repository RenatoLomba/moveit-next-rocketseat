import React, { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import LevelUpModal from '../components/LevelUpModal';

interface ChallengesContextProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

interface ChallengeData {
    type: 'type' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: ChallengeData;
    expToNextLevel: number;
    levelUp: () => void;
    newChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    handleCloseModalButton: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({ children, ...rest }: ChallengesContextProps) => {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const levelUp = () => {
        setLevel(level + 1);
        setShowModal(true);
    };

    const handleCloseModalButton = () => setShowModal(false);

    const expToNextLevel = Math.pow((level + 1) * 5, 2);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted]);

    const newChallenge = () => {
        const randomNewChallenge = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomNewChallenge];
        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio disponível 🧚', {
                body: `Valendo ${challenge.amount} xp`
            });
        }
    };
    const resetChallenge = () => setActiveChallenge(null);
    const completeChallenge = () => {
        if (!activeChallenge) return;
        const { amount } = activeChallenge;
        let finalExp = currentExperience + amount;
        if (finalExp >= expToNextLevel) {
            finalExp = finalExp - expToNextLevel;
            levelUp();
        }
        setCurrentExperience(finalExp);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    };

    return (
        <ChallengesContext.Provider
            value={
                {
                    level,
                    currentExperience,
                    challengesCompleted,
                    activeChallenge,
                    expToNextLevel,
                    levelUp,
                    newChallenge,
                    resetChallenge,
                    completeChallenge,
                    handleCloseModalButton
                }
            }
        >
            { children}
            {showModal && <LevelUpModal />}
        </ChallengesContext.Provider >
    )
}
