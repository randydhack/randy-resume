export const fadeInAnimationVariantsLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * i,
    },
    threshold: 3,
  }),
};

export const imageAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
    },
    threshold: 0.5,
  }),
};

export const fadeInAnimationVariantsRight = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * i,
    },
    threshold: 0.5,
  }),
};
