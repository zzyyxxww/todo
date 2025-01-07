
export interface TaskModel {
  checked: boolean;
  text: string;
  indent: number;
  type: 'task' | 'discuss'
  ref?: HTMLTextAreaElement;
}

export interface TaskProps {
  task: TaskModel;
  index: number;
}

export interface Range {
  start: number;
  count: number;
}

export interface DocumentModel {
  id: string;
  name: string;
}
