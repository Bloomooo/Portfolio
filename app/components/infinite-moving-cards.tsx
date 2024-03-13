import { cn } from "../../util/cn";
import React, { useEffect, useRef } from "react";
import { InfiniteMovingCardsProps } from "../interface/props";
import Image from "next/image";

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const duplicatedItems = [...items, ...items];
    scroller.innerHTML = "";
    duplicatedItems.forEach((item) => {
      const li = document.createElement("li");

      li.innerHTML = `<blockquote><img src="${item.quote}" alt="${item.name}" /></blockquote>`;
      const img = li.querySelector("img");

      if (img) {
        img.style.maxWidth = "30vh";
        img.style.maxHeight = "10vh";
        img.style.width = "auto";
        img.style.height = "auto";
        img.style.objectFit = "cover";
      }
      scroller.appendChild(li);
    });

    let animationFrameId: number;
    const tick = () => {
      const speedAdjustment = speed === "fast" ? 2 : speed === "slow" ? 0.5 : 1;
      const newPosition =
        direction === "left"
          ? scroller.scrollLeft + speedAdjustment
          : scroller.scrollLeft - speedAdjustment;
      scroller.scrollLeft = newPosition;

      const resetPosition = direction === "left" ? 0 : scroller.scrollWidth / 2;
      if (direction === "left" && newPosition >= scroller.scrollWidth / 2) {
        scroller.scrollLeft = resetPosition;
      } else if (direction === "right" && newPosition <= 0) {
        scroller.scrollLeft = scroller.scrollWidth / 2;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [items, speed, direction]);

  return (
    <div
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-8 py-4 w-max flex-nowrap animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={item.name} className="mb-4">
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <img
                src={item.quote}
                alt={item.name}
                style={{
                  maxWidth: "30vh",
                  maxHeight: "10vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "cover",
                }}
                className="rounded-lg shadow-lg"
              />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
