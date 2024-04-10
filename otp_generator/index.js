const otpContainer = document.getElementById("otpContainer");
const btn = document.getElementById("btn");
const time = document.getElementById("time");

let canGenerateOTP = true; // Flag to track if an OTP can be generated

btn.addEventListener("click", () => {
  if (canGenerateOTP) {
    const otp = otpGenerator();
    otpContainer.innerHTML = otp;
    canGenerateOTP = false; // Set flag to false to prevent generating new OTP for 10 seconds
    startTimer();
    btn.classList.add('hidden');
  }
});

function otpGenerator() {
  return Math.floor(Math.random() * 900000) + 100000;
}

function startTimer() {
  // Start timer for 10 seconds
  let count = 10;
  setInterval(() => {
    time.textContent = `This OTP is valid for next ${count} seconds!`;
    count--;
    if (count < 0) {
      // reload the page
      location.reload();
    }
  }, 1000);
}
