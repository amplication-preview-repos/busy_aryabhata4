import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  address?: StringNullableFilter;
  agentAssignments?: AgentAssignmentListRelationFilter;
};
