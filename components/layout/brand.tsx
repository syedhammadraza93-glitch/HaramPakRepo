import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Haram Pak (Pvt) Ltd home">
      <span className="brand-logo">
        <Image src="/images/haram-pak-logo.png" width={554} height={554} alt="" priority unoptimized />
      </span>
    </Link>
  );
}
