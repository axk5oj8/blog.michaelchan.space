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
  const themeSuffix = dark ? '-dark' : '-light';
  // check env
  const themeUrl =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:3000/static/giscus${themeSuffix}.css`
      : `${location.protocol}//${location.host}/static/giscus${themeSuffix}.css`;

  return (
    <Wrapper {...rest}>
      <Giscus
        {...(siteConfig.giscusConfig as GiscusProps)}
        term={title}
        mapping="specific"
        reactionsEnabled="1"
        emitMetadata="0"
        theme={themeUrl}
      />
    </Wrapper>
  );
};

export default Comments;
