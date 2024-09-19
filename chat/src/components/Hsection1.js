import { Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";



export default function Hsection1 () { 
    return( 
        <div id="Hsection1"> 
             <Typography variant="h2" className="h2"> Discover Peace in your <br /> Safe Space</Typography>
             <img src={require("../public/s1bg.png")} alt="" />
             <Typography variant="h5" className="h5">Provide accessible Mental Health <br />support and resources</Typography>
             <div className="list">
                <Typography className="li"><CheckCircleIcon></CheckCircleIcon>Professional help and peer support</Typography>
                <Typography className="li"><CheckCircleIcon></CheckCircleIcon>Self- assesment and personalize guidance</Typography>
                <Typography className="li"><CheckCircleIcon></CheckCircleIcon>Safe space for community interaction and sharing</Typography>
             </div>

             <button className="chatn"><Link to='/chat' ><div className='chat-button'>chat</div></Link> <ArrowForwardIcon></ArrowForwardIcon></button>

        </div>
    );
}