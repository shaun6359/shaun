import { useEffect } from "react";

const MouseEffect = () => {
  useEffect(() => {
    const createRipple = (event: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      document.body.appendChild(ripple);

      const rect = ripple.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - size/2}px`;
      ripple.style.top = `${event.clientY - size/2}px`;

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    };

    const createTrail = (event: MouseEvent) => {
      const trail = document.createElement("div");
      trail.className = "mouse-trail";
      trail.style.left = `${event.clientX}px`;
      trail.style.top = `${event.clientY}px`;
      document.body.appendChild(trail);

      setTimeout(() => trail.remove(), 500);
    };

    window.addEventListener("click", createRipple);
    window.addEventListener("mousemove", createTrail);

    return () => {
      window.removeEventListener("click", createRipple);
      window.removeEventListener("mousemove", createTrail);
    };
  }, []);

  return null;
};

export default MouseEffect;