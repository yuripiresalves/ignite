import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Yuri Alves</Text>

          <Text color="gray.300" fontSize="small">
            yuripiresalves@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Yuri Alves"
        src="https://github.com/yuripiresalves.png"
      />
    </Flex>
  );
}
