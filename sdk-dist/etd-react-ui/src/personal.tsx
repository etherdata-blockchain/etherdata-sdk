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

export function Importrawkey({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "importRawKey",
    "description":
      "Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase. Returns the address of the new account.",
    "type": "object",
    "properties": { "priveteKey": { "type": "string", "title": "priveteKey" } },
    "required": ["priveteKey"],
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

export function Listaccounts({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "listAccounts",
    "description":
      "Returns all the Ethereum account addresses of all keys in the key store.",
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

export function Lockaccount({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "lockAccount",
    "description":
      "Removes the private key with given address from memory. The account can no longer be used to send transactions.",
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

export function Newaccount({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "newAccount",
    "description":
      "Generates a new private key and stores it in the key store directory. The key file is encrypted with the given passphrase. Returns the address of the new account.\nAt the Getd console, newAccount will prompt for a passphrase when it is not supplied as the argument.",
    "type": "object",
    "properties": { "passphrase": { "type": "string", "title": "passphrase" } },
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

export function Unlockaccount({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "unlockAccount",
    "description":
      "Decrypts the key with the given address from the key store.\nBoth passphrase and unlock duration are optional when using the JavaScript console. If the passphrase is not supplied as an argument, the console will prompt for the passphrase interactively.\nThe unencrypted key will be held in memory until the unlock duration expires. If the unlock duration defaults to 300 seconds. An explicit duration of zero seconds unlocks the key until Getd exits.\nThe account can be used with etd_sign and etd_sendTransaction while it is unlocked.",
    "type": "object",
    "properties": {
      "accountAddress": { "type": "string", "title": "accountAddress" },
      "passphrase": { "type": "string", "title": "passphrase" },
      "unlockDuration": { "type": "number", "title": "unlockDuration" },
    },
    "required": ["accountAddress"],
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

export function Sendtransaction({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "sendTransaction",
    "description":
      'Validate the given passphrase and submit transaction.\nThe transaction is the same argument as for etd_sendTransaction and contains the from address. If the passphrase can be used to decrypt the private key belogging to tx.from the transaction is verified, signed and send onto the network. The account is not unlocked globally in the node and cannot be used in other RPC calls.\nNote, prior to Getd 1.5, please use personal_signAndSendTransaction as that was the original introductory name and only later renamed to the current final version.\nExample \'> var tx = {from\':\' "0x391694e7e0b0cce554cb130d723a9d27458f9298", to\':\' "0xafa3f8684e54059998bc3a7b0d2b0da075154d66", value\':\' web3.toWei(1.23, "ether")} undefined "> personal.sendTransaction(tx, "passphrase")" 0x8474441674cdd47b35b875fd1a530b800b51a5264b9975fb21129eeb8c18582f\'',
    "type": "object",
    "properties": {
      "tx": {
        "type": "object",
        "properties": {
          "from": { "type": "string", "title": "from" },
          "to": { "type": "string", "title": "to" },
          "value": { "type": "string", "title": "value" },
        },
      },
    },
    "required": ["tx"],
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
      "The sign method calculates an Ethereum specific signature with ' sign(keccack256(\"\\x19Ethereum Signed Message:\\n\" + len(message) + message))). '\nBy adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature. This prevents misuse where a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.\nSee ecRecover to verify the signature.",
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

export function Ecrecover({ call }: Props) {
  const [values, setValues] = React.useState<any>();
  const [errors, setErrors] = React.useState<any>();

  let schema: any = {
    "title": "ecRecover",
    "description":
      "ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign.",
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

export function Personal({ call, host, port }: MethodProps) {
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
      <Importrawkey call={callRPC} />

      <Listaccounts call={callRPC} />

      <Lockaccount call={callRPC} />

      <Newaccount call={callRPC} />

      <Unlockaccount call={callRPC} />

      <Sendtransaction call={callRPC} />

      <Sign call={callRPC} />

      <Ecrecover call={callRPC} />
    </div>
  );
}
