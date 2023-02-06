import Link from 'next/link.js';
import { getSortedPostsData } from '../../lib/posts.js';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Recipes({ allPostsData }) {
  return (
    <div>
      <h1>Try some of these recipes!</h1>

      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              <Link href={`/recipes/${id}`}>{id}</Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
