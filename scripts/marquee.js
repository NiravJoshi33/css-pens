
const main = () => {
    const marqueeToggleBtn = document.getElementById("marquee-check")

    if (!marqueeToggleBtn) return;

    marqueeToggleBtn.addEventListener("change", () => {
        const marqueeImages = document.querySelectorAll(".marquee-container .marquee img")
        
        if (!marqueeImages) {
            console.log("No images found for marquee.")
            return;
        } 


        if (marqueeToggleBtn.checked) {

            marqueeImages.forEach((image) => {
                image.style.display = "none";
            })

            

        } else {

           marqueeImages.forEach((image) => {
                image.style.display = "inline-block";
            })

            
        }

        
    })
}

document.addEventListener("DOMContentLoaded", main)