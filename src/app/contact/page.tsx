import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contact Us</h1>
      <p className="mb-6 text-lg text-neutral/80">
        Have questions, want to book a lesson, order a custom board, or get a repair quote? Get in touch!
      </p>

      <div className="space-y-6">
        <div className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200">
          <p className="mb-4 text-lg">
            <strong className="text-primary">Email:</strong> <a href="mailto:mehdiassiriy@gmail.com" className="text-accent hover:text-secondary transition-colors">mehdiassiriy@gmail.com</a>
          </p>
          <p className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-lg">
            <strong className="text-primary">Phone:</strong> 
            <div className="flex items-center gap-2">
              <a href="https://wa.me/212676516329" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-secondary transition-colors">+212 676-516328</a>
              <a href="https://wa.me/212676516329" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="inline-flex items-center">
                <Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
              </a>
            </div>
          </p>
          <p className="text-lg">
            <strong className="text-primary">Location:</strong> <span className="text-neutral/80">Bouznika, Morocco</span>
          </p>
        </div>
        {/* Optionally, add a contact form component here */}
      </div>
    </div>
  );
} 