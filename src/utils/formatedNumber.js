export const formatearNumero = (number) => {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}