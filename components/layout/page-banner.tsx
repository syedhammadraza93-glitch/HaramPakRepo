import Image from "next/image";

export function PageBanner({ label, title, description, image, children }: {
  label: string;
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={image ? "page-banner page-banner-image" : "page-banner"} aria-labelledby="page-title">
      {image && <Image src={image} fill sizes="100vw" preload alt="" />}
      <div className="site-shell">
        <p className="section-kicker"><span /> {label}</p>
        <h1 id="page-title">{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
