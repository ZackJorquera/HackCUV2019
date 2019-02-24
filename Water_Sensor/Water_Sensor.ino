void setup()
{
  Serial.begin(9600);     // Communication started with 9600 baud
}
void loop()
{
  int water_reading = analogRead(A1); // Incoming analog signal read and appointed sensor
  
  if (water_reading > water_sensor_threshold)
  {
    //text_load()
  }
}
