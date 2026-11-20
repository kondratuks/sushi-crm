const DELIVERY_ZONES = {
    green: {freeFrom: 800, price: 80},
    yellow: {freeFrom: 1200, price: 150},
    blue: {freeFrom: 1500, price: 300},
};

function getTotalPrice(orderTotal, zone) {

    const zoneConfig = DELIVERY_ZONES[zone];

    if (!zoneConfig) {
        return null;
    }

    return orderTotal >= zoneConfig.freeFrom ? orderTotal : orderTotal + zoneConfig.price;

}

const total = getTotalPrice(1200, 'yellow');

if (total === null) {
    console.log('Не в зоні доставки');
} else {
    console.log(`Сума до сплати: ${total} грн.`);
}

