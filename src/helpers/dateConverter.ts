export function dateСonverter(date: number) {
  return new Date(date).toLocaleDateString().replace(/\//g, '.');
}
