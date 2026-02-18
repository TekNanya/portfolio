import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { DeviceMockup } from '../portfolio/DeviceMockup.tsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.ts';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 5,
    title: 'Enterprise E-Commerce System',
    description: 'A robust e-commerce platform built with ASP.NET Core and SQL Server, featuring secure identity management, complex product querying, and a high-performance C# backend.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework', 'React'],
    liveUrl: 'https://github.com/TekNanya/Emart', 
    githubUrl: 'https://github.com/TekNanya/Emart',
    featured: true,
  },
  {
    id: 1,
    title: 'CloudSync Dashboard',
    description: 'A modern SaaS dashboard for managing cloud infrastructure with real-time monitoring, automated deployments, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'FinTrack',
    description: 'Personal finance tracking app with expense categorization, budget planning, and interactive charts for financial insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Prisma', 'Tailwind', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'DevConnect',
    description: 'Social platform for developers to share projects, collaborate on code, and network with other professionals in the tech industry.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    tags: ['React', 'GraphQL', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'EcoShop',
    description: 'Sustainable e-commerce platform focused on eco-friendly products with carbon footprint tracking and green shipping options.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Stripe', 'Sanity CMS', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        !isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className={`${!isEven ? 'lg:order-2' : ''}`}>
        <DeviceMockup image={project.image} alt={project.title} />
      </div>

      <div className={`${!isEven ? 'lg:order-1' : ''}`}>
        {project.featured && (
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">
            Featured Project
          </Badge>
        )}
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Button asChild className="gradient-primary text-primary-foreground hover:opacity-90">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" asChild className="border-primary/30 hover:bg-primary/5">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            My work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion
            for building great software.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-24">
          {/* Removed .slice(0, 4) to show all projects including the new one */}
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
