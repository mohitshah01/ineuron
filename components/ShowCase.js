import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";

function ShowCaseCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} fontSize={"2xl"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontWeight={"medium"} fontSize={"lg"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function ShowCase() {
  return (
    <Box maxW="7xl" mx={"auto"} py={36} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Pure Hardwork, No Shortcuts!
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <ShowCaseCard
          title={"Differnet Courses"}
          stat={"400+"}
          icon={<MdOutlineMenuBook size={"3em"} />}
        />
        <ShowCaseCard
          title={"Stundents Enrolled"}
          stat={"4,00,000+"}
          icon={<IoIosPeople size={"3em"} />}
        />
        <ShowCaseCard
          title={"Successful Transition"}
          stat={"10,000+"}
          icon={<FaMoneyCheck size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
