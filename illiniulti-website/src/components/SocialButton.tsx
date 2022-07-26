import { Avatar, Box, IconButton } from "@mui/material"


interface SocialButtonProps{
    image: string,
    link: string
}
function SocialButton({image, link}: SocialButtonProps) {

    return (
        <Box>

        
        <IconButton href={link} target="_blank" rel="noreferrer">
            <Avatar src={image}/>
        </IconButton>
        </Box>
        
    )
}

export default SocialButton