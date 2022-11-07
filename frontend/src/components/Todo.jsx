import React from "react";
import { Box, Text,Flex, Button } from "@chakra-ui/react";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";

export default function Todo() {
const [data,setData] = useState([])
const [email,setEmail] = useState('')

   useEffect(()=>{
    let token = JSON.parse(localStorage.getItem("token"))
    if(token){
      const authaxios = axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
        token: token
        }
      })
      authaxios.get('/gettodo')
      .then((e)=> {setData(e.data.userData); setEmail(e.data.email)})
    }
   },[])

  return (
    <Box>
      <Text textAlign={"center"} mt={"20px"} fontSize={"20px"} fontWeight={500} >{email}</Text>
      <Text textAlign={"center"} mt={"20px"} fontSize={"40px"} fontWeight={500}>
        ToDo's
      </Text>
      <AddTodo />
      <Box>
        {
          data.map((e,i) => (
            <Flex  key={i} margin={'auto'} fontSize={'28px'} w={'60%'} h={'60px'} border={'1px solid black'} mb={'10px'}>
              <Flex ml={'5%'} alignItems={'center'} w={'50%'} h={'100%'} >
              <Text>{e.task}</Text>
              </Flex>
              <Flex  alignItems={'center'} w={'20%'} h={'100%'} >
              <Text>{e.status == 'true' ? 'Complite' : 'Pending'}</Text>
              </Flex>
              <Flex alignItems={'center'} w={'25%'} >
                <Button colorScheme={'blue'} mr={'10px'} >{e.status == 'true' ? "Not Done" : "Done"}</Button>
                <Button colorScheme={'red'}>Delete</Button>
              </Flex>
            </Flex>
          ))
        }
      </Box>
    </Box>
  );
}