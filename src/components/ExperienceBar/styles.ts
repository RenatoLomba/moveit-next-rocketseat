import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
`;
export const ExpText = styled.span`
    font-size: 1rem;
`;
export const ExpBar = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
`;

export const ExpProgress = styled.div`
    height: 4px;
    border-radius: 4px;
    background-color: var(--green);
`;

export const CurrentExp = styled.div`
    font-size: 1rem;
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
`;
