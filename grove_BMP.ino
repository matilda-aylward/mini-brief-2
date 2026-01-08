//this code is heavily based off of the PulseSensorPlayground example "Getting_BPM_to_Monitor"
//only minor tweeks have been made to send just the bpm values 
#include <PulseSensorPlayground.h>


const int PulseWire = 0;
const int LED = LED_BUILTIN;
int Threshold = 550;

PulseSensorPlayground pulseSensor;

void setup() {
 
Serial.begin(115200); 
pulseSensor.analogInput(PulseWire);
pulseSensor.blinkOnPulse(LED);
pulseSensor.setThreshold(Threshold);

   if (pulseSensor.begin()) {
    Serial.println("We created a pulseSensor Object !");  
  }
}



void loop() {
 

if (pulseSensor.sawStartOfBeat()) {           
int myBPM = pulseSensor.getBeatsPerMinute();

 Serial.println(myBPM); 

}

  delay(20);

}
