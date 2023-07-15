import { ANIMATION_CARD_ALIGNMENT } from 'components/AnimatedDottedContainer';
import ArrowButton from 'components/ArrowButton';
import { IntroDescription } from 'components/IntroAnimation';
import s from './Intro.module.scss';

export const animatedItemList = [
  {
    id: 'z1',
    ySourceValue: '-32%',
    yTransformValue: '-99%',
  },
  {
    id: 'z2',
    ySourceValue: '-12%',
    yTransformValue: '-115%',
  },
  {
    id: 'z3',
    ySourceValue: '-64%',
    yTransformValue: '-99%',
    children: isCompleted => (
      <IntroDescription
        className={s.description}
        text="Get high-performance circuits straight from C++, Rust, or other mainstream code using this powerful tool designed for developers."
        isVisible={isCompleted}
      />
    ),
  },
  {
    id: 'z4',
    ySourceValue: '-28%',
    yTransformValue: '-99%',
  },
  {
    id: 'z5',
    ySourceValue: '-20%',
    yTransformValue: '-80%',
  },
  {
    id: 'z6',
    ySourceValue: '-48%',
    yTransformValue: '-99%',
  },
  {
    id: 'z7',
    ySourceValue: '-86%',
    yTransformValue: '-99%',
  },
  {
    id: 'z8',
    ySourceValue: '20%',
    yTransformValue: '70%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z0',
    ySourceValue: '14%',
    yTransformValue: '70%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z10',
    ySourceValue: '32%',
    yTransformValue: '70%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z11',
    ySourceValue: '40%',
    yTransformValue: '70%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z12',
    ySourceValue: '30%',
    yTransformValue: '70%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z13',
    ySourceValue: '46%',
    yTransformValue: '70%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
  {
    id: 'z14',
    ySourceValue: '42%',
    yTransformValue: '70%',
    alignment: ANIMATION_CARD_ALIGNMENT.bottom,
  },
];

export const animatedItemMobileList = [
  {
    id: 'm1',
    ySourceValue: '-30%',
    children: (
      <ArrowButton
        className={s.link}
        text="Discover zkLLVM"
        href="https://github.com/NilFoundation/zkllvm"
      />
    ),
  },
  {
    id: 'm2',
    ySourceValue: '-60%',
    yTransformValue: '-50%',
  },
  {
    id: 'm3',
    ySourceValue: '-40%',
    yTransformValue: '-90%',
  },
];
