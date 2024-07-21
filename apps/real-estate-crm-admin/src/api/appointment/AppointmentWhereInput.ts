import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentWhereInput = {
  id?: StringFilter;
  dateTime?: DateTimeNullableFilter;
  note?: StringNullableFilter;
};
