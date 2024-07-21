import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  address?: StringNullableFilter;
  price?: FloatNullableFilter;
  rooms?: IntNullableFilter;
  typeField?: StringNullableFilter;
  size?: IntNullableFilter;
  agentAssignments?: AgentAssignmentListRelationFilter;
};
