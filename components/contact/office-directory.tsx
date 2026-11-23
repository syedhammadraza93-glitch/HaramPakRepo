import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { phoneUrl } from "@/lib/inquiries";
import { officeRegions } from "@/lib/offices";

export function OfficeDirectory() {
  return (
    <section id="offices" className="office-directory" aria-labelledby="office-directory-title">
      <div className="site-shell home-section">
        <div className="section-heading">
          <h2 id="office-directory-title">Our offices</h2>
          <p>Contact our Pakistan or Canada team before planning an office visit.</p>
        </div>
        <div className="office-regions">
          {officeRegions.map(region => (
            <section className="office-region" key={region.code} aria-labelledby={`offices-${region.code}`}>
              <div className="office-region-heading">
                <h3 id={`offices-${region.code}`}>{region.country}</h3>
                <div className="office-region-contacts">
                  {region.phones.map(phone => (
                    <a key={phone} href={phoneUrl(phone)}><Phone aria-hidden="true" />{phone}</a>
                  ))}
                  <a href={`mailto:${SITE_CONFIG.contact.email}`}><Mail aria-hidden="true" />{SITE_CONFIG.contact.email}</a>
                </div>
              </div>
              <ul className="office-list">
                {region.offices.map(office => (
                  <li key={office.city}>
                    <MapPin aria-hidden="true" />
                    <div>
                      <h4>{office.city}</h4>
                      <address>{office.address}</address>
                      {office.sample && <p className="office-status">Sample address. Call for office details.</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
