import { SITE_CONFIG } from "@/lib/constants";

export const officeRegions = [
  {
    country: "Pakistan",
    code: "PK",
    phones: [SITE_CONFIG.contact.phones.pakistan, SITE_CONFIG.contact.phones.pakistanAlt],
    offices: [
      { city: "Lahore", address: SITE_CONFIG.contact.address, sample: false },
      { city: "Islamabad", address: "Suite 203, 18 Example Avenue, Islamabad, Pakistan", sample: true },
      { city: "Karachi", address: "Office 401, 25 Sample Boulevard, Karachi, Pakistan", sample: true },
    ],
  },
  {
    country: "Canada",
    code: "CA",
    phones: [SITE_CONFIG.contact.phones.international],
    offices: [
      { city: "Toronto, ON", address: "Suite 200, 18 Example Avenue, Toronto, ON, Canada", sample: true },
      { city: "Mississauga, ON", address: "Unit 110, 25 Sample Boulevard, Mississauga, ON, Canada", sample: true },
    ],
  },
] as const;
