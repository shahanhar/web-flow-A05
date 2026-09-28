

// Heart Icons
const feedbackCount = document.querySelectorAll(".like")
// console.log(feedbackCount)

let updateFeedback = 0;
for (const feedback of feedbackCount) {
    feedback.addEventListener("click", function(e){
        e.preventDefault()
        // console.log("btn clicked")
        updateFeedback = updateFeedback + 1

        document.getElementById("feedback-count").innerText = updateFeedback
    })
}


// Call Buttons
let callBtnFees = parseInt(document.querySelector("#call-fees").innerText)

const coinButton = document.querySelectorAll(".call-btn")

for (const btn of coinButton) {
    btn.addEventListener("click", function(e){
    e.preventDefault()
    // console.log("btn clicked")
    const cardBtn = btn.closest(".card")
    const serviceName = cardBtn.querySelector(".name").innerText
    const emergencyNumber = cardBtn.querySelector(".number").innerText

    if (callBtnFees < 20) {
        alert("❌You do not have enough coins; at least 20 coins are required to make a call.")
        return
    }
    
    callBtnFees = callBtnFees - 20
    const callFees = document.querySelector("#call-fees").innerText = callBtnFees
    
    alert("📞Calling" + " " + serviceName + " " + emergencyNumber)
})
}


// History