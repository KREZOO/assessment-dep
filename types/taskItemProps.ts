export interface TaskItemProps {
   task: {
      id: number
      type: string
      image: string
      createdAt: string
      title?: string
      owner?: string
   }
}
