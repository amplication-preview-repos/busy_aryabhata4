import { Property } from "../property/Property";
import { Client } from "../client/Client";

export type AgentAssignment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  agentName: string | null;
  property?: Property | null;
  client?: Client | null;
};
