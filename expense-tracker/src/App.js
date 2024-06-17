import React from 'react';
import styled from 'styled-components';
import ExpenseDisplay from './Components/ExpenseDisplay';
import ExpenseListHeader from './Components/ExpenseListHeader';

const Wrapper = styled.div`
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppContainer = styled.div`
  width: 20rem;
  height: 35rem;
  border-radius: 25px;
  box-shadow: 0px 0px 40px #7cbed4;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <Wrapper>
        <AppContainer>
          <ExpenseDisplay TotalExpense="1000000"/>
          <ExpenseListHeader />

        </AppContainer>
      </Wrapper>
    </>
  )
}

export default App;
