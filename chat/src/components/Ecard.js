import { Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Ecard({src, name, pos, content}){
    return (<>
        <div className="ecard">
            <img src={src} alt="" className="Eimg"/>
            <Typography variant="h4" className="Ename" >{name}</Typography>
            <Typography className="Epos">{pos}</Typography>
            <Typography className="Econtent">{content}</Typography>

            <button className="chatn">Read More <ArrowForwardIcon></ArrowForwardIcon></button>

        </div>
    </>);
}