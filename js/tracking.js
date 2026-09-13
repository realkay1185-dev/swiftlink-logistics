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

            document.getElementById("status").textContent = shipment.status;
            document.getElementById("id").textContent = trackingNumber;

        })
        .catch(function(error) {
            console.error(error);
            alert("Database Error: " + error.message);
        });

}
