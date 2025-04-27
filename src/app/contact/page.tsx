export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        Have questions, want to book a lesson, order a custom board, or get a repair quote? Get in touch!
      </p>

      <div className="space-y-4">
        <p>
          <strong>Email:</strong> <a href="mailto:info@surfshaper.com" className="text-blue-600 hover:underline">info@surfshaper.com</a> {/* Replace with actual email */}
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a> {/* Replace with actual phone */}
        </p>
        <p>
          <strong>Location:</strong> Surf City, CA {/* Replace with actual location */}
        </p>
        {/* Optionally, add a contact form component here */}
      </div>
    </div>
  );
} 