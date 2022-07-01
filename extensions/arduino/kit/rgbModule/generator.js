/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
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

  return Blockly;
}
  

exports = addGenerator;
