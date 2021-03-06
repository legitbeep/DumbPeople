import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useColorModeValue,
    Heading
  } from '@chakra-ui/react'

type AlertType = {
    title : string;
    desc : string;
    isOpen : boolean;
    setIsOpen: (a:boolean) => void;
}

const CustomAlert = ({ title, desc, isOpen, setIsOpen } : AlertType) => {
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()
    const bg = useColorModeValue("white","rgb(14, 16, 21)");

    return (<>
        <AlertDialog
          isOpen={isOpen}
          //@ts-ignore
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay >
            <AlertDialogContent bg={bg} w="40vw" minW="350px">
              <AlertDialogHeader >
                <Heading fontSize="md">
                  {title}
                </Heading>
              </AlertDialogHeader>
  
              <AlertDialogBody>
                {desc}
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button variant="primary" onClick={onClose} ml={3} minW="150px">
                  OK
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default CustomAlert;