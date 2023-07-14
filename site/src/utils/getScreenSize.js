export const getScreenHeight = () => {
  if (window.innerHeight) {
    return window.innerHeight;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientHeight;
  }

  return document.body.clientHeight;
};

export const getScreenWidth = () => {
  if (window.innerWidth) {
    return window.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  return document.body.clientWidth;
};
