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
        var pin = this.getFieldValue('PIN'); 
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
        // Blockly.Arduino.setups_[`setup_pinMode_${pin}`] = `pinMode(${pin}, INPUT_PULLUP);`;
        var code = `!digitalRead(${pin})`;
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

    Blockly.Arduino.passiveBuzzer_init = function (block) {
        Blockly.Arduino.includes_.passiveBuzzer_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.passiveBuzzer_init = `Buzzer my_buzzer(7);\n` +
            `float beatTime = 60.0 / 120;`;

        return ``;
    };

    Blockly.Arduino.passiveBuzzer_playToneForBeat = function () {
        const freq = this.getFieldValue('FREQ');
        const time = this.getFieldValue('TIME');

        return `my_buzzer.tone(${freq}, ${time} * 1000 * beatTime);\n`;
    };

    Blockly.Arduino.passiveBuzzer_setTempo = function (block) {
        const bpm = Blockly.Arduino.valueToCode(block, 'BPM', Blockly.Arduino.ORDER_ATOMIC);

        return `beatTime = 60.0 / ${bpm};\n`;
    };

    Blockly.Arduino.passiveBuzzer_playRingtone = function () {
        const no = this.getFieldValue('NO');

        return `my_buzzer.playRingtone(${no});\n`;
    };

    return Blockly;
}

exports = addGenerator;