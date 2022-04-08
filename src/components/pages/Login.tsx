import React, { VFC, memo, useState, ChangeEvent } from "react";
import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  // テキストボックスの値の型指定
  const onClickLoginButton = () => {
    login(userId);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          User Management App
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="User's id"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onClick={onClickLoginButton}
            disabled={userId == "" || loading}
            loading={loading}
          >
            Login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
