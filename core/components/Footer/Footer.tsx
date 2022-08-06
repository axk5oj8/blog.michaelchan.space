import Logo from '@theme/components/Logo';
import { styled } from 'lib/stitches.config';
import Link from 'next/link';
import Anchor from '../Anchor';
import Box from '../Box';
import Flex from '../Flex';
import Grid from '../Grid';
import { Text } from '../Typography';

const FooterBlock = styled('footer', {
  background: 'var(--colors-body)',
  paddingTop: 'var(--space-8)',
  transition: '0.5s',
  width: '100%',

  hr: {
    height: '1px',
    width: '100%',
    background: 'var(--border-color)',
    border: 'none',
  },
});

const FooterWrapper = styled(Flex, {
  paddingTop: 'var(--space-4)',
  paddingBottom: 'var(--space-4)',
  width: '100%',
  margin: '0px auto',
  gridColumn: '2',
});

const FooterContent = styled(Flex, {
  height: 'var(--space-8)',
  width: '100%',
});

const Footer = () => (
  <FooterBlock data-testid="footer">
    <hr />
    <Grid columns="medium" gapX={4}>
      <FooterWrapper direction="column" justifyContent="space-evenly" gap={6}>
        <Grid columns={3} css={{ width: '100%' }}>
          <Box>
            <Text size={1}>
              <Grid>
                <Link href="/" passHref>
                  <Anchor discreet>Home</Anchor>
                </Link>
              </Grid>
            </Text>
          </Box>
          <Box>
            <Text size={1}>
              <Grid>
                <Anchor
                  discreet
                  href="https://github.com/axk5oj8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Anchor>
              </Grid>
            </Text>
          </Box>
          <Box>
            <Text size={1}>
              <Grid>
                <Link href="/rss.xml" passHref>
                  <Anchor discreet>RSS</Anchor>
                </Link>
              </Grid>
            </Text>
          </Box>
        </Grid>
        <FooterContent alignItems="center" justifyContent="space-between">
          <Text
            as="p"
            css={{ margin: 0 }}
            size="1"
            variant="primary"
            weight="3"
          >
            © {new Date().getFullYear()} axk5oj8
          </Text>
          <Logo alt="Michael Chan's logo" size={35} />
        </FooterContent>
      </FooterWrapper>
    </Grid>
  </FooterBlock>
);

export { Footer };
