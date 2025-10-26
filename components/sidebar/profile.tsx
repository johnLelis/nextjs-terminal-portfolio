import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4">
      <div className="relative group">
        <div
          className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-blue shadow-lg
                   transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl
                   group-hover:border-[#a6e3a1] dark:group-hover:border-[#a6e3a1] animate-border-glow`}
          onContextMenu={e => e.preventDefault()}
        >
          <Image
            src="/pen.jpeg"
            width={128}
            height={128}
            alt="Profile"
            className="w-full h-full object-cover rounded-full select-none pointer-events-none"
            priority
            onContextMenu={e => e.preventDefault()}
          />
        </div>
        <div
          className={`absolute -bottom-1 -right-1 w-6 h-6 bg-green rounded-full border-4 border-dark`}
        />
      </div>

      <div className="text-center">
        <h2 className={`text-primary text-lg sm:text-xl`}>
          John Stephene Lelis
        </h2>
        <p className={`text-blue text-sm sm:text-base`}>FullStack Developer</p>
      </div>
    </div>
  );
};
export default Profile;
