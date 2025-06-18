export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        Have questions, want to book a lesson, order a custom board, or get a repair quote? Get in touch!
      </p>

      <div className="space-y-4">
        <p>
          <strong>Email:</strong> <a href="mailto:mehdiassiriy@gmail.com" className="text-blue-600 hover:underline">mehdiassiriy@gmail.com</a>
        </p>
        <p className="flex items-center gap-2">
          <strong>Phone:</strong> <a href="tel:+212676516328" className="text-blue-600 hover:underline">+212 676-516328</a>
          <a href="https://wa.me/212676516328" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="inline-flex items-center ml-2">
            <img src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
          </a>
        </p>
        <p>
          <strong>Location:</strong> Bouznika, Morocco {/* Updated location */}
        </p>
        {/* Optionally, add a contact form component here */}
      </div>
    </div>
  );
} 