import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import { Box, Card, Heading, Button, Flex } from "rebass";

const App = ()=> {
    const dispatch = useDispatch();
    const {value} = useSelector(state=>state)
    return (
      <Flex justifyContent={"center"}>
        <Box width={512} mt={30}>
          <Card
            sx={{
              p: 5,
              borderRadius: 2,
              boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
              textAlign: "center",
            }}
          >
            <Box px={2}>
              <Heading as="h1" fontSize={8}>{value}</Heading>
              <Button
                sx={{ color: "orange" }}
                variant="primary"
                mr={2}
                onClick={()=>dispatch(increment())}
              >
                add
              </Button>
              <Button sx={{ color: "orange" }} onClick={()=>dispatch(decrement())}>
                decre
              </Button>
            </Box>
          </Card>
        </Box>
      </Flex>
    );
}

export default App;