import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  agentAssignments?: Array<AgentAssignment>;
};
