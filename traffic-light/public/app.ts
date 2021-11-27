const eventSource = new EventSource("http://localhost:8085/test");

const updateTL = (msg: string) => {
    console.log("oh", msg);
    red!.style.backgroundColor = "red";
    yellow!.style.backgroundColor = "yellow";
    green!.style.backgroundColor = "green";
    setTimeout(() => {
        red!.style.backgroundColor = "gray";
        yellow!.style.backgroundColor = "gray";
        green!.style.backgroundColor = "gray";
    }, 1000);
};

const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

eventSource.onmessage = (evt) => {
    updateTL(evt.data);
};

eventSource.onerror = (e) => {
    updateTL("Server closed connection");
    // console.log(e);
    eventSource.close();
};
