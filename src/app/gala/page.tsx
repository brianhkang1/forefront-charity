import type { Metadata } from 'next';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Gala | FOREFRONT Charity',
};

export default async function GalaPage() {
  return (
    <>
      <div className='h-36' />
      Gala page
    </>
  );
}
