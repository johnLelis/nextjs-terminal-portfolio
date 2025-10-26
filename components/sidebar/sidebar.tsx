import Profile from "./profile";
import BasicInfo from "./basic-info";
import ContactLinks from "./contact-links";
import Skills from "./skills";
import Status from "./status";

export function Sidebar() {
  return (
    <div className="w-80 bg-primary border-r border-color p-4 sm:p-6 flex flex-col sm:gap-6 overflow-y-auto h-full ">
      <Profile />
      <BasicInfo />
      <ContactLinks />
      <Skills />
      <Status />
    </div>
  );
}
