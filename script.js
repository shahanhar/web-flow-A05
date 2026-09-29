

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


// Copy button

let updateCopyCount = 2;
const copyButtons = document.querySelectorAll(".copy-btn")
const copyCount = document.querySelector("#copy-count")

for (const btn of copyButtons) {
    btn.addEventListener("click", function (e) {
        e.preventDefault()
        const card = btn.closest(".card");
        const number = card.querySelector(".number").innerText;

        navigator.clipboard.writeText(number);

        alert("Number copied: " + number);

        updateCopyCount = updateCopyCount + 1
        document.getElementById("copy-count").innerText = updateCopyCount

    });
}


// Call history section function
const callHistoryList = document.getElementById("call-history")

function addCallHistory(name, number){
    const time = new Date().toLocaleTimeString()

    const newContainer = document.createElement("div")
    newContainer.className = "flex justify-between p-3 gap-1 items-center bg-[#FAFAFA] mb-2 shadow-sm mx-4"
    newContainer.innerHTML = `
                <div>
                    <p class="font-semibold text-[18px]">${name}</p>
                    <p class="text-[#5C5C5C]">${number}</p>
                </div>
                <p>${time}</p>
                `
    callHistoryList.appendChild(newContainer)
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
    addCallHistory(serviceName, emergencyNumber)
})
}


// Call History Section
document.getElementById("clear-btn")
.addEventListener("click", function(){
    document.querySelector("#call-history").innerText = ""
})