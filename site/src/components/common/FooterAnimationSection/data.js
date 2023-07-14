import { ANIMATION_CARD_ALIGNMENT } from 'components/AnimatedDottedContainer';
import ArrowButton from 'components/ArrowButton';
import s from './FooterAnimationSection.module.scss';

export const getAnimatedItemList = (text, href, onClick) => {
  return [
    {
      id: 'footer_nav',
      ySourceValue: '-30%',
      yTransformValue: '-30%',
      hideLine: true,
    },
    {
      id: '2',
      ySourceValue: '-90%',
      yTransformValue: '-75%',
    },
    {
      id: '3',
      ySourceValue: '-90%',
      yTransformValue: '-75%',
    },
    {
      id: '4',
      ySourceValue: '-90%',
      yTransformValue: '-75%',
    },
    {
      id: '5',
      ySourceValue: '-42%',
      yTransformValue: '-50%',
      children: text && (
        <ArrowButton
          className={s.arrowButton}
          text={text}
          href={href}
          onClick={onClick}
        />
      ),
    },
    {
      id: '6',
      ySourceValue: '10%',
      yTransformValue: '85%',
      alignment: ANIMATION_CARD_ALIGNMENT.bottom,
    },
    {
      id: '7',
      ySourceValue: '40%',
      yTransformValue: '85%',
      alignment: ANIMATION_CARD_ALIGNMENT.bottom,
    },
    {
      id: '8',
      ySourceValue: '94%',
      yTransformValue: '85%',
      alignment: ANIMATION_CARD_ALIGNMENT.bottom,
    },
    {
      id: '9',
      ySourceValue: '55%',
      yTransformValue: '85%',
      alignment: ANIMATION_CARD_ALIGNMENT.bottom,
    },
    {
      id: '10',
      ySourceValue: '43%',
      yTransformValue: '85%',
      alignment: ANIMATION_CARD_ALIGNMENT.bottom,
    },
  ];
};
export const getAnimatedItemMobileList = (text, href, onClick) => {
  return [
    {
      id: 'footer_nav',
      ySourceValue: '-80%',
    },
    {
      id: 'm2',
      ySourceValue: '0%',
      children: text && (
        <ArrowButton
          className={s.arrowButton}
          text={text}
          href={href}
          onClick={onClick}
        />
      ),
    },
    {
      id: 'm3',
      ySourceValue: '100%',
    },
    {
      id: 'm4',
      ySourceValue: '100%',
    },
  ];
};
