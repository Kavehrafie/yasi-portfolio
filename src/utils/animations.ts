const empty = {
  name: "",
  duration: "",
  easing: "",
  fillMode: 'forwards',
}

const SlideInAnim = {
  old: empty,
  new: {
    name: "slide-in",
    delay: "0.2s",
    duration: "0.5s",
    easing: "ease-in-out",
  },
};

export const slideIn = {
  forwards: SlideInAnim,
  backwards: SlideInAnim,
};

const ScaleOutAnim = {
  old:{
    name: "scale-out",
    duration: "0.5s",
    easing: "ease-in-out",
    fillMode: 'forwards',
  },
  new:
  empty,
};

export const scaleOut = {
  forwards: ScaleOutAnim,
  backwards: ScaleOutAnim,
};

const ScaleInAnim = {
  old:empty,
  new:{
    name: "scale-in",
    duration: "0.5s",
    easing: "ease-in-out",
    fillMode: 'backwards',
  },
};

export const scaleIn = {
  forwards: ScaleInAnim,
  backwards: ScaleInAnim,
};

// ----------------------

const gridForward = {
  old: {
    name: 'grid-morph',
    duration: '0.3s',
    easing: 'linear',
    fillMode: 'forward',
  },
  new: empty
};

const gridBackward = {
  old: {
    name: 'grid-morph-2',
    duration: '0.3s',
    easing: 'linear',
    fillMode: 'backwards',
  },
  new: empty
};
export const gridMorphIn = {
  forwards:   gridForward,
  backwards: gridForward,
};

export const gridMorphOut = {
  forwards:   gridBackward,
  backwards: gridBackward,
};

const growInAnimation = {
  old: {
    name: 'grow-in',
    duration: '0.3s',
    easing: 'linear',
    fillMode: 'forward',
  },
  new: empty
};
export const growIn = {
  forwards: growInAnimation,
  backwards: growInAnimation
}

const shrinkOutAnimation = {
  old: {
    name: 'shrink-out',
    duration: '0.3s',
    easing: 'linear',
    fillMode: 'backwards',
  },
  new: empty
};
export const shrinkOut = {
  forwards: shrinkOutAnimation,
  backwards: shrinkOutAnimation
}