/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.BLE05_setPinMode = function() {
        var pin = this.getFieldValue('PIN'); 
        var mode = this.getFieldValue('MODE');

        var code = `pinMode(${pin}, ${mode});\n`;
        return code; 
    };

    Blockly.Arduino.BLE05_setPinOutput  = function() {
        var pin = this.getFieldValue('PIN'); 
        var level = this.getFieldValue('LEVEL');

        var code = `digitalWrite(${pin}, ${level});\n`;
        return code; 
    };

    Blockly.Arduino.pwm_set = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BLE05_setPwmOutput  = function() {
        var pin = this.getFieldValue('PIN');
        var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var code = `analogWrite(${pin}, ${value});\n`;
        return code; 
    };

    Blockly.Arduino.BLE05_setServoOutput  = function() {
        var pin = this.getFieldValue('PIN'); 
        var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
        Blockly.Arduino.definitions_['define_servo_' + pin] = `Servo servo${pin};`;
        var code = `servo${pin}.attach(${pin}, 544, 2400);\n`;
        code += `servo${pin}.write(${value});\n`
        return code; 
    };

    Blockly.Arduino.BLE05_setLEDState  = function() {
        var pin = '13'; 
        var level = this.getFieldValue('LEVEL');
        var code = `digitalWrite(${pin}, ${level});\n`;
        return code;
    };

    Blockly.Arduino.BLE05_readDigitalPin  = function() {
        var pin = this.getFieldValue('PIN');
        var code = `digitalRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];;
    };

    Blockly.Arduino.BLE05_readButtonState  = function() {
        var pin = this.getFieldValue('PIN');
        // var code = `pinMode(${pin}, INPUT_PULLUP);\n`;
        Blockly.Arduino.setups_[`setup_pinMode_${pin}`] = `pinMode(${pin}, INPUT_PULLUP);`;
        var code = `digitalRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BLE05_readAnalogPort  = function() {
        var pin = this.getFieldValue('PIN');
        var code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];;
    };

    Blockly.Arduino.BLE05_attachInterrupt = function() {
        var pin = this.getFieldValue('PIN'); 
        var mode = this.getFieldValue('MODE');
        const branch = Blockly.Arduino.statementToCode(this, 'BRANCH');
        Blockly.Arduino.definitions_[`func_ISR_RISING_${pin}`] =
          `void ISR_RISING_${pin}() {\n${branch}}`

        var code = `attachInterrupt(digitalPinToInterrupt(${pin}), ISR_RISING_${pin}, ${mode});\n`;
        return code; 
    };

    Blockly.Arduino.BLE05_detachInterrupt = function() {
        var pin = this.getFieldValue('PIN'); 
        var code = `detachInterrupt(digitalPinToInterrupt(${pin}));\n`;
        return code; 
    };

    return Blockly;
}

exports = addGenerator;