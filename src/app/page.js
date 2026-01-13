"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import WeekCard from "@/components/WeekCard";
import DateSelectionCard from "@/components/DateSelectionCard";
import DatePickerModal from "@/components/DatePickerModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedWeeks, setSelectedWeeks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempDate, setTempDate] = useState({ day: 18, month: 6, year: 2026 });

  const options = [
    {
      id: "1-week",
      weeks: "1 WEEK",
      price: "$35",
      days: "5 days",
      totalDays: 5,
    },
    {
      id: "2-weeks",
      weeks: "2 WEEKS",
      price: "$70",
      days: "10 days",
      totalDays: 10,
    },
    {
      id: "3-weeks",
      weeks: "3 WEEKS",
      price: "$105",
      days: "15 days",
      totalDays: 15,
    },
    {
      id: "4-weeks",
      weeks: "4 WEEKS",
      price: "$140",
      days: "20 days",
      totalDays: 20,
    },
  ];

  // Function to calculate end date
  const calculateEndDate = (start, weeks) => {
    if (!start) return "";
    const date = new Date(start);
    const daysToAdd = weeks * 5; // 5 days per week
    date.setDate(date.getDate() + daysToAdd);
    return date
      .toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "/");
  };

  // Handle date confirmation
  const handleDateConfirm = () => {
    const dateStr = `${String(tempDate.month).padStart(2, "0")}/${String(
      tempDate.day
    ).padStart(2, "0")}/${tempDate.year}`;
    setStartDate(dateStr);

    // Calculate end date based on selected weeks
    const selectedOption = options.find((opt) => opt.id === selectedWeeks);
    if (selectedOption) {
      const weeks = parseInt(selectedOption.id.split("-")[0]);
      setEndDate(
        calculateEndDate(
          new Date(tempDate.year, tempDate.month - 1, tempDate.day),
          weeks
        )
      );
    }

    setShowDatePicker(false);
  };

  const getSelectedOption = () => {
    return options.find((opt) => opt.id === selectedWeeks);
  };

  // Handle back button click
  const handleBack = () => {
    setSelectedWeeks("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main
        className="min-h-screen bg-cover bg-center pb-32"
        style={{
          backgroundImage: `url(/bg.png)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32">
          {/* Back Button */}
          <Link
            href="#"
            className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-4 sm:mb-5 text-sm sm:text-base transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Regular aftercare program
          </Link>

          {/* Heading */}
          <div className="mb-8 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-medium text-[#070012] mb-2 sm:mb-2">
              How many weeks you like to continue?
            </h1>
            <p className="text-sm sm:text-base text-[#555555]">
              Based on your selection Mon, Tue, Thu, Fri, Sat
            </p>
          </div>

          {/* Week Options */}
          <RadioGroup
            value={selectedWeeks}
            onValueChange={setSelectedWeeks}
            className="mb-12 sm:mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {options.map((option) => (
                <WeekCard
                  key={option.id}
                  option={option}
                  isSelected={selectedWeeks === option.id}
                  onSelect={setSelectedWeeks}
                />
              ))}
            </div>
          </RadioGroup>

          {/* Date Selection Card */}
          {selectedWeeks && (
            <DateSelectionCard
              selectedOption={getSelectedOption()}
              startDate={startDate}
              endDate={endDate}
              onStartDateClick={() => setShowDatePicker(true)}
            />
          )}
        </div>

        {/* Date Picker Modal */}
        <DatePickerModal
          isOpen={showDatePicker}
          tempDate={tempDate}
          setTempDate={setTempDate}
          selectedOption={getSelectedOption()}
          onCancel={() => setShowDatePicker(false)}
          onConfirm={handleDateConfirm}
        />

        {/* Footer */}
        <Footer
          selectedWeeks={selectedWeeks}
          startDate={startDate}
          onBack={handleBack}
          onNext={() => console.log("Next clicked")}
        />
      </main>
    </div>
  );
}
