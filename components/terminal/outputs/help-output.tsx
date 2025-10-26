const HelpOutput = () => {
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
};
export default HelpOutput;
