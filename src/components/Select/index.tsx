import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import { Select as RadixSelect } from 'radix-ui';
import React from 'react';

interface Props {
  ariaLabel?: string;
  options: {
    value: string | null | undefined;
    label: string | null | undefined;
  }[];
  onValueChange: (value: string) => void;
}

const Select = ({ ariaLabel = 'Select', options, onValueChange }: Props) => (
  <RadixSelect.Root onValueChange={onValueChange}>
    <RadixSelect.Trigger
      className='text-violet11 hover:bg-mauve3 data-[placeholder]:text-violet9 inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none shadow-[0_2px_10px] shadow-black/10 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
      aria-label={ariaLabel}
    >
      <RadixSelect.Value placeholder='Select' />
      <RadixSelect.Icon className='text-violet11'>
        <ChevronDownIcon />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>

    <RadixSelect.Portal>
      <RadixSelect.Content className='overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'>
        <RadixSelect.ScrollUpButton className='text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white'>
          <ChevronUpIcon />
        </RadixSelect.ScrollUpButton>

        <RadixSelect.Viewport className='p-[5px]'>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value as string}>
              {option.label}
            </SelectItem>
          ))}
        </RadixSelect.Viewport>

        <RadixSelect.ScrollDownButton className='text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white'>
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
      className={
        'text-violet11 data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 relative flex h-[25px] items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none select-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none'
      }
      {...props}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className='absolute left-0 inline-flex w-[25px] items-center justify-center'>
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
};

export default Select;
