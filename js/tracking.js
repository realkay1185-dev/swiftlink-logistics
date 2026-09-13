import { db } from "./firebase.js";

import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

window.trackShipment = async function () {

    const trackingNumber = document.getElementById("tracking").value.trim();

    if (!trackingNumber) {
        alert("Please enter a tracking number.");
        return;
    }

    try {

        const docRef = doc(db, "shipments", trackingNumber);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            alert("Shipment not found.");
            return;
        }

        const shipment = docSnap.data();

        document.getElementById("result").style.display = "block";

        document.getElementById("statusBadge").textContent = shipment.status;
        document.getElementById("status").textContent = shipment.status;
        document.getElementById("id").textContent = trackingNumber;
        document.getElementById("origin").textContent = shipment.origin;
        document.getElementById("destination").textContent = shipment.destination;
        document.getElementById("location").textContent = shipment.currentLocation;
        document.getElementById("receiver").textContent = shipment.receiver;
        document.getElementById("package").textContent = shipment.packageType;
        document.getElementById("weight").textContent = shipment.weight;
        document.getElementById("courier").textContent = shipment.courier;
        document.getElementById("delivery").textContent = shipment.estimatedDelivery;

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

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};
