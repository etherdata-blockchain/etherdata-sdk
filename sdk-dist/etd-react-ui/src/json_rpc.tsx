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

export function Httpserver({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "HTTPServer",
    "description":
      "To enable the HTTP server, use the --http flag. 'Getd --http'\nBy default, Getd accepts connections from the loopback interface (127.0.0.1). The default  listening port is 8545. You can customize address and port using  the --http.port and --http.addr flags. 'Getd --http --http.port 3334'\nJSON-RPC method namespaces must be whitelisted in order to be available through the HTTP server.  An RPC error with error code -32602 is generated if you call a namespace that isn’t whitelisted.  The default whitelist allows access to the “etd” and “shh” namespaces. To enable access to  other APIs like account management (“personal”) and debugging (“debug”), they must be  configured via the --http.api flag. We do not recommend enabling such APIs over HTTP,  however, since access to these methods increases the attack surface. 'Getd --http --http.api personal,etd,net,web3'\nSince the HTTP server is reachable from any local application, additional protection is built  into the server to prevent misuse of the API from web pages. If you want enable access to the  API from a web page, you must configure the server to accept Cross-Origin requests with  the --http.corsdomain flag.\nExample: if you want to use Remix with Getd, allow requests from the remix domain. 'Getd --http --http.corsdomain https://remix.ethereum.org' Use --http.corsdomain '*' to enable access from any origin.",
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
              methodName: "",
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

export function Websocketserver({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "WebSocketServer",
    "description":
      "Configuration of the WebSocket endpoint is similar to the HTTP transport. To enable WebSocket  access, use --ws flag. The default WebSocket port is 8546.  The --ws.addr, --ws.port and --ws.api flags can be used to customize settings for the  WebSocket server. 'Getd --ws --ws.port 3334 --ws.api etd,net,web3'\nCross-Origin request protection also applies to the WebSocket server.  Use the --ws.origins flag to allow access to the server from web pages: 'Getd --ws --ws.origins http://myapp.example.com'\nAs with --http.corsdomain, using --ws.origins '*' allows access from any origin.",
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
              methodName: "",
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

export function Ipcserver({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "IPCServer",
    "description":
      "JSON-RPC APIs are also provided on a UNIX domain socket. This server is enabled by default  and has access to all JSON-RPC namespaces.\nThe listening socket is placed into the data directory by default. On Linux and macOS, the  default location of the Getd socket is ~/.ethereum/Getd.ipc\nOn Windows, IPC is provided via named pipes. The default location of the Getd pipe is: //./pipe/Getd.ipc\nYou can configure the location of the socket using the --ipcpath flag. IPC can be disabled  using the --ipcdisable flag.",
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
              methodName: "",
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

export function Json_rpc({ call, host, port }: MethodProps) {
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
      <Httpserver call={callRPC} />

      <Websocketserver call={callRPC} />

      <Ipcserver call={callRPC} />
    </div>
  );
}
