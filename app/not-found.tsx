import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-shell home-section">
      <div className="section-heading">
        <h1 className="text-4xl">Page not found</h1>
        <p>Find an Umrah package or return to the homepage.</p>
        <Link href="/umrah/" className="pilgrim-button pilgrim-button-primary">Explore Umrah Packages</Link>
        <Link href="/" className="text-link ms-4">Home</Link>
      </div>
    </section>
  );
}
