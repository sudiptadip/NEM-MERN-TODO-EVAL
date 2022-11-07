import React, { useState } from "react";
import { FormLabel, Input, Box, Button, Text } from "@chakra-ui/react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  function HandelClick(){
    let user = {
      email: email,
      password: password
    }

    axios.post('http://localhost:5000/login/',user)
    .then((e) => {
      if(e.data.token){
        // console.log(e.data.token)
        let token = e.data.token
        localStorage.setItem("token", JSON.stringify(token))
        alert('Sucessfully Login')
        navigate('/todo')
      }else{
        alert(e.data.msg)
        console.log(e.data)
      }
    } )
    // let data = JSON.parse(localStorage.getItem("token"))
  }


  return (
    <Box w={"40%"} h={"500px"} margin={"auto"} mt={"50px"}>
      <Text fontSize={"50px"} fontWeight={500} textAlign={"center"} mb={"80px"}>
        {" "}
        Log In{" "}
      </Text>
      <FormLabel>Email address</FormLabel>
      <Input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />

      <FormLabel>Password</FormLabel>
      <Input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" />
      <Button
        w={"50%"}
        display={"block"}
        margin={"auto"}
        mt={"20px"}
        colorScheme={"green"}
        onClick={HandelClick}
      >
        Submit
      </Button>
    </Box>
  );
}
