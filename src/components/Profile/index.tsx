import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import {
    ProfileContainer,
    ProfileImage,
    ProfileInfo,
    ProfileName,
    ProfileLevel,
    LevelIcon
} from './styles';

const Profile = () => {
    const { level } = useContext(ChallengesContext);
    return (
        <ProfileContainer>
            <ProfileImage src="https://github.com/RenatoLomba.png" alt="Renato Lomba" />
            <ProfileInfo>
                <ProfileName>Renato Lomba</ProfileName>
                <ProfileLevel>
                    <LevelIcon src="icons/level.svg" alt="Level" />
                    {`Level ${level}`}
                </ProfileLevel>
            </ProfileInfo>
        </ProfileContainer>
    );
};
export default Profile;
