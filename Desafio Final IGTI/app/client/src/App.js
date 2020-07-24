import React, { useState } from "react";

import Dashboard from "./components/Dashboard/index";
import Header from "./components/Header";
import ListTransaction from "./components/ListTransactions";
import CalendarFilter from "./components/Calendar_Filter";

import PERIOD from "./helpers/period";

import "./index.css";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import styled from "styled-components";

export default function App() {
  const [periodState, setPeriodState] = useState(PERIOD[0]);

  const handleState = (event) => {
    setPeriodState(event);
  };

  const handleStateButton = (event) => {
    const a = PERIOD.findIndex((period) => period === periodState);

    const nextType = a + 1;
    const previousType = a - 1;

    if (event === "previous") setPeriodState(PERIOD[previousType]);
    if (event === "next") setPeriodState(PERIOD[nextType]);
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <Dashboard />
      <CalendarFilter
        changeState={handleState}
        changeButton={handleStateButton}
        valueState={periodState}
      />
      <Main>
        <ListTransaction />
        <ListTransaction />
        <ListTransaction />
        <ListTransaction />
        <ListTransaction />
        <ListTransaction />
      </Main>
    </>
  );
}

const Main = styled.main`
  margin-top: 40px;
`;
