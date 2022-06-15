/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
  //超声波Serial
  Blockly.Arduino.qdp_esp32_chaoshengboSerial = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var mode = this.getFieldValue('mode');
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';

    if(mode=='0'){
      Blockly.Arduino.definitions_['define_Esp32SoftwareSerial'] = '#include <Esp32SoftwareSerial.h>';
      Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'Esp32SoftwareSerial  P'+dropdown_pin+'(P'+dropdown_pin+'L,P'+dropdown_pin+'R);';
      Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
      Blockly.Arduino.definitions_['var_declare_UltrasonicSerial'] ='float UltrasonicSerial(Stream &Serialx) {\n'+
    '  byte BYTE_H;\n'+
    '  byte BYTE_M;\n'+
    '  byte BYTE_L;\n'+
    '  Serialx.write(0xA0);\n'+
    '  delay(100);\n'+
    '  while (Serialx.available() > 0) {\n'+
    '    BYTE_H = Serialx.read();\n'+
    '    BYTE_M = Serialx.read();\n'+
    '    BYTE_L =Serialx.read();\n'+
    '    float  distance = ((long(BYTE_H) << 16) + (long(BYTE_M) << 8) + long(BYTE_L)) / 1000.0;\n'+
    '    return distance;\n'+
    '  }\n'+
    '  return 0;\n'+
    '}\n'

      var code = 'UltrasonicSerial(P'+dropdown_pin+')';

    }else{
      Blockly.Arduino.definitions_['var_declare_UltrasonicIO'] = 'float UltrasonicIO(uint8_t pinL, uint8_t pinR) {\n'+
  '  uint8_t Trig =pinR;\n'+
  '  uint8_t Echo=pinL;\n'+
  '  pinMode(Trig, OUTPUT);\n'+
  '  pinMode(Echo, INPUT);\n'+
  '  digitalWrite(Trig, LOW);\n'+
  '  delayMicroseconds(2);\n'+
  '  digitalWrite(Trig, HIGH);\n'+
  '  delayMicroseconds(10);\n'+
  '  digitalWrite(Trig, LOW);\n'+
  '  float distance = pulseIn(Echo, HIGH) *342.62/2000;\n'+
  '  delay(10);\n'+
  '  return distance;\n'+
  '}\n'

      var code = 'UltrasonicIO(P'+dropdown_pin+'L,P'+dropdown_pin+'R)';

    }
    
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  // 巡线
  Blockly.Arduino.qdp_esp32_grayscale = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_pin3 = this.getFieldValue('PIN2');
    var dropdown_pin4 = this.getFieldValue('PIN3');
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';
    Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode(P'+dropdown_pin+'L, INPUT);\n  pinMode(P'+dropdown_pin+'R, INPUT);';
    var code = '(digitalRead(P'+dropdown_pin+'L) == '+dropdown_pin3+')&&(digitalRead(P'+dropdown_pin+'R) == '+dropdown_pin4+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  // 光线
  Blockly.Arduino.qdp_esp32_lightSensor = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';
    var code = 'analogRead('+dropdown_pin+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  // 声音
  Blockly.Arduino.qdp_esp32_sound = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';
    var code = 'analogRead('+dropdown_pin+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  Blockly.Arduino.rgb_esp32_led = function() {
    var pin1 = this.getFieldValue('PIN1');
    var lednum = Blockly.Arduino.valueToCode(this, 'rgblednum', Blockly.Arduino.ORDER_ATOMIC);
    var NUM=Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var R=Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var G=Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var B=Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var NUM8=Blockly.Arduino.valueToCode(this, 'num8', Blockly.Arduino.ORDER_ATOMIC) || '0';

    Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';

    Blockly.Arduino.definitions_['var_declare_var_rgb_display' + pin1] = 'Adafruit_NeoPixel QDPRGBLED_' + pin1 + '=Adafruit_NeoPixel('+ NUM8 +','+pin1+',NEO_GRB + NEO_KHZ800);';
    Blockly.Arduino.setups_['setup_rgb_display_setpin' + pin1] = 'QDPRGBLED_' + pin1 + '.begin();\n  QDPRGBLED_'+ pin1 +'.show();\n';

    if(NUM=='0')
    {
      var code = 'for (int ik = 0; ik < '+NUM8+'; ik++)\nQDPRGBLED_' + pin1 + '.setPixelColor(ik,'+R+','+G+','+B+');\nQDPRGBLED_'+ pin1 + '.show();\nQDPRGBLED_'+ pin1 + '.show();\ndelay(1);\n';
    }
    else
    {
      var code = 'QDPRGBLED_' + pin1 + '.setPixelColor('+NUM+'-1,'+R+','+G+','+B+');\nQDPRGBLED_'+ pin1 + '.show();\nQDPRGBLED_'+ pin1 + '.show();\ndelay(1);\n';
    }
    return code;
  };

  Blockly.Arduino.rgb_esp32_led2 = function() {
    var pin1 = this.getFieldValue('PIN1');
    var lednum = Blockly.Arduino.valueToCode(this, 'rgblednum', Blockly.Arduino.ORDER_ATOMIC);
    var NUM=Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var color = Blockly.Arduino.valueToCode(this, 'colour', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
    var NUM8=Blockly.Arduino.valueToCode(this, 'num8', Blockly.Arduino.ORDER_ATOMIC) || '0';

    Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';

    Blockly.Arduino.definitions_['var_declare_var_rgb_display' + pin1] = 'Adafruit_NeoPixel QDPRGBLED_' + pin1 + '=Adafruit_NeoPixel('+ NUM8 +','+pin1+',NEO_GRB + NEO_KHZ800);';
    Blockly.Arduino.setups_['setup_rgb_display_setpin' + pin1] = 'QDPRGBLED_' + pin1 + '.begin();\n  QDPRGBLED_'+ pin1 +'.show();\n';

    if(NUM=='0')
    {
      var code = 'for (int ik = 0; ik < '+NUM8+'; ik++)\nQDPRGBLED_' + pin1 + '.setPixelColor(ik,'+color+');\nQDPRGBLED_'+ pin1 + '.show();\nQDPRGBLED_'+ pin1 + '.show();\ndelay(1);\n';
    }
    else
    {
      var code = 'QDPRGBLED_' + pin1 + '.setPixelColor('+NUM+'-1,'+color+');\nQDPRGBLED_'+ pin1 + '.show();\nQDPRGBLED_'+ pin1 + '.show();\ndelay(1);\n';
    }
    return code;
  };

  //舵机360
  Blockly.Arduino.qdp_esp32_servomotor360 = function() {
    var dropdown_pin = this.getFieldValue('pin');
    var dropdown_pin2 = this.getFieldValue('pin2');
    var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) || '0';
    Blockly.Arduino.definitions_['define_qdprobotservo'] = '#include <QDPServo.h>';
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';
    Blockly.Arduino.definitions_['define_ESP32_Servo'] = '#include <ESP32_Servo.h>';

    Blockly.Arduino.definitions_['var_declare_qdprobot_motor31'+dropdown_pin] = 'Servo QDPservo_'+dropdown_pin+';\n';
    Blockly.Arduino.setups_['setup_output_3'+dropdown_pin] ='QDPservo_'+dropdown_pin+'.attach('+dropdown_pin+',500,2500);\n';
    var code = 'QDPservo_'+dropdown_pin+'.writeMicroseconds(QDPServoPulseWith1('+dropdown_pin2+','+num1+'));\n';
     return code;
  };

  Blockly.Arduino.qdp_esp32_carInitial = function() {
    var pinLeft = this.getFieldValue('pinLeft');
    var pinRight = this.getFieldValue('pinRight');
    Blockly.Arduino.definitions_['define_qdprobotservo'] = '#include <QDPServo.h>';
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';
    Blockly.Arduino.definitions_['define_ESP32_Servo'] = '#include <ESP32_Servo.h>';

    Blockly.Arduino.definitions_['var_declare_qdprobot_car_left'] = 'Servo QDPservo_Left;\n';
    Blockly.Arduino.definitions_['var_declare_qdprobot_car_right'] = 'Servo QDPservo_Right;\n';
    Blockly.Arduino.setups_[' QDPservo_Left'] =' QDPservo_Left.attach('+pinLeft+',500,2500);\n';
    Blockly.Arduino.setups_[' QDPservo_Right'] =' QDPservo_Right.attach('+pinRight+',500,2500);\n';
    return '';
  };

  Blockly.Arduino.qdp_esp32_carMove = function() {
    var action = this.getFieldValue('action');
    var speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code;
    if (action == '1') {
      code = 'QDPservo_Left.writeMicroseconds(QDPServoPulseWith1(1, '+speed+'));\n';
      code += 'QDPservo_Right.writeMicroseconds(QDPServoPulseWith1(0, '+speed+'));\n';
    } else if (action == '2') {
      code = 'QDPservo_Left.writeMicroseconds(QDPServoPulseWith1(0, '+speed+'));\n';
      code += 'QDPservo_Right.writeMicroseconds(QDPServoPulseWith1(1, '+speed+'));\n';
    } else if (action == '3') {
      code = 'QDPservo_Left.writeMicroseconds(QDPServoPulseWith1(1, 0));\n';
      code += 'QDPservo_Right.writeMicroseconds(QDPServoPulseWith1(0, '+speed+'));\n';
    } else if (action == '4') {
      code = 'QDPservo_Left.writeMicroseconds(QDPServoPulseWith1(1, '+speed+'));\n';
      code += 'QDPservo_Right.writeMicroseconds(QDPServoPulseWith1(0, 0));\n';
    }
    
    return code;
  };

  Blockly.Arduino.qdp_esp32_carAround = function() {
    var speedLeft = Blockly.Arduino.valueToCode(this, 'speedLeft',Blockly.Arduino.ORDER_ATOMIC) || '0';
    var speedRight = Blockly.Arduino.valueToCode(this, 'speedRight',Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code;
    code = 'QDPservo_Left.writeMicroseconds(QDPServoPulseWith1(1, '+speedLeft+'));\n';
    code += 'QDPservo_Right.writeMicroseconds(QDPServoPulseWith1(0, '+speedRight+'));\n';
    
    return code;
  };

  //红外遥控器
  Blockly.Arduino.qdp_esp32_ir_re2 = function() {
    var dropdown_pin = this.getFieldValue('PIN1');
    var dropdown_pin1 = this.getFieldValue('PIN');
    var type = this.getFieldValue('TYPE');
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';
    Blockly.Arduino.definitions_['include_ir_recv'] = '#include <IRrecv.h>';
    Blockly.Arduino.definitions_['var_declare_ir_recv0'+dropdown_pin] = 'IRrecv irrecv_'+dropdown_pin+'('+dropdown_pin+');\ndecode_results results_'+dropdown_pin+';\n';
    Blockly.Arduino.definitions_['var_declare_ir_recv1'+dropdown_pin] = 'bool irkeypressed_'+dropdown_pin+'(uint8_t key ,bool type) {\n'
    +'static uint8_t resultkey = 0;\n'
    +'const uint8_t keyval[] = {0xFF, 0x5D, 0x9D, 0x1D, 0xDD, 0xFD, 0x3D, 0x1F, 0x57, 0x6F, 0x97, 0x67, 0x4F, 0xCF, 0xE7, 0x85, 0xEF, 0xC7, 0xA5, 0xBD, 0xB5, 0xAD}; //对应编码值\n'
    +'static uint8_t keyrecv = 0;\n'
    +'static unsigned long irDelayTime = 0;\n'
    +'if (irrecv_'+dropdown_pin+'.decode(&results_'+dropdown_pin+')) {\n'
    +'  uint8_t ir_item = results_'+dropdown_pin+'.value & 0xFF;\n'
    +'  uint8_t i ;\n'
    +'  for ( i = 0; i < 22; i++) {\n'
    +'    if (ir_item == keyval[i]) {\n'
    +'      break;\n'
    +'    }\n'
    +'  }\n'
    +'  if (i > 0 && i < 22)\n'
    +'    keyrecv = i;\n'
    +'  irrecv_'+dropdown_pin+'.resume();\n'
    +'  irDelayTime = millis();\n'
    +'} else {\n'
    +'  if(type){\n'
    +'    if (millis() - irDelayTime > 200) {\n'
    +'       keyrecv = 0;\n'
    +'      }\n'
    +'  }\n'
    +'}\n'
    +'if (key == keyrecv) {\n'
    +'  if(!type)\n'
    +   'keyrecv = 0;\n'
    +'  return true;\n'
    +'}\n'
    +'return false;\n'
    +'}\n'
    Blockly.Arduino.setups_['setup_ir_recv_'+dropdown_pin] = 'irrecv_'+dropdown_pin+'.enableIRIn();';

    var code = 'irkeypressed_'+dropdown_pin+'('+dropdown_pin1+','+type+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  //红外接收解码
  Blockly.Arduino.qdp_ESP32_ir_recv_raw = function () {
    var dropdown_pin = this.getFieldValue('PIN1');
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';
    Blockly.Arduino.definitions_['include_IRremote'] = '#ifndef UNIT_TEST\n#include <Arduino.h>\n#endif\n#include <IRremoteESP8266.h>\n#include <IRrecv.h>\n#include <IRutils.h>\n#if DECODE_AC\n#include <ir_Daikin.h>\n#include <ir_Fujitsu.h>\n#include <ir_Gree.h>\n#include <ir_Haier.h>\n#include <ir_Kelvinator.h>\n#include <ir_Midea.h>\n#include <ir_Toshiba.h>\n#endif \n';
    Blockly.Arduino.definitions_['#define RECV_PIN' + dropdown_pin] = '#define RECV_PIN ' + dropdown_pin + '\n';
    Blockly.Arduino.definitions_['#define BAUD_RATE'] = '#define BAUD_RATE 115200\n';
    Blockly.Arduino.definitions_['#define CAPTURE_BUFFER_SIZE'] = '#define CAPTURE_BUFFER_SIZE 1024\n#if DECODE_AC\n#define TIMEOUT 50U\n#else\n#define TIMEOUT 15U  \n#endif\n#define MIN_UNKNOWN_SIZE 12\n#define IN_UNKNOWN_SIZE 12\nIRrecv irrecv(RECV_PIN, CAPTURE_BUFFER_SIZE, TIMEOUT, true);\ndecode_results results;';
    Blockly.Arduino.setups_['Serial.begin'] = ' Serial.begin(BAUD_RATE);\n while(!Serial)\ndelay(50);\n#if DECODE_HASH\n  irrecv.setUnknownThreshold(MIN_UNKNOWN_SIZE);\n#endif  \n  irrecv.enableIRIn();  ';
    var code = "if (irrecv.decode(&results))  {\n"
    code += ' uint32_t now = millis();\n';
    code += ' dumpACInfo(&results);\n'
    code += 'Serial.println(resultToSourceCode(&results));}\n';
    var funcode = 'void dumpACInfo(decode_results *results) {\n'
    + 'String description="";\n#if DECODE_DAIKIN\nif(results->decode_type == DAIKIN){\nIRDaikinESP ac(0);\n'
    + 'ac.setRaw(results->state);\ndescription=ac.toString();\n}\n#endif\n#if DECODE_FUJITSU_AC\nif(results->decode_type==FUJITSU_AC){\nIRFujitsuAC ac(0);\nac.setRaw(results->state, results->bits / 8);\ndescription = ac.toString();\n}\n#endif\n#if DECODE_KELVINATOR\nif(results->decode_type == KELVINATOR) {\nIRKelvinatorAC ac(0);\nac.setRaw(results->state);\ndescription = ac.toString();\n}\n#endif\n#if DECODE_TOSHIBA_AC\nif(results->decode_type == TOSHIBA_AC){\nIRToshibaAC ac(0);\nac.setRaw(results->state);\n    description = ac.toString();\n  }\n#endif\n#if DECODE_GREE\nif (results->decode_type == GREE){\nIRGreeAC ac(0);\nac.setRaw(results->state);\ndescription = ac.toString();\n}\n#endif\n#if DECODE_MIDEA\nif(results->decode_type == MIDEA){\nIRMideaAC ac(0);\nac.setRaw(results->value);\ndescription=ac.toString();\n}\n#endif\n#if DECODE_HAIER_AC\nif(results->decode_type == HAIER_AC) {\nIRHaierAC ac(0);\nac.setRaw(results->state);\ndescription = ac.toString();\n}\n#endif\nif(description != "")\nSerial.println("Mesg Desc.: " + description);\n}\n';
    Blockly.Arduino.definitions_['dumpACInfo'] = funcode;
    return code;
  };

  //红外发送
  Blockly.Arduino.qdp_esp32_ir_send_nec = function() {
    //var data = Blockly.Arduino.valueToCode(this, 'data',Blockly.Arduino.ORDER_ATOMIC) || '0';
    var data = Blockly.Arduino.valueToCode(this, 'data',Blockly.Arduino.ORDER_ATOMIC) || '0';
        data = data.replace(/\"/g,'')
    var type = this.getFieldValue('TYPE');
    var PIN = this.getFieldValue('PIN');
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';
    Blockly.Arduino.definitions_['include_ir_send'] = '#include "IRsend.h"';
    Blockly.Arduino.definitions_['QDPir_send_raw'+PIN] = 'IRsend irsend('+PIN+');';
    Blockly.Arduino.setups_['irsend_begin'] = 'irsend.begin();';
    var code ='irsend.send'+type+'('+data+');\n';
     return code;
  };

  //红外发送数组
  Blockly.Arduino.QDP_esp32_ir_send_raw = function () {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_pin2 = this.getFieldValue('PIN2');
    Blockly.Arduino.definitions_['define_QDPEsp32Port'] = '#include <QDPEsp32Port.h>';
    Blockly.Arduino.definitions_['include_ir_send'] = '#include "IRsend.h"';
    var length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var freq = Blockly.Arduino.valueToCode(this, 'freq', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var text = Blockly.Arduino.valueToCode(this, 'TEXT',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
    text = text.replace(/\"/g,'')
    Blockly.Arduino.setups_['irsend_begin'] = 'irsend.begin();\n'
    Blockly.Arduino.definitions_['QDPir_send_raw'+dropdown_pin]='IRsend irsend('+dropdown_pin+');\n'
    Blockly.Arduino.definitions_['QDPir_send_raw'+dropdown_pin2]='uint16_t buf_raw'+dropdown_pin2+'[' + length + ']={' + text + '};\nint vpin_value'+dropdown_pin2+';\n';
    var code = 'irsend.sendRaw(buf_raw'+dropdown_pin2+',' + length + ',' + freq + ');\n';
    return code;
  };

  return Blockly;
}
  

exports = addGenerator;
