export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'VND',
    // minimumFractionDigits: 2,
  }

  const formatter = new Intl.NumberFormat('vi-VN', options)

  return formatter.format(amount)
}
