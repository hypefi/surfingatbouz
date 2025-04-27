export default function BoardRepairPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Board Repair</h1>
      <p className="mb-6">
        Dings happen! We offer professional surfboard repair services to get
        you back in the water quickly.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Repair Pricing (Estimates)</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Repair Type</th>
              <th className="py-2 px-4 border-b text-left">Severity</th>
              <th className="py-2 px-4 border-b text-left">Estimated Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Small Ding (Rail/Deck)</td>
              <td className="py-2 px-4 border-b">Minor</td>
              <td className="py-2 px-4 border-b">$40 - $60</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Fin Box Repair</td>
              <td className="py-2 px-4 border-b">Moderate</td>
              <td className="py-2 px-4 border-b">$80 - $120</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Buckle / Crease</td>
              <td className="py-2 px-4 border-b">Major</td>
              <td className="py-2 px-4 border-b">$150+ (Quote Required)</td>
            </tr>
            {/* Add more repair types */}
          </tbody>
        </table>
        <p className="text-sm text-gray-600 mt-2">*Prices are estimates and may vary based on damage assessment.</p>
      </div>
      {/* Add contact info/form for quotes */}
    </div>
  );
} 