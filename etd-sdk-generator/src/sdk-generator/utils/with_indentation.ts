interface Option {
  /**
   * Will try to align left for multi lines string
   */
  multilineAlignLeft: boolean;
}

/**
 * Add indentation to the left side of the string
 * @param message
 * @param indentation
 * @param option
 */
export function with_indentation(
  message: string,
  indentation: number,
  option?: Option
) {
  let returnMsg = message;
  const lines = returnMsg.split("\n");
  for (let i = 0; i < indentation; i++) {
    if (option?.multilineAlignLeft) {
      let newMessage = "";
      let index = 0;
      for (const line of returnMsg.split("\n")) {
        newMessage += ` ${line}`;
        if (index < lines.length - 1) {
          newMessage += "\n";
        }
        index += 1;
      }
      returnMsg = newMessage;
      continue;
    }
    returnMsg = ` ${returnMsg}`;
  }
  return returnMsg;
}
