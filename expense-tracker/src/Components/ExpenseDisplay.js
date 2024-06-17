import styled from 'styled-components';

const ExpenseDisplayWrapper = styled.div`
  background-color: black;
  color: white;
  border-radius: 30px;
  width: 100%;
  height: 100px;
  text-align: start;
  line-height: 100px;
  font-size: 35px;
  font-weight: 600;
  padding-left: 50px;
  position: relative;
  box-shadow: 5px 5px 10px gray;
`;

function ExpenseDisplay(props) {
    return (
        <>
          <ExpenseDisplayWrapper>
            <span style={{position: "absolute", left: "25px", top: "5px", fontSize: "25px"}} >&#8377;</span> 
              {props.TotalExpense}
            <span style={{position: "absolute", right: "20px", top: "28px", fontSize: "15px", color: "gray"}} > Indian Rupees </span>
          </ExpenseDisplayWrapper>
        </>
    );
};

export default ExpenseDisplay;