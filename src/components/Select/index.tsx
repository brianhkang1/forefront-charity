import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import { Select as RadixSelect } from 'radix-ui';

interface Option {
  value: string | null | undefined;
  label: string | null | undefined;
}

interface Props {
  ariaLabel?: string;
  placeholder?: string;
  value?: string;
  options: Option[];
  onValueChange: (value: string) => void;
}

const Select = ({
  ariaLabel = 'Select',
  placeholder = 'Select',
  value,
  options,
  onValueChange,
}: Props) => (
  <RadixSelect.Root onValueChange={onValueChange} value={value}>
    <RadixSelect.Trigger
      className='inline-flex h-[35px] cursor-pointer items-center justify-center gap-[5px] rounded bg-white px-[15px] leading-none shadow-[0_2px_10px] shadow-black/10 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
      aria-label={ariaLabel}
    >
      <RadixSelect.Value placeholder={placeholder} />

      <RadixSelect.Icon>
        <ChevronDownIcon />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>

    <RadixSelect.Portal>
      <RadixSelect.Content className='overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'>
        <RadixSelect.ScrollUpButton className='flex h-[25px] cursor-default items-center justify-center bg-white'>
          <ChevronUpIcon />
        </RadixSelect.ScrollUpButton>

        <RadixSelect.Viewport className='p-[16px]'>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value as string}>
              {option.label}
            </SelectItem>
          ))}
        </RadixSelect.Viewport>

        <RadixSelect.ScrollDownButton className='flex h-[25px] cursor-default items-center justify-center bg-white'>
          <ChevronDownIcon />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);

export const SelectItem = ({
  children,
  ...props
}: RadixSelect.SelectItemProps) => {
  return (
    <RadixSelect.Item
      className='relative flex h-[24px] cursor-pointer items-center rounded-[4px] px-[24px] py-[16px] leading-none select-none data-[disabled]:pointer-events-none'
      {...props}
    >
      <RadixSelect.ItemIndicator className='absolute left-0 inline-flex w-[25px] items-center justify-center'>
        <CheckIcon />
      </RadixSelect.ItemIndicator>

      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
};

export default Select;
