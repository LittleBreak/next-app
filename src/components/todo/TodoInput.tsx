'use client';

import { useState, useCallback, type KeyboardEvent, type ChangeEvent } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

/**
 * Todo 输入组件
 * 用于添加新的任务
 */
export function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && value.trim()) {
        onAdd(value);
        setValue('');
      }
    },
    [value, onAdd]
  );

  const handleSubmit = useCallback(() => {
    if (value.trim()) {
      onAdd(value);
      setValue('');
    }
  }, [value, onAdd]);

  return (
    <div className="relative flex items-center gap-3">
      <div className="relative flex-1">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="添加新任务..."
          className="w-full rounded-xl border-0 bg-white/80 px-5 py-4 text-base text-gray-800 shadow-lg shadow-purple-500/5 ring-1 ring-gray-200 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:bg-white focus:shadow-xl focus:shadow-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/80 dark:text-gray-100 dark:ring-gray-700 dark:placeholder:text-gray-500 dark:focus:bg-gray-800 dark:focus:ring-purple-400"
          aria-label="添加新任务"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!value.trim()}
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-lg dark:focus:ring-offset-gray-900"
        aria-label="添加任务"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
