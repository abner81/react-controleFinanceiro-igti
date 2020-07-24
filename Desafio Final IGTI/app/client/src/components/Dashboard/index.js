import React from 'react'
import * as S from './styled'
import Card  from './Card'

export default function index() {
  return (
    <S.DashboardWrapper className="container">
      <Card title="Nº de Lançamentos" value="89" iconNumber/>
      <Card title="Despesas" value="R$ 4.657,40" iconDown/>
      <Card title="Receitas" value="R$ 6.476,90" iconUp />
      <Card title="Saldo" value="R$ 2.4576,89" iconMoney  fontColor='white' background='true' />
    </S.DashboardWrapper>
  );
}
