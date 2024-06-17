import BackButtonImage from "../Utils/Back_Button.png";

function AddListHeader({OnBackClick}) {

    const HandleClick = () => {
        if(typeof OnBackClick === "function") {
            OnBackClick();
        }
    };

    return (
        <>
            <div>
                <button style={style_BackButton} onClick={HandleClick}> <img style={style_Img} src={BackButtonImage} alt="Back Button" /> </button>
            </div>
        </>
    )
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

export default AddListHeader;