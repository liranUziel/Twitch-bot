let chatlist
let messageList = [];
const LIMIT = 5;
let grayDeadpool = 0;
window.onload = function() {
    chatlist = document.getElementsByClassName("Chat").item(0);
    grayDeadPool = document.getElementsByClassName("grayDeadPool").item(0);
    boxDeadPool = document.getElementsByClassName("boxDeadPool").item(0);
}

ComfyJS.Init("geekesbox");

// ComfyJS.onChat = ( user, message, flags, self, extra ) => {
//     let msg = `${user}: ${message}`;
//     chatlist.appendChild(createMenuItem(msg));
//     messageList.push(msg);
//     if(messageList.length > LIMIT){
//         messageList.shift();
//         chatlist.children[0].remove();
//     }
// };

function shot(traget){
    switch(traget){
        case 'gray':
            grayDeadpool++;
            grayDeadPool.innerText = grayDeadpool;
            break;
        case 'box':
            boxDeadPool++;
            boxDeadPool.innerText = grayDeadpool;
            break;   
    }
}
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if( flags.mod && command === "graygotshot" ) {
        shot('gray');
    }
    if( flags.broadcaster && command === "graydeadpoolrest" ) {
        grayDeadpool = 0;
        grayDeadPool.innerText = grayDeadpool;
    }
    if( flags.mod && command === "boxgotshot" ) {
        shot('box');
    }
    if( flags.broadcaster && command === "boxdeadpoolrest" ) {
        boxDeadPool = 0;
        boxDeadPool.innerText = boxDeadPool;
    }
};  

function createMenuItem(name) {
    let li = document.createElement('li');
    li.classList.add("text-box")
    li.textContent = name;
    return li;
}


