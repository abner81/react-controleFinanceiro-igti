import React, { useState, useEffect } from "react";

import Dashboard from "./components/Dashboard/index";
import Header from "./components/Header";
import ListTransaction from "./components/ListTransactions";
import CalendarFilter from "./components/Calendar_Filter";

import * as api from "./api/apiService";
import PERIOD from "./helpers/period";

import "./index.css";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import styled from "styled-components";
import Spinner from "./components/Spinner/index";

export default function App() {
  const [periodState, setPeriodState] = useState(PERIOD[0]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    try {
      api.getAllTransactions(periodState).then((e) => setTransactions(e));
    } catch (error) {
      console.log("Erro ao se comunicar com a api");
    }
  }, []);

  useEffect(() => {
    try {
      api.getAllTransactions(periodState).then((e) => setTransactions(e));
    } catch (error) {
      console.log("Erro ao se comunicar com a api");
    }
  }, [periodState]);

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
      {transactions.length === 0 && <Spinner />}
      {transactions.length > 0 && (
        <>
          <Header />
          <Dashboard state={transactions} />
          <CalendarFilter
            changeState={handleState}
            changeButton={handleStateButton}
            valueState={periodState}
          />
          <Main>
            {transactions.map((transaction, index) => {
              const {
                category,
                description,
                value,
                type,
                day,
                yearMonthDay,
                _id,
              } = transaction;

              return (
                <ListTransaction
                  key={index}
                  category={category}
                  description={description}
                  value={value}
                  type={type}
                  day={day}
                  index={index}
                  date={yearMonthDay}
                  id={_id}
                />
              );
            })}
          </Main>
        </>
      )}
    </>
  );
}

const Main = styled.main`
  margin-top: 40px;
`;
