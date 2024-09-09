const { ReadingPackage, ReadingStatus, ReadingMessage } = require("./meterservice_pb.js");
const theLog = document.getElementById("theLog");
const theButton = document.getElementById("theButton");

function addToLog(msg) {
    const div = document.createElement("div");
    div.innerText = msg;
    theLog.appendChild(div);
}

theButton.addEventListener("click", function () {
    try {
        addToLog("Starting service");

        const package = new ReadingPackage();
        package.setSuccessful(ReadingStatus.SUCCESS);

        const reading = new ReadingMessage();
        reading.setCustomerId(1);
        reading.setReadingValue(1000);
    } catch {
        addToLog("Exception catched in AddEventLister Click");
    }
});