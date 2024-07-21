import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agentName?: string | null;
  property?: PropertyWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
};
