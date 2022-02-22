import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
  } from '@chakra-ui/react'

type AlertType = {
    status : "success" | "error";
    title : string;
    desc : string;
}

const CustomAlert = ({ status, title, desc } : AlertType) => {
    return (
    <Alert status={status}>
        <AlertIcon />
        <AlertTitle mr={2}>{title}</AlertTitle>
        <AlertDescription>{desc}</AlertDescription>
        <CloseButton position='absolute' right='8px' top='8px' />
    </Alert>
    )
}

export default CustomAlert;