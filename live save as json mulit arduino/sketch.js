let bridge;
let bridge1;
let bridge2;
let sensorValues = [0, 0, 0, 0];
let allData = [];
let currentReading = {};
let isConnected = false;
let connectionStatus = 'disconnected';
let heartHistory = [];
let heartHistory1 = [];
let heartHistory2 = [];
let button;
let save = false;

function setup() {
createCanvas(800,800);

bridge = new SerialBridge();
    // Listen for data from arduino_1
    bridge.onData('arduino_1', (data) => {
        // Console log the raw data as it arrives
        console.log("Raw data received:", data);

        // Split the data by comma
        let values = data.split(",");
        

        // Loop through and convert all values to numbers
        for (let i = 0; i < values.length; i++) {
            sensorValues[0] = parseInt(values[i]);
        }

        // Create a JSON object with nested sensor data
        currentReading = {
            timestamp: millis(),
            sensors: {
                sensor0: sensorValues[0],
                sensor1: sensorValues[1],
                sensor2: sensorValues[2],
                sensor3: sensorValues[3]
            }
        };

        // Add this reading to our collection
        allData.push(currentReading);

        // Console log the JSON object
        console.log("JSON reading:", currentReading);
        console.log("Total readings collected:", allData.length);
    });


    bridge1 = new SerialBridge();
    // Listen for data from arduino_1
    bridge1.onData('arduino_2', (data) => {
        // Console log the raw data as it arrives
        console.log("Raw data received:", data);

        // Split the data by comma
        let values1 = data.split(",");
        

        // Loop through and convert all values to numbers
        for (let i = 0; i < values1.length; i++) {
            sensorValues[1] = parseInt(values1[i]);
        }

        // Create a JSON object with nested sensor data
        currentReading = {
            timestamp: millis(),
            sensors: {
                sensor0: sensorValues[0],
                sensor1: sensorValues[1],
                sensor2: sensorValues[2],
                sensor3: sensorValues[3]
            }
        };

        // Add this reading to our collection
        allData.push(currentReading);

        // Console log the JSON object
        console.log("JSON reading:", currentReading);
        console.log("Total readings collected:", allData.length);
    });

        bridge2 = new SerialBridge();
    // Listen for data from arduino_1
    bridge2.onData('arduino_3', (data) => {
        // Console log the raw data as it arrives
        console.log("Raw data received:", data);

        // Split the data by comma
        let values2 = data.split(",");
        

        // Loop through and convert all values to numbers
        for (let i = 0; i < values2.length; i++) {
            sensorValues[2] = parseInt(values2[i]);
        }

        // Create a JSON object with nested sensor data
        currentReading = {
            timestamp: millis(),
            sensors: {
                sensor0: sensorValues[0],
                sensor1: sensorValues[1],
                sensor2: sensorValues[2],
                sensor3: sensorValues[3]
            }
        };

        // Add this reading to our collection
        allData.push(currentReading);

        // Console log the JSON object
        console.log("JSON reading:", currentReading);
        console.log("Total readings collected:", allData.length);
    });

    // Listen for connection status changes
    bridge.onStatus('arduino_1', (status, port) => {
        connectionStatus = status;
        isConnected = (status === 'connected');
        console.log(`Arduino status: ${status} on ${port}`);
    });

    console.log('P5.js sketch initialized');
    console.log('Waiting for Arduino data...');

    let button = createButton("save json");
    button.position(650, 200);
    button.mousePressed(saveBtn);


}

function draw() {
background(200);
push();
stroke(0);
strokeWeight(2)
line(100,100, 100, 700);
line(100,700, 700, 700);
pop();

push();
setLineDash([5,10]);
stroke(255);
line(100, 520, 700, 520);
line(100, 400, 700, 400);
line(100, 460, 700, 460);
pop();

push();
stroke(0);
fill(0);
textSize(14);
textAlign(CENTER);
text("B", 80, 385);
text("P", 80, 400);
text("M", 80, 415);
text("TIME", 400, 720);
pop();

noStroke();
fill(255);
textSize(10);
text("100 BMP", 700, 400);
text("80 BMP", 700, 460);
text("60 BMP", 700, 520);


            noStroke();
            fill(0)
            textSize(14);
            fill(230,50,50);
            text(`participant 1: ${sensorValues[0]}`, 650, 60);
            fill(64, 179, 32);
            text(`participant 2: ${sensorValues[1]}`, 650, 80);
            fill(27, 87, 191);
            text(`participant 3: ${sensorValues[2]}`, 650, 100);
            //text(`participant 4: ${sensorValues[3]}`, 650, 120);
            fill(0)
            text(`timestamp: ${currentReading.timestamp}`, 650, 140);

heartHistory.push(sensorValues[0]);
stroke(230,50,50);
noFill();
beginShape();
for(let i=0; i<heartHistory.length; i++) {
    vertex(100+i,700-heartHistory[i]*3);
}
endShape();

if (heartHistory.length > width-200) {
    heartHistory.splice(0,1);
}

heartHistory1.push(sensorValues[1]);
stroke(64, 179, 32);
noFill();
beginShape();
for(let i=0; i<heartHistory1.length; i++) {
    vertex(100+i,700-heartHistory1[i]*3);
}
endShape();

if (heartHistory1.length > width-200) {
    heartHistory1.splice(0,1);
}

heartHistory2.push(sensorValues[2]);
stroke(27, 87, 191);
noFill();
beginShape();
for(let i=0; i<heartHistory2.length; i++) {
    vertex(100+i,700-heartHistory2[i]*3);
}
endShape();

if (heartHistory2.length > width-200) {
    heartHistory2.splice(0,1);
}


}



function setLineDash(list) {
    drawingContext.setLineDash(list);
}

function saveBtn() {
    save = !save;
            if (save) {
        saveJSON(allData, 'multi-sensor-data.json');
        console.log(`Saved ${allData.length} readings to file!`);
    }
}