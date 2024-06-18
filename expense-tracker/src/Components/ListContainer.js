import { useState } from "react";
import styled from "styled-components";
import Money_Image from "../Utils/money.png";
import delete_Image from "../Utils/trash.png";

function ListContainer(props) {
    const [image, setimage] = useState(Money_Image);

    return (
        <>
            <ListWrapper>
                <img style={style_Image} 
                    src={image} alt="Utility_img" 
                    onMouseEnter={() => setimage(delete_Image)} 
                    onMouseLeave={() => setimage(Money_Image)} 
                    onClick={() => {props.button(props.id)}}
                />

                <div style={style_Text_Container}>
                    <p style={style_title}>{props.title}</p> 
                    <p style={style_description}>{props.description}</p>
                </div>

                <span style={style_Price}> &#8377; {props.amount} </span>
            </ListWrapper>
        </>
    )
}

const ListWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #addded;
    word-wrap: break-word;
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 5px 0px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px #c0eaf9;
`;

const style_Image = {
    width: "60px", 
    marginLeft: "5px", 
    backgroundColor: "#d8f4fe", 
    borderRadius: "18px", 
    padding: "5px"
};

const style_Text_Container = {
    marginLeft: "15px", 
    height: "100%", 
    width: "110px",
    display: "flex", 
    flexDirection: "column", 
    flexGrow: "1",
    justifyContent: "start",
    paddingTop: "5px",
};

const style_title = {
    fontSize: "16px",
    fontWeight: "700",
    wordWrap: "break-word"
};

const style_description = {
    fontSize: "10px",
    fontWeight: "500",
    color: "gray",
    wordWrap: "break-word"
};

const style_Price = {
    fontSize: "14px",
    fontWeight: "700",
    display: "flex",
    justifyContent: "end",
    flexGrow: "1", 
    marginRight: "12px",
    marginLeft: "10px"
};

export default ListContainer;

