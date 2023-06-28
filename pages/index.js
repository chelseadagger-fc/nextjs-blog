import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I'm Daniel, an aspiring web developer. I've learned the foundational skills to create full-stack web applications using the MERN techstack. I also love to read and travel.</p>
        <p>
          (This is a sample website built through {' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}