import React, { VFC, memo } from "react";
import { Stack, Image, Text, Box } from "@chakra-ui/react";

type Props = {
  id: number;
  imageUrl: string;
  name: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo(props => {
  const { id, imageUrl, name, fullName, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      {/* Boxはchakura uiにおけるdiv */}
      <Stack textAlign="center">
        {/* Stackはスペース等を設ける */}
        <Image
          src={imageUrl}
          boxSize="160px"
          borderRadius="full"
          alt={name}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
