import { IconMapPin, IconCalendar, IconBriefcase } from "@tabler/icons-react";
import dayjs from "dayjs";

const getYearsOfExperience = () => {
  const startDate = dayjs("2021-10-01");
  const now = dayjs();
  const years = now.diff(startDate, "year", true);

  // If less than 1 year, show months
  if (years < 1) {
    const months = now.diff(startDate, "month");
    return `${months} Months Experience`;
  }

  // Show years with + if over
  const fullYears = Math.floor(years);
  return `${fullYears}+ Years Experience`;
};

const BasicInfo = () => {
  return (
    <div className="space-y-3">
      <div className={`flex items-center gap-3 text-primary`}>
        <IconMapPin className={`w-5 h-5 text-red shrink-0 mt-0.5`} />
        <div className="text-sm">
          <div className="text-secondary">
            {process.env.NEXT_PUBLIC_LOCATION || "Mandaluyong City, PH"}
          </div>
        </div>
      </div>

      <div className={`flex items-center gap-3 text-primary`}>
        <IconBriefcase className={`w-5 h-5 text-orange shrink-0 mt-0.5`} />
        <div className="text-sm">
          <div className="text-secondary">
            {process.env.NEXT_PUBLIC_JOB_TITLE || "Software Engineer"}
          </div>
          <div className={`text-tertiary text-xs`}>
            {process.env.NEXT_PUBLIC_COMPANY_NAME || "Current Company"}
          </div>
        </div>
      </div>

      <div className={`flex items-center gap-3 text-primary`}>
        <IconCalendar className={`w-5 h-5 text-green shrink-0 mt-0.5`} />
        <div className="text-sm">
          <div className="text-secondary">{getYearsOfExperience()}</div>
        </div>
      </div>
    </div>
  );
};
export default BasicInfo;
