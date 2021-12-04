export interface TypeResult {
  isCustomType: boolean;
  type: string;
  types: TypeResult[];
  /**
   * Some custom type may define their own code.
   * For example, we have a type called Response, and its implementation is interface Response{name: string, value: number}.
   * Then its type is Response, and code is name: string, value: number}
   */
  code?: string;
}

export interface InputParamResult {
  /**
   * Types from input params.
   * For example, username: User will result types field holds User type
   */
  types: TypeResult[];
  /**
   * Generated code for input params.
   * For example, username: string, password: string
   */
  code: string;
}

export interface FunctionToCodeContext {
  functionComment: string;
  functionInputs: string;
  functionReturns: string;
  functionName: string;
  functionBody: string;
  functionRpcMethod: string;
}

export interface MethodToCodeContext {
  functions: string[][];
  methodName: string;
  methodComment: string;
  functionReturnTypes: TypeResult[];
}
