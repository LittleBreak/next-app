import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* 装饰性背景 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-200 opacity-30 blur-3xl dark:bg-blue-900 dark:opacity-20" />
        <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-indigo-200 opacity-30 blur-3xl dark:bg-indigo-900 dark:opacity-20" />
      </div>

      <article className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        {/* 返回首页 */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          返回首页
        </Link>

        {/* 文章头部 */}
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              技术架构
            </span>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              2026年1月6日
            </time>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-gray-400 sm:text-5xl">
            Next.js Todo 应用技术架构解析
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            深入了解本项目所采用的现代化前端技术栈，包括 Next.js 16、React 19、TypeScript 5 和 Tailwind CSS 4 等最新技术。
          </p>
        </header>

        {/* 文章内容 */}
        <div className="prose prose-lg prose-gray max-w-none dark:prose-invert">
          {/* 技术栈总览 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                📦
              </span>
              技术栈总览
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <TechCard
                name="Next.js 16"
                description="最新版本的 React 框架，支持 App Router 和服务端组件"
                color="black"
              />
              <TechCard
                name="React 19"
                description="最新的 React 版本，带来更好的性能和并发特性"
                color="blue"
              />
              <TechCard
                name="TypeScript 5"
                description="强类型 JavaScript 超集，提供更好的开发体验"
                color="indigo"
              />
              <TechCard
                name="Tailwind CSS 4"
                description="原子化 CSS 框架，快速构建精美 UI"
                color="cyan"
              />
              <TechCard
                name="ESLint 9"
                description="代码质量检查工具，确保代码规范"
                color="purple"
              />
              <TechCard
                name="pnpm"
                description="高效的包管理器，节省磁盘空间"
                color="orange"
              />
            </div>
          </section>

          {/* 项目结构 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                📁
              </span>
              项目结构
            </h2>
            <div className="mt-6 overflow-hidden rounded-xl bg-gray-900 p-6 text-sm">
              <pre className="text-gray-300">
                <code>{`src/
├── app/                    # Next.js App Router 目录
│   ├── layout.tsx         # 根布局组件
│   ├── page.tsx           # 首页（Todo 应用）
│   ├── globals.css        # 全局样式
│   └── blog/              # 博客路由
│       └── page.tsx       # 博客页面
├── components/            # 可复用组件
│   └── todo/             # Todo 相关组件
│       ├── TodoApp.tsx   # 主应用组件
│       ├── TodoInput.tsx # 输入组件
│       ├── TodoItem.tsx  # 任务项组件
│       ├── TodoList.tsx  # 列表组件
│       ├── TodoFilter.tsx# 筛选组件
│       └── index.ts      # 组件导出
├── hooks/                 # 自定义 Hooks
│   └── useTodos.ts       # Todo 状态管理
└── types/                 # TypeScript 类型定义
    └── todo.ts           # Todo 类型`}</code>
              </pre>
            </div>
          </section>

          {/* 核心特性 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                ⚡
              </span>
              核心特性
            </h2>
            <div className="mt-6 space-y-6">
              <FeatureCard
                title="App Router 架构"
                description="采用 Next.js 16 的 App Router，支持服务端组件、流式渲染和嵌套布局。每个路由都是一个文件夹，page.tsx 定义页面内容，layout.tsx 定义共享布局。"
                icon="🚀"
              />
              <FeatureCard
                title="客户端状态管理"
                description="使用 React 自定义 Hook (useTodos) 管理 Todo 状态，结合 localStorage 实现数据持久化。状态更新自动触发 UI 重新渲染。"
                icon="🔄"
              />
              <FeatureCard
                title="组件化设计"
                description="遵循单一职责原则，将 UI 拆分为独立的可复用组件。TodoInput 负责输入，TodoItem 负责展示单个任务，TodoFilter 负责筛选。"
                icon="🧩"
              />
              <FeatureCard
                title="TypeScript 类型安全"
                description="所有组件和 Hook 都有完整的类型定义，包括 Props 接口、事件处理器类型和状态类型，确保编译时类型检查。"
                icon="🛡️"
              />
              <FeatureCard
                title="Tailwind CSS 样式"
                description="使用 Tailwind CSS 4 的原子化类名快速构建响应式 UI，支持深色模式、渐变背景和精美的动画效果。"
                icon="🎨"
              />
            </div>
          </section>

          {/* 代码示例 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                💻
              </span>
              代码示例
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Todo 类型定义
                </h3>
                <div className="overflow-hidden rounded-xl bg-gray-900 p-4 text-sm">
                  <pre className="text-gray-300">
                    <code>{`interface Todo {
  id: string;        // 唯一标识符
  text: string;      // 任务内容
  completed: boolean; // 是否已完成
  createdAt: number; // 创建时间戳
}

type FilterType = 'all' | 'active' | 'completed';`}</code>
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  自定义 Hook 使用
                </h3>
                <div className="overflow-hidden rounded-xl bg-gray-900 p-4 text-sm">
                  <pre className="text-gray-300">
                    <code>{`const {
  todos,          // 过滤后的任务列表
  filter,         // 当前筛选类型
  setFilter,      // 设置筛选类型
  addTodo,        // 添加任务
  toggleTodo,     // 切换完成状态
  deleteTodo,     // 删除任务
  editTodo,       // 编辑任务
  clearCompleted, // 清除已完成
  activeCount,    // 待完成数量
  completedCount, // 已完成数量
} = useTodos();`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 总结 */}
          <section className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              总结
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              本项目展示了如何使用现代化的前端技术栈构建一个功能完整、代码规范的 Todo 应用。
              通过 Next.js 16 的 App Router、React 19 的新特性、TypeScript 的类型安全和 Tailwind CSS 的快速样式开发，
              我们实现了一个具有优秀用户体验和开发体验的应用。这套技术栈也是当前业界的主流选择，
              适合用于构建各种规模的 Web 应用。
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

/** 技术卡片组件 */
function TechCard({
  name,
  description,
  color,
}: {
  name: string;
  description: string;
  color: string;
}) {
  const colorClasses: Record<string, string> = {
    black: 'from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-500',
    blue: 'from-blue-500 to-blue-600',
    indigo: 'from-indigo-500 to-indigo-600',
    cyan: 'from-cyan-500 to-cyan-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-5 shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800 dark:ring-gray-700">
      <div
        className={`mb-3 inline-block rounded-lg bg-gradient-to-r ${colorClasses[color]} px-3 py-1 text-sm font-medium text-white`}
      >
        {name}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

/** 特性卡片组件 */
function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl bg-white p-5 shadow-md ring-1 ring-gray-100 dark:bg-gray-800 dark:ring-gray-700">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl dark:bg-gray-700">
        {icon}
      </span>
      <div>
        <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
