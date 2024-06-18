import { useState } from 'react';
import ExpenseDisplay from './Components/ExpenseDisplay';
import ExpenseListHeader from './Components/ExpenseListHeader';
import ExpenseList from './Components/ExpenseList';
import AddListHeader from './Components/AddListHeader';
import AmountInputWrapper from './Components/AmountInputWrapper';
import TextInput from './Components/TextInput';
import success_img from './Utils/Success.gif';

function App() {
  const [transform, HandleTransform] = useState("translateX(0%)");
  const [amount, Setamount] = useState("");
  const [title, Settitle] = useState("");
  const [description, Setdescription] = useState("");
  const [listdata, Setlistdata] = useState([]);

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

  const HandleAmountChange = (e) => {
    Setamount(e.target.value);
  }

  const HandleTitleChange = (e) => {
    Settitle(e.target.value);
  };

  const HandleDescriptionChange = (e) => {
    Setdescription(e.target.value);
  };

  const HandleListAddButton = () => {

    let NewList = {
      title: title,
      description: description,
      amount: amount
    }

    if(!CheckValidity(NewList)) {
      ShowStatus("Error-Message");
      return;
    };

    Setlistdata([...listdata, NewList]);
    ShowStatus("Success");
  }

  return (
    <>
      <div style={style_wrapper}>
        <div style={AppContainer}>
          <div style={AppContent}>
            <ExpenseDisplay TotalExpense={CalulateTotalExpense(listdata)}/>
            <ExpenseListHeader OnAddExpense={HandleAddExpense}/>
            <ExpenseList listdata={listdata}/>
          </div>

          <div style={NewListAdditionContent}>
            <AddListHeader OnBackClick={HandleBackButton}/>
            <AmountInputWrapper value={amount} onChange={HandleAmountChange}/>
            <TextInput text="Expense made for" value={title} onChange={HandleTitleChange}/>
            <TextInput text="Description" value={description} onChange={HandleDescriptionChange}/>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px"}}> 
              <button style={SubmitButton} onClick={HandleListAddButton}> List Expense </button> 
              <img className="Success" src={success_img} alt="success_img"/>
              <p className="Error-Message"> *Data not registered! <br/>*It's compulsory to fill "Amount" and "Title" fields! </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function CalulateTotalExpense(listdata) {
  let TotalExpense = 0;

  listdata.map((object) => {TotalExpense += +object.amount});
  return TotalExpense;
};  

function CheckValidity(NewList) {
  if(NewList.amount === "" || NewList.title === "") {
    return false;
  }
  
  return true;
}

function ShowStatus(classTitle) {
  const element = document.getElementsByClassName(classTitle);
  element[0].style.opacity = "1";

    setTimeout(() => {
      element[0].style.opacity = "0";
    }, 2000)
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
  height: "37.5rem",
  borderRadius: "25px",
  boxShadow: "0px 0px 40px #7cbed4",
  overflow: "hidden"
};

const SubmitButton = {
  padding: "5px 10px",
  fontWeight: "600",
  border: "none",
  borderRadius: "20px",
  backgroundColor: "Blue",
  color: "white",
  cursor: "pointer"
}

export default App;