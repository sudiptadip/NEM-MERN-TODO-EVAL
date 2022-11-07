import React from "react";
import { FormLabel, Input, Box, Button, Text } from "@chakra-ui/react";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {

const [email,setEmail] = useState('')
const [name,setName] = useState('')
const [password,setPassword] = useState('')
const navigate = useNavigate()
// axios.post('')
function HandelClick(){
    let user = {
        name: name,
        email: email,
        password: password
    }
    axios.post('http://localhost:5000/signup',user)
    .then((e) => {alert('Successfully Created Account Now Login'); navigate('/login')})
    .catch((e)=> console.log(e))
}


  return (
    <Box w={"40%"} h={"500px"} margin={"auto"} mt={"50px"}>
      <Text fontSize={"50px"} fontWeight={500} textAlign={"center"} mb={"80px"}>
        {" "}
        Create Your Account{" "}
      </Text>
      <FormLabel>Name</FormLabel>
      <Input value={name} onChange={(e)=> setName(e.target.value)} type="text" />

      <FormLabel>Email address</FormLabel>
      <Input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />

      <FormLabel>Password</FormLabel>
      <Input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" />
      <Button
        w={"50%"}
        display={"block"}
        margin={"auto"}
        mt={"20px"}
        colorScheme={"blue"}
        onClick={HandelClick}
      >
        Submit
      </Button>
    </Box>
  );
}
