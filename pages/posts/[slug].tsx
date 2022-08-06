import MDXComponents from '@theme/components/MDX/MDXComponents';
import Tweet from '@theme/components/Tweet';
import BlogLayout from 'layouts/BlogPost';
import getOgImage from 'lib/generate-opengraph-images';
import { getFiles, getFileBySlug } from 'lib/mdx';
import { getTweets } from 'lib/tweets';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { FrontMatterPost, PostType } from 'types/post';

interface BlogProps {
  post?: FrontMatterPost;
  ogImage: string;
  tweets: Record<string, any>;
}

const Blog = ({ post, ogImage, tweets }: BlogProps) => {
  const { isFallback } = useRouter();

  if (isFallback || !post) {
    return <div>Loading...</div>;
  }

  const StaticTweet = ({ id }: { id: string }) => {
    return <Tweet tweet={tweets[id]} />;
  };

  return (
    <BlogLayout frontMatter={post.frontMatter} ogImage={ogImage}>
      <MDXRemote
        {...post.mdxSource}
        // @ts-ignore
        components={{ ...MDXComponents, StaticTweet: StaticTweet }}
      />
    </BlogLayout>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles(PostType.BLOGPOST);

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getFileBySlug(PostType.BLOGPOST, params!.slug as string);

    /**
     * Get tweets from API
     */
    const tweets =
      // TODO: write proper return types for getTweets
      post.tweetIDs.length > 0 ? await getTweets(post.tweetIDs) : {};

    const ogImage = await getOgImage({
      title: post.frontMatter.title,
      background: post.frontMatter.colorFeatured,
      color: post.frontMatter.fontFeatured,
    });
    return { props: { post, ogImage, tweets } };
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
    return { notFound: true };
  }
};
