import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Box, Flex } from 'ui/layout';
import { Text } from 'ui/text';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  argTypes: {
    size: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
  args: {
    children: 'Hello world',
  },
  render: ({ children }) => {
    return (
      <Flex direction="column" gap="xl">
        <Flex gap="xl" align="center">
          <Text weight="bold">Sizes</Text>
          <Box>
            <Text size="sm">small</Text>
            <Button size="sm">{children}</Button>
          </Box>
          <Box>
            <Text size="sm">medium (default)</Text>
            <Button size="md">{children}</Button>
          </Box>
          <Box>
            <Text size="sm">large</Text>
            <Button size="lg">{children}</Button>
          </Box>
        </Flex>
        <Flex gap="xl" align="center">
          <Text weight="bold">Variants</Text>
          <Box>
            <Text size="sm">basic</Text>
            <Button variant="basic">{children}</Button>
          </Box>
          <Box>
            <Text size="sm">primary</Text>
            <Button variant="primary">{children}</Button>
          </Box>
        </Flex>
      </Flex>
    );
  },
};
