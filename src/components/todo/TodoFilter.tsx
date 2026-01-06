'use client';

import { useCallback } from 'react';
import type { FilterType } from '@/types/todo';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

const FILTER_OPTIONS: { value: FilterType; label: string }[] = [
  { value: 'all', label: '全部' },
  { value: 'active', label: '进行中' },
  { value: 'completed', label: '已完成' },
];

/**
 * Todo 筛选组件
 * 提供筛选和清除已完成任务的功能
 */
export function TodoFilter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: TodoFilterProps) {
  const handleFilterChange = useCallback(
    (newFilter: FilterType) => {
      onFilterChange(newFilter);
    },
    [onFilterChange]
  );

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* 任务统计 */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <span className="inline-flex items-center gap-1.5">
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-purple-100 px-1.5 text-xs font-medium text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
            {activeCount}
          </span>
          <span>待完成</span>
        </span>
        <span className="text-gray-300 dark:text-gray-600">|</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-green-100 px-1.5 text-xs font-medium text-green-600 dark:bg-green-900/30 dark:text-green-400">
            {completedCount}
          </span>
          <span>已完成</span>
        </span>
      </div>

      {/* 筛选按钮组 */}
      <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => handleFilterChange(option.value)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
              filter === option.value
                ? 'bg-white text-purple-600 shadow-sm dark:bg-gray-700 dark:text-purple-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* 清除已完成按钮 */}
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
        >
          清除已完成
        </button>
      )}
    </div>
  );
}
