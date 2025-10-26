const ExperienceOutput = () => {
  return (
    <div
      className={`space-y-3 text-primary animate-in slide-in-from-left-4 duration-500`}
    >
      <div className="text-blue">$ git log --experience</div>
      <div className="space-y-4 pl-4">
        <div className={`space-y-1 border-l-2 border-green pl-3`}>
          <div className="text-yellow">Full-Stack Developer</div>
          <div className="text-cyan">
            Stratpoint Technologies | 2021 - Present
          </div>
          <div className={`text-secondary text-sm mt-1 space-y-1`}>
            <div>
              • Built and deployed production applications using NextJs, NestJS,
              and ExpressJcons with RESTful APIs
            </div>
            <div>
              • Developed banking features integrating BPI, Landbank, and
              Unionbank APIs with comprehensive Swagger documentation
            </div>
            <div>
              • Established CI/CD pipelines deploying to AWS/Kubernetes with
              Docker containerization
            </div>
            <div>
              • Implemented JWT authentication, OAuth integrations, and
              PostgreSQL/MSSQL database solutions
            </div>
            <div>
              • Conducted code reviews via GitLab and wrote unit tests using
              Jest/Mocha
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceOutput;
