import { Calendar } from "lucide-react";

export default function DateSelectionCard({
  selectedOption,
  startDate,
  endDate,
  onStartDateClick,
}) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          {selectedOption?.weeks}
        </h2>
        <p className="text-gray-600">
          ({selectedOption?.weeks} X 5 Days) = {selectedOption?.totalDays} Days
        </p>
      </div>

      {!startDate ? (
        // Show full width start date input when no date selected
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start date
          </label>
          <div className="relative">
            <input
              type="text"
              value={startDate}
              placeholder="Start date"
              readOnly
              onClick={onStartDateClick}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      ) : (
        // Show both dates in half width when date is selected
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start date
            </label>
            <div className="relative">
              <input
                type="text"
                value={startDate}
                placeholder="Start date"
                readOnly
                onClick={onStartDateClick}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End date
            </label>
            <div className="relative">
              <input
                type="text"
                value={endDate}
                placeholder="End date"
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
