const WelcomeMessage = () => {
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
};
export default WelcomeMessage;
