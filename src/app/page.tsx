// import { getGoogleDriveFiles } from './api/google-drive';
import Button from '@/components/Button';
import Title from '@/components/Title';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | FOREFRONT Charity',
};

export default async function Home() {
  // const data = await getGoogleDriveFiles();

  return (
    <div>
      <main>
        <Title>Hello Forefront Charity</Title>
        <h1>Hello Forefront Charity</h1>
        <h2>Hello Forefront Charity</h2>
        <h3>Hello Forefront Charity</h3>
        <p>Hello Forefront Charity</p>
        <a>Hello Forefront Charity</a>

        <div className='mt-1'>
          <Button>Test</Button>
        </div>
      </main>
    </div>
  );
}
