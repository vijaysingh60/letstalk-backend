import Fcards from "./Fcards";
import { Typography } from "@mui/material";
import f1 from "../public/f1.png";
import f2 from "../public/f2.png";
import f3 from "../public/f3.png";


export default function Features(){
    return(
        <section id="Features">

            <Typography variant="h2" className="h2">Our Features</Typography>
            <div className="fcards">
                <Fcards src={f1} content={`Appointment Booking System:
                        allow users to schedule appointments with mental health professionals directly through the website, with options for virtual or in-person sessions.`}
                        
                        

                        >

                </Fcards>
                <Fcards src={f2} content={` Live Chat and Messaging Support:
                    Provide users with real-time access to professional counselors or peer support through a secure live chat feature.
                    `}

                   

                    >
                </Fcards>
                <Fcards src={f3} content={`Confidentiality and Privacy Controls: Ensure that all user data is protected with robust    privacy policies and secure data encryption to maintain confidentiality.`}
                    id = "fbc"
                ></Fcards>
                <Fcards src={f1} content={`Appointment Booking System:
                    allow users to schedule appointments with mental health professionals directly through the website, with options for virtual or in-person sessions.`}
                    
                    

                    >
                </Fcards>
            </div>

        </section>
    );
}