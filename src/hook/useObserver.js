import { useEffect } from "react";

export const useObserver = (targetRef, callback) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback();
    });
    if (targetRef.current) observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef, callback]);
};
