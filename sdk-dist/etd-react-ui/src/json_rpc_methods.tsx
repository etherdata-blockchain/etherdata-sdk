import { MuiForm5 as Form } from "@rjsf/material-ui";
import React from "react";
import { Card, Alert } from "@mui/material";
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

export function ProtocalVersion({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "protocalVersion",
    "description": "Returns the current etherdata protocol version.",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function BlockNumber({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "blockNumber",
    "description": "Returns the current block number",
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
            setErrors(err ? `${err}` : "error");
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
      "Returns an object with data about the sync status or false.",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function Coinbase({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "coinbase",
    "description": "Returns the client coinbase address.",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function Mining({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "mining",
    "description": "Returns true if client is actively mining new blocks.",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function Hashrate({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "hashrate",
    "description":
      "Returns the number of hashes per second that the node is mining with.",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GasPrice({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "gasPrice",
    "description": "Returns the current price per gas in wei.",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function Accounts({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "accounts",
    "description": "Returns a list of addresses owned by client.",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetBalance({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getBalance",
    "description": "Returns the balance of the account of given address.",
    "type": "object",
    "properties": {
      "address": { "type": "string", "title": "address" },
      "tag": { "type": "string", "title": "tag" },
    },
    "required": ["address", "tag"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetStorageAt({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getStorageAt",
    "description":
      "Returns the value from a storage position at a given address.",
    "type": "object",
    "properties": {
      "address": { "type": "string", "title": "address" },
      "position": { "type": "string", "title": "position" },
      "tag": { "type": "string", "title": "tag" },
    },
    "required": ["address", "position", "tag"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetTransactionCount({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getTransactionCount",
    "description": "Returns the number of transactions sent from an address.",
    "type": "object",
    "properties": {
      "address": { "type": "string", "title": "address" },
      "state": { "type": "string", "title": "state" },
    },
    "required": ["address", "state"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetTransactionCountByHash({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getTransactionCountByHash",
    "description":
      "Returns the number of transactions in a block from a block matching the given block hash.",
    "type": "object",
    "properties": {
      "data": { "type": "string", "title": "data" },
      "quantity_tag": { "type": "string", "title": "quantity_tag" },
    },
    "required": ["data", "quantity_tag"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetBlockTransactionCountByHash({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getBlockTransactionCountByHash",
    "description":
      "Returns the number of transactions in a block from a block matching the given block hash.",
    "type": "object",
    "properties": { "data": { "type": "string", "title": "data" } },
    "required": ["data"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetBlockTransactionCountByNumber({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getBlockTransactionCountByNumber",
    "description":
      "Returns the number of transactions in a block matching the given block number.",
    "type": "object",
    "properties": {
      "quantity_tag": { "type": "string", "title": "quantity_tag" },
    },
    "required": ["quantity_tag"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetUncleCountByBlockHash({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getUncleCountByBlockHash",
    "description":
      "Returns the number of uncles in a block from a block matching the given block hash.",
    "type": "object",
    "properties": { "data": { "type": "string", "title": "data" } },
    "required": ["data"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetUncleCountByBlockNumber({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getUncleCountByBlockNumber",
    "description":
      "Returns the number of uncles in a block from a block matching the given block number.",
    "type": "object",
    "properties": {
      "quantity_tag": { "type": "string", "title": "quantity_tag" },
    },
    "required": ["quantity_tag"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetCode({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getCode",
    "description": "Returns code at a given address.",
    "type": "object",
    "properties": {
      "data": { "type": "string", "title": "data" },
      "quantity_tag": { "type": "string", "title": "quantity_tag" },
    },
    "required": ["data", "quantity_tag"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function Sign({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "sign",
    "description":
      'The sign method calculates an etherdata specific signature with sign(keccak256("\\x19etherdata Signed Message:\\n" + len(message) + message))).\nBy adding a prefix to the message makes the calculated signature recognisable as an etherdata specific signature. This prevents misuse where a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.\nNote the address to sign with must be unlocked.',
    "type": "object",
    "properties": {
      "a": { "type": "string", "title": "a" },
      "b": { "type": "string", "title": "b" },
    },
    "required": ["a", "b"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function SignTransaction({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "signTransaction",
    "description":
      "Signs a transaction that can be submitted to the network at a later time using with eth_sendRawTransaction.",
    "type": "object",
    "properties": {
      "obj": {
        "type": "object",
        "properties": {
          "from": { "type": "string", "title": "from" },
          "to": { "type": "string", "title": "to" },
          "gas": { "type": "string", "title": "gas" },
          "gasPrice": { "type": "string", "title": "gasPrice" },
          "value": { "type": "string", "title": "value" },
          "data": { "type": "string", "title": "data" },
          "nonce": { "type": "string", "title": "nonce" },
        },
      },
    },
    "required": ["obj"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function SendTranscation({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "sendTranscation",
    "description":
      "Creates new message call transaction or a contract creation, if the data field contains code.",
    "type": "object",
    "properties": {
      "obj": {
        "type": "object",
        "properties": {
          "from": { "type": "string", "title": "from" },
          "to": { "type": "string", "title": "to" },
          "gas": { "type": "string", "title": "gas" },
          "gasPrice": { "type": "string", "title": "gasPrice" },
          "value": { "type": "string", "title": "value" },
          "data": { "type": "string", "title": "data" },
          "nonce": { "type": "string", "title": "nonce" },
        },
      },
    },
    "required": ["obj"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function SendRawTransaction({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "sendRawTransaction",
    "description":
      "Creates new message call transaction or a contract creation for signed transactions.",
    "type": "object",
    "properties": { "data": { "type": "string", "title": "data" } },
    "required": ["data"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function Call({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "call",
    "description":
      "Executes a new message call immediately without creating a transaction on the block chain.",
    "type": "object",
    "properties": {
      "obj": {
        "type": "object",
        "properties": {
          "from": { "type": "string", "title": "from" },
          "to": { "type": "string", "title": "to" },
          "gas": { "type": "string", "title": "gas" },
          "gasPrice": { "type": "string", "title": "gasPrice" },
          "value": { "type": "string", "title": "value" },
          "data": { "type": "string", "title": "data" },
        },
      },
      "quantity_tag": { "type": "string", "title": "quantity_tag" },
    },
    "required": ["obj", "quantity_tag"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function EstimateGas({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "estimateGas",
    "description":
      "Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.",
    "type": "object",
    "properties": {
      "obj": {
        "type": "object",
        "properties": {
          "from": { "type": "string", "title": "from" },
          "to": { "type": "string", "title": "to" },
          "gas": { "type": "string", "title": "gas" },
          "gasPrice": { "type": "string", "title": "gasPrice" },
          "value": { "type": "string", "title": "value" },
          "data": { "type": "string", "title": "data" },
        },
      },
      "quantity_tag": { "type": "string", "title": "quantity_tag" },
    },
    "required": ["obj", "quantity_tag"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetBlockByHash({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getBlockByHash",
    "description": "Returns information about a block by hash.",
    "type": "object",
    "properties": {
      "data": { "type": "string", "title": "data" },
      "Bool": { "type": "boolean", "title": "Bool" },
    },
    "required": ["data", "Bool"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetBlockByNumber({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getBlockByNumber",
    "description": "Returns information about a block by block number.",
    "type": "object",
    "properties": {
      "quantity_tag": { "type": "string", "title": "quantity_tag" },
      "Bool": { "type": "boolean", "title": "Bool" },
    },
    "required": ["quantity_tag", "Bool"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetTransactionByHash({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getTransactionByHash",
    "description":
      "Returns the information about a transaction requested by transaction hash.",
    "type": "object",
    "properties": { "data": { "type": "string", "title": "data" } },
    "required": ["data"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetTransactionByHashAndIndex({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getTransactionByHashAndIndex",
    "description":
      "Returns information about a transaction by block hash and transaction index position.",
    "type": "object",
    "properties": {
      "data": { "type": "string", "title": "data" },
      "quantity": { "type": "string", "title": "quantity" },
    },
    "required": ["data", "quantity"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetTransactionByBlockNumberAndIndex({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getTransactionByBlockNumberAndIndex",
    "description":
      "Returns information about a transaction by block number and transaction index position.",
    "type": "object",
    "properties": {
      "quantity_tag": { "type": "string", "title": "quantity_tag" },
      "quantity": { "type": "string", "title": "quantity" },
    },
    "required": ["quantity_tag", "quantity"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetTransactionReceipt({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getTransactionReceipt",
    "description":
      "Returns the receipt of a transaction by transaction hash. Note That the receipt is not available for pending transactions.",
    "type": "object",
    "properties": { "data": { "type": "string", "title": "data" } },
    "required": ["data"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetUncleByBlockHashAndIndex({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getUncleByBlockHashAndIndex",
    "description":
      "eturns information about a uncle of a block by hash and uncle index position.",
    "type": "object",
    "properties": {
      "data": { "type": "string", "title": "data" },
      "quantity": { "type": "string", "title": "quantity" },
    },
    "required": ["data", "quantity"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetUncleByBlockNumberAndIndex({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getUncleByBlockNumberAndIndex",
    "description":
      "Returns information about a uncle of a block by number and uncle index position.",
    "type": "object",
    "properties": {
      "quantity_tag": { "type": "string", "title": "quantity_tag" },
      "quantity": { "type": "string", "title": "quantity" },
    },
    "required": ["quantity_tag", "quantity"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetCompliers({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getCompliers",
    "description": "Returns a list of available compilers in the client.",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function CompileSolidity({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "compileSolidity",
    "description": "Returns compiled solidity code.",
    "type": "object",
    "properties": { "String": { "type": "string", "title": "String" } },
    "required": ["String"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function ComplpieLLL({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "complpieLLL",
    "description": "Returns compiled LLL code.",
    "type": "object",
    "properties": { "String": { "type": "string", "title": "String" } },
    "required": ["String"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function ComplieSerpent({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "complieSerpent",
    "description": "Returns compiled serpent code.",
    "type": "object",
    "properties": { "String": { "type": "string", "title": "String" } },
    "required": ["String"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function NewFilter({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "newFilter",
    "description":
      "Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call eth_getFilterChanges.\nA note on specifying topic filters Topics are order-dependent. A transaction with a log with topics [A, B] will be matched by the following topic filters\n-[] “anything” -[A] “A in first position (and anything after)” -[null, B] “anything in first position AND B in second position (and anything after)” -[A, B] “A in first position AND B in second position (and anything after)” -[[A, B], [A, B]] “(A OR B) in first position AND (A OR B) in second position (and anything after)”",
    "type": "object",
    "properties": {
      "obj": {
        "type": "object",
        "properties": {
          "fromBlock": { "type": "string", "title": "fromBlock" },
          "toBlock": { "type": "string", "title": "toBlock" },
          "address": { "type": "string", "title": "address" },
          "topics": { "type": "array", "items": { "type": "string" } },
        },
      },
    },
    "required": ["obj"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function NewBlockFilter({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "newBlockFilter",
    "description":
      "Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call eth_getFilterChanges.",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function NewPendingTransactionFilter({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "newPendingTransactionFilter",
    "description":
      "Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call eth_getFilterChanges.",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function UninstallFilter({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "uninstallFilter",
    "description":
      "Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren’t requested with eth_getFilterChanges. for a period of time.",
    "type": "object",
    "properties": { "quantity": { "type": "string", "title": "quantity" } },
    "required": ["quantity"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetFilterChanges({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getFilterChanges",
    "description":
      "Polling method for a filter, which returns an array of logs which occurred since last poll.",
    "type": "object",
    "properties": { "quantity": { "type": "string", "title": "quantity" } },
    "required": ["quantity"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetFilterLogs({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getFilterLogs",
    "description":
      "Returns an array of all logs matching filter with given id.",
    "type": "object",
    "properties": { "quantity": { "type": "string", "title": "quantity" } },
    "required": ["quantity"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetLogs({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getLogs",
    "description":
      "Returns an array of all logs matching a given filter object.",
    "type": "object",
    "properties": {
      "obj": {
        "type": "object",
        "properties": {
          "fromBlock": { "type": "string", "title": "fromBlock" },
          "toBlock": { "type": "string", "title": "toBlock" },
          "address": { "type": "string", "title": "address" },
          "topics": { "type": "array", "items": { "type": "string" } },
          "blockhash": { "type": "string", "title": "blockhash" },
        },
      },
    },
    "required": ["obj"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function GetWork({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "getWork",
    "description":
      "Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”).",
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function SubmitWork({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "submitWork",
    "description": "Used for submitting a proof-of-work solution.",
    "type": "object",
    "properties": {
      "a": { "type": "string", "title": "a" },
      "b": { "type": "string", "title": "b" },
      "c": { "type": "string", "title": "c" },
    },
    "required": ["a", "b", "c"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function SubmitHashrate({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "submitHashrate",
    "description": "Used for submitting mining hashrate.",
    "type": "object",
    "properties": {
      "Hashrate": { "type": "string", "title": "Hashrate" },
      "ID": { "type": "string", "title": "ID" },
    },
    "required": ["Hashrate", "ID"],
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
            setErrors(err ? `${err}` : "error");
          }
        }}
      />
    </Card>
  );
}

export function Json_rpc_methods({ call, host, port }: MethodProps) {
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
      <ProtocalVersion call={callRPC} />

      <BlockNumber call={callRPC} />

      <Syncing call={callRPC} />

      <Coinbase call={callRPC} />

      <Mining call={callRPC} />

      <Hashrate call={callRPC} />

      <GasPrice call={callRPC} />

      <Accounts call={callRPC} />

      <GetBalance call={callRPC} />

      <GetStorageAt call={callRPC} />

      <GetTransactionCount call={callRPC} />

      <GetTransactionCountByHash call={callRPC} />

      <GetBlockTransactionCountByHash call={callRPC} />

      <GetBlockTransactionCountByNumber call={callRPC} />

      <GetUncleCountByBlockHash call={callRPC} />

      <GetUncleCountByBlockNumber call={callRPC} />

      <GetCode call={callRPC} />

      <Sign call={callRPC} />

      <SignTransaction call={callRPC} />

      <SendTranscation call={callRPC} />

      <SendRawTransaction call={callRPC} />

      <Call call={callRPC} />

      <EstimateGas call={callRPC} />

      <GetBlockByHash call={callRPC} />

      <GetBlockByNumber call={callRPC} />

      <GetTransactionByHash call={callRPC} />

      <GetTransactionByHashAndIndex call={callRPC} />

      <GetTransactionByBlockNumberAndIndex call={callRPC} />

      <GetTransactionReceipt call={callRPC} />

      <GetUncleByBlockHashAndIndex call={callRPC} />

      <GetUncleByBlockNumberAndIndex call={callRPC} />

      <GetCompliers call={callRPC} />

      <CompileSolidity call={callRPC} />

      <ComplpieLLL call={callRPC} />

      <ComplieSerpent call={callRPC} />

      <NewFilter call={callRPC} />

      <NewBlockFilter call={callRPC} />

      <NewPendingTransactionFilter call={callRPC} />

      <UninstallFilter call={callRPC} />

      <GetFilterChanges call={callRPC} />

      <GetFilterLogs call={callRPC} />

      <GetLogs call={callRPC} />

      <GetWork call={callRPC} />

      <SubmitWork call={callRPC} />

      <SubmitHashrate call={callRPC} />
    </div>
  );
}
