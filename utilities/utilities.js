function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}

// transaction Time 
function getDateTimeNow() {
    const now = new Date();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    const datePart = now.toDateString() === today.toDateString()
        ? "Today"
        : now.toLocaleDateString("en-US");

    return `${datePart} ${time}`;
}

// Transaction Id 
const randomTrxID = Math.random().toString().slice(2, 8);

