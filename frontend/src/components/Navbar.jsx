import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  let [data, setData] = useState();
  const navigate = useNavigate();
  
  console.log(data)

    useEffect(()=>{
    let xdata = JSON.parse(localStorage.getItem("token")) || false;
    setData(xdata)
    },[data,])

 
    
  
  return (
    <Flex
      w={"100%"}
      fontWeight={500}
      color={"white"}
      justifyContent={"space-evenly"}
      fontSize={"30px"}
      alignItems={"center"}
      h={"80px"}
      border={"1px solid balck"}
      bg={"teal"}
    >
      <Box cursor={"pointer"} onClick={() => navigate("/")}>
        Home
      </Box>
      <Box cursor={"pointer"} onClick={() => navigate("/todo")}>
        Todo
      </Box>
      {data ? null : (
        <Box cursor={"pointer"} onClick={() => navigate("/signin")}>
          Sign-in
        </Box>
      )}
      {data ? null : (
        <Box cursor={"pointer"} onClick={() => navigate("/login")}>
          Log-in
        </Box>
      )}
      {data ? (
        <Box cursor={"pointer"} onClick={() => {localStorage.clear(); window.location.reload()}}>
      
          Log-Out
        </Box>
      ) : null}
    </Flex>
  );
}
