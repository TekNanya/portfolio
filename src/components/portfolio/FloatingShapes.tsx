import { motion } from 'framer-motion';

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
 
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(199 89% 48% / 0.4), transparent 70%)',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

     
      <motion.div
        className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(168 76% 42% / 0.5), transparent 70%)',
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

     
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotateX: { duration: 20, repeat: Infinity, ease: 'linear' },
          rotateY: { duration: 15, repeat: Infinity, ease: 'linear' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div
          className="absolute inset-0 rounded-lg border-2 border-primary/30 bg-primary/10"
          style={{ transform: 'translateZ(8px)' }}
        />
      </motion.div>

      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full border-4 border-accent/20"
        animate={{
          rotate: [0, 360],
          y: [0, -30, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

     
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-primary/40"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      
      <motion.div
        className="absolute top-1/2 right-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-2/3 left-20 w-px h-24 bg-gradient-to-b from-transparent via-accent/30 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
};
