import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  status?: string | null;
  address?: string | null;
  price?: number | null;
  rooms?: number | null;
  typeField?: string | null;
  size?: number | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
};
