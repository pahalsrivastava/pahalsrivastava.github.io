"use client";

import rawData from "@/data/contributions.json";

function getLevel(count: number): string {
  if (count === 0) return "bg-[#161C25]";
  if (count <= 2) return "bg-[#8B7CF6]/30";
  if (count <= 5) return "bg-[#8B7CF6]/55";
  if (count <= 9) return "bg-[#8B7CF6]/80";
  return "bg-[#8B7CF6]";
}

export function Heatmap() {
  const dates = Object.keys(rawData.days).sort();

  return (
    <div className="bg-[#11161D] border border-[#232B36] rounded-xl p-6 overflow-x-auto">
      <div className="font-mono text-sm text-[#E7ECF1] mb-4">
        <span className="text-[#5FE3C0] font-semibold">
          {rawData.totalContributions.toLocaleString()}
        </span>{" "}
        contributions in the last year
      </div>

      {dates.length > 0 ? (
        <div className="grid grid-flow-col grid-rows-7 gap-[3px] w-max">
          {dates.map((date) => {
            const count = (rawData.days as Record<string, number>)[date];
            return (
              <div
                key={date}
                title={`${date}: ${count} contributions`}
                className={`w-[11px] h-[11px] rounded-[2px] ${getLevel(count)} hover:ring-1 hover:ring-white transition-all`}
              />
            );
          })}
        </div>
      ) : (
        <p className="font-mono text-xs text-[#8C97A5]">
          Contributions will be populated automatically by GitHub Actions on deploy.
        </p>
      )}

      <div className="flex items-center gap-1.5 font-mono text-xs text-[#8C97A5] mt-4">
        <span>Less</span>
        <span className="w-2.5 h-2.5 rounded-[2px] bg-[#161C25]" />
        <span className="w-2.5 h-2.5 rounded-[2px] bg-[#8B7CF6]/30" />
        <span className="w-2.5 h-2.5 rounded-[2px] bg-[#8B7CF6]/55" />
        <span className="w-2.5 h-2.5 rounded-[2px] bg-[#8B7CF6]/80" />
        <span className="w-2.5 h-2.5 rounded-[2px] bg-[#8B7CF6]" />
        <span>More</span>
      </div>

      <div className="font-mono text-xs mt-4 space-x-3 text-[#5FE3C0]">
        <a href="https://github.com/pahalsrivastava" target="_blank" rel="noreferrer" className="hover:underline">
          github.com/pahalsrivastava
        </a>
        <span>·</span>
        <a href="https://github.com/pahal-srivastava" target="_blank" rel="noreferrer" className="hover:underline">
          github.com/pahal-srivastava
        </a>
      </div>
    </div>
  );
}