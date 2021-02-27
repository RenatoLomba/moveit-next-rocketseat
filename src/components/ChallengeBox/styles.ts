import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
    height: 100%;
    background-color: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

`;
export const ChallengeNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ChallengeNotActiveStrongText = styled.strong`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
`;
export const ChallengeNotActiveText = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
`;
export const ChallengeNotActiveLevelUpImage = styled.img``;

export const ChallengeActive = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const ChallengeActiveHeader = styled.header`
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
`;
export const ChallengeActiveMain = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ChallengeActiveImage = styled.img``;
export const ChallengeActiveTitle = styled.strong`
    font-size: 2rem;
    font-weight: 600;
    color: var(--title);
    margin: 1.5rem 0 1rem;
`;
export const ChallengeActiveText = styled.p`
    line-height: 1.5;
`;
export const ChallengeActiveFooter = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

interface ChallengeButton {
    backgroundColor: string;
}
export const ChallengeButton = styled.button<ChallengeButton>`
    height:3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'var(--white)'};
    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.8);
    }
`;
