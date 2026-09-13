function createShipment() {

    const trackingNumber = document.getElementById("trackingNumber").value.trim();

    if (!trackingNumber) {
        alert("Tracking number is required.");
        return;
    }

    const shipment = {
        trackingNumber: trackingNumber,
        status: document.getElementById("status").value,
        origin: document.getElementById("origin").value,
        destination: document.getElementById("destination").value,
        currentLocation: document.getElementById("location").value,
        receiver: document.getElementById("receiver").value,
        packageType: document.getElementById("packageType").value,
        weight: document.getElementById("weight").value,
        courier: document.getElementById("courier").value,
        estimatedDelivery: document.getElementById("delivery").value
    };

    db.collection("shipments")
        .doc(trackingNumber)
        .set(shipment)
        .then(function () {
            alert("Shipment created successfully!");

            document.querySelectorAll("input").forEach(function(input) {
                input.value = "";
            });
        })
        .catch(function (error) {
            console.error(error);
            alert("Error creating shipment: " + error.message);
        });
}
