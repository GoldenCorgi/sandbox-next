import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/getHackathons';
import Link from 'next/link';
import Date from '../components/date';
import Hero from '../components/hero';
import VideoFeature from '../components/video_feature';
import CustomFooter from '../components/footer';
import CardWithImage from '../components/card';
import { SimpleGrid, Container  } from '@chakra-ui/react'

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  console.log(allPostsData)
  console.log(allPostsData[0]['Hackathon Name'])
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Hero />
      <VideoFeature />

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <Container maxW='80%' >
          <SimpleGrid minChildWidth='445px' spacing='40px'>

            {allPostsData.map((post) => (

              <div className={utilStyles.listItem} key={post["Hackathon Name"]}>
                {CardWithImage(post)}
                {/* <Link href={`/hackathons/`}>
                  <a>{post["Hackathon Name"]}</a>
                </Link> */}
                <br />
                <small className={utilStyles.lightText}>
                  {/* <Date dateString={date} /> */}
                </small>
              </div>
            ))}
          </SimpleGrid>
        </Container >
      </section>

      <CustomFooter />
    </div>
  )
}
