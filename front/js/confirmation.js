// récupération de l'id de la commande
function getConfirmationData() {
    const str = window.location.href;
    const url = new URL(str);
    console.log("je suis dans confirmationdata")
    const orderId = url.searchParams.get("orderId");
    console.log(orderId);
    const orderIdElement = document.getElementById('orderId');
    orderIdElement.innerHTML = orderId;
}

getConfirmationData();
