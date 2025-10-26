const AboutOutput = () => {
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
};
export default AboutOutput;
