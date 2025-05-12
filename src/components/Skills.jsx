const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'threejs', level: 65 },
  ];
  
  export default function Skills() {
    return (
      <section id="skills" className="py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }