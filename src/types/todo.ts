/** Todo 项目的数据结构 */
export interface Todo {
  /** 唯一标识符 */
  id: string;
  /** 任务内容 */
  text: string;
  /** 是否已完成 */
  completed: boolean;
  /** 创建时间 */
  createdAt: number;
}

/** Todo 筛选类型 */
export type FilterType = 'all' | 'active' | 'completed';
