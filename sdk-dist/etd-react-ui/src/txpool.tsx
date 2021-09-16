//@ts-ignore
import Form from "@rjsf/material-ui";
import React from "react";
import { Alert } from "@material-ui/lab";
import { Card } from "@material-ui/core";
import { RequestManager, HTTPTransport, Client } from "@open-rpc/client-js";

type CallParam = {
  methodName: string;
  params: string[];
};

interface Props {
  call(callParam: CallParam): Promise<any>;
}

interface MethodProps {
  host?: string;
  port?: string;
  call?(callParam: CallParam): Promise<any>;
}

export function Content({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "content",
    "description":
      "The content inspection property can be queried to list the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only.\nThe result is an object with two fields pending and queued. Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions. These batches themselves are maps associating nonces with actual transactions.\nPlease note, there may be multiple transactions associated with the same account and nonce. This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions).",
    "type": "object",
    "properties": {},
    "required": [],
  };

  return (
    <Card className="form-item" variant="outlined">
      {values && (
        <Alert>
          <div>{values}</div>
        </Alert>
      )}
      {errors && (
        <Alert severity="error">
          <div>{errors}</div>
        </Alert>
      )}
      <Form
        schema={schema}
        onSubmit={async (v: any) => {
          setErrors(undefined);
          setValues(undefined);
          try {
            let result = await call({
              params: Object.values(v.formData as any),
              methodName: "txpool_content",
            });
            if (typeof result === "object") {
              setValues(JSON.stringify(result, undefined, 2));
            } else {
              setValues(result ? result.toString() : "ok");
            }
          } catch (err) {
            setErrors(err ? err.toString() : "error");
          }
        }}
      />
    </Card>
  );
}

export function Inspect({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "inspect",
    "description":
      "The inspect inspection property can be queried to list a textual summary of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only. This is a method specifically tailored to developers to quickly see the transactions in the pool and find any potential issues.\nThe result is an object with two fields pending and queued. Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions. These batches themselves are maps associating nonces with transactions summary strings.\nPlease note, there may be multiple transactions associated with the same account and nonce. This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions).",
    "type": "object",
    "properties": {},
    "required": [],
  };

  return (
    <Card className="form-item" variant="outlined">
      {values && (
        <Alert>
          <div>{values}</div>
        </Alert>
      )}
      {errors && (
        <Alert severity="error">
          <div>{errors}</div>
        </Alert>
      )}
      <Form
        schema={schema}
        onSubmit={async (v: any) => {
          setErrors(undefined);
          setValues(undefined);
          try {
            let result = await call({
              params: Object.values(v.formData as any),
              methodName: "txpool_inspect",
            });
            if (typeof result === "object") {
              setValues(JSON.stringify(result, undefined, 2));
            } else {
              setValues(result ? result.toString() : "ok");
            }
          } catch (err) {
            setErrors(err ? err.toString() : "error");
          }
        }}
      />
    </Card>
  );
}

export function Status({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "status",
    "description":
      "The status inspection property can be queried for the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only.\nThe result is an object with two fields pending and queued, each of which is a counter representing the number of transactions in that particular state.",
    "type": "object",
    "properties": {},
    "required": [],
  };

  return (
    <Card className="form-item" variant="outlined">
      {values && (
        <Alert>
          <div>{values}</div>
        </Alert>
      )}
      {errors && (
        <Alert severity="error">
          <div>{errors}</div>
        </Alert>
      )}
      <Form
        schema={schema}
        onSubmit={async (v: any) => {
          setErrors(undefined);
          setValues(undefined);
          try {
            let result = await call({
              params: Object.values(v.formData as any),
              methodName: "txpool_status",
            });
            if (typeof result === "object") {
              setValues(JSON.stringify(result, undefined, 2));
            } else {
              setValues(result ? result.toString() : "ok");
            }
          } catch (err) {
            setErrors(err ? err.toString() : "error");
          }
        }}
      />
    </Card>
  );
}

export function Txpool({ call, host, port }: MethodProps) {
  const callRPC = React.useCallback(
    async (param: CallParam) => {
      if (call !== undefined) {
        return await call(param);
      }
      const transport = new HTTPTransport(`${host}:${port}`);
      const client = new Client(new RequestManager([transport]));
      return await client.request({
        method: param.methodName,
        params: param.params,
      });
    },
    [host, port, call]
  );

  return (
    <div>
      <Content call={callRPC} />

      <Inspect call={callRPC} />

      <Status call={callRPC} />
    </div>
  );
}
