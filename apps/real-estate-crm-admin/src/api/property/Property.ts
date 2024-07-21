import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string | null;
  address: string | null;
  price: number | null;
  rooms: number | null;
  typeField: string | null;
  size: number | null;
  agentAssignments?: Array<AgentAssignment>;
};
