export function formatMoney(value: number) {
  return "R$ " + value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
}
