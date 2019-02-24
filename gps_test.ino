// GPS Module - GP-20U7 - Arduino UNO Example
//
// Author: Gustavo Bertoli
//
// References:
// https://cdn.sparkfun.com/datasheets/GPS/GP-20U7.pdf
// https://www.arduino.cc/en/Reference/SoftwareSerial
// http://forum.arduino.cc/index.php?topic=288234.0
// 

#include <SoftwareSerial.h> 

SoftwareSerial GPS_Serial(10, 11); // RX, TX

void setup() {
  Serial.begin(9600);
  GPS_Serial.begin(9600); 
}

void loop() {
   char rc;

   if (GPS_Serial.available()){
        rc = GPS_Serial.read();
        Serial.write(rc);
   }
}
