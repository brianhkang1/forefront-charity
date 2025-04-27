'use client';

// Not being used currently, save for future needs
export default function DonationButton() {
  return (
    // @ts-expect-error Givebutter widget (missing id on purpose)
    <givebutter-widget id='' />
  );
}
