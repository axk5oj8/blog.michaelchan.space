import { PillProps } from './Pill.types';
import { StyledPill } from './Pill.styles';
import { useTheme } from '@theme/hooks';

const Pill = (props: PillProps) => {
  const theme = useTheme();
  const { children, variant } = props;
  return (
    <StyledPill {...props} dark={theme.dark} variant={variant}>
      {children}
    </StyledPill>
  );
};

export default Pill;
