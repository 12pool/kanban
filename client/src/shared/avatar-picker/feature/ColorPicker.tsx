import { Flex } from 'ui/layout';
import { Color } from 'shared/avatar-picker/ui/Color.tsx';
import { colors, colorsList } from 'shared/avatar-picker/model';

type ColorPickerProps = {
  onSelect: (color: string) => void;
  selectedColor: string;
};

export const ColorPicker = ({ onSelect, selectedColor }: ColorPickerProps) => {
  return (
    <Flex gap="sm" direction="column">
      {colorsList.map((colorName, index) => {
        const color = colors[colorName];
        return (
          <Color
            selected={color === selectedColor}
            onSelect={() => {
              onSelect(color);
            }}
            key={index}
            color={color}
          />
        );
      })}
    </Flex>
  );
};
