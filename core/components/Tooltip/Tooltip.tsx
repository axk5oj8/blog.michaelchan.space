import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import VisuallyHidden from '../VisuallyHidden';
import {
  DEFAULT_TOOLTIP_DELAY,
  DEFAULT_TOOLTIP_SIDE,
  DEFAULT_TOOLTIP_SIDE_OFFSET,
} from './Tooltip.constants';
import { TooltipContent } from './Tooltip.styles';
import { TooltipProps } from './Tooltip.types';

const Tooltip = (props: TooltipProps) => {
  const {
    children,
    content,
    delayDuration = DEFAULT_TOOLTIP_DELAY,
    id,
    side = DEFAULT_TOOLTIP_SIDE,
    sideOffset = DEFAULT_TOOLTIP_SIDE_OFFSET,
    visuallyHiddenText,
  } = props;
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={delayDuration}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipContent id={id} side={side} sideOffset={sideOffset}>
          {content}
          {visuallyHiddenText ? (
            <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
          ) : null}
        </TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
