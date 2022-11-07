import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";

export default function AddTodo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [task,setTask] = useState('')
  const [status,setStatus] = useState(false)
  

  function addTodo() {
    let token = JSON.parse(localStorage.getItem("token"))
    if(token && task){
        let addData = {
            token: token,
            task: task,
            status: status
        }
        axios.post('http://localhost:5000/todo/create',addData)
        .then((e) => console.log(e))
        
    }else{
        alert('fill all the input')
    }
    window.location.reload()
  }

  return (
    <>
      <Button
        onClick={onOpen}
        w={"20%"}
        display={"block"}
        margin={"auto"}
        mb={"20px"}
        colorScheme={"green"}
      >
        Add ToDo
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Add Task</FormLabel>
              <Input value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Task" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Status</FormLabel>
              <Select value={status} onChange={(e)=>setStatus(e.target.value)} placeholder="Select option">
                <option value="true">Done</option>
                <option value="false">Note Done</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={addTodo} mr={3}>
              ADD
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
