import { motion } from 'framer-motion';
import { MapPin, Calendar, Coffee, Gamepad2 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal.ts';

const BentoCard = ({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`bento-card ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {/* Main bio card - spans 4 columns */}
          <BentoCard className="md:col-span-4 md:row-span-2" delay={0}>
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">
                Turning ideas into reality through code
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I’m a passionate frontend developer with 2+ years of experience building
                responsive, user-focused web interfaces. My journey started with curiosity
                about how websites work and evolved into a strong focus on crafting clean,
                intuitive, and performant user experiences.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                I specialize in React and TypeScript, with a strong emphasis on modern UI
                development, accessibility, and smooth interactions. I enjoy turning complex
                requirements into elegant, scalable interfaces that feel great to use.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                Outside of coding, I explore new frontend technologies, refine my design sense,
                contribute to open-source projects, and share what I learn through writing and
                mentoring.
                </p>

            </div>
          </BentoCard>

          {/* Location card */}
          <BentoCard className="md:col-span-2" delay={0.1}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Based in</p>
                <p className="font-semibold">Moscow, RU</p>
              </div>
            </div>
          </BentoCard>

          {/* Experience card */}
          <BentoCard className="md:col-span-2" delay={0.2}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="font-semibold">2+ Years</p>
              </div>
            </div>
          </BentoCard>

          {/* Fun facts - coffee */}
          <BentoCard className="md:col-span-3" delay={0.3}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Coffee className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fueled by</p>
                <p className="font-semibold">2,847 cups of Milkshakes (and counting)</p>
              </div>
            </div>
          </BentoCard>

          {/* Fun facts - hobbies */}
          <BentoCard className="md:col-span-3" delay={0.4}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Gamepad2 className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">After hours</p>
                <p className="font-semibold">Gaming, Photography & Movies</p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};
