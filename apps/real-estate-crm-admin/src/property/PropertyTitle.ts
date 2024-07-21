import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "status";

export const PropertyTitle = (record: TProperty): string => {
  return record.status?.toString() || String(record.id);
};
