import { CtaButtonExternal } from './icons/reusables/CtaButtonExternal';

export const EverythingNews = () => {
  return (
    <main>
      <h1>everything News</h1>
      <p>write a summary of this project</p>
      <h3>Screenshots</h3>
      <CtaButtonExternal destination={'https://everything-news.netlify.app/'} buttonText={'Demo'} />
      <h3>Project Retro</h3>
      <p>Write a retro for this project</p>
    </main>
  );
};
