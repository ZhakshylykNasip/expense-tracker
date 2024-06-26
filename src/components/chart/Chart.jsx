import React from "react";
import { ChartBar } from "./ChartBar";
import styled from "styled-components";

export const Chart = ({ expenses }) => {
  const maximumPrice = 2000;

  const month = [
    {
      label: "Ян",
      currentPrice: 0,
    },
    {
      label: "Фев",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апр",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Авг",
      currentPrice: 0,
    },
    {
      label: "Сент",
      currentPrice: 0,
    },
    {
      label: "Окт",
      currentPrice: 0,
    },
    {
      label: "Ноя",
      currentPrice: 0,
    },
    {
      label: "Дек",
      currentPrice: 0,
    },
  ];

  expenses.forEach((item) => {
    const filteredPrice = item.date.getMonth();
    month[filteredPrice].currentPrice += item.amount;
  });

  return (
    <StyledChart>
      {month.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPrice={item.currentPrice}
          maximumPrice={maximumPrice}
        />
      ))}
    </StyledChart>
  );
};

const StyledChart = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #f8dfff;
  height: 151px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
`;
