import React, { VFC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { useMessage } from "../../../hooks/useMessage";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { setLoginUser } = useLoginUser();
  const {showMessage}=useMessage()

  const onClickHome = useCallback(() => navigate("/home"), []);
  const onClickUserManagement = useCallback(
    () => navigate("user_management"),
    // パスの積み上げ
    []
  );
  const onClickSetting = useCallback(() => navigate("/home/setting"), []);
  //   ルートを起点に遷移

  const onClickLogout = useCallback(() => {
    setLoginUser(null);
    showMessage({ title: "Logged out", status: "success" });
    navigate("/");
  }, []);

  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex
        align="center"
        as="a"
        mr={8}
        _hover={{ cursor: "pointer" }}
        onClick={onClickHome}
      >
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          User Management App
        </Heading>
      </Flex>
      <Flex
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
      >
        <Box pr={4}>
          <Link onClick={onClickUserManagement}>Users List</Link>
        </Box>
        <Link onClick={onClickSetting}>Setting</Link>
      </Flex>
      <MenuIconButton onOpen={onOpen} />
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
        onClickLogout={onClickLogout}
      />
    </Flex>
  );
});
