import { Typography } from "@mui/material";
import Ecard from "./Ecard";

export default function Experts() {
    return (<div id="experts">
            <Typography className="secH">Our Experts</Typography>
            <Typography variant="h3" className="mainH">Meet Our <span>Psychologists</span></Typography>

            <div className="ecards">
                <Ecard src={require("../public/psy1.jpg")} name="Dr. B. F. Skinner" pos={"Neurologists"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Ecard>
                <Ecard className="Eactive" src={require("../public/psy2.jpg")} name="Dr. B. F. Skinner" pos={"Neurologists"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Ecard>
                <Ecard src={require("../public/psy3.jpg")} name="Dr. B. F. Skinner" pos={"Neurologists"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Ecard>
            </div>
    </div>);
}