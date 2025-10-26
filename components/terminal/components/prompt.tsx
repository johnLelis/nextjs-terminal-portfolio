import {
  IconChevronRight,
  IconFolder,
  IconGitBranch,
} from "@tabler/icons-react";

const Prompt = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-2 shrink-0">
      <div
        className={`flex items-center gap-1 sm:gap-1.5 dark:bg-[#89b4fa] bg-[#1e66f5] dark:text-[#1e1e2e] text-[#eff1f5] px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs`}
      >
        <IconFolder className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        <span className="xs:hidden">~</span>
      </div>
      <div
        className={`flex items-center gap-1 sm:gap-1.5 dark:text-[#1e1e2e] text-[#eff1f5] px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs dark:bg-[#a6e3a1] bg-[#40a02b]`}
      >
        <IconGitBranch className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        <span>main</span>
      </div>
      <IconChevronRight
        className={`w-3 h-3 sm:w-4 sm:h-4 dark:text-[#a6e3a1]  
          text-[#40a02b]
          animate-pulse`}
      />
    </div>
  );
};
export default Prompt;
