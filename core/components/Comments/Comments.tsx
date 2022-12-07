import { useTheme } from '@theme/hooks';
import { styled } from 'lib/stitches.config';
import Giscus from '@giscus/react';
import type { ComponentProps } from 'react';
import type { GiscusProps } from '@giscus/react';
import siteConfig from 'config/site';

const Wrapper = styled('div', {
  marginTop: '2em',
  paddingTop: '2em',
  borderTop: `2px solid var(--colors-typeface-tertiary)`,
  minHeight: '360px',
});

export type CommentsProps = ComponentProps<typeof Wrapper> & {
  title: string;
};

const Comments = ({ title, ...rest }: CommentsProps) => {
  const { dark } = useTheme();

  return (
    <Wrapper {...rest}>
      <Giscus
        {...(siteConfig.giscusConfig as GiscusProps)}
        term={title}
        mapping="specific"
        reactionsEnabled="1"
        emitMetadata="0"
        theme="https://github.com/axk5oj8/blog.michaelchan.space/blob/main/styles/giscus.css"
      />
    </Wrapper>
  );
};

export default Comments;
