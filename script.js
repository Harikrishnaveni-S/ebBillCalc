function toPrice() {
    const inputVal = document.getElementById("value").value
    const result = document.getElementById("result")

    const rate1 = 0.75
    const rate2 = 1.00
    const rate3 = 1.30
    const rate4 = 1.50

    let totalBill = 0

    if (inputVal <= 50) {
        totalBill = inputVal * rate1
    }

    else if (inputVal <= 150) {
        totalBill = 50 * rate1 + (inputVal - 50) * rate2
    }

    else if (inputVal <= 250) {
        totalBill = 50 * rate1 + 100 * rate2 + (inputVal - 150) * rate3
    }

    else {
        totalBill = 50 * rate1 + 100 * rate2 + 100 * rate3 + (inputVal - 250) * rate4
    }

    result.innerHTML = `Your Electricity Bill is Rs. ${totalBill.toFixed(2)}`


}