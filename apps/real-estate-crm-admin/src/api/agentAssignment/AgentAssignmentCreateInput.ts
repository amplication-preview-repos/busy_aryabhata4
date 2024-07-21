import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentName?: string | null;
  property?: PropertyWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
};
