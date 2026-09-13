import { db } from "./firebase.js";

import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

window.trackShipment = async function () {
  const trackingNumber = document
    .getElementById("tracking")
    .value
    .trim();

  if (!trackingNumber) {
    alert("Please enter a tracking number.");
    return;
  }

  try {
    const shipmentQuery = query(
      collection(db, "shipments"),
      where("trackingNumber", "==", trackingNumber)
    );

    const snapshot = await getDocs(shipmentQuery);

    if (snapshot.empty) {
      alert("Shipment not found.");
      return;
    }

    const shipment = snapshot.docs[0].data();

    document.getElementById("result").style.display = "block";

    document.getElementById("status").textContent =
      shipment.status;

    document.getElementById("id").textContent =
      shipment.trackingNumber;

  } catch (error) {
    console.error(error);
    alert("Unable to connect to the shipment database.");
  }
};
