import { func, string } from 'prop-types';
import cx from 'classnames';

import Button from 'components/Button';

import s from './TagButton.module.scss';

const TagButton = ({ tag, className, onClick }) => {
  return onClick ? (
    <Button
      cbData={tag}
      onClick={onClick}
      className={cx(s.root, className)}
    >
      {tag}
    </Button>
  ) : (
    <Button
      className={cx(s.root, className)}
      href={`/blog/tag/${tag}`}
    >
      {tag}
    </Button>
  );
};

TagButton.propTypes = {
  className: string,
  tag: string,
  onClick: func,
};

export default TagButton;
