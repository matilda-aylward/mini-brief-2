let myData;
    let button;
    let show = false;
    let button1;
    let show1 = false;
    let button2;
    let show2 = false;

let myData1;
    let button10;
    let show10 = false;
    let button11;
    let show11 = false;
    let button12;
    let show12 = false;

let myData2;
    let button20;
    let show20 = false;
    let button21;
    let show21 = false;
    let button22;
    let show22 = false;

let myData3;
    let button30;
    let show30 = false;
    let button31;
    let show31 = false;
    let button32;
    let show32 = false;

async function setup() {
    
myData = await loadJSON("assets/exp1 condition1.json");
    console.table(myData);
        let button = createButton("Participant 1");
    button.position(50, 700);
    button.mousePressed(view);
        let button1 = createButton("Participant 2");
    button1.position(50, 725);
    button1.mousePressed(view1);
            let button2 = createButton("Participant 3");
    button2.position(50, 750);
    button2.mousePressed(view2);

myData1 = await loadJSON("assets/exp1 condition 2.json");
    //console.table(myData1);
        let button10 = createButton("Participant 1");
    button10.position(175, 700);
    button10.mousePressed(view10);
        let button11 = createButton("Participant 2");
    button11.position(175, 725);
    button11.mousePressed(view11);
            let button12 = createButton("Participant 3");
    button12.position(175, 750);
    button12.mousePressed(view12);

myData2 = await loadJSON("assets/exp2 condition1.json");
    //console.table(myData3);
        let button20 = createButton("Participant 1");
    button20.position(350, 700);
    button20.mousePressed(view20);
        let button21 = createButton("Participant 2");
    button21.position(350, 725);
    button21.mousePressed(view21);
            let button22 = createButton("Participant 3");
    button22.position(350, 750);
    button22.mousePressed(view22);

myData3 = await loadJSON("assets/exp2 condition2.json");
    //console.table(myData3);
        let button30 = createButton("Participant 1");
    button30.position(475, 700);
    button30.mousePressed(view30);
        let button31 = createButton("Participant 2");
    button31.position(475, 725);
    button31.mousePressed(view31);
            let button32 = createButton("Participant 3");
    button32.position(475, 750);
    button32.mousePressed(view32);

createCanvas(1000, 800);
    
}

function draw1(){
console.log(myData2.length)
    // console.log("hello");
background(200);
push();
stroke(255);
setLineDash([10,10]);
line(50, 440, 950, 440); //80bmp
line(50, 480, 950, 480); //60bmp
line(50, 400, 950, 400); //60bmp
pop();

noStroke();
fill(255);
text("80BPM", 950, 440);
text("60BPM", 950, 480);
text("100BPM", 950, 400);
text(`The participants indicated by a * recieved music with a 
tempo of 60BPM in Condition 2 while all other participants 
listened to music with a tempo of 200BPM`, 650, 700);
push();
textSize(30)
text("*", 275, 725);
text("*", 575, 750);
text("*", 160, 725);
text("*", 460, 750);
text("*", 625, 710)
pop();

push();
stroke(0);
noFill();
rect(45, 695, 230, 85)
rect(345, 695, 230, 85)

pop();

    //console.log(myData[0].value) --- to get heartrate
    //console.log(myData[0].timestamp) --- to get time
    stroke(0);
        line(50, 200, 50, 600);
        line(50, 600, 950, 600);
    noStroke();
    fill(0);
        text("TIME", width/2, 625);
        text("BPM", 15, height/2)
        text("EXPERIMENT 1", 50, 650)
        text("EXPERIMENT 2", 350, 650)
        text("CONDITION 1", 50, 680)
        text("CONDITION 1", 350, 680)
        text("CONDITION 2", 175, 680)
        text("CONDITION 2", 475, 680)
        text(`Across two trials we assessed if heart rate would syncronise to the tempo of a given music or if heart rate would maintain relatively even
across the participants. In Condition 1, all participants listened to a beat of 200BPM. In the Condition 2, two participants listened to 
200BPM while one listend to 60BPM. We conducted this trial twice, using more accurate sensors in the second experiement.`,150, 125)
        text(`We observed no significant impact of music BPM on heart 
rate in a group setting.`,650, 760)
    push()
        textSize(30)
        text("The Impact of Music in a Group Setting on Heart Rate", 150, 100)
    pop();
    noStroke();
}

