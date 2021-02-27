import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ProfileImage = styled.img`
    height: 5.5rem;
    width: 5.5rem;
    border-radius: 50%;
`;

export const ProfileInfo = styled.div`
    margin-left: 1.5rem;
`;

export const ProfileName = styled.strong`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--title);
`;

export const ProfileLevel = styled.p`
    font-size: 1rem;
    margin-top: 0.5rem;
`;

export const LevelIcon = styled.img`
    margin-right: 0.5rem;
`;
