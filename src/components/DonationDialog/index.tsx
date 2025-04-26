'use client';

import { Dialog, VisuallyHidden } from 'radix-ui';

import Button from '../Button';

export default function DonationDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Donate</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='data-[state=open]:animate-dialog-overlay-show fixed inset-0 bg-black/75' />
        <Dialog.Content className='data-[state=open]:animate-dialog-content-show fixed top-1/2 left-1/2 h-[70vh] w-[480px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-white shadow-md focus:outline-none'>
          <VisuallyHidden.Root>
            <Dialog.Title>GiveButter Donation Widget</Dialog.Title>
          </VisuallyHidden.Root>

          {/* @ts-expect-error custom */}
          <givebutter-widget priority id='gJ4rdj' />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
