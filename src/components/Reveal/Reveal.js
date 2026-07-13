import { useEffect, useRef } from "react";

/**
 * Scroll-reveal wrapper: fades/rises children into view once,
 * when they enter the viewport. Stagger siblings via `delay` (s).
 */
function Reveal({ children, delay = 0, className = "", style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`sb-reveal ${className}`}
      style={{ "--sb-reveal-delay": `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

export default Reveal;
