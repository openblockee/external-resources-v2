/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
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

  return Blockly;
}
  

exports = addGenerator;
