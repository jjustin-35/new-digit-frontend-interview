import { ClientDataKey } from "../../constants/types";

type Column = {
  key: ClientDataKey;
  label: string;
  width: string;
};

const columns: Column[] = [
  {
    key: ClientDataKey.ID,
    label: "ID",
    width: "105px"
  },
  {
    key: ClientDataKey.CLIENT,
    label: "Client",
    width: "295px"
  },
  {
    key: ClientDataKey.TOTAL_BALANCE,
    label: "Total",
    width: "126px"
  },
  {
    key: ClientDataKey.ISSUE_DATE,
    label: "Issue Date",
    width: "167px"
  },
  {
    key: ClientDataKey.BALANCE,
    label: "Balance",
    width: "173px"
  },
  {
    key: ClientDataKey.ACTIONS,
    label: "Actions",
    width: "216px"
  }
];

export default columns;
