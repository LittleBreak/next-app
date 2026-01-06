'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Todo, FilterType } from '@/types/todo';

const STORAGE_KEY = 'todos-nextjs';

/**
 * 生成唯一 ID
 */
const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
};

/**
 * Todo 管理 Hook
 * 提供 Todo 的增删改查功能，并自动持久化到 localStorage
 */
export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [isLoaded, setIsLoaded] = useState(false);

  // 从 localStorage 加载数据
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Todo[];
        setTodos(parsed);
      }
    } catch (error) {
      console.error('Failed to load todos from localStorage:', error);
    }
    setIsLoaded(true);
  }, []);

  // 保存到 localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      } catch (error) {
        console.error('Failed to save todos to localStorage:', error);
      }
    }
  }, [todos, isLoaded]);

  /**
   * 添加新的 Todo
   */
  const addTodo = useCallback((text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newTodo: Todo = {
      id: generateId(),
      text: trimmedText,
      completed: false,
      createdAt: Date.now(),
    };

    setTodos((prev) => [newTodo, ...prev]);
  }, []);

  /**
   * 切换 Todo 完成状态
   */
  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  /**
   * 删除 Todo
   */
  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  /**
   * 编辑 Todo 内容
   */
  const editTodo = useCallback((id: string, newText: string) => {
    const trimmedText = newText.trim();
    if (!trimmedText) return;

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: trimmedText } : todo
      )
    );
  }, []);

  /**
   * 清除所有已完成的 Todo
   */
  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  }, []);

  /**
   * 根据筛选条件过滤 Todo 列表
   */
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    activeCount,
    completedCount,
    totalCount: todos.length,
    isLoaded,
  };
}
