export default function checkIfQuoted(string) {
  if (
    string.startsWith('"') ||
    string.endsWith('"') ||
    string.startsWith("'") ||
    string.endsWith("'") ||
    string.startsWith("`") ||
    string.endsWith("`")
  ) {
    return true
  }

  return false
}
