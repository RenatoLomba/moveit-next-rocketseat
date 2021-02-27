import React from 'react';
import ChallengeBox from '../ChallengeBox';
import CompletedChallenges from '../CompletedChallenges';
import Countdown from '../Countdown';
import ExperienceBar from '../ExperienceBar';
import Profile from '../Profile';
import {
  Container,
  Section
} from './styles';

const App = () => (
  <Container>
    <ExperienceBar />
    <Section>
      <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </div>
      <div>
        <ChallengeBox />
      </div>
    </Section>
  </Container>
)

export default App;
