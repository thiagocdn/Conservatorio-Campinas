import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  shoudExcludeTitleSufix?: boolean;
  shouldIndexPage?: boolean;
}

export default function SEO({
  title,
  description,
  shoudExcludeTitleSufix = false,
  shouldIndexPage = true,
}: SEOProps) {
  const pageTitle = `${title}${!shoudExcludeTitleSufix ? ' | Conservatório Campinas' : ''}`;


  return (
    <Head>
      <title>{pageTitle}</title>

      { description && <meta name="description" content={description}/> }
      { !shouldIndexPage && <meta name="robots" content="noindex,nofollow" /> }
      
    </Head>
  );
}