document.addEventListener("DOMContentLoaded", function() {
    var readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var content = this.parentNode;
            var moreContent = content.querySelector(".more-content");

            if (moreContent.style.display === "none" || moreContent.style.display === "") {
                moreContent.style.display = "block";
                this.textContent = "Read Less";
            } else {
                moreContent.style.display = "none";
                this.textContent = "Read more";
            }
        });
    });
});
