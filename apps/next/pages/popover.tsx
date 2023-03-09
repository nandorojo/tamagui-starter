import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from '@tamagui/lucide-icons'
import { Adapt, Button, Input, Label, Popover, PopoverProps, XStack, YGroup } from 'tamagui'

export default function PopoverDemo() {
  return (
    <XStack space="$2" f={1} jc="center" ai="center">
      <XStack position="absolute" bottom={0} left={0}>
        <Demo placement="top-start" Icon={ChevronLeft} Name="left-popover" />
      </XStack>
      <Demo placement="bottom" Icon={ChevronDown} Name="bottom-popover" />
      <Demo placement="top" Icon={ChevronUp} Name="top-popover" />
      <Demo placement="right" Icon={ChevronRight} Name="right-popover" />
    </XStack>
  )
}

function Demo({ Icon, Name, ...props }: PopoverProps & { Icon?: any; Name?: string }) {
  return (
    <Popover stayInFrame size="$5" {...props}>
      <Popover.Trigger asChild>
        <Button icon={Icon} />
      </Popover.Trigger>

      <Popover.Content
        bw={1}
        boc="$borderColor"
        transformOrigin="bottom 20%"
        style={{
          transformOrigin: '10% 110%',
        }}
        scale={1}
        enterStyle={{ x: 0, y: 10, o: 0, scale: 0 }}
        exitStyle={{ x: 0, y: 10, o: 0, scale: 0 }}
        x={0}
        y={0}
        o={1}
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
        elevate
      >
        {/* <Popover.Arrow bw={1} boc="$borderColor" /> */}

        <YGroup space="$3">
          <YGroup.Item>
            <XStack space="$3">
              <Label size="$3" htmlFor={Name}>
                Name
              </Label>
              <Input size="$3" id={Name} />
            </XStack>
          </YGroup.Item>
          <YGroup.Item>
            <Popover.Close asChild>
              <Button
                size="$3"
                onPress={() => {
                  /* Custom code goes here, does not interfere with popover closure */
                }}
              >
                Submit
              </Button>
            </Popover.Close>
          </YGroup.Item>
        </YGroup>
      </Popover.Content>
    </Popover>
  )
}
