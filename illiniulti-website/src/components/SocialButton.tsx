import { Avatar, Button, IconButton } from "@mui/material"


interface SocialButtonProps{
    image: string,
    link: string
}
function SocialButton({image, link}: SocialButtonProps) {

    return (
        <IconButton href={link} target="_blank" rel="noreferrer">
            <Avatar src={image}/>
        </IconButton>
        
    )
}

export default SocialButton