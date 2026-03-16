'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Total Peserta', value: 500, suffix: '+' },
  { label: 'Event Berjalan', value: 12, suffix: '' },
  { label: 'Tingkat Kepuasan', value: 98, suffix: '%' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 detik
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Events() {
  return (
    <section className="py-24 px-6 bg-[#4d0011]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="font-classic text-6xl md:text-7xl mb-2 text-[#fcf6ba]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <p className="font-modern text-stone-300 uppercase tracking-[0.2em] text-xs md:text-sm">
                {stat.label}
              </p>
              
              <div className="h-[2px] w-12 bg-[#bf953f] mt-4 opacity-50" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="font-modern text-stone-400 max-w-2xl mx-auto italic text-sm md:text-base leading-relaxed">
            "Bukan sekadar perkumpulan, tapi ekosistem nyata perempuan muslimah yang aktif, loyal, dan terus bertumbuh di setiap pertemuannya."
          </p>
        </motion.div>
      </div>
    </section>
  );
}