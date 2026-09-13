function trackShipment() {

    const trackingNumber = document.getElementById("tracking").value.trim();

    if (!trackingNumber) {
        alert("Please enter a tracking number.");
        return;
    }

    db.collection("shipments")
        .doc(trackingNumber)
        .get()
        .then(function(doc) {

            if (!doc.exists) {
                alert("Shipment not found.");
                return;
            }

            const shipment = doc.data();

            document.getElementById("result").style.display = "block";

            document.getElementById("id").textContent = trackingNumber;
const badge = document.getElementById("statusBadge");

badge.textContent = shipment.status;

badge.className = "status-badge";

switch (shipment.status.toLowerCase()) {

case "processing":
badge.classList.add("processing");
break;

case "in transit":
badge.classList.add("transit");
break;

case "out for delivery":
badge.classList.add("delivery");
break;

case "delivered":
badge.classList.add("delivered");
break;

default:
badge.classList.add("delayed");

}

document.getElementById("status").textContent = shipment.status;
            const progress = document.getElementById("progressFill");

switch (shipment.status.toLowerCase()) {

    case "processing":
        progress.style.width = "25%";
        break;

    case "in transit":
        progress.style.width = "50%";
        break;

    case "out for delivery":
        progress.style.width = "75%";
        break;

    case "delivered":
        progress.style.width = "100%";
        break;

    default:
        progress.style.width = "10%";
}
document.getElementById("origin").textContent = shipment.origin;
document.getElementById("destination").textContent = shipment.destination;
document.getElementById("location").textContent = shipment.currentLocation;
document.getElementById("receiver").textContent = shipment.receiver;
document.getElementById("package").textContent = shipment.packageType;
document.getElementById("weight").textContent = shipment.weight;
document.getElementById("courier").textContent = shipment.courier;
document.getElementById("delivery").textContent = shipment.estimatedDelivery;

        })
        .catch(function(error) {
            console.error(error);
            alert("Database Error: " + error.message);
        });

}
