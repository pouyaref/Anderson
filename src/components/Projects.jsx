const projects = [
  {
    title: 'CryptoPrice Tracker',
    description: 'Real-time cryptocurrency tracking dashboard with price alerts, portfolio management, and interactive charts. Integrated with 10+ exchanges.',
    tags: ['React', 'Firebase', 'WebSockets', 'Tailwind CSS'],
    link: '#',
    metrics: '15K+ monthly users'
  },
  {
    title: 'E-Commerce Analytics Suite',
    description: 'Comprehensive analytics platform for Shopify stores with customer behavior tracking, sales forecasting, and automated reporting.',
    tags: ['Node.js', 'MongoDB', 'Data Visualization', 'AWS'],
    link: '#',
    metrics: 'Used by 200+ stores'
  },
  {
    title: 'AI Content Moderator',
    description: 'Automated moderation system for user-generated content using computer vision and NLP, reducing manual review time by 80%.',
    tags: ['Python', 'TensorFlow', 'Flask', 'Cloud Functions'],
    link: '#',
    metrics: 'Processes 5M+ posts/month'
  }
];

export default function Projects() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Commercial Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Selected professional solutions I've developed for clients across various industries
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{project.metrics}</p>
                  <a 
                    href={project.link} 
                    className="mt-2 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
                    aria-label={`View ${project.title} details`}
                  >
                    View case study
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}