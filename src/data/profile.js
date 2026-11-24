// Facts shared by several sections: links, profiles and the resume.
import resume from "../assets/Abdullah_Al_Azad.pdf";

export const resumeUrl = resume;

export const email = "azad.jishan2003@gmail.com";

export const profiles = [
  { icon: "gh", label: "GitHub profile", href: "https://github.com/azad12614" },
  {
    icon: "in",
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/abdullah-al-azad-12614-jishan",
  },
  { icon: "fb", label: "Facebook profile", href: "https://www.facebook.com/abdullah.2003.azad/" },
];

// In-page sections, in page order (nav, menu and footer)
export const sections = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "solving", label: "problem solving" },
  { id: "contact", label: "contact" },
];

// Contact rows. `copy` is what the copy button puts on the clipboard: the plain value or the link
export const contactRows = [
  { label: "EMAIL", value: email, href: `mailto:${email}`, copy: email },
  { label: "PHONE", value: "+880 1630-440005", href: "tel:+8801630440005", copy: "+880 1630-440005" },
  {
    label: "LOCATION",
    value: "Chattogram, Bangladesh",
    href: "https://maps.app.goo.gl/A8Bz35Qhx7oBV9RV7",
    copy: "https://maps.app.goo.gl/A8Bz35Qhx7oBV9RV7",
  },
  {
    label: "GITHUB",
    value: "github.com/azad12614",
    href: "https://github.com/azad12614",
    copy: "https://github.com/azad12614",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/abdullah-al-azad-12614-jishan",
    href: "https://www.linkedin.com/in/abdullah-al-azad-12614-jishan",
    copy: "https://www.linkedin.com/in/abdullah-al-azad-12614-jishan",
  },
  {
    label: "FACEBOOK",
    value: "facebook.com/abdullah.2003.azad",
    href: "https://www.facebook.com/abdullah.2003.azad/",
    copy: "https://www.facebook.com/abdullah.2003.azad/",
  },
];
