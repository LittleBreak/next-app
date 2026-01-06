'use client';

import { useState, useCallback, useRef, useEffect, type KeyboardEvent } from 'react';
import type { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

/**
 * 单个 Todo 项组件
 * 支持完成、删除、编辑操作
 */
export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  // 进入编辑模式时聚焦输入框
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [todo.id, onToggle]);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [todo.id, onDelete]);

  const handleDoubleClick = useCallback(() => {
    setIsEditing(true);
    setEditText(todo.text);
  }, [todo.text]);

  const handleEditChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditText(e.target.value);
    },
    []
  );

  const handleEditSubmit = useCallback(() => {
    const trimmedText = editText.trim();
    if (trimmedText) {
      onEdit(todo.id, trimmedText);
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  }, [editText, todo.id, todo.text, onEdit]);

  const handleEditKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleEditSubmit();
      } else if (e.key === 'Escape') {
        setEditText(todo.text);
        setIsEditing(false);
      }
    },
    [handleEditSubmit, todo.text]
  );

  return (
    <div
      className={`group relative flex items-center gap-4 rounded-xl bg-white/80 p-4 shadow-md shadow-gray-200/50 ring-1 ring-gray-100 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/70 dark:bg-gray-800/80 dark:shadow-none dark:ring-gray-700/50 dark:hover:bg-gray-800 ${
        todo.completed ? 'opacity-70' : ''
      }`}
    >
      {/* 复选框 */}
      <button
        onClick={handleToggle}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
          todo.completed
            ? 'border-green-500 bg-green-500 text-white'
            : 'border-gray-300 hover:border-purple-400 dark:border-gray-600 dark:hover:border-purple-400'
        }`}
        aria-label={todo.completed ? '标记为未完成' : '标记为已完成'}
      >
        {todo.completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="h-3.5 w-3.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </button>

      {/* 任务内容 */}
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editText}
          onChange={handleEditChange}
          onBlur={handleEditSubmit}
          onKeyDown={handleEditKeyDown}
          className="flex-1 rounded-lg border-0 bg-gray-50 px-3 py-1.5 text-base text-gray-800 outline-none ring-2 ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
          aria-label="编辑任务"
        />
      ) : (
        <span
          onDoubleClick={handleDoubleClick}
          className={`flex-1 cursor-pointer select-none text-base transition-all duration-300 ${
            todo.completed
              ? 'text-gray-400 line-through dark:text-gray-500'
              : 'text-gray-700 dark:text-gray-200'
          }`}
          title="双击编辑"
        >
          {todo.text}
        </span>
      )}

      {/* 删除按钮 */}
      <button
        onClick={handleDelete}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 opacity-0 transition-all duration-200 hover:bg-red-50 hover:text-red-500 group-hover:opacity-100 dark:hover:bg-red-900/20"
        aria-label="删除任务"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}
