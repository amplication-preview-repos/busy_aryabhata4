import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  address?: SortOrder;
  price?: SortOrder;
  rooms?: SortOrder;
  typeField?: SortOrder;
  size?: SortOrder;
};
