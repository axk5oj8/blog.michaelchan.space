import { Shadows, styled } from 'lib/stitches.config';

export const StyledInlineCode = styled('code', {
  fontFamily: 'var(--font-mono)',
  lineHeight: '1.45rem',
  borderRadius: 'var(--border-radius-1)',
  backgroundColor: 'var(--colors-foreground)',
  color: 'var(--token-keyword)',
  padding: '2px 8px',
  fontSize: 'var(--font-size-2)',
  fontWeight: 'var(--font-weight-2) !important',
  wordBreak: 'break-word',
  border: '1px solid var(--border-color)',
  boxShadow: Shadows[1],
});
