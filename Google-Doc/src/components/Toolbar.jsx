import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {TbTextColor} from "react-icons/tb"
import {MdAdd, MdFormatIndentIncrease, MdFormatListBulleted, MdOutlineFormatListNumbered,MdFormatIndentDecrease, MdFormatClear, MdFormatLineSpacing,
MdArrowDropDown, MdFormatAlignLeft, MdChecklist, MdFormatBold, MdFormatItalic, MdFormatUnderlined, MdKeyboardArrowUp, MdOutlineAddComment, MdOutlineImagesearchRoller,
MdOutlineInsertLink,MdOutlineLocalPrintshop,MdOutlineMode, MdOutlinePhoto, MdOutlineSpellcheck, MdRemove,} from "react-icons/md";
import { BiHighlight, BiRedo, BiUndo } from "react-icons/bi";

export default function Toolbar() {
  return (
    <Flex
      mx={"3"}
      p={"2"}
      borderRadius={"3xl"}
      bgColor={"#edf2fa"}
      justifyContent={"space-between"}
      alignItems={"center"}
      style={{ padding: "3px 35px" }}
    >
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={BiUndo}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={BiRedo}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineLocalPrintshop}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineSpellcheck}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineImagesearchRoller}
      />

      <Flex alignItems={"center"}>
        <Text p={"1"}>100%</Text>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdArrowDropDown}
        />
      </Flex>

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Flex alignItems={"center"}>
        <Text>Normal text &nbsp;&nbsp;&nbsp;</Text>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"6"}
          as={MdArrowDropDown}
        />
      </Flex>

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Flex alignItems={"center"}>
        <Text>Arial &nbsp;&nbsp;&nbsp;&nbsp;</Text>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdArrowDropDown}
        />
      </Flex>

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Flex alignItems={"center"}>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdRemove}
        />
        <Box mx={"2"} px={"2"} border={"1px"} borderRadius={"lg"}>
          <Text>11</Text>
        </Box>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdAdd}
        />
      </Flex>

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdFormatBold}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdFormatItalic}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdFormatUnderlined}
      />
       <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={TbTextColor}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={BiHighlight}
      />

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineInsertLink}
      />
      <Icon
        borderRadius={"md"}
        borderColor={"gray"}
        opacity={"0.3"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineAddComment}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlinePhoto}
      />

      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />

      <Flex>
        <Flex>
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdFormatAlignLeft}
          />
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />&nbsp;&nbsp;
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdFormatLineSpacing}
          />&nbsp;&nbsp;
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdChecklist}
          />
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdFormatListBulleted}
          />
           <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={ MdOutlineFormatListNumbered}
          />
           <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />&nbsp;
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={  MdFormatIndentDecrease}
          />&nbsp;&nbsp;
           <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={ MdFormatIndentIncrease}
          />&nbsp;&nbsp;
           <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={ MdFormatClear}
          />
        </Flex>

      </Flex>

      <Flex _hover={{ bgColor: "gray.200" ,borderRadius:"10"}}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <Icon
          borderRadius={"md"}
          
          boxSize={"5"}
          cursor={"pointer"}
          as={MdOutlineMode}
        /> &nbsp; 
         <Text>Editing </Text>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdArrowDropDown}
        />
      </Flex>
      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdKeyboardArrowUp}
      />
    </Flex>
  );
}
