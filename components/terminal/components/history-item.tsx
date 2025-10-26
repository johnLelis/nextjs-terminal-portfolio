import Prompt from "./prompt";

interface HistoryItemProps {
  command: string;
  output: React.ReactNode;
}

const HistoryItem = ({ command, output }: HistoryItemProps) => {
  return (
    <div className="mb-4">
      {command && (
        <div className="flex items-center gap-2 mb-2">
          <Prompt />
          <span className="text-primary">{command}</span>
        </div>
      )}
      <div className="ml-0">{output}</div>
    </div>
  );
};

export default HistoryItem;
