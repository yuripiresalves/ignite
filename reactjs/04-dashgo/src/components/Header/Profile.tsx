import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Yuri Alves</Text>

        <Text color="gray.300" fontSize="small">
          yuripiresalves@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Yuri Alves"
        src="https://github.com/yuripiresalves.png"
      />
    </Flex>
  );
}
