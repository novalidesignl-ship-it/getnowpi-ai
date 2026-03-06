"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { categories } from "@/lib/data";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-bold mb-2">Предложить сервис</h1>
        <p className="text-gray-400 mb-8">
          Знаете бесплатный AI-сервис, которого нет в каталоге? Расскажите о нём!
        </p>

        {submitted ? (
          <div className="bg-green-900/30 border border-green-700 rounded-xl p-6 text-center">
            <p className="text-green-400 text-lg font-medium mb-1">
              Спасибо за предложение!
            </p>
            <p className="text-gray-400 text-sm">
              Мы рассмотрим вашу заявку и добавим сервис в каталог.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Название сервиса *
              </label>
              <input
                required
                type="text"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="Например: ChatGPT"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Ссылка *
              </label>
              <input
                required
                type="url"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Категория *
              </label>
              <select
                required
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Выберите категорию</option>
                {categories
                  .filter((c) => c.id !== "all")
                  .map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Описание *
              </label>
              <textarea
                required
                rows={3}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Что делает этот сервис?"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Ограничения бесплатного плана
              </label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="Например: 100 запросов в день"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              Отправить
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
