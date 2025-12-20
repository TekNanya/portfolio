import { motion } from 'framer-motion';

interface DeviceMockupProps {
  image: string;
  alt: string;
  type?: 'laptop' | 'phone';
}

export const DeviceMockup = ({ image, alt, type = 'laptop' }: DeviceMockupProps) => {
  if (type === 'phone') {
    return (
      <motion.div
        className="relative device-3d"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Phone frame */}
        <div className="relative w-48 h-96 bg-slate-800 rounded-[2.5rem] p-2 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-800 rounded-full z-10" />
          {/* Screen */}
          <div className="w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden">
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative device-3d w-full max-w-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Laptop screen */}
      <div className="relative bg-slate-800 rounded-t-xl p-2 pt-6 shadow-2xl">
        {/* Camera dot */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-700" />
        {/* Screen */}
        <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      {/* Laptop base */}
      <div className="relative">
        <div className="h-4 bg-slate-700 rounded-b-lg" />
        <div className="h-1 bg-slate-600 rounded-b-xl mx-8" />
      </div>
      {/* Shadow/glow effect */}
      <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
    </motion.div>
  );
};
