"use client";

import { Service } from "@/lib/data";

const categoryColors: Record<string, string> = {
  text: "bg-blue-500/20 text-blue-400",
  image: "bg-purple-500/20 text-purple-400",
  audio: "bg-green-500/20 text-green-400",
  video: "bg-red-500/20 text-red-400",
  code: "bg-yellow-500/20 text-yellow-400",
  other: "bg-gray-500/20 text-gray-400",
};

const categoryLabels: Record<string, string> = {
  text: "Текст",
  image: "Изображения",
  audio: "Аудио",
  video: "Видео",
  code: "Код",
  other: "Другое",
};

const categoryIcons: Record<string, string> = {
  text: "Aa",
  image: "Im",
  audio: "Au",
  video: "Vi",
  code: "</>",
  other: "...",
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${
              categoryColors[service.category] || categoryColors.other
            }`}
          >
            {categoryIcons[service.category] || "..."}
          </div>
          <div>
            <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
              {service.name}
            </h3>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                categoryColors[service.category] || categoryColors.other
              }`}
            >
              {categoryLabels[service.category] || service.category}
            </span>
          </div>
        </div>
        <svg
          className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
        {service.description}
      </p>

      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.round(service.rating)
                ? "text-yellow-400"
                : "text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-xs text-gray-500 ml-1">
          {service.rating.toFixed(1)} ({service.votesCount})
        </span>
      </div>

      {service.limitations && (
        <p className="text-xs text-gray-500 border-t border-gray-800 pt-2">
          {service.limitations}
        </p>
      )}

      {service.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {service.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
