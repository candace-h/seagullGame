/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
int button = 2;

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);

  pinMode(button, INPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int pot1 = analogRead(A2);
  int pot4 = analogRead(A5);
  int pot5 = analogRead(A4);
  int buttonState = digitalRead(button);

  // print out the value you read:
 // Serial.println("");
  //Serial.println("Y,");

  String P1 = String(pot1)+"," + String(pot4)+"," + String(pot5)+",";
  Serial.println(P1);


  delay(10);  // delay in between reads for stability
}
