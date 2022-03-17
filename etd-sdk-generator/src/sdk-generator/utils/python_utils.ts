interface CleanResult {
  cleanVariableName: string;
  alternativeName: string;
}

const reservedVariableNames = [
  "from",
  "import",
  "bool",
  "str",
  "None",
  "Any",
  "float",
  "int",
];

/**
 * Clean python variable. Turn any python keyword to $keyword_field
 * @param name
 */
export function cleanPythonVariableName(name: string): CleanResult {
  if (reservedVariableNames.includes(name)) {
    return {
      cleanVariableName: `${name}_field`,
      alternativeName: `= field(metadata=config(field_name="${name}"))`,
    };
  }
  return {
    cleanVariableName: name,
    alternativeName: "",
  };
}

/**
 * Generate python code's function body's return.
 * @param returnType Type of the return
 * @param data string representation of the data. Should be response.json()
 */
export function generatePythonFunctionBodyReturn(
  returnType: string,
  data: string
): string {
  let isReservedKey = false;
  for (const keyword of reservedVariableNames) {
    if (returnType.startsWith(keyword)) {
      isReservedKey = true;
    }
  }

  // parse many
  if (returnType.includes("List")) {
    isReservedKey = true;
    const newType = returnType.replace("]", "").replace("List[", "");
    if (!reservedVariableNames.includes(newType)) {
      return `${newType}.schema().load(${data}, many=True)`;
    }
  }

  if (!isReservedKey) {
    return `${returnType}.from_dict(${data})`;
  }

  return data;
}
