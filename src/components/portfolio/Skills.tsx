import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.ts';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

const skills: Skill[] = [
  { name: 'React', icon: '⚛️', category: 'frontend', color: 'from-blue-400 to-cyan-400' },
  { name: 'TypeScript', icon: '📘', category: 'frontend', color: 'from-blue-500 to-blue-600' },
  { name: 'Next.js', icon: '▲', category: 'frontend', color: 'from-gray-600 to-gray-800' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'frontend', color: 'from-teal-400 to-cyan-500' },
  { name: 'Node.js', icon: '🟢', category: 'backend', color: 'from-green-500 to-green-600' },
  { name: 'PostgreSQL', icon: '🐘', category: 'backend', color: 'from-blue-600 to-indigo-600' },
  { name: 'GraphQL', icon: '◈', category: 'backend', color: 'from-pink-500 to-purple-500' },
  { name: 'Python', icon: '🐍', category: 'backend', color: 'from-yellow-400 to-blue-500' },
  { name: 'Git', icon: '🔀', category: 'tools', color: 'from-orange-500 to-red-500' },
  { name: 'Docker', icon: '🐳', category: 'tools', color: 'from-blue-400 to-blue-600' },
  { name: 'AWS', icon: '☁️', category: 'tools', color: 'from-orange-400 to-yellow-500' },
  { name: 'Figma', icon: '🎭', category: 'tools', color: 'from-purple-500 to-pink-500' },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="group relative"
    >
      <div className="bento-card p-4 flex flex-col items-center gap-3 group-hover:border-primary/30 transition-colors">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-lg`}>
          {skill.icon}
        </div>
        <span className="font-medium text-sm text-center">{skill.name}</span>
      </div>
    </motion.div>
  );
};

const CategorySection = ({
  title,
  skills,
  startIndex,
}: {
  title: string;
  skills: Skill[];
  startIndex: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div>
      <motion.h3
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-lg font-semibold mb-4 text-muted-foreground"
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={startIndex + i} />
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  const frontendSkills = skills.filter((s) => s.category === 'frontend');
  const backendSkills = skills.filter((s) => s.category === 'backend');
  const toolsSkills = skills.filter((s) => s.category === 'tools');

  return (
    <section id="skills" className="py-24 gradient-subtle">
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
            My toolkit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I work with a variety of technologies to bring ideas to life.
            Here are some of my favorites.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="max-w-4xl mx-auto space-y-12">
          <CategorySection
            title="Frontend Development"
            skills={frontendSkills}
            startIndex={0}
          />
          <CategorySection
            title="Backend Development"
            skills={backendSkills}
            startIndex={frontendSkills.length}
          />
          <CategorySection
            title="Tools & Platforms"
            skills={toolsSkills}
            startIndex={frontendSkills.length + backendSkills.length}
          />
        </div>
      </div>
    </section>
  );
};
