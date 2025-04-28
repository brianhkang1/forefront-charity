import { YouTubeEmbed } from '@next/third-parties/google';

export default function VisionApproachImpact() {
  return (
    <section className='bg-teal-900 p-6 text-white'>
      <h2 className='mb-3 text-center'>Vision. Approach. Impact.</h2>
      <div className='mb-3 text-center'>
        Lasting change is not just about short-term aid, it requires a
        comprehensive solution.
      </div>

      <YouTubeEmbed
        videoid='VVfv3N4yLyM'
        style='height:75vh; width:100%; max-width:100%; border-radius:12px;'
      />
    </section>
  );
}