function e1c1() {
if (show) {
for (i=0; i<382; i++) {
        stroke(224, 39, 22)
        line((50+(myData[i].timestamp-48795)/130), (600-myData[i].sensors.sensor0*2), (50+(myData[i+1].timestamp-48795)/130), (600-myData[i+1].sensors.sensor0*2));
    }
}    

if (show1) {
for (i=0; i<382; i++) {
        stroke(23, 156, 3)
        line((50+(myData[i].timestamp-48795)/130), (600-myData[i].sensors.sensor1*2), (50+(myData[i+1].timestamp-48795)/130), (600-myData[i+1].sensors.sensor1*2));
    }
}

if (show2) {
for (i=0; i<382; i++) {
        stroke(26, 14, 181)
        line((50+(myData[i].timestamp-48795)/130), (600-myData[i].sensors.sensor2*2), (50+(myData[i+1].timestamp-48795)/130), (600-myData[i+1].sensors.sensor2*2));
    }
}
}

function e1c2() {
    if (show10) {
for (i=0; i<382; i++) {
        stroke(219, 115, 46)
        line((50+(myData1[i].timestamp-712)/120), (600-myData1[i].sensors.sensor0*2), (50+(myData1[i+1].timestamp-712)/120), (600-myData1[i+1].sensors.sensor0*2));
    }
}    

if (show11) {
for (i=0; i<382; i++) {
        stroke(203, 237, 31)
        line((50+(myData1[i].timestamp-712)/120), (600-myData1[i].sensors.sensor1*2), (50+(myData1[i+1].timestamp-712)/120), (600-myData1[i+1].sensors.sensor1*2));
    }
}

if (show12) {
for (i=0; i<382; i++) {
        stroke(145, 78, 212)
        line((50+(myData1[i].timestamp-712)/120), (600-myData1[i].sensors.sensor2*2), (50+(myData1[i+1].timestamp-712)/120), (600-myData1[i+1].sensors.sensor2*2));
    }
}
}

function e2c1() {
if (show20) {
for (i=0; i<382; i++) {
        stroke(224, 39, 22)
        line((50+(myData2[i].timestamp-5990)/115), (600-myData2[i].sensors.sensor0*2), (50+(myData2[i+1].timestamp-5990)/115), (600-myData2[i+1].sensors.sensor0*2));
    }
}    

if (show21) {
for (i=0; i<382; i++) {
        stroke(23, 156, 3)
        line((50+(myData2[i].timestamp-5990)/115), (600-myData2[i].sensors.sensor1*2), (50+(myData2[i+1].timestamp-5990)/115), (600-myData2[i+1].sensors.sensor1*2));
    }
}

if (show22) {
for (i=0; i<382; i++) {
        stroke(26, 14, 181)
        line((50+(myData2[i].timestamp-5990)/115), (600-myData2[i].sensors.sensor2*2), (50+(myData2[i+1].timestamp-5990)/115), (600-myData2[i+1].sensors.sensor2*2));
    }
}
}

function e2c2() {
   if (show30) {
for (i=0; i<382; i++) {
        stroke(219, 115, 46)
        line((50+(myData3[i].timestamp-129)/115), (600-myData3[i].sensors.sensor0*2), (50+(myData3[i+1].timestamp-129)/115), (600-myData3[i+1].sensors.sensor0*2));
    }
}    

if (show31) {
for (i=0; i<382; i++) {
        stroke(203, 237, 31)
        line((50+(myData3[i].timestamp-129)/115), (600-myData3[i].sensors.sensor1*2), (50+(myData3[i+1].timestamp-129)/115), (600-myData3[i+1].sensors.sensor1*2));
    }
}

if (show32) {
for (i=0; i<382; i++) {
        stroke(145, 78, 212)
        line((50+(myData3[i].timestamp-129)/115), (600-myData3[i].sensors.sensor2*2), (50+(myData3[i+1].timestamp-129)/115), (600-myData3[i+1].sensors.sensor2*2));
    }
} 
}

function draw() {
draw1();
e1c1();
e1c2();
e2c1();
e2c2();


//console.log(myData[i].timestamp)

}

function view() {
    show = !show;
}

function view1() {
    show1 = !show1;
}

function view2() {
    show2 = !show2;
}


function view10() {
    show10 = !show10;
}

function view11() {
    show11 = !show11;
}

function view12() {
    show12 = !show12;
}



function view20() {
    show20 = !show20;
}

function view21() {
    show21 = !show21;
}

function view22() {
    show22 = !show22;
}


function view30() {
    show30 = !show30;
}

function view31() {
    show31 = !show31;
}

function view32() {
    show32 = !show32;
}


function setLineDash(list) {
    drawingContext.setLineDash(list);
}