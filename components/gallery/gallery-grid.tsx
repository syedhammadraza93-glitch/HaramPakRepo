"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const images = [
  { src: "/images/makkah-golden-hour.webp", city: "Makkah", title: "Masjid al-Haram at Golden Hour" },
  { src: "/images/makkah-at-night.webp", city: "Makkah", title: "The Kaaba at Night" },
  { src: "/images/madinah-courtyard.webp", city: "Madinah", title: "The Courtyard of Masjid an-Nabawi" },
];

export function GalleryGrid() {
  const [city, setCity] = useState("All");
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const filtered = city === "All" ? images : images.filter(photo => photo.city === city);
  const active = filtered[selected];

  function show(index: number) {
    setSelected(index);
    dialog.current?.showModal();
  }

  function step(direction: number) {
    setSelected(index => (index + direction + filtered.length) % filtered.length);
  }

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter gallery by city">
        {["All", "Makkah", "Madinah"].map(item => (
          <button type="button" key={item} aria-pressed={city === item} onClick={() => { setCity(item); setSelected(0); }} className="pilgrim-button">{item === "All" ? "All cities" : item}</button>
        ))}
      </div>
      <div className="package-grid">
        {filtered.map((item, index) => (
          <button type="button" key={item.src} className="package-card gallery-card" onClick={() => show(index)} aria-label={`Enlarge ${item.title}`}>
            <span className="package-photo block w-full"><Image src={item.src} alt="" fill sizes="(max-width: 660px) 100vw, 380px" /></span>
            <span className="flex justify-between items-center w-full p-3 text-start font-semibold">{item.title}<ZoomIn className="w-4 h-4 shrink-0 ms-2" aria-hidden="true" /></span>
          </button>
        ))}
      </div>
      <dialog ref={dialog} className="gallery-dialog" aria-labelledby="gallery-image-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onKeyDown={event => {
          if (event.key === "ArrowLeft") step(-1);
          if (event.key === "ArrowRight") step(1);
        }}>
        {active && <div className="gallery-dialog-content">
          <div className="gallery-dialog-head">
            <h2 id="gallery-image-title">{active.title}</h2>
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Close image" autoFocus><X aria-hidden="true" /></button>
          </div>
          <div className="gallery-expanded"><Image src={active.src} alt={active.title} fill sizes="(max-width: 960px) 100vw, 900px" /></div>
          {filtered.length > 1 && <div className="gallery-controls">
            <button type="button" onClick={() => step(-1)} aria-label="Previous image"><ChevronLeft aria-hidden="true" /></button>
            <p aria-live="polite">{selected + 1} of {filtered.length}</p>
            <button type="button" onClick={() => step(1)} aria-label="Next image"><ChevronRight aria-hidden="true" /></button>
          </div>}
        </div>}
      </dialog>
    </>
  );
}
