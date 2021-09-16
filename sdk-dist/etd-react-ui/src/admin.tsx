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

export function Addpeer({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "addPeer",
    "description":
      "The addPeer administrative method requests adding a new remote node to the list of tracked static nodes. The node will try to maintain connectivity to these nodes at all times, reconnecting every once in a while if the remote connection goes down. The method accepts a single argument, the enode URL of the remote peer to start tracking and returns a BOOL indicating whether the peer was accepted for tracking or some error occurred.",
    "type": "object",
    "properties": { "enode": { "type": "string", "title": "enode" } },
    "required": ["enode"],
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
              methodName: "admin_addPeer",
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

export function Datadir({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "datadir",
    "description":
      "The datadir administrative property can be queried for the absolute path the running Getd node currently uses to store all its databases.",
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
              methodName: "admin_datadir",
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

export function Nodeinfo({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "nodeInfo",
    "description":
      "The nodeInfo administrative property can be queried for all the information known about the running Getd node at the networking granularity. These include general information about the node itself as a participant of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e.g. etd, les, shh, bzz).",
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
              methodName: "admin_nodeInfo",
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

export function Peers({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "peers",
    "description":
      "The peers administrative property can be queried for all the information known about the connected remote nodes at the networking granularity. These include general information about the nodes themselves as participants of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e.g. etd, les, shh, bzz).",
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
              methodName: "admin_peers",
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

export function Startrpc({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "startRPC",
    "description":
      "The startRPC administrative method starts an HTTP based JSON RPC API webserver to handle client requests. All the parameters are optional.",
    "type": "object",
    "properties": {
      "host": { "type": "string", "title": "host" },
      "port": { "type": "number", "title": "port" },
      "cors": { "type": "string", "title": "cors" },
      "apis": { "type": "string", "title": "apis" },
    },
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
              methodName: "admin_startRPC",
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

export function Startws({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "startWS",
    "description":
      "The startWS administrative method starts an WebSocket based JSON RPC API webserver to handle client requests. All the parameters are optional",
    "type": "object",
    "properties": {
      "host": { "type": "string", "title": "host" },
      "port": { "type": "number", "title": "port" },
      "cors": { "type": "string", "title": "cors" },
      "apis": { "type": "string", "title": "apis" },
    },
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
              methodName: "admin_startRPC",
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

export function Stoprpc({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "stopRPC",
    "description":
      "The stopRPC administrative method closes the currently open HTTP RPC endpoint. As the node can only have a single HTTP endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not.",
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
              methodName: "admin_stopRPC",
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

export function Stopws({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "stopWS",
    "description":
      "The stopWS administrative method closes the currently open WebSocket RPC endpoint. As the node can only have a single WebSocket endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not.",
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
              methodName: "admin_stopWS",
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

export function Admin({ call, host, port }: MethodProps) {
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
      <Addpeer call={callRPC} />

      <Datadir call={callRPC} />

      <Nodeinfo call={callRPC} />

      <Peers call={callRPC} />

      <Startrpc call={callRPC} />

      <Startws call={callRPC} />

      <Stoprpc call={callRPC} />

      <Stopws call={callRPC} />
    </div>
  );
}
