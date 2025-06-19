export default function SurfCoachPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Surf Coaching & Guiding</h1>
      <p className="mb-6">
        Whether you&apos;re a beginner catching your first wave or an experienced surfer
        looking to refine your skills or explore new breaks, we&apos;ve got you covered.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Pricing</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Service</th>
              <th className="py-2 px-4 border-b text-left">Duration</th>
              <th className="py-2 px-4 border-b text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Beginner Lesson (Private)</td>
              <td className="py-2 px-4 border-b">1.5 hours</td>
              <td className="py-2 px-4 border-b">300dh</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Group Lesson</td>
              <td className="py-2 px-4 border-b">1.5 hours</td>
              <td className="py-2 px-4 border-b">200dh</td>
            </tr>
           
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Surf Guiding (Half Day)</td>
              <td className="py-2 px-4 border-b">4 hours</td>
              <td className="py-2 px-4 border-b">500dh</td>
            </tr>
            {/* Add more pricing tiers */}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-700">
        Includes material, wetsuit and board.<br />
        Without wetsuit: <span className="font-semibold">50dh discount</span> if students have their own wetsuit.
      </p>
      {/* Add call to action button */}
    </div>
  );
} 