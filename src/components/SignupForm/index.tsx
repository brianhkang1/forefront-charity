'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { postToGoogleSheets } from '@/lib/googleSheets';
import { useActionState } from 'react';

export default function SignupForm() {
  const [, formAction, isPending] = useActionState(postToGoogleSheets, null);

  //TODO: add success toast

  return (
    <>
      <h3 className='mb-3'>Get Email Updates</h3>
      <form className='flex flex-wrap items-end gap-3' action={formAction}>
        <Input
          required
          label='First Name'
          id='firstName'
          name='firstName'
          placeholder='First Name'
        />

        <Input
          required
          label='Last Name'
          id='lastName'
          name='lastName'
          placeholder='Last Name'
        />

        <Input
          required
          label='Email Address'
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          width='w-[209px]'
        />

        <Button size='small' type='submit' disabled={isPending}>
          Sign Up
        </Button>
      </form>
    </>
  );
}
