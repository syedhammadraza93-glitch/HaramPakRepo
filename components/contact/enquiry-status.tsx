export function EnquiryStatus({ error, whatsapp, reference }: { error?: string; whatsapp?: string; reference?: string }) {
  if (error) return <p role="alert" className="text-sm text-red-700">{error}</p>;
  if (!whatsapp) return null;
  return (
    <div className="space-y-2">
      <p role="status">Enquiry saved. Your reference is <strong className="break-all">{reference}</strong>.</p>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="pilgrim-button pilgrim-button-primary">Continue to WhatsApp</a>
    </div>
  );
}
