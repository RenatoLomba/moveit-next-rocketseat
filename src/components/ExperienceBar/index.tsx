import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import {
    Header,
    ExpText,
    ExpBar,
    ExpProgress,
    CurrentExp
} from './styles';

const ExperienceBar = () => {
    const { currentExperience, expToNextLevel } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExperience * 100) / expToNextLevel;

    return (
        <Header>
            <ExpText>0 xp</ExpText>
            <ExpBar>
                <ExpProgress style={{ width: `${percentToNextLevel}%` }} />

                {currentExperience !== 0 && <CurrentExp style={{ left: `${percentToNextLevel}%` }}>{currentExperience}px</CurrentExp>}
            </ExpBar>
            <ExpText>{expToNextLevel} xp</ExpText>
        </Header>
    );
};
export default ExperienceBar;
