"use client";

import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
  IconCalendar,
  IconBriefcase,
} from "@tabler/icons-react";
import Image from "next/image";

interface SidebarProps {
  theme: "dark" | "light";
}

export function Sidebar({ theme }: SidebarProps) {
  const bgPrimary = theme === "dark" ? "bg-[#181825]" : "bg-[#e6e9ef]";
  const bgSecondary = theme === "dark" ? "bg-[#1e1e2e]" : "bg-[#dce0e8]";
  const borderColor =
    theme === "dark" ? "border-[#313244]" : "border-[#dce0e8]";
  const textPrimary = theme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]";
  const textSecondary = theme === "dark" ? "text-[#bac2de]" : "text-[#5c5f77]";
  const textTertiary = theme === "dark" ? "text-[#6c7086]" : "text-[#6c6f85]";
  const textBlue = theme === "dark" ? "text-[#89b4fa]" : "text-[#1e66f5]";
  const textGreen = theme === "dark" ? "text-[#a6e3a1]" : "text-[#40a02b]";
  const borderBlue = theme === "dark" ? "border-[#89b4fa]" : "border-[#1e66f5]";
  const bgGreen = theme === "dark" ? "bg-[#a6e3a1]" : "bg-[#40a02b]";
  const textRed = theme === "dark" ? "text-[#f38ba8]" : "text-[#d20f39]";
  const textOrange = theme === "dark" ? "text-[#fab387]" : "text-[#fe640b]";

  return (
    <div
      className={`w-80 ${bgPrimary} border-r ${borderColor} p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 overflow-y-auto h-full`}
    >
      {/* Profile Photo */}
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <div className="relative">
          <div
            className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 ${borderBlue} shadow-lg`}
          >
            <Image
              src="/pen.jpeg"
              width={128}
              height={128}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
          <div
            className={`absolute -bottom-1 -right-1 w-6 h-6 ${bgGreen} rounded-full border-4 ${
              theme === "dark" ? "border-[#181825]" : "border-[#e6e9ef]"
            }`}
          />
        </div>

        <div className="text-center">
          <h2 className={`${textPrimary} text-lg sm:text-xl`}>
            John Stephene Lelis
          </h2>
          <p className={`${textBlue} text-sm sm:text-base`}>
            FullStack Developer
          </p>
        </div>
      </div>

      {/* Basic Info */}
      <div className="space-y-3">
        <div className={`flex items-center gap-3 ${textPrimary}`}>
          <IconMapPin className={`w-5 h-5 ${textRed} shrink-0 mt-0.5`} />
          <div className="text-sm">
            <div className={textSecondary}>Mandaluyong City, PH</div>
          </div>
        </div>

        <div className={`flex items-center gap-3 ${textPrimary}`}>
          <IconBriefcase className={`w-5 h-5 ${textOrange} shrink-0 mt-0.5`} />
          <div className="text-sm">
            <div className={textSecondary}>Software Engineer</div>
            <div className={`${textTertiary} text-xs`}>
              Stratpoint Technologies Inc.
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-3 ${textPrimary}`}>
          <IconCalendar className={`w-5 h-5 ${textGreen} shrink-0 mt-0.5`} />
          <div className="text-sm">
            <div className={textSecondary}>4+ Years Experience</div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className={`h-px ${borderColor}`} />

      {/* Contact Links */}
      <div className="space-y-2 sm:space-y-3">
        <h3
          className={`${textBlue} text-xs sm:text-sm uppercase tracking-wider`}
        >
          Connect
        </h3>

        <a
          href="mailto:johnstephene.lelis@gmail.com"
          className={`flex items-center gap-2 sm:gap-3 ${textPrimary} hover:${textBlue} transition-colors group`}
        >
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${bgSecondary} flex items-center justify-center group-hover:${borderColor} transition-colors shrink-0`}
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
          className={`flex items-center gap-2 sm:gap-3 ${textPrimary} hover:${textBlue} transition-colors group`}
        >
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${bgSecondary} flex items-center justify-center group-hover:${borderColor} transition-colors shrink-0`}
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
          className={`flex items-center gap-2 sm:gap-3 ${textPrimary} hover:${textBlue} transition-colors group`}
        >
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${bgSecondary} flex items-center justify-center group-hover:${borderColor} transition-colors shrink-0`}
          >
            <IconBrandLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <span className="text-xs sm:text-sm truncate">
            linkedin.com/in/john-stephene-lelis
          </span>
        </a>
      </div>

      {/* Separator */}
      <div className={`h-px ${borderColor}`} />

      {/* Skills Overview */}
      <div className="space-y-2 sm:space-y-3">
        <h3
          className={`${textBlue} text-xs sm:text-sm uppercase tracking-wider`}
        >
          Skills
        </h3>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {[
            "TypeScript",
            "NodeJs",
            "ReactJs",
            "NextJs",
            "PostgreSQL",
            "Docker",
            "Kubernetes",
            "DevSecOps",
            "CI/CD",
            "AWS",
            "Azure",
            "TailwindCss",
            "Unit Testing",
          ].map(skill => (
            <span
              key={skill}
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 ${bgSecondary} ${textPrimary} text-[10px] sm:text-xs rounded border ${borderColor}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Status */}
      <div className={`mt-auto pt-4 sm:pt-6 border-t ${borderColor}`}>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <div className={`w-2 h-2 ${bgGreen} rounded-full animate-pulse`} />
          <span className={textGreen}>Available for opportunities</span>
        </div>
      </div>
    </div>
  );
}
