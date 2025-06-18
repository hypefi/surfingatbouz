export default function BoardRepairPage() {
  return (
    <div className="container mx-auto px-4 py-8">
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
              <td className="py-2 px-4 border-b">Small Ding +1 cm (Rail/Deck)</td>
              <td className="py-2 px-4 border-b">Minor</td>
              <td className="py-2 px-4 border-b">100 dh</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Moderate Ding +5 cm</td>
              <td className="py-2 px-4 border-b">Moderate</td>
              <td className="py-2 px-4 border-b">200 dh</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Fin Box Plug</td>
              <td className="py-2 px-4 border-b">Major</td>
              <td className="py-2 px-4 border-b">500 dh</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Leash Plug</td>
              <td className="py-2 px-4 border-b">Minor / Moderate</td>
              <td className="py-2 px-4 border-b">400 dh</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Delamination Repair</td>
              <td className="py-2 px-4 border-b">Moderate / Major</td>
              <td className="py-2 px-4 border-b">500 dh+ (Quote Required)</td>
            </tr>
            {/* Add more specific repair types if needed */}
          </tbody>
        </table>
        <p className="text-sm text-gray-600 mt-2">*Prices are estimates in Moroccan Dirham (dh) and may vary based on damage assessment.</p>
        <p className="text-sm text-green-700 mt-1 font-semibold">More than 10 dings: 40% discount</p>
      </div>
      {/* Add contact info/form for quotes */}
    </div>
  );
} 