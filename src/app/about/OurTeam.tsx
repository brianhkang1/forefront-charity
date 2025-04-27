'use client';

import Image from '@/components/Image';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Dialog } from 'radix-ui';
import { useState } from 'react';

import { TeamMemberImageMetadata } from './types';

interface Props {
  teamMemberBios: any[][] | null | undefined;
  teamMembersByName: Record<string, TeamMemberImageMetadata>;
}

export default function OurTeam({ teamMemberBios, teamMembersByName }: Props) {
  const [selected, setSelected] = useState<{
    name: string;
    bio: string;
    url: string;
  } | null>(null);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen === false) {
      setSelected(null);
    }
  };

  const handleClickMember = (name: string, bio: string, url: string) => {
    setSelected({ name, bio, url });
  };

  return (
    <section className='mb-8'>
      <h2 className='my-9 text-center'>OUR TEAM</h2>

      <div className='mx-auto flex max-w-264 flex-wrap justify-center gap-4 not-md:mx-[16px]'>
        <Dialog.Root onOpenChange={handleOpenChange}>
          {teamMemberBios?.map(([firstName, lastName, bio]) => {
            const fullName = `${firstName} ${lastName}`;
            const teamMember = teamMembersByName[fullName];
            if (!teamMember) return null;

            const src = `/api/image-proxy?id=${teamMember.id}&mimeType=${teamMember.mimeType}`;
            return (
              <div className='w-[154px]' key={teamMember.name}>
                <Image
                  className='object-top'
                  src={src}
                  fillWidth='100%'
                  fillHeight={154}
                  alt={teamMember.name}
                />

                <Dialog.Trigger key={teamMember.name} asChild>
                  <div
                    className='mt-1 cursor-pointer text-center leading-5 break-words underline underline-offset-5'
                    onClick={() => handleClickMember(teamMember.name, bio, src)}
                  >
                    {teamMember.name}
                  </div>
                </Dialog.Trigger>
              </div>
            );
          })}

          <Dialog.Portal>
            <Dialog.Overlay className='data-[state=open]:animate-dialog-overlay-show fixed inset-0 z-3 bg-black/75' />
            <Dialog.Content className='data-[state=open]:animate-dialog-content-show fixed top-[40%] left-1/2 z-4 max-h-[70vh] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md focus:outline-none'>
              <div className='scrollbar-forefront max-h-[90vh] overflow-y-auto rounded-2xl'>
                <div className='flex flex-col items-center space-y-4 rounded-xl bg-white p-6'>
                  {selected?.url && (
                    <>
                      <Image
                        className='object-top'
                        src={selected?.url || ''}
                        fillWidth={440}
                        fillHeight={440}
                        alt={selected?.name || ''}
                      />

                      <Dialog.Title className='mb-3 text-start text-2xl'>
                        {selected?.name}
                      </Dialog.Title>

                      <div className='max-w-[500px]'>{selected?.bio}</div>
                    </>
                  )}
                </div>
              </div>

              <Dialog.Close asChild>
                <button
                  className='hover:bg-forefront-teal/20 not-md:10 absolute top-7 right-9 inline-flex size-8 cursor-pointer appearance-none items-center justify-center rounded-full text-black hover:border-1 hover:border-teal-700 hover:text-teal-700 focus:outline-none'
                  aria-label='Close'
                >
                  <Cross2Icon width='1.5rem' height='1.5rem' />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
