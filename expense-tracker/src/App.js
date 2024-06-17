import { useState } from 'react';
import ExpenseDisplay from './Components/ExpenseDisplay';
import ExpenseListHeader from './Components/ExpenseListHeader';
import ExpenseList from './Components/ExpenseList';
import AddListHeader from './Components/AddListHeader';

function App() {
  const [transform, HandleTransform] = useState("translateX(0%)");

  const AppContent = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100%",
    padding: "20px 25px",
    transform: transform,
    transition: "transform 0.5s ease-in-out"
  }

  const NewListAdditionContent = {
    padding: "20px 25px",
    transform: transform,
    transition: "transform 0.5s ease-in-out"
  }

  const HandleAddExpense = () => {
    HandleTransform("translateX(-100%)");
  };  

  const HandleBackButton = () => {
    HandleTransform("translateX(0%)");
  };

  return (
    <>
      <div style={style_wrapper}>
        <div style={AppContainer}>
          <div style={AppContent}>
            <ExpenseDisplay TotalExpense="1000000"/>
            <ExpenseListHeader OnAddExpense={HandleAddExpense}/>
            <ExpenseList />
          </div>

          <div style={NewListAdditionContent}>
            <AddListHeader OnBackClick={HandleBackButton}/>
          </div>
        </div>
      </div>
    </>
  )
}

const style_wrapper = {
  height: "100vh",
  backgroundColor: "aliceblue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const AppContainer = {
  display: "grid",
  gridTemplateColumns: "22rem 22rem",
  width: "22rem",
  height: "35rem",
  borderRadius: "25px",
  boxShadow: "0px 0px 40px #7cbed4",
  overflow: "hidden"
};

export default App;