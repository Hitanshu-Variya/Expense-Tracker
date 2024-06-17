function ExpenseDisplay(props) {
    return (
        <>
          <div style={ExpenseDisplayWrapper}>
            <span style={currencySymbol} >&#8377;</span> 
              {props.TotalExpense}
            <span style={currencyName} > Indian Rupees </span>
          </div>
        </>
    );
};

const ExpenseDisplayWrapper = {
  backgroundColor: "black",
  color: "white",
  borderRadius: "30px",
  width: "100%",
  height: "100px",
  textAlign: "start",
  lineHeight: "100px",
  fontSize: "35px",
  fontWeight: "600",
  paddingLeft: "50px",
  position: "relative",
  boxShadow: "5px 5px 10px gray"
}

const currencySymbol = {
  position: "absolute", 
  left: "25px", 
  top: "5px", 
  fontSize: "25px"
}

const currencyName = {
  position: "absolute", 
  right: "20px", 
  top: "28px", 
  fontSize: "15px", 
  color: "gray"
} 

export default ExpenseDisplay;