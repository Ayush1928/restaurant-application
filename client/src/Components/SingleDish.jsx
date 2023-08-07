import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SingleDish = () => {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        bg={"white"}
        color="black"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          maxH={{ base: "100%", sm: "180px" }}
          src="https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Caffe Latte"
          borderRadius={"3%"}
        />

        <Stack>
          <CardBody>
            <Heading size="md">Samosa</Heading>
            <Flex flexDirection={"row"} justifyContent={"space-between"}>
              <Text py="2">
                Ingredients : Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Atque, sequi.
              </Text>
              <Button colorScheme="green" size={"sm"} marginRight={"10px"}>
                Veg
              </Button>
            </Flex>
            <Text>Price : ₹20</Text>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
};

export default SingleDish;
