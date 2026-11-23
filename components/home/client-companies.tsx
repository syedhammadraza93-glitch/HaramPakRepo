"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2, Pause, Play } from "lucide-react";
import type { ClientCompany } from "@/lib/client-companies";

export function ClientCompanies({ companies, sample = false }: { companies: ClientCompany[]; sample?: boolean }) {
  const [paused, setPaused] = useState(false);

  if (!companies.length) return null;

  const copies = Math.ceil(5 / companies.length);
  const strip = Array.from({ length: copies }, () => companies).flat();

  return (
    <section className="site-shell client-section" aria-labelledby="client-companies-title">
      <div className="client-heading">
        <h2 id="client-companies-title">Our Clients</h2>
        {sample && <p>Sample logos</p>}
      </div>
      <div className="client-window">
        <div
          id="client-company-list"
          className="client-track"
          data-paused={paused}
          style={{ animationDuration: `${strip.length * 5}s` }}
        >
          {[false, true].map(duplicate => (
            <ul key={String(duplicate)} role="list" className="client-group" aria-hidden={duplicate || undefined}>
              {strip.map((company, index) => (
                <li key={index} aria-hidden={index >= companies.length || undefined}>
                  {company.logo
                    ? <Image src={company.logo} alt={company.name} width={180} height={48} />
                    : <><Building2 aria-hidden="true" /> <span>{company.name}</span></>}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="client-motion-toggle"
        aria-label={paused ? "Resume client logos" : "Pause client logos"}
        aria-controls="client-company-list"
        onClick={() => setPaused(value => !value)}
      >
        {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      </button>
    </section>
  );
}
