import React, { useState } from "react";
import styled from "styled-components";
import AlternativeDrop from "../../components/AlternativeDrop";
import OverviewDrop from "../../components/OverviewDrop";
import GridLayout from "../../components/GridLayout";

const StyledMediaPage = styled.div`
  margin-top: 65px;
  width: 100vw;
  height: 100vh;

  position: relative;
`;

const MediaPage = () => {
  const [isChanged, setChanged] = useState(true);

  return (
    <StyledMediaPage>
      <OverviewDrop changeMethod={() => setChanged(!isChanged)} />
      <AlternativeDrop hideDrop={isChanged} />

      <GridLayout padding="0 0 0 2.5%">
        {/* <AlternativeDrop hideDrop={isChanged} /> */}
        <div>
          <h1>1. Introduktion</h1>
        </div>
      </GridLayout>
    </StyledMediaPage>
  );
};

export default MediaPage;
