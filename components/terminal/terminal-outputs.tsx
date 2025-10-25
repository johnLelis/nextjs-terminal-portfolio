export function WelcomeMessage({ theme }: { theme: "dark" | "light" }) {
  const textPrimary = theme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]";

  return (
    <div className={`${textPrimary} space-y-2`}>
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

export function HelpOutput({ theme }: { theme: "dark" | "light" }) {
  const textPrimary = theme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]";
  const textSecondary = theme === "dark" ? "text-[#bac2de]" : "text-[#5c5f77]";
  const textBlue = theme === "dark" ? "text-[#89b4fa]" : "text-[#1e66f5]";
  const textGreen = theme === "dark" ? "text-[#a6e3a1]" : "text-[#40a02b]";

  return (
    <div className={`space-y-2 ${textPrimary}`}>
      <div className={`${textBlue} mb-3`}>Available Commands:</div>
      <div className="grid grid-cols-1 gap-2">
        <div className="flex gap-3">
          <span className={`${textGreen} w-24`}>about</span>
          <span className={textSecondary}>Learn more about me</span>
        </div>
        <div className="flex gap-3">
          <span className={`${textGreen} w-24`}>skills</span>
          <span className={textSecondary}>View my technical skills</span>
        </div>
        <div className="flex gap-3">
          <span className={`${textGreen} w-24`}>projects</span>
          <span className={textSecondary}>Check out my projects</span>
        </div>
        <div className="flex gap-3">
          <span className={`${textGreen} w-24`}>experience</span>
          <span className={textSecondary}>View my work experience</span>
        </div>
        <div className="flex gap-3">
          <span className={`${textGreen} w-24`}>contact</span>
          <span className={textSecondary}>Get my contact information</span>
        </div>
        <div className="flex gap-3">
          <span className={`${textGreen} w-24`}>theme</span>
          <span className={textSecondary}>
            Change theme (dark, light, system)
          </span>
        </div>
        <div className="flex gap-3">
          <span className={`${textGreen} w-24`}>clear</span>
          <span className={textSecondary}>Clear the terminal</span>
        </div>
        <div className="flex gap-3">
          <span className={`${textGreen} w-24`}>whoami</span>
          <span className={textSecondary}>Display current user</span>
        </div>
        <div className="flex gap-3">
          <span className={`${textGreen} w-24`}>ls</span>
          <span className={textSecondary}>List directory contents</span>
        </div>
      </div>
    </div>
  );
}

export function AboutOutput({ theme }: { theme: "dark" | "light" }) {
  const textPrimary = theme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]";
  const textBlue = theme === "dark" ? "text-[#89b4fa]" : "text-[#1e66f5]";
  const textPink = theme === "dark" ? "text-[#f5e0dc]" : "text-[#dc8a78]";
  const textGreen = theme === "dark" ? "text-[#a6e3a1]" : "text-[#40a02b]";
  const borderBlue = theme === "dark" ? "border-[#89b4fa]" : "border-[#1e66f5]";

  return (
    <div className={`space-y-3 ${textPrimary}`}>
      <div className={textBlue}>$ cat about.txt</div>
      <div className={`space-y-2 pl-4 border-l-2 ${borderBlue}`}>
        <p className={textPink}>{`Hey there! I'm a Full-Stack Developer 👋`}</p>
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
        <p className={textGreen}>
          🎯 Currently focused on modern web technologies and cloud architecture
        </p>
      </div>
    </div>
  );
}

export function SkillsOutput({ theme }: { theme: "dark" | "light" }) {
  const textPrimary = theme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]";
  const textBlue = theme === "dark" ? "text-[#89b4fa]" : "text-[#1e66f5]";

  return (
    <div className={`space-y-3 ${textPrimary}`}>
      <div className={textBlue}>$ cat skills.json</div>
      <div className="pl-4">
        <pre className={textPrimary}>
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

export function ProjectsOutput({ theme }: { theme: "dark" | "light" }) {
  const textPrimary = theme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]";
  const textSecondary = theme === "dark" ? "text-[#bac2de]" : "text-[#5c5f77]";
  const textBlue = theme === "dark" ? "text-[#89b4fa]" : "text-[#1e66f5]";
  const textYellow = theme === "dark" ? "text-[#f9e2af]" : "text-[#df8e1d]";
  const textCyan = theme === "dark" ? "text-[#89dceb]" : "text-[#209fb5]";

  return (
    <div className={`space-y-4 ${textPrimary}`}>
      <div className={textBlue}>$ ls projects/</div>
      <div className="space-y-4 pl-4">
        <div className="space-y-1">
          <div className={textYellow}>📦 Next.js 15 Boilerplate</div>
          <div className={`${textSecondary} text-sm pl-4`}>
            A production-ready starter template for Next.js 15 with app router,
            server actions, and best practices
          </div>
          <div className={`${textCyan} text-sm pl-4`}>
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

export function ExperienceOutput({ theme }: { theme: "dark" | "light" }) {
  const textPrimary = theme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]";
  const textSecondary = theme === "dark" ? "text-[#bac2de]" : "text-[#5c5f77]";
  const textBlue = theme === "dark" ? "text-[#89b4fa]" : "text-[#1e66f5]";
  const textYellow = theme === "dark" ? "text-[#f9e2af]" : "text-[#df8e1d]";
  const textCyan = theme === "dark" ? "text-[#89dceb]" : "text-[#209fb5]";
  const borderGreen =
    theme === "dark" ? "border-[#a6e3a1]" : "border-[#40a02b]";

  return (
    <div className={`space-y-4 ${textPrimary}`}>
      <div className={textBlue}>$ git log --experience</div>
      <div className="space-y-4 pl-4">
        <div className={`space-y-1 border-l-2 ${borderGreen} pl-3`}>
          <div className={textYellow}>Full-Stack Developer</div>
          <div className={textCyan}>
            Stratpoint Technologies | 2021 - Present
          </div>
          <div className={`${textSecondary} text-sm mt-1 space-y-1`}>
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

export function ContactOutput({ theme }: { theme: "dark" | "light" }) {
  const textPrimary = theme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]";
  const textBlue = theme === "dark" ? "text-[#89b4fa]" : "text-[#1e66f5]";
  const textPink = theme === "dark" ? "text-[#f5e0dc]" : "text-[#dc8a78]";
  const textCyan = theme === "dark" ? "text-[#89dceb]" : "text-[#209fb5]";
  const textYellow = theme === "dark" ? "text-[#f9e2af]" : "text-[#df8e1d]";
  const borderGreen =
    theme === "dark" ? "border-[#a6e3a1]" : "border-[#40a02b]";

  return (
    <div className={`space-y-3 ${textPrimary}`}>
      <div className={textBlue}>$ cat contact.md</div>
      <div className={`space-y-2 pl-4 border-l-2 ${borderGreen}`}>
        <div className={textPink}>{`📫 Let's Connect!`}</div>
        <div className="space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <span className={textCyan}>Email:</span>
            <a
              href="mailto:johnstephene.lelis@gmail.com"
              className={`${textYellow} hover:underline`}
            >
              johnstephene.lelis@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className={textCyan}>GitHub:</span>
            <a
              href="https://github.com/johnLelis"
              className={`${textYellow} hover:underline`}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/johnLelis
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className={textCyan}>LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/john-stephene-lelis/"
              className={`${textYellow} hover:underline`}
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
