import { StatusManagerRenderer } from "entities/status/ui";
import type { Status } from "entities/status/model";

type StatusManagerProps = {
  context: 'project';
}

// Mock statuses until we have a backend ready

const mockStatuses: Status[] = [
  { id: '1', label: 'To do' },
  { id: '2', label: 'In progress' },
  { id: '3', label: 'Done' },
]

export const StatusManager = ({ context }: StatusManagerProps) => {
  // fetch statuses based on context
  console.log(context);

  return <StatusManagerRenderer statuses={mockStatuses} />;
};