import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const ContactLinks = () => {
  return (
    <div className="space-y-2 sm:space-y-3">
      <h3 className={`text-blue text-xs sm:text-sm uppercase tracking-wider`}>
        Connect
      </h3>

      <a
        href="mailto:johnstephene.lelis@gmail.com"
        className={`text-primary hover:text-blue transition-all group contact-link`}
      >
        <div
          className={` bg-secondary contact-icon
               group-hover:bg-blue group-hover:text-white group-hover:scale-110`}
        >
          <IconMail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <span className="text-xs sm:text-sm truncate">
          johnstephene.lelis@gmail.com
        </span>
      </a>

      <a
        href="https://github.com/johnLelis"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-primary hover:text-blue transition-all group contact-link`}
      >
        <div
          className={` bg-secondary contact-icon
               group-hover:bg-blue group-hover:text-white group-hover:scale-110`}
        >
          <IconBrandGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <span className="text-xs sm:text-sm truncate">
          github.com/johnLelis
        </span>
      </a>

      <a
        href="https://www.linkedin.com/in/john-stephene-lelis/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-primary hover:text-blue transition-all group contact-link`}
      >
        <div
          className={` bg-secondary contact-icon
               group-hover:bg-blue group-hover:text-white group-hover:scale-110`}
        >
          <IconBrandLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <span className="text-xs sm:text-sm truncate">
          linkedin.com/in/john-stephene-lelis
        </span>
      </a>
    </div>
  );
};
export default ContactLinks;
