import one from '../Utils/one.png';
import two from '../Utils/two.png';
import three from '../Utils/three.png';
import four from '../Utils/four.png';
import five from '../Utils/five.png';
import six from '../Utils/six.png';
import seven from '../Utils/seven.png';
import eight from '../Utils/eight.png';
import nine from '../Utils/nine.png';
import zero from '../Utils/zero.png';
import done from '../Utils/done.png';
import remove from '../Utils/remove.png';

function Keypad() {
    return (
        <>
            <div style={style_grid}>
                <img style={style_img} src={one} alt=""/> 
                <img style={style_img} src={two} alt=""/> 
                <img style={style_img} src={three} alt=""/> 
                <img style={style_img} src={four} alt=""/> 
                <img style={style_img} src={five} alt=""/> 
                <img style={style_img} src={six} alt=""/> 
                <img style={style_img} src={seven} alt=""/> 
                <img style={style_img} src={eight} alt=""/> 
                <img style={style_img} src={nine} alt=""/> 
                <img style={style_img} src={remove} alt=""/> 
                <img style={style_img} src={zero} alt=""/> 
                <img style={style_img} src={done} alt=""/> 
            </div>
        </>
    )
};

const style_grid = {
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    rowGap: "7px",
    marginTop: "30px",
}

const style_img = {
    width: "48%",
    height: "90%",
    cursor: "pointer"
}

export default Keypad;