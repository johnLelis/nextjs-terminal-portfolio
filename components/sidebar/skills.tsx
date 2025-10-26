const getCategoryColor = (category: string) => {
  const colors = {
    language:
      "dark:border-[#89b4fa] border-[#1e66f5] hover:dark:border-[#89b4fa] hover:border-[#1e66f5] hover:bg-[#1e66f5]/10 dark:hover:bg-[#89b4fa]/10",
    frontend:
      "dark:border-[#89dceb] border-[#209fb5] hover:dark:border-[#89dceb] hover:border-[#209fb5] hover:bg-[#209fb5]/10 dark:hover:bg-[#89dceb]/10",
    backend:
      "dark:border-[#a6e3a1] border-[#40a02b] hover:dark:border-[#a6e3a1] hover:border-[#40a02b] hover:bg-[#40a02b]/10 dark:hover:bg-[#a6e3a1]/10",
    database:
      "dark:border-[#f9e2af] border-[#df8e1d] hover:dark:border-[#f9e2af] hover:border-[#df8e1d] hover:bg-[#df8e1d]/10 dark:hover:bg-[#f9e2af]/10",
    devops:
      "dark:border-[#f5c2e7] border-[#ea76cb] hover:dark:border-[#f5c2e7] hover:border-[#ea76cb] hover:bg-[#ea76cb]/10 dark:hover:bg-[#f5c2e7]/10",
    cloud:
      "dark:border-[#cba6f7] border-[#8839ef] hover:dark:border-[#cba6f7] hover:border-[#8839ef] hover:bg-[#8839ef]/10 dark:hover:bg-[#cba6f7]/10",
    testing:
      "dark:border-[#f38ba8] border-[#d20f39] hover:dark:border-[#f38ba8] hover:border-[#d20f39] hover:bg-[#d20f39]/10 dark:hover:bg-[#f38ba8]/10",
  };
  return colors[category as keyof typeof colors] || colors.language;
};

const Skills = () => {
  const skills = [
    { name: "TypeScript", category: "language" },
    { name: "NodeJs", category: "backend" },
    { name: "ReactJs", category: "frontend" },
    { name: "NextJs", category: "frontend" },
    { name: "PostgreSQL", category: "database" },
    { name: "MsSql", category: "database" },
    { name: "NoSql", category: "database" },
    { name: "Docker", category: "devops" },
    { name: "Kubernetes", category: "devops" },
    { name: "DevSecOps", category: "devops" },
    { name: "CI/CD", category: "devops" },
    { name: "AWS", category: "cloud" },
    { name: "Azure", category: "cloud" },
    { name: "TailwindCss", category: "frontend" },
    { name: "Unit Testing", category: "testing" },
  ];
  return (
    <div className="space-y-2 sm:space-y-3">
      <h3 className={`text-blue text-xs sm:text-sm uppercase tracking-wider`}>
        Skills
      </h3>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {skills.map(({ name, category }, index) => (
          <span
            key={`${name}-${category}`}
            className={`px-1.5 sm:px-2 py-0.5 sm:py-1 bg-secondary text-primary text-[10px] sm:text-xs rounded border
   transition-all duration-200 hover:scale-110 hover:-translate-y-1
   hover:shadow-lg dark:hover:shadow-[#a6e3a1]/40 hover:shadow-[#40a02b]/40 
   cursor-default
   animate-in fade-in slide-in-from-bottom-2 
   ${getCategoryColor(category)}
   `}
            style={{
              animationDelay: `${index * 0.05}s`,
              animationFillMode: "backwards",
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Skills;
