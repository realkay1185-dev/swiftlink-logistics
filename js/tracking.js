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
document.getElementById("statusBadge").textContent = shipment.status;
document.getElementById("status").textContent = shipment.status;
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
