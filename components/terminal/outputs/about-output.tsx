const AboutOutput = () => {
  return (
    <div
      className={`space-y-3 text-primary animate-in slide-in-from-left-4 duration-500`}
    >
      <div className="text-blue">$ cat about.txt</div>
      <div className={`space-y-2 pl-4 border-l-2 border-blue`}>
        <p className="text-pink">{`Hey there! I'm Pen 👋`}</p>
        <p>
          {`A full-stack developer who enjoys tackling challenging problems and building web applications that work well and feel good to use. My experience spans both frontend and backend development, which helps me think through projects from every angle.`}
        </p>
        <p>
          {`Outside of work, I keep up with emerging technologies, play chess to sharpen my strategic thinking, and unwind with some competitive Dota 2.`}
        </p>
        <p className="text-green">
          Currently focused on modern web technologies and cloud architecture
        </p>
      </div>
    </div>
  );
};
export default AboutOutput;
