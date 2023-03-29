import { useReactiveVar } from '@apollo/client';
import { Avatar, Group, Paper, Text } from '@mantine/core';
import {
  currentAvatarVar,
  currentUsernameVar,
} from '../../apollo/apolloProvider';

export const NavbarChat = ({ avatar }: any) => {
  const currentAvatar = useReactiveVar(currentAvatarVar);
  const currentUsername = useReactiveVar(currentUsernameVar);

  return (
    <Paper
      radius={5}
      sx={{
        boxShadow: '0px 2px 0px 0px rgba(173,181,189,.5)',
        height: 60,
      }}
      style={{
        maxWidth: 200,
      }}
    >
      <Group p="sm" align="center">
        <Avatar src={`data:image/jpeg;base64,${currentAvatar}`} radius="xl" />
        <Text>{currentUsername}</Text>
      </Group>
    </Paper>
  );
};
