import Code from '@theme/components/Code';
import VideoPlayer from '@theme/components/VideoPlayer';

// MDX only components
import Image from './Image';
import Anchor from '../Anchor';
import Button from '../Button';
import Callout from '../Callout';
import Blockquote from '../Blockquote';
import { Text, EM, H2, H3, Strong } from '../Typography';
import InlineCode from '../InlineCode';
import List from '../List';
import Pill from '../Pill';

const MDXComponents = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Anchor underline {...props} />
  ),
  Anchor,
  Button,
  blockquote: Blockquote,
  Callout,
  em: EM,
  h2: H2,
  h3: H3,
  Image,
  inlineCode: InlineCode,
  li: List.Item,
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <List variant="ordered" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="p" {...props} />
  ),
  Pill,
  pre: Code,
  strong: Strong,
  ul: List,
  VideoPlayer,
};

export default MDXComponents;
