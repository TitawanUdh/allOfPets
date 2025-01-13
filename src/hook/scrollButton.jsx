import { useCallback } from 'react';

export default function useScrollButton(sectionRef) {
  const scrollToSection = useCallback(() => {
    const target = sectionRef.current;
    if (!target) return;

    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const duration = 1000;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(
        timeElapsed,
        startPosition,
        targetPosition - startPosition,
        duration
      );

      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, [sectionRef]);

  return scrollToSection;
}