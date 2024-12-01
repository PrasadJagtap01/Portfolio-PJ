import { Box, Typography } from "@mui/material";
import ExperienceCard from "../commonComponents/experienceCard";
import workLogo from "../assets/workLogo.svg";
import internLogo from "../assets/internLogo.svg";


function ExperienceComponent() {
    return (
        <Box sx={{ 
        }}>
            <Typography sx={{fontSize:"2.5rem",marginBottom:"2rem"}}>Work Experience</Typography>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} gap={"20px"}>
            <ExperienceCard title={"Thinkitive Technology"} desc={"This is description"} logo={workLogo} />
            <ExperienceCard title={"Thinkitive Technology"} desc={"This is description"} logo={internLogo} />

            </Box>
        </Box>
    )
    
}
export default ExperienceComponent;