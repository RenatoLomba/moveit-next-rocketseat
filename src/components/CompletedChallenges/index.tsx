import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import {
    CompletedChallengesContainer,
    CompletedChallengesFirstText,
    CompletedChallengesLastText
} from './styles';

const CompletedChallenges = () => {
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <CompletedChallengesContainer>
            <CompletedChallengesFirstText>Desafios completos</CompletedChallengesFirstText>
            <CompletedChallengesLastText>{challengesCompleted}</CompletedChallengesLastText>
        </CompletedChallengesContainer>
    )
}
export default CompletedChallenges;
