const cardBody=document.getElementById("card-body");

class DisplayMessage{
    static displayMessages(message,type) {
        const div=document.createElement("div");
        div.classList=`alert alert-${type}`
        div.textContent=`${message}`
        cardBody.appendChild(div);
    }
}