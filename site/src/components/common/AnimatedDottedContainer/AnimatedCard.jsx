import React, { useEffect, useRef, useState } from 'react';
import WhiteRectangle from 'components/WhiteRectangle';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { gsap } from 'gsap';
import s from './AnimatedDottedContainer.module.scss';

export const ANIMATION_CARD_ALIGNMENT = Object.freeze({
  top: 'top',
  bottom: 'bottom',
});

const AnimatedCard = ({
  alignment,
  duration,
  ySourceValue,
  yTransformValue,
  timeline,
  onComplete,
  isVisible,
  hideLine,
  className,
  children,
  ...props
}) => {
  const containerRef = useRef(null);
  const [isCompleted, setCompleted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !isVisible) {
      return;
    }

    const tween = gsap.fromTo(
      container,
      { y: '0' },
      {
        y: ySourceValue,
        duration,
        ease: 'expo.out',
        onComplete: () => {
          setCompleted(true);
          onComplete?.();
        },
      }
    );

    return () => {
      if (tween) {
        tween.kill();
      }
    };
  }, [containerRef, ySourceValue, isVisible]);

  useEffect(() => {
    const container = containerRef.current;

    if (timeline && container && isCompleted && yTransformValue) {
      timeline.to(
        container,
        {
          y: yTransformValue,
          ease: 'sine.out',
        },
        '<'
      );
    }
  }, [timeline, isCompleted, yTransformValue]);

  return (
    <div className={s.cardWrapper}>
      <div
        ref={containerRef}
        {...props}
        className={classNames(
          s.card,
          alignment === 'top' ? s.cardTop : s.cardBottom,
          className
        )}
      >
        {typeof children === 'function' ? children(isCompleted) : children}
        {!hideLine && <WhiteRectangle className={s.line} />}
      </div>
    </div>
  );
};

AnimatedCard.propTypes = {
  duration: PropTypes.number,
  ySourceValue: PropTypes.string,
  yTransformValue: PropTypes.string,
  timeline: PropTypes.any,
  alignment: PropTypes.oneOf(Object.values(ANIMATION_CARD_ALIGNMENT)),
  onComplete: PropTypes.func,
  isVisible: PropTypes.bool,
  hideLine: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
};

AnimatedCard.defaultProps = {
  duration: 0.8,
  alignment: ANIMATION_CARD_ALIGNMENT.top,
  isVisible: true,
};

export default AnimatedCard;
