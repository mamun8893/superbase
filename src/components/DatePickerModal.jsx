export default function DatePickerModal({
  isOpen,
  tempDate,
  setTempDate,
  selectedOption,
  onCancel,
  onConfirm,
}) {
  if (!isOpen) return null;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 10 }, (_, i) => 2026 + i);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-900 mb-6 sm:mb-12 text-left">
          Please select your start date
        </h3>

        {/* Date Pickers */}
        <div className="flex gap-4 sm:gap-8 lg:gap-12 mb-6 sm:mb-12 justify-center items-center">
          {/* Day Picker */}
          <div className="flex flex-col items-center">
            <div className="h-40 sm:h-48 lg:h-52 overflow-y-auto scrollbar-hide flex flex-col items-center relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-12 w-full" />
              </div>
              <div className="py-16 sm:py-20">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => setTempDate({ ...tempDate, day })}
                    className={`py-2 sm:py-3 px-3 sm:px-6 text-center transition-all whitespace-nowrap ${
                      tempDate.day === day
                        ? "text-gray-900 font-normal text-2xl sm:text-3xl lg:text-4xl"
                        : "text-gray-200 text-base sm:text-xl lg:text-2xl"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Month Picker */}
          <div className="flex flex-col items-center">
            <div className="h-40 sm:h-48 lg:h-52 overflow-y-auto scrollbar-hide flex flex-col items-center relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-12 w-full" />
              </div>
              <div className="py-16 sm:py-20">
                {months.map((month, idx) => (
                  <button
                    key={month}
                    onClick={() => setTempDate({ ...tempDate, month: idx + 1 })}
                    className={`py-2 sm:py-3 px-3 sm:px-6 text-center transition-all whitespace-nowrap ${
                      tempDate.month === idx + 1
                        ? "text-gray-900 font-normal text-2xl sm:text-3xl lg:text-4xl"
                        : "text-gray-200 text-base sm:text-xl lg:text-2xl"
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Year Picker */}
          <div className="flex flex-col items-center">
            <div className="h-40 sm:h-48 lg:h-52 overflow-y-auto scrollbar-hide flex flex-col items-center relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-12 w-full" />
              </div>
              <div className="py-16 sm:py-20">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setTempDate({ ...tempDate, year })}
                    className={`py-2 sm:py-3 px-3 sm:px-6 text-center transition-all whitespace-nowrap ${
                      tempDate.year === year
                        ? "text-gray-900 font-normal text-2xl sm:text-3xl lg:text-4xl"
                        : "text-gray-200 text-base sm:text-xl lg:text-2xl"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">NB:</span> {`You've`} chosen a{" "}
            {selectedOption?.weeks.toLowerCase()} schedule starting on{" "}
            {months[tempDate.month - 1]} {tempDate.day}, {tempDate.year}, with
            sessions on Mon, Tue, Thu, Fri, and Sat.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            {`We'll`} automatically set your end date, and you can renew
            whenever you like — no worries!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onCancel}
            className="flex-1 px-6 py-3 text-red-500 font-semibold rounded-lg hover:bg-red-50 transition-colors"
          >
            CANCEL
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90"
            style={{
              background:
                "linear-gradient(318deg, #5D06E9 13.21%, #0B23FA 98.3%)",
            }}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}
