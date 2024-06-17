import '../../src/index.css';

function ExpenseListHeader({OnAddExpense}) {

    const HandleButtonClick = () => {
        if(typeof(OnAddExpense) === "function") {
            OnAddExpense();
        }
    };

    return (
        <>
            <div style={ExpenseListHeaderWrapper}>
                <div style={Heading}>All Expenses</div>
                <button style={NewListAddButton} onClick={HandleButtonClick}> Add Expense </button>
            </div>
        </>
    );
}

const ExpenseListHeaderWrapper = {
    marginTop: "30px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
}

const Heading = {
    fontSize: "18px",
    fontWeight: "700"
}

const NewListAddButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    padding: "0px 10px",
    border: "none",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
    backgroundColor: "#c7e3f7",
    cursor: "pointer",
}

export default ExpenseListHeader; 