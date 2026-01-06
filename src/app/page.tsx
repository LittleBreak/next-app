import { TodoApp } from '@/components/todo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* 装饰性背景 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-200 opacity-30 blur-3xl dark:bg-purple-900 dark:opacity-20" />
        <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-indigo-200 opacity-30 blur-3xl dark:bg-indigo-900 dark:opacity-20" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-pink-200 opacity-30 blur-3xl dark:bg-pink-900 dark:opacity-20" />
      </div>

      <main className="relative mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        {/* 标题区域 */}
        <header className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-purple-100 p-3 dark:bg-purple-900/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 text-purple-600 dark:text-purple-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-purple-400 dark:to-indigo-400 sm:text-5xl">
            Todo List
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            简洁高效，管理你的每一天
          </p>
        </header>

        {/* Todo 应用 */}
        <TodoApp />
      </main>
    </div>
  );
}
