/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.remoteControlCaDA_setVibrateIntensity = function (block) {
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_.CaTurbot = '#include <CaTurbot.h>';

        return `// not define\n`;
    };

    Blockly.Arduino.remoteControlCaDA_readButtonState = function (block) {
        const button = block.getFieldValue('BUTTON');

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_.CaTurbot = '#include <CaTurbot.h>';

        return ['/* not define */', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.remoteControlCaDA_readSwitchState = function (block) {
        const switch_ = block.getFieldValue('SWITCH');

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_.CaTurbot = '#include <CaTurbot.h>';

        return ['/* not define */', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.remoteControlCaDA_readAnalogPort = function (block) {
        const handle = block.getFieldValue('HANDLE');

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_.CaTurbot = '#include <CaTurbot.h>';

        return ['/* not define */', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.remoteControlCaDA_readEquipAcceler = function (block) {
        const acceler = block.getFieldValue('ACCELER');

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_.CaTurbot = '#include <CaTurbot.h>';

        return ['/* not define */', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.remoteControlCaDA_readEquipState = function (block) {
        const state = block.getFieldValue('STATE');

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_.CaTurbot = '#include <CaTurbot.h>';

        return ['/* not define */', Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
