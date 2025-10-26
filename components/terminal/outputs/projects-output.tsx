const ProjectsOutput = () => {
  return (
    <div
      className={`space-y-3 text-primary animate-in slide-in-from-left-4 duration-500`}
    >
      <div className="text-blue">$ ls projects/</div>
      <div className="space-y-4 pl-4">
        <div className="space-y-1">
          <div className="text-yellow">📦 Next.js 15 Boilerplate</div>
          <div className={`text-secondary text-sm pl-4`}>
            A production-ready starter template for Next.js 15 with app router,
            server actions, and best practices
          </div>
          <div className={`text-cyan text-sm pl-4`}>
            Repo:
            <a
              href="https://github.com/johnLelis/nextjs-boilerplate-v2"
              className="underline text-cyan-400"
            >
              johnLelis/nextjs-boilerplate-v2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsOutput;
