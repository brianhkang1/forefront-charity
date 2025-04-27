'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { Dialog, VisuallyHidden } from 'radix-ui';

import Button from '../Button';

export default function DonationDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Donate</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='data-[state=open]:animate-dialog-overlay-show fixed inset-0 z-3 bg-black/75' />
        <Dialog.Content className='data-[state=open]:animate-dialog-content-show fixed top-1/2 left-1/2 z-4 max-h-[70vh] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md focus:outline-none'>
          <VisuallyHidden.Root>
            <Dialog.Title>Givebutter Donation Widget</Dialog.Title>
          </VisuallyHidden.Root>

          <div className='scrollbar-forefront max-h-[70vh] overflow-y-auto rounded-xl'>
            <div className='space-y-4'>
              {/* @ts-expect-error custom */}
              <givebutter-widget priority id='gJ4rdj' />
            </div>
          </div>

          <Dialog.Close asChild>
            <button
              className='hover:bg-forefront-teal/20 absolute top-6 right-9 inline-flex size-8 cursor-pointer appearance-none items-center justify-center rounded-full text-black hover:border-1 hover:border-teal-700 hover:text-teal-700 focus:outline-none'
              aria-label='Close'
            >
              <Cross2Icon width='1.5rem' height='1.5rem' />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
