import ExpenseDisplay from './Components/ExpenseDisplay';
import ExpenseListHeader from './Components/ExpenseListHeader';
import ExpenseList from './Components/ExpenseList';

function App() {
  return (
    <>
      <div id="Wrapper" style={style_wrapper}>
        <div style={AppContent}>
          <div style={AppContainer}>
            <ExpenseDisplay TotalExpense="1000000"/>
            <ExpenseListHeader />
            <ExpenseList />
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
  width: "100%",
  height: "100%",
  borderRadius: "25px",
  boxShadow: "0px 0px 40px #7cbed4",
  padding: "20px 25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  position: "relative"
};

const AppContent = {
  width: "20rem",
  height: "35rem",
  transition: "transform 0.5s ease-in-out"
}

export default App;
