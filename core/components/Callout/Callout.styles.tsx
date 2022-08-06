import { styled } from 'lib/stitches.config';

export const StyledCalloutIconWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-16px',
  borderRadius: '50%',
  padding: '8px',
  color: 'var(--colors-body)',
  border: '8px solid var(--colors-body)',
  background: 'var(--icon-background, var(--colors-body))',

  variants: {
    variant: {
      info: {
        '--icon-background': 'var(--colors-brand)',
      },
      danger: {
        '--icon-background': 'var(--colors-danger)',
      },
    },
  },
});

export const StyledCalloutLabelWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-8px',
  borderRadius: 'var(--border-radius-1)',
  padding: '8px',
  color: 'var(--colors-body)',
  fontSize: 'var(--font-size-1)',
  fontWeight: 'var(--font-weight-3)',
  userSelect: 'none',
  background: 'var(--icon-background, var(--colors-body))',

  variants: {
    variant: {
      info: {
        '--icon-background': 'var(--colors-brand)',
      },
      danger: {
        '--icon-background': 'var(--colors-danger)',
      },
    },
  },
});

export const StyledCallout = styled('aside', {
  '*:last-child': {
    marginBottom: '0px',
  },

  position: 'relative',
  padding: '30px 30px',
  marginBottom: '2.25rem',
  borderRadius: 'var(--border-radius-1)',
  color: 'var(--colors-typeface-primary)',
  border: '1px solid var(--colors-emphasis)',
  background: 'var(--callout-background, var(--colors-emphasis))',

  variants: {
    variant: {
      info: {
        '--callout-background': 'var(--colors-emphasis)',
      },
      danger: {
        '--callout-background': 'var(--colors-danger-emphasis)',
      },
    },
  },
});
