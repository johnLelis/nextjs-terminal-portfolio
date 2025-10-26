const ContactOutput = () => {
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
};
export default ContactOutput;
