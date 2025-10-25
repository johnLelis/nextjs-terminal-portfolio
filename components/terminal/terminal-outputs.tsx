export function WelcomeMessage() {
  return (
    <div className={`text-primary space-y-2 animate-in fade-in duration-500`}>
      <div className="overflow-x-auto">
        <pre
          className={`dark:text-[#89b4fa] text-[#1e66f5] text-[8px] xs:text-[10px] sm:text-xs whitespace-pre`}
        >
          {`
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
`}
        </pre>
      </div>
      <div className="dark:text-[#a6e3a1] text-[#179299]">
        Welcome to my interactive portfolio terminal!
      </div>
      <div className="dark:text-[#cdd6f4] text-[#3c3f57]">
        Type{" "}
        <span className="dark:text-[#f9e2af] text-[#df8e1d]">{"help"}</span> to
        see available commands.
      </div>
    </div>
  );
}

export function HelpOutput() {
  return (
    <div className="space-y-2 text-primary animate-in slide-in-from-bottom-2 duration-300">
      <div className="text-blue mb-3">Available Commands:</div>
      <div className="grid grid-cols-1 gap-2">
        <div className="flex gap-3">
          <span className={`text-green w-24`}>about</span>
          <span className="text-secondary">Learn more about me</span>
        </div>
        <div className="flex gap-3">
          <span className={`text-green w-24`}>skills</span>
          <span className="text-secondary">View my technical skills</span>
        </div>
        <div className="flex gap-3">
          <span className={`text-green w-24`}>projects</span>
          <span className="text-secondary">Check out my projects</span>
        </div>
        <div className="flex gap-3">
          <span className={`text-green w-24`}>experience</span>
          <span className="text-secondary">View my work experience</span>
        </div>
        <div className="flex gap-3">
          <span className={`text-green w-24`}>contact</span>
          <span className="text-secondary">Get my contact information</span>
        </div>
        <div className="flex gap-3">
          <span className={`text-green w-24`}>theme</span>
          <span className="text-secondary">
            Change theme (dark, light, system)
          </span>
        </div>
        <div className="flex gap-3">
          <span className={`text-green w-24`}>clear</span>
          <span className="text-secondary">Clear the terminal</span>
        </div>
        <div className="flex gap-3">
          <span className={`text-green w-24`}>whoami</span>
          <span className="text-secondary">Display current user</span>
        </div>
        <div className="flex gap-3">
          <span className={`text-green w-24`}>ls</span>
          <span className="text-secondary">List directory contents</span>
        </div>
      </div>
    </div>
  );
}

export function AboutOutput() {
  return (
    <div
      className={`space-y-3 text-primary animate-in slide-in-from-left-4 duration-500`}
    >
      <div className="text-blue">$ cat about.txt</div>
      <div className={`space-y-2 pl-4 border-l-2 border-blue`}>
        <p className="text-pink">{`Hey there! I'm a Full-Stack Developer 👋`}</p>
        <p>
          {`I'm passionate about creating elegant solutions to complex problems.
          With a strong foundation in both frontend and backend technologies, I
          love building web applications that are not only functional but also
          delightful to use.`}
        </p>
        <p>
          {`  When I'm not building software, you'll find me exploring new tech,
          playing chess, or grinding ranked in Dota 2.`}
        </p>
        <p className="text-green">
          🎯 Currently focused on modern web technologies and cloud architecture
        </p>
      </div>
    </div>
  );
}

export function SkillsOutput() {
  return (
    <div
      className={`space-y-3 text-primary animate-in slide-in-from-left-4 duration-500`}
    >
      <div className="text-blue">$ cat skills.json</div>
      <div className="pl-4">
        <pre>
          {`{
  "languages": [
    "JavaScript/TypeScript"
  ],
  "frontend": [
    "ReactJs", "NextJs", "Tailwind CSS"
  ],
  "backend": [
    "NodeJs", "Express", "NestJs", "Awilix", "PostgreSQL", "MongoDB"
  ],
  "auth": [
    "Better-Auth", "JWT", "OAuth"
  ],
  "tools": [
    "Git", "Docker", "AWS", "Vercel", "Figma"
  ],
  "currently_learning": [
    "Three.js", "AI/ML Integration", "Framer Motion"
  ]
}`}
        </pre>
      </div>
    </div>
  );
}

export function ProjectsOutput() {
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
}

export function ExperienceOutput() {
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
}

export function ContactOutput() {
  return (
    <div
      className={`space-y-3 text-primary animate-in slide-in-from-left-4 duration-500`}
    >
      <div className="text-blue">$ cat contact.md</div>
      <div className={`space-y-2 pl-4 border-l-2 border-green`}>
        <div className="text-pink">{`📫 Let's Connect!`}</div>
        <div className="space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-cyan">Email:</span>
            <a
              href="mailto:johnstephene.lelis@gmail.com"
              className="text-yellow hover:underline"
            >
              johnstephene.lelis@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan">GitHub:</span>
            <a
              href="https://github.com/johnLelis"
              className="text-yellow hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/johnLelis
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/john-stephene-lelis/"
              className="text-yellow hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/john-stephene-lelis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
