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

export function Createsubscription({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "createSubscription",
    "description":
      "Subscriptions are created with a regular RPC call with etd_subscribe as method and the subscription name as first parameter. If successful it returns the subscription id.",
    "type": "object",
    "properties": {
      "subscriptionName": { "type": "string", "title": "subscriptionName" },
      "aaaaa": { "type": "string", "title": "aaaaa" },
    },
    "required": ["subscriptionName"],
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
              methodName: "real-time_createSubscription",
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

export function Cancelsubscription({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "cancelSubscription",
    "description":
      "Subscriptions are cancelled with a regular RPC call with etd_unsubscribe as method and the subscription id as first parameter. It returns a bool indicating if the subscription was cancelled successful.",
    "type": "object",
    "properties": {
      "subscriptionID": { "type": "string", "title": "subscriptionID" },
    },
    "required": ["subscriptionID"],
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
              methodName: "real-time_cancelSubscription",
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

export function Supportedsubscriptions({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "supportedSubscriptions",
    "description":
      "newHeads -Fires a notification each time a new header is appended to the chain, including chain reorganizations. Users can use the bloom filter to determine if the block contains logs that are interested to them. -In case of a chain reorganization the subscription will emit all new headers for the new chain. Therefore the subscription can emit multiple headers on the same height.\nlogs -Returns logs that are included in new imported blocks and match the given filter criteria. -In case of a chain reorganization previous sent logs that are on the old chain will be resend with the removed property set to true. Logs from transactions that ended up in the new chain are emitted. Therefore a subscription can emit logs for the same transaction multiple times.",
    "type": "object",
    "properties": {
      "subscriptionObject": {
        "type": "object",
        "properties": {
          "address": { "type": "array", "items": { "type": "string" } },
          "topics": { "type": "array", "items": { "type": "string" } },
        },
      },
    },
    "required": ["subscriptionObject"],
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
              methodName: "real-time_supportedSubscriptions",
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

export function Newpendingtransactions({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "newPendingTransactions",
    "description":
      "Returns the hash for all transactions that are added to the pending state and are signed with a key that is available in the node. Tansaction that was previously part of the canonical chain isn’t part of the new canonical chain after a reogranization its again emitted.",
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
              methodName: "real-time_newPendingTransactions",
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

export function Syncing({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "syncing",
    "description":
      "Indicates when the node starts or stops synchronizing. The result can either be a boolean indicating that the synchronization has started (true), finished (false) or an object with various progress indicators.",
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
              methodName: "real-time_syncing",
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

export function Real_time({ call, host, port }: MethodProps) {
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
      <Createsubscription call={callRPC} />

      <Cancelsubscription call={callRPC} />

      <Supportedsubscriptions call={callRPC} />

      <Newpendingtransactions call={callRPC} />

      <Syncing call={callRPC} />
    </div>
  );
}
