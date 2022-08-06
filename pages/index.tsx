import { format } from 'date-fns';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '@theme/layout';
import { getAllFilesFrontMatter } from 'lib/mdx';
import { Post, PostType } from 'types/post';
import { css, styled } from 'lib/stitches.config';
import Grid from '@theme/components/Grid';
import { H1, H2, Text } from '@theme/components/Typography';
import Box from '@theme/components/Box';

interface Props {
  posts: Post[];
}

const WavingHand = () => (
  <motion.div
    style={{
      marginBottom: '-20px',
      marginRight: '-45px',
      paddingBottom: '20px',
      paddingRight: '45px',
      display: 'inline-block',
    }}
    animate={{ rotate: 20 }}
    transition={{
      repeat: 7,
      repeatType: 'mirror',
      duration: 0.2,
      delay: 0.5,
      ease: 'easeInOut',
      type: 'tween',
    }}
  >
    👋🏻
  </motion.div>
);

let year = 0;

// @ts-ignore
const cardVariants = {
  hover: {
    scale: 1.05,
  },
  initial: {
    scale: 1,
  },
};

// @ts-ignore
const glowVariants = {
  hover: {
    opacity: 0.8,
  },
  initial: {
    scale: 1.05,
    opacity: 0,
  },
};

const wrapperGrid = css({
  '> *': {
    gridColumn: 2,
  },
});

const IndexPage = (props: Props) => {
  const { posts } = props;

  return (
    <Layout footer header headerProps={{ offsetHeight: 256 }}>
      <Grid columns="medium" gapX={4} gapY={12} className={wrapperGrid()}>
        <Box>
          <H1>
            Hi <WavingHand /> I&apos;m Michael, and this is my blog.{' '}
            <Text variant="secondary" size="7" weight="4">
              Here, I share through my writing my experience as a backend
              engineer and everything I&apos;m learning about on Golang, Rust,
              Microservice, Kubernetes, and WebAssembly.
            </Text>
          </H1>
        </Box>
        <section>
          <H2>All articles</H2>
          <Grid
            as="ul"
            css={{
              margin: 0,
              padding: 0,
            }}
            data-testid="article-list"
            gapY={1}
          >
            {posts.map((post) => {
              const currentYear = new Date(post.date).getFullYear();
              let printYear;

              if (currentYear !== year) {
                printYear = true;
                year = currentYear;
              } else {
                printYear = false;
              }

              return (
                <li
                  style={{
                    listStyle: 'none',
                    cursor: 'pointer',
                    marginBottom: 'calc(1.45rem / 2)',
                    lineHeight: '1.9',
                    letterSpacing: '0.3px',
                  }}
                  key={post.slug}
                  data-testid="article-item"
                >
                  {printYear ? (
                    <Text
                      as="p"
                      weight="4"
                      css={{
                        paddingTop: '30px',
                      }}
                    >
                      {currentYear}
                    </Text>
                  ) : null}
                  <Link href={`/posts/${post.slug}/`} passHref>
                    {/* Revisit this component: merge Anchor and block together (extend block from Anchor) */}
                    <a style={{ textDecoration: 'none', fontWeight: 500 }}>
                      <Block data-testid="article-link">
                        <Text
                          as="p"
                          size="1"
                          variant="tertiary"
                          weight="3"
                          css={{
                            minWidth: '52px',
                            marginRight: '32px',
                            marginBottom: '0px',
                          }}
                        >
                          {format(new Date(Date.parse(post.date)), 'MMM dd')}
                        </Text>
                        {post.title}
                      </Block>
                    </a>
                  </Link>
                </li>
              );
            })}
          </Grid>
        </section>
      </Grid>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter(PostType.BLOGPOST);

  return { props: { posts } };
}

// @ts-ignore
const Glow = styled(motion.div, {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  webkitFilter: 'blur(15px)',
  filter: 'blur(15px)',
  borderRadius: 'var(--border-radius-2)',
});

const Block = styled(Box, {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '10px',
  borderRadius: 'var(--border-radius-2)',
  marginLeft: '-10px',
  height: '60px',
  boxShadow: 'none',
  backgroundColor: 'var(--article-block-background-color, "transparent")',
  color: 'var(--article-block-color, var(--colors-typeface-primary))',
  transition: 'background-color 0.25s, box-shadow 0.25s, color 0.25s',

  '&:focus': {
    '--article-block-background-color': 'var(--colors-emphasis)',
    '--article-block-color': 'var(--colors-brand)',
  },

  '@media (hover: hover) and (pointer: fine)': {
    '&:hover': {
      '--article-block-background-color': 'var(--colors-emphasis)',
      '--article-block-color': 'var(--colors-brand)',
    },
  },

  '@media (max-width: 700px)': {
    height: '100px',
  },
});

export default IndexPage;
