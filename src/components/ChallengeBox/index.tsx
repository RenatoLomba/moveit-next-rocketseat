import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import {
    ChallengeActive,
    ChallengeBoxContainer,
    ChallengeNotActive,
    ChallengeNotActiveLevelUpImage,
    ChallengeNotActiveStrongText,
    ChallengeNotActiveText,
    ChallengeButton,
    ChallengeActiveFooter,
    ChallengeActiveHeader,
    ChallengeActiveMain,
    ChallengeActiveImage,
    ChallengeActiveTitle,
    ChallengeActiveText
} from './styles';

const ChallengeBox = () => {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    const handleChallengeSucceeded = () => {
        completeChallenge();
        resetCountdown();
    };
    const handleChallengeFailed = () => {
        resetChallenge();
        resetCountdown();
    };

    return (
        <ChallengeBoxContainer>
            {activeChallenge ?
                <ChallengeActive>
                    <ChallengeActiveHeader>Ganhe {activeChallenge.amount} xp</ChallengeActiveHeader>
                    <ChallengeActiveMain>
                        <ChallengeActiveImage src={`icons/${activeChallenge.type}.svg`} />
                        <ChallengeActiveTitle>Novo desafio</ChallengeActiveTitle>
                        <ChallengeActiveText>{activeChallenge.description}</ChallengeActiveText>
                    </ChallengeActiveMain>
                    <ChallengeActiveFooter>
                        <ChallengeButton
                            backgroundColor="var(--red)"
                            type="button"
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </ChallengeButton>
                        <ChallengeButton
                            backgroundColor="var(--green)"
                            type="button"
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </ChallengeButton>
                    </ChallengeActiveFooter>
                </ChallengeActive>
                :
                <ChallengeNotActive>
                    <ChallengeNotActiveStrongText>Inicie um ciclo para receber desafios</ChallengeNotActiveStrongText>
                    <ChallengeNotActiveText>
                        <ChallengeNotActiveLevelUpImage src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios.
                    </ChallengeNotActiveText>
                </ChallengeNotActive>
            }
        </ChallengeBoxContainer>
    )
}
export default ChallengeBox;
