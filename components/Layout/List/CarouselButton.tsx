import React, { forwardRef } from 'react';

const CarouselButton = forwardRef<
  HTMLButtonElement,
  {
    controlSide: string;
    children: JSX.Element;
  }
>(({ controlSide, children }, ref) => (
  <button className={`slider__button`} data-control={controlSide} ref={ref}>
    {children}
  </button>
));

CarouselButton.displayName = 'CarouselButton';

export default CarouselButton;
