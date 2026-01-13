import Image from "next/image";
import { Check } from "lucide-react";

export default function WeekCard({ option, isSelected, onSelect }) {
  return (
    <label className="relative cursor-pointer group">
      <input
        type="radio"
        name="weeks"
        value={option.id}
        checked={isSelected}
        onChange={() => onSelect(option.id)}
        className="sr-only"
      />
      <div
        className={`
          bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 relative
          ${isSelected ? "border-indigo-500 ring-2 ring-indigo-200" : ""}
        `}
      >
        {/* Radio button in top right */}
        <div className="absolute top-4 right-4">
          <div
            className={`
              w-6 h-6 rounded-full flex items-center justify-center transition-all
              ${
                isSelected
                  ? "bg-indigo-600"
                  : "border-2 border-gray-300 bg-white"
              }
            `}
          >
            {isSelected && (
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            )}
          </div>
        </div>

        {/* Calendar illustration */}
        <div className="flex justify-center mb-2 sm:mb-2">
          <Image src="/icon.png" alt="Calendar icon" width={100} height={100} />
        </div>

        {/* Text content */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
            {option.weeks}
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            {option.price} for {option.days}
          </p>
        </div>
      </div>
    </label>
  );
}
