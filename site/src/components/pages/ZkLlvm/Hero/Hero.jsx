import { useRef, useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import cx from 'classnames';
import lottie from 'lottie-web';

import * as animationData from 'lottie/zklm.json';

import { useViewport } from 'hooks/useViewport';

import HeadingSection from 'components/HeadingSection';
import WhiteRectangle from 'components/WhiteRectangle';
import ListItem from 'components/ListItem';

import s from './Hero.module.scss';

const Hero = ({ className, data: { title, description, info, list } }) => {
  const lottieRef = useRef(null);
  const lottieInstance = useRef(null);
  const { isMobile } = useViewport();

  useEffect(() => {
    lottieInstance.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => lottieInstance.current.destroy();
  }, []);

  return (
    <div className={cx(s.root, className)}>
      <div className={s.left}>
        <HeadingSection
          className={s.heading}
          title={title}
          description={description}
        />
        <div className={s.box}>
          {!isMobile && <WhiteRectangle className={s.line} />}
          <div className={s.info}>
            <p>{info}</p>
            {!isMobile && <WhiteRectangle />}
          </div>
        </div>
      </div>

      <div className={s.right}>
        <div
          className={s.lottieWrapper}
          ref={lottieRef}
        />
        <div className={s.list}>
          {list.map(el => (
            <ListItem
              className={s.item}
              key={el}
              title={el}
            />
          ))}
        </div>
        <WhiteRectangle />
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: string,
  data: shape({
    title: string,
    description: string,
    info: string,
    list: arrayOf(string),
  }),
};

export default Hero;
