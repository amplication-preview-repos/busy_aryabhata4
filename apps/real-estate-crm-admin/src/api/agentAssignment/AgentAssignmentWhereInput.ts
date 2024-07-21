import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AgentAssignmentWhereInput = {
  id?: StringFilter;
  agentName?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
  client?: ClientWhereUniqueInput;
};
