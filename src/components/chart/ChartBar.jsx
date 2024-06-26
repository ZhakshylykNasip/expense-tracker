import React from "react";
import styled from "styled-components";

export const ChartBar = ({ label, currentPrice, maximumPrice }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;

  return (
    <StyledChartBar>
      <ChartBarInner>
        <ChartBarFill height={fillHeight}></ChartBarFill>
      </ChartBarInner>
      <ChartBarLaber>{label}</ChartBarLaber>
    </StyledChartBar>
  );
};

const StyledChartBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ChartBarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid #363636;
  background: #a892ee;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;

const ChartBarFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
  height: ${(props) => props.height}%;
`;

const ChartBarLaber = styled.p`
  font-size: 0.6rem;
  font-weight: bold;
`;
