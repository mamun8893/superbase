import { Button } from "@/components/ui/button";

export default function Footer({ selectedWeeks, startDate, onBack, onNext }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-lg pt-3 sm:pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-3 sm:pb-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-center sm:text-left w-full sm:w-auto">
              <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                $35 FOR 5 DAYS (1 ACTIVITY PER DAY)
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={onBack}
                disabled={!startDate}
                className="flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold border-2 border-gray-300 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                BACK
              </Button>
              <Button
                onClick={onNext}
                className="flex-1 sm:flex-none hover:bg-indigo-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold rounded-lg transition-colors"
                style={{
                  background:
                    "linear-gradient(318deg, #5D06E9 13.21%, #0B23FA 98.3%)",
                }}
                disabled={!selectedWeeks}
              >
                NEXT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
