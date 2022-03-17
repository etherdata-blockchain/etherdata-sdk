/**
 * Make sure the output content is in camel case
 * @param content
 */
export function ensureCamelCaseFilter(content: string) {
  return content
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "")
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );
}

/**
 * Make sure the output content is in snake case
 * @param content
 */
export function ensureSnakeCaseFilter(content: string) {
  return content
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_");
}

/**
 * Given a string, will return to capitalize version of the string.
 * For example, given hello-world, will return Hello-world
 * @param string
 */
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Given a string, will return to lower the first letter of the string.
 * For example, given Hello-world, will return hello-world.
 * If all letters are uppercase, then it will lower all letters.
 * @param string
 */
export function lowercaseFirstLetter(string: string) {
  const re = new RegExp(/[A-Z]*/);
  const result = re.exec(string);
  if (result) {
    const item = result[0];
    if (item.length === string.length) {
      return string.toLowerCase();
    }
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function lowerCase(string: string) {
  return string.toLowerCase();
}
