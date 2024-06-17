import '../../src/index.css';

const TransformPageLeft = () => {
    const Wrapper_div = document.getElementById("Wrapper");
    console.log(Wrapper_div);
    // Wrapper_div.style.transfom = "TranslateX(-120%)";
}

function ExpenseListHeader() {
    return (
        <>
            <div style={ExpenseListHeaderWrapper}>
                <div style={Heading}>All Expenses</div>
                <button style={NewListAddButton} onClick={TransformPageLeft()}> Add Expense </button>
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