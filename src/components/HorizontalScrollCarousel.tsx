
"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const HorizontalScrollCarousel = ({ items }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-start overflow-hidden pt-20">
        <motion.div style={{ x }} className="flex gap-4">
          {items.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ item }) => {
  return (
    <div
      key={item.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="absolute inset-0 z-0 object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};
