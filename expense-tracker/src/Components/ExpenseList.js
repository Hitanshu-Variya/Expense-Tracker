import styled from "styled-components";
import ListContainer from "./ListContainer";
import ListData from "../ListData";

const RenderList = ListData.map((object) => {
    return (<ListContainer key={object.id} title={object.title} description={object.description} amount={object.amount}/>);
})

function ExpenseList() {
    return (
        <UnorderedList> {RenderList} </UnorderedList>
    );
}

const UnorderedList = styled.div`
    text-decoration: none;
    border-radius: 20px;
    width: 100%;
    overflow: scroll;
    scrollbar-width: none;
    
    div:last-child {
        margin-bottom: 0px;
    }
`;

export default ExpenseList;