import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Cloud,
  Code,
  Database,
  Globe,
  Palette,
  Server,
  Settings,
  Shield,
  Smartphone,
  Zap,
} from 'lucide-react';

interface TecStackProps {
  colors: string[];
}

const technologyCategories = [
  {
    title: 'Frontend Development',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'React', level: 'Expert', description: 'Modern UI library' },
      { name: 'Next.js', level: 'Expert', description: 'Full-stack React framework' },
      { name: 'Vue.js', level: 'Advanced', description: 'Progressive framework' },
      { name: 'Nuxt.js', level: 'Advanced', description: 'Vue.js framework' },
      { name: 'TypeScript', level: 'Expert', description: 'Type-safe JavaScript' },
      { name: 'Tailwind CSS', level: 'Expert', description: 'Utility-first CSS' },
      { name: 'HTML5/CSS3', level: 'Expert', description: 'Web standards' },
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'Flutter', level: 'Advanced', description: "Google's UI toolkit" },
      {
        name: 'Native Android',
        level: 'Advanced',
        description: 'Java/Kotlin development',
      },
      {
        name: 'Native iOS',
        level: 'Advanced',
        description: 'Swift/Objective-C development',
      },
      { name: 'Firebase', level: 'Advanced', description: 'Mobile backend services' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'Node.js', level: 'Expert', description: 'JavaScript runtime' },
      { name: 'NestJS', level: 'Advanced', description: 'Node.js framework' },
      { name: 'Python', level: 'Advanced', description: 'Django/Flask' },
      { name: 'Express.js', level: 'Expert', description: 'Node.js framework' },
      { name: 'REST API', level: 'Expert', description: 'API development' },
      { name: 'PHP', level: 'Advanced', description: 'Server-side scripting' },
      { name: 'CodeIgniter', level: 'Advanced', description: 'PHP framework' },
      { name: 'GraphQL', level: 'Intermediate', description: 'API query language' },
    ],
  },
  {
    title: 'Database Systems',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    technologies: [
      { name: 'MySQL', level: 'Expert', description: 'Relational database' },
      { name: 'PostgreSQL', level: 'Expert', description: 'Advanced SQL database' },
      { name: 'MongoDB', level: 'Advanced', description: 'NoSQL database' },
      { name: 'Redis', level: 'Advanced', description: 'In-memory data store' },
      { name: 'Firebase', level: 'Advanced', description: 'Real-time database' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-teal-500 to-blue-500',
    technologies: [
      { name: 'AWS', level: 'Advanced', description: 'Amazon Web Services' },
      { name: 'Google Cloud', level: 'Advanced', description: 'GCP platform' },
      { name: 'Azure', level: 'Intermediate', description: 'Microsoft cloud' },
      { name: 'Docker', level: 'Advanced', description: 'Containerization' },
      {
        name: 'Kubernetes',
        level: 'Intermediate',
        description: 'Container orchestration',
      },
      { name: 'CI/CD', level: 'Advanced', description: 'Automated deployment' },
    ],
  },
  {
    title: 'Security & Infrastructure',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    technologies: [
      { name: 'SSL/TLS', level: 'Expert', description: 'Encryption protocols' },
      { name: 'JWT', level: 'Expert', description: 'JSON Web Tokens' },
      { name: 'Firewall', level: 'Advanced', description: 'Network security' },
      { name: 'VPN', level: 'Advanced', description: 'Secure connections' },
      {
        name: 'Penetration Testing',
        level: 'Intermediate',
        description: 'Security testing',
      },
    ],
  },
];

const levelColors = {
  Expert: 'bg-green-100 text-green-800',
  Advanced: 'bg-blue-100 text-blue-800',
  Intermediate: 'bg-yellow-100 text-yellow-800',
};

const stats = [
  { number: '50+', label: 'Technologies Mastered' },
  { number: '100+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
  { number: '24/7', label: 'Technical Support' },
];

export default function TechnologyStack({ colors }: TecStackProps) {
  // Helper functions for style consistency
  const getGradientBg = () => `linear-gradient(135deg, ${colors.join(', ')})`;

  return (
    <section className='py-10'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Tech Stack Kami</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Teknologi modern dan proven yang kami gunakan untuk membangun solusi terbaik
          </p>
          <div
            className='mx-auto mt-4 h-1 w-16'
            style={{ background: getGradientBg() }}></div>
        </div>

        {/* Stats Section */}
        <div className='mt-12 grid grid-cols-2 gap-6 rounded-2xl bg-slate-100 p-8 lg:grid-cols-4'>
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-3xl font-bold text-sky-600 lg:text-4xl'>
                {stat.number}
              </div>
              <div className='mt-2 text-sm font-medium text-muted-foreground'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Categories */}
        <div className='mt-16 space-y-12'>
          {technologyCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex} className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <CategoryIcon className='h-6 w-6' />
                  </div>
                  <h3 className='text-2xl font-bold'>{category.title}</h3>
                </div>

                <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                  {category.technologies.map((tech, techIndex) => (
                    <Card
                      key={techIndex}
                      className='group transition-all duration-300 hover:shadow-lg'>
                      <CardHeader className='pb-3'>
                        <div className='flex items-center justify-between'>
                          <CardTitle className='text-lg'>{tech.name}</CardTitle>
                          <Badge
                            className={
                              levelColors[tech.level as keyof typeof levelColors]
                            }>
                            {tech.level}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className='pt-0'>
                        <p className='text-sm text-muted-foreground'>
                          {tech.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Tools & Services */}
        <div
          className='mt-16 rounded-2xl p-8 text-white'
          style={{ background: getGradientBg() }}>
          <div className='text-center'>
            <h3 className='text-2xl font-bold'>Tools & Development Environment</h3>
            <p className='mt-2 text-gray-100'>
              Professional tools yang kami gunakan untuk development dan deployment
            </p>
          </div>

          <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            <div className='text-center'>
              <div className='mb-3 flex justify-center'>
                <div className='rounded-full bg-white/20 p-3'>
                  <Code className='h-6 w-6' />
                </div>
              </div>
              <h4 className='font-semibold'>Development</h4>
              <p className='text-sm text-gray-100'>VS Code, Git, GitHub</p>
            </div>

            <div className='text-center'>
              <div className='mb-3 flex justify-center'>
                <div className='rounded-full bg-white/20 p-3'>
                  <Palette className='h-6 w-6' />
                </div>
              </div>
              <h4 className='font-semibold'>Design</h4>
              <p className='text-sm text-gray-100'>Figma, Adobe XD</p>
            </div>

            <div className='text-center'>
              <div className='mb-3 flex justify-center'>
                <div className='rounded-full bg-white/20 p-3'>
                  <Zap className='h-6 w-6' />
                </div>
              </div>
              <h4 className='font-semibold'>Testing</h4>
              <p className='text-sm text-gray-100'>Postman</p>
            </div>

            <div className='text-center'>
              <div className='mb-3 flex justify-center'>
                <div className='rounded-full bg-white/20 p-3'>
                  <Settings className='h-6 w-6' />
                </div>
              </div>
              <h4 className='font-semibold'>Monitoring</h4>
              <p className='text-sm text-gray-100'>Grafana, InfluxDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
