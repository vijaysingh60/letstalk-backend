import { Typography } from "@mui/material";

export default function Fcards( {src, content}){
    return (<div className="fcard">
            <img src={src} alt="" className="fimg"/>
            <Typography className="fc">{content}</Typography>
    </div>);
}