'use client';

import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';

/**
 * Todo 应用主组件
 * 整合所有子组件，管理应用状态
 */
export function TodoApp() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    activeCount,
    completedCount,
    totalCount,
    isLoaded,
  } = useTodos();

  // 等待数据加载完成
  if (!isLoaded) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* 输入框 */}
      <TodoInput onAdd={addTodo} />

      {/* 筛选器 */}
      {totalCount > 0 && (
        <TodoFilter
          filter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
        />
      )}

      {/* 任务列表 */}
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}
