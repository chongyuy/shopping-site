export default function formatPrice(cents){
    return (cents / 100).toLocaleString('zh', {
        style: 'currency',
        currency: 'CNY'
    })
}