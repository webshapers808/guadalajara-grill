const main = {
    init() {
        this.addListeners();
    },
    addListeners() {
        this.addDirectionListener();
    },
    addDirectionListener() {
        const directionsBtn = document.querySelector("#directionButton");
        const directionsLink = 'https://www.google.com/maps/dir//Guadalajara+Grill+Hawaii+55-370+Kamehameha+Highway+Hukilau+Marketplace+Laie,+HI+96762/@21.6386029,-157.9207968,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c00451360f80cf1:0x930291a38bab3132!2m2!1d-157.9207968!2d21.6386029'
        if (directionsBtn) {
            directionsBtn.addEventListener("click", () => {
                window.open(directionsLink, '_blank');
            });
        }
    }
}
main.init();