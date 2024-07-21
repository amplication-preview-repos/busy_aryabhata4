import { AgentAssignmentUpdateManyWithoutClientsInput } from "./AgentAssignmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutClientsInput;
};
