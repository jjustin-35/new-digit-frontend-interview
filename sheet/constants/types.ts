export enum ClientDataKey {
  ID = "id",
  CLIENT = "name",
  TOTAL_BALANCE = "totalBalance",
  ISSUE_DATE = "issueDate",
  BALANCE = "balance",
  ACTIONS = "actions",
}

export type ClientData = Record<ClientDataKey, string>;
