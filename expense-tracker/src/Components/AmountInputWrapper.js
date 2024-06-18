function AmountInputWrapper({ value, onChange }) {
    return (
        <>
            <p style={amount_text}>Amount</p>
            <div style={style_inputContainer}>
                <span style={currencySymbol} >&#8377;</span> 
                <input className="no-spinner" 
                        style={InputBox} 
                        type="number" 
                        value={value}
                        onChange={onChange}
                        onFocus={HandleFocus}
                />
                <span style={currencyName} > INR </span>
            </div>
            <hr style={style_line} />
        </>
    )
};

const HandleFocus = (e) => {
    e.target.style.outline = 'none';
    e.target.style.fontWeight = '700';
    e.target.style.fontSize = '40px';
};

const amount_text = {
    marginTop: "20px",
    marginLeft: "30px",
    marginBottom: "10px",
    fontWeight: "600",
    fontSize: "15px",
    color: "#aaa9a9"
};

const style_inputContainer = {
    display: "flex",
    height: "40px",
    marginLeft: "30px",
    marginRight: "30px",
    position: "relative",
};

const currencySymbol = {
    position: "absolute",
    bottom: "-4px",
    fontSize: "25px",
    fontWeight: "600",
}

const InputBox = {
    marginLeft: "30px",
    marginRight: "30px",
    height: "100%",
    outline: "none",
    border: "none",
    WebkitAppearance: "none",
    backgroundColor: "transparent"
};

const currencyName = {
    position: "absolute",
    bottom: "2px",
    right: "-10px",
    fontSize: "15px", 
    fontWeight: "500",
    color: "#aaa9a9"
} 

const style_line = {
    marginTop: "20px", 
    height: "3px", 
    backgroundColor: "black", 
    border: "none"
}

export default AmountInputWrapper;