export const travelEnquiries = {
  visas: "Visa assistance",
  tours: "Tour packages",
  "iran-ziarat": "Iran Ziarat",
  "iraq-ziarat": "Iraq Ziarat",
  "iran-iraq-ziarat": "Iran and Iraq Ziarat",
  arbaeen: "Arbaeen Ziarat",
} as const;

export function travelEnquiryLink(topic: keyof typeof travelEnquiries) {
  return `/contact/?topic=${topic}#inquiry`;
}

export function getTravelEnquiry(topic: string | null) {
  return Object.entries(travelEnquiries).find(([key]) => key === topic)?.[1];
}
