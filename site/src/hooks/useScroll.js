export const useScroll = () => {
  const scrollToTop = () =>
    new Promise((resolve) => {
      window.scrollTo(0, 0)
      resolve(true)
    })

  const scrollTo = (target) =>
    new Promise((resolve) => {
      let element = target

      if (typeof target === 'string') {
        element = document.querySelector(target)
      }

      element.scrollIntoView({
        behavior: 'smooth',
      })
      setTimeout(() => {
        resolve(true)
      })
    })

  const disableScroll = () => {
    if (typeof window !== 'undefined') {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.marginRight = `${scrollbarWidth}px`
      document.body.style.overflow = 'hidden'
    }
  }

  const enableScroll = () => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'inherit'
      document.body.style.marginRight = '0'
    }
  }

  return { scrollTo, disableScroll, enableScroll, scrollToTop }
}
