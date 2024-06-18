import BackButtonImage from "../Utils/Back_Button.png";

function AddListHeader({OnBackClick}) {

    const HandleClick = () => {
        if(typeof OnBackClick === "function") {
            OnBackClick();
        }
    };

    return (
        <>
            <div style={style_Header}>
                <button style={style_BackButton} onClick={HandleClick}> <img style={style_Img} src={BackButtonImage} alt="Back Button" /> </button>
                <p style={style_HeaderText}> Add Amount </p>
            </div>
        </>
    )
};

const style_Header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start"
};

const style_BackButton = {
    width: "30px",
    height: "30px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer"
};

const style_Img = {
    width: "100%",
    height: "100%"
};

const style_HeaderText = {
    fontWeight: "700",
    fontSize: "20px",
    marginLeft: "20px"
};

export default AddListHeader;