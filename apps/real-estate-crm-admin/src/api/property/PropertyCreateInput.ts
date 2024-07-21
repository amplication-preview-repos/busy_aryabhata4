import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  status?: string | null;
  address?: string | null;
  price?: number | null;
  rooms?: number | null;
  typeField?: string | null;
  size?: number | null;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
};
