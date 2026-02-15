export default function CountryCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg animate-pulse">
    {/* Top half: image placeholder with same aspect ratio */}
    <div className="relative aspect-[3/1] lg:aspect-[4/1] bg-gray-200" />

    {/* Bottom half: text/button placeholders */}
    <div className="bg-white p-4">
        <div className="flex items-center gap-4">
        <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-40 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-32" />
        </div>
        <div className="w-24 h-9 bg-gray-200 rounded" />
        </div>
    </div>
    </div>
  );
}
