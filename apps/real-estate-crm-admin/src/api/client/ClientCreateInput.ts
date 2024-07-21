import { AgentAssignmentCreateNestedManyWithoutClientsInput } from "./AgentAssignmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutClientsInput;
};
