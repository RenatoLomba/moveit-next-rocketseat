import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import {
    ModalContainer,
    ModalOverlay,
    ModalHeader,
    ModalTitle,
    ModalText,
    ModalCloseButton
} from './styles';

const LevelUpModal = () => {
    const { level, handleCloseModalButton } = useContext(ChallengesContext);
    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalHeader>{level}</ModalHeader>
                <ModalTitle>Parabéns</ModalTitle>
                <ModalText>Você alcançou um novo level.</ModalText>
                <ModalCloseButton onClick={handleCloseModalButton} type="button">
                    <img src="/icons/close.svg" alt="Close" />
                </ModalCloseButton>
            </ModalContainer>
        </ModalOverlay>
    )
}
export default LevelUpModal;
