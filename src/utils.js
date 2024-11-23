export function getRandomColor() {
    let color = ['#'];
    const elements = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++)
        color.push(elements[Math.floor(Math.random() * 16)]);
    return color.join('');
}