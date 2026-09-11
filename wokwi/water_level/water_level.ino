#define TRIG_PIN 5
#define ECHO_PIN 18
#define TANK_HEIGHT_CM 20.0

void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}

void loop() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH);
  float distance = duration * 0.0343 / 2;

  float waterHeight = TANK_HEIGHT_CM - distance;
  if (waterHeight < 0) waterHeight = 0;

  float levelPercent = (waterHeight / TANK_HEIGHT_CM) * 100;

  Serial.print("Water Level: ");
  Serial.print(levelPercent);
  Serial.println("%");

  if (levelPercent < 25) {
    Serial.println("ALERT: Water level critically low!");
  }

  delay(1000);
}