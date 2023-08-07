import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Flex,
} from "@chakra-ui/react";
import SingleDish from "./SingleDish";

const SingleRestaurant = () => {
  return (
    <Card maxW="3xl" bg="white" color="black">
      <CardBody>
        <Image
          src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Restaurant"
          borderRadius="lg"
          height={"60vh"}
          marginLeft={"auto"}
          marginRight={"auto"}
        />
        <Stack mt="6" spacing="3">
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Heading size="xl">Haldiram</Heading>
            <Text
              maxH={{ base: "100%", sm: "35px" }}
              bg={"green.200"}
              borderRadius={"5%"}
              padding={"5px"}
            >
              Available
            </Text>
          </Flex>
          <Text>Fast Food , South Indian</Text>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            ratione impedit ea. Aut officia, laudantium quidem labore cumque
            debitis numquam, architecto rerum laboriosam illo sint.
          </Text>
          <Text color={"gray.500"}>
            Dilshad Garden, Delhi - 110095 , Contact : 9876543210
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex flexDirection={"column"} rowGap={"10px"}>
          <SingleDish />
          <SingleDish />
          <SingleDish />
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default SingleRestaurant;
