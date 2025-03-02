import type { Metadata } from 'next';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Approach',
};

export default async function ApproachPage() {
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        Approach page
      </div>
    </>
  );
}
