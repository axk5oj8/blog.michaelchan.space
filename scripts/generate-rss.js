/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

(async () => {
  console.info(chalk.cyan('info'), ` - Generating RSS feed`);

  const root = process.cwd();

  const typeToPath = {
    blog: 'content',
    snippet: 'snippets',
  };

  function getPosts(type) {
    const files = fs
      .readdirSync(path.join(root, typeToPath[type]))
      .filter((name) => name !== 'img');

    const posts = files.reduce((allPosts, postSlug) => {
      const source = fs.readFileSync(
        path.join(root, typeToPath[type], postSlug),
        'utf8'
      );
      const { data } = matter(source);

      return [
        {
          ...data,
          slug: postSlug.replace('.mdx', ''),
        },
        ...allPosts,
      ];
    }, []);

    return posts;
  }

  try {
    const feed = new RSS({
      title: "Michael Chan's Blog",
      description:
        "Hi I'm Michael, and this is my blog. Here, I share through my writing my experience as a backend engineer and everything I'm learning about on Golang, Rust, Microservice, Kubernetes, and WebAssembly.",
      site_url: 'https://blog.michaelchan.space',
      feed_url: 'https://blog.michaelchan.space/rss.xml',
      image_url: 'https://blog.michaelchan.space/static/og/main-og-image.png',
      language: 'en',
    });

    const content = [...getPosts('blog'), ...getPosts('snippet')].sort(
      (post1, post2) => (post1.date > post2.date ? -1 : 1)
    );

    content.forEach((post) => {
      const url = `https://blog.michaelchan.space/${
        post.type === 'snippet' ? 'snippets' : 'posts'
      }/${post.slug}`;

      feed.item({
        title: post.title,
        description: post.type === 'snippet' ? '' : post.subtitle,
        date: new Date(post.date),
        author: 'Michael Chan',
        url,
        guid: url,
      });
    });

    const rss = feed.xml({ indent: true });
    fs.writeFileSync(path.join(__dirname, '../public/rss.xml'), rss);
  } catch (error) {
    console.error(
      chalk.red('error'),
      ` - An error occurred while generating the RSS feed`
    );
    console.error(error);
    process.exit(1);
  }
})();