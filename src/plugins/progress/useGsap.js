import { gsap } from 'gsap';

export function useGsap(tweenedRef, options) {
  let tween;
  return {
    start({ from, to }) {
      if (tween) {
        tween.kill();
      }
      if (to !== undefined && from !== undefined) {
        tween = gsap.fromTo(tweenedRef, { value: from }, { value: to, ...options });
      } else if (to !== undefined) {
        tween = gsap.to(tweenedRef, { value: to, ...options });
      } else if (from !== undefined) {
        tween = gsap.from(tweenedRef, { value: from, ...options });
      }
      return tween;
    },
    getTween: () => tween,
  };
}
