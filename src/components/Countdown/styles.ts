import styled from 'styled-components';

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);
`;

export const CountdownNumberArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--white);
    box-shadow: 0 0 60px rgba(0,0,0,0.05);
    font-size: 8.5rem;
    text-align: center;

    & > span:first-child {
        border-right: 3px solid #f0f1f3;
    }
`;

export const CountdownNumber = styled.span`
    flex: 1;
`;
export const CountdownDotSeparator = styled.span`
    font-size: 6.25rem;
    margin: 0 0.5rem;
`;

export const StartCountdownButton = styled.button`
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    background-color: var(--blue);
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 600;
    transition: background-color 0.2s;

    &:not(:disabled):hover {
        background-color: var(--blue-dark);
    }

    &:disabled {
        background-color: var(--white);
        color: var(--text);
        cursor: not-allowed;
    }
`;
export const StopCountdownButton = styled(StartCountdownButton)`
    background-color: var(--white);
    color: var(--title);

    &:hover {
        background-color: var(--red);
        color: var(--white);
    }
`
