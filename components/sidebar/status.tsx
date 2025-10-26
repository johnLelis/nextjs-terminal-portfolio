const Status = () => {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm group">
      <div className="relative">
        <div className={`w-2 h-2 bg-green rounded-full animate-pulse`} />
        <div
          className={`absolute inset-0 w-2 h-2 bg-green rounded-full animate-ping opacity-75`}
        />
      </div>
      <span className="text-green group-hover:text-[#a6e3a1] transition-colors">
        Available for opportunities
      </span>
    </div>
  );
};
export default Status;
