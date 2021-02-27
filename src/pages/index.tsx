import React from "react";
import App from "../components/App";
import Head from 'next/head';
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from 'next';
import { NextApiRequestCookies } from "next/dist/next-server/server/api-utils";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  // props => RETORNO DAS INFORMAÇÕES DE CONSTRUÇÃO DA INTERFACE

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <CountdownProvider>
        <App />
      </CountdownProvider>
    </ChallengesProvider>
  )
}

// FUNÇÃO ONDE FICARÁ A LÓGICA PARA BUSCAR OS DADOS EXTERNOS (EX: API)
// A PARTIR DESSES DADOS, SERÁ CONSTRUÍDA A INTERFACE DE USUÁRIO
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // EX: const request = await fetch('url', parameters)...
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;


  // RETORNA AS INFORMAÇÕES NECESSÁRIAS PARA A CONSTRUÇÃO DA INTERFACE
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
};
