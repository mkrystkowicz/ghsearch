export default function normalizeHttpAddress(string) {
  if (string.startsWith("http")) {
    return string
  }

  return `http://${string}`
}
