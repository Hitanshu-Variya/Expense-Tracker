import styled from 'styled-components';
import '../../src/index.css';

const ExpenseListHeaderWrapper = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Heading = styled.div`
    font-size: 18px;
    font-weight: 700;
`;

const ViewButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    background-color: #ebebeb;
`;

function ExpenseListHeader() {
    return (
        <>
            <ExpenseListHeaderWrapper>
                <Heading>All Expenses</Heading>
                <ViewButton> <a href='https://www.youtube.com/'>View all</a></ViewButton>
            </ExpenseListHeaderWrapper>
        </>
    );
}

export default ExpenseListHeader; 