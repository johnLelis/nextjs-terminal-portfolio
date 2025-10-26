const SkillsOutput = () => {
  const skills = {
    languages: ["JavaScript/TypeScript"],
    frontend: ["ReactJs", "NextJs", "Tailwind CSS"],
    backend: ["NodeJs", "Express", "NestJs", "Awilix", "PostgreSQL", "MongoDB"],
    auth: ["Better-Auth", "JWT", "OAuth"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
    currently_learning: ["Three.js", "AI/ML Integration", "Framer Motion"],
  };

  return (
    <div className="space-y-3 text-primary">
      <div className="text-blue">$ cat skills.json</div>
      <div className="pl-4 space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-2">
            <div className="text-yellow">{category}:</div>
            <div className="flex flex-wrap gap-2 pl-4">
              {items.map(skill => (
                <span
                  key={skill}
                  className="px-2 py-1 text-xs border border-blue dark:bg-[#313244] bg-[#e6e9ef] rounded
                           hover:scale-110 hover:border-green transition-all duration-200 cursor-default
                           hover:shadow-lg dark:hover:shadow-[#a6e3a1]/20 hover:shadow-[#40a02b]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillsOutput;
