function TextInput({text, value, onChange}) {
    return (
        <>
            <div>
                <p style={style_ExpenseTitle}>{text}</p>
                <input style={InputBox} 
                    type="text" 
                    onFocus={HandleFocus}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
};

const HandleFocus = (e) => {
    e.target.style.outline = 'none';
    e.target.style.fontWeight = '700';
    e.target.style.fontSize = '15px';
};

const style_ExpenseTitle = {
    marginTop: "30px",
    marginBottom: "5px",
    fontWeight: "600",
    fontSize: "15px",
    color: "#aaa9a9"
};

const InputBox = {
    height: "100%",
    width: "11rem",
    outline: "none",
    border: "none",
    borderBottom: "2px solid #9c9cea",
    backgroundColor: "transparent"
};

export default TextInput;