function trackShipment() {
    const trackingNumber = document.getElementById("tracking").value.trim();

    if (trackingNumber === "") {
        alert("Please enter a tracking number.");
        return;
    }

    db.collection("shipments")
        .where("trackingNumber", "==", trackingNumber)
        .get()
        .then((snapshot) => {

            if (snapshot.empty) {
                alert("Shipment not found.");
                return;
            }

            snapshot.forEach((doc) => {

                const shipment = doc.data();

                document.getElementById("result").style.display = "block";

                document.getElementById("status").innerHTML = shipment.status;

                document.getElementById("id").innerHTML = shipment.trackingNumber;

            });

        })
        .catch((error) => {
            alert("Database Error");
            console.log(error);
        });
}
