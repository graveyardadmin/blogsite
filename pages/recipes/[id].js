import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Info from '@/components/Info';
import styles from "../../styles/Post.module.css";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


export default function Post({ postData }) {
  return(
    <div className={styles.post}>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <div className={styles.content}>
        <h1>{postData.title}</h1>
        <p>{postData.date}</p>

        <hr/>
        <br/>
        
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>

      <Info className={styles.info} list={<div><b>Difficulty:</b> {postData.difficulty}<br/><b>Duration:</b> {postData.duration}</div>}/>

    </div>
  )
}