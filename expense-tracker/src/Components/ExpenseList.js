import styled from "styled-components";
import ListContainer from "./ListContainer";

function ExpenseList({listdata}) {
    const RenderList = listdata.map((object) => {
        return (<ListContainer key={object.id} title={object.title} description={object.description} amount={object.amount}/>);
    })

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