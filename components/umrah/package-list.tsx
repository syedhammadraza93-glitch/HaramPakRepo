"use client";

import { useState } from "react";
import { PackageCard } from "@/components/home/featured-packages";
import type { UmrahPackage } from "@/lib/umrah-packages";

const filters = [
  { value: "All", label: "All packages" },
  { value: "Group", label: "Lahore group departures" },
  { value: "Tailored", label: "Tailored options" },
] as const;

export function PackageList({ catalogue }: { catalogue: UmrahPackage[] }) {
  const [selected, setSelected] = useState<(typeof filters)[number]["value"]>("All");
  const packages = selected === "All" ? catalogue : catalogue.filter(pkg => pkg.category === selected);

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter Umrah packages">
        {filters.map(({ value, label }) => (
          <button key={value} type="button" className="pilgrim-button" aria-pressed={selected === value} onClick={() => setSelected(value)}>{label}</button>
        ))}
        <p role="status" className="filter-count">{packages.length} {packages.length === 1 ? "option" : "options"}</p>
      </div>
      <div className="package-grid">{packages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}</div>
    </>
  );
}
