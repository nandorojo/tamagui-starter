import { Input, styled, Text, Stack } from 'tamagui'

const TextInput = styled(Input)

export default function Repro() {
  return (
    <Stack gap="$4" p={32} flex={1} bg="$color1">
      <Text color="$color11" fontFamily="$body">
        This input respects the unstyled prop. Focusing it doesn't do anything weird.
      </Text>
      <Input bg="$color3" placeholder="This input works" p={16} unstyled color="$color11" />

      <Text color="$color11" fontFamily="$body">
        This input does not respect the unstyled prop. <code>unstyled.false.focusStyle</code> still
        applies.
      </Text>
      <TextInput placeholder="here is another input" unstyled />
    </Stack>
  )
}
