import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Plane } from "lucide-react";
import type { UmrahPackage } from "@/lib/umrah-packages";

export function PackageCard({ pkg }: { pkg: UmrahPackage }) {
  return (
    <article className="package-card">
      <div className="package-photo">
        <Image src={pkg.image} alt={pkg.imageAlt} fill sizes="(max-width: 660px) 100vw, (max-width: 940px) 50vw, 400px" />
        <span>{pkg.label}</span>
      </div>
      <div className="package-copy">
        <h3>{pkg.title}</h3>
        <p>{pkg.summary}</p>
        <ul>
          <li><Plane aria-hidden="true" /> {pkg.departure}</li>
          <li><MapPin aria-hidden="true" /> {pkg.stay}</li>
        </ul>
        <Link href={`/umrah/${pkg.id}/`} className="text-link" aria-label={`View details for ${pkg.title}`}>View Package <ArrowRight aria-hidden="true" /></Link>
      </div>
    </article>
  );
}

export function FeaturedPackages({ packages }: { packages: UmrahPackage[] }) {
  return (
    <section className="site-shell home-section" id="packages" aria-labelledby="packages-title">
      <div className="section-heading section-heading-split">
        <div>
          <p className="section-kicker"><span /> UMRAH PACKAGES</p>
          <h2 id="packages-title">Choose your Umrah journey</h2>
          <p>Compare Lahore group departures, or ask us to tailor a trip for your family.</p>
        </div>
        <Link href="/umrah/" className="pilgrim-button pilgrim-button-outline">View All Packages <ArrowRight aria-hidden="true" /></Link>
      </div>
      <div className="package-grid">{packages.map(pkg => <PackageCard pkg={pkg} key={pkg.id} />)}</div>
    </section>
  );
}
