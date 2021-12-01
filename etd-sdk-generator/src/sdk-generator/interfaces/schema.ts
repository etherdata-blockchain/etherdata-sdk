export type AcceptedType =
  | "string"
  | "number"
  | "boolean"
  | "array"
  | "object"
  | "any"
  | "void";

export interface Method {
  title: string;
  description: string;
  functions: RPCFunction[];
}

export interface RPCFunction {
  name: string;
  description: string;
  rpc_method: string;
  params: Param[];
  returns: Return[];
}

export interface Variable {
  name: string;
  description: string;
  type: AcceptedType;
  optional: boolean;
  objectType?: Param[];
  arrayType?: AcceptedType;
}

export interface Param extends Variable {
  default?: string;
}

export interface Return extends Variable {}