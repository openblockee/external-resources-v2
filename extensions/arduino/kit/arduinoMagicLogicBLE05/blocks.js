/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#4C97FF';
    const secondaryColour = '#FF4F00';

    const seniorPins = [
        ['3', '3'],
        ['5', '5'],
        ['6', '6'],
        ['9', '9'],
        ['10', '10'],
        ['11', '11'],
        ['A0', '14'],
        ['A1', '15'],
        ['A2', '16'],
        ['A3', '17'],
        ['A4', '18'],
        ['A5', '19'],
    ];

    const ports = [
        ['A', '3'],
        ['B', '5'],
        ['C', '6'],
        ['D', '9'],
        ['E', '10'],
        ['F', '11']];

    const analogPins = [
        ['A', 'A0'],
        ['B', 'A1'],
        ['C', 'A2'],
        ['D', 'A3'],
        ['E', 'A4'],
        ['F', 'A5']];

    Blockly.Blocks.BLE05_setPinMode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLE05_setPinMode,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: seniorPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [[Blockly.Msg.modeMenu_input, 'INPUT'],
                            [Blockly.Msg.modeMenu_output, 'OUTPUT'],
                            [Blockly.Msg.modeMenu_inputPullup, 'INPUT_PULLUP']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.BLE05_setPinOutput = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLE05_setPinOutput,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: seniorPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LEVEL',
                        options: [
                            [Blockly.Msg.levelMenu_high, 'HIGH'],
                            [Blockly.Msg.levelMenu_low, 'LOW']]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.pwm_set = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                {
                    type: 'field_slider',
                    name: 'NUM', // 值名称
                    value: '0', // 默认值
                    precision: 1,  // 精度
                    min: '0', // 最小值
                    max: '255' // 最大值
                }
                ],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: Blockly.Colours.textField,
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };
    
    Blockly.Blocks.BLE05_setPwmOutput = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLE05_setPwmOutput,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: ports
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.BLE05_setServoOutput = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLE05_setServoOutput,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: ports
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.BLE05_setLEDState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLE05_setLEDState,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LEVEL',
                        options: [
                            [Blockly.Msg.levelMenu_high, 'HIGH'],
                            [Blockly.Msg.levelMenu_low, 'LOW']]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.BLE05_readDigitalPin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLE05_readDigitalPin,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: seniorPins
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.BLE05_readButtonState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLE05_readButtonState,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            [Blockly.Msg.button_left, '4'],
                            [Blockly.Msg.button_center, '2'],
                            [Blockly.Msg.button_right, '12']]
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.BLE05_readAnalogPort = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLE05_readAnalogPort,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.BLE05_attachInterrupt = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLE05_attachInterrupt,
                message1: '%1', 
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: seniorPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.interrupMode_rising, 'RISING'],
                            [Blockly.Msg.interrupMode_falling, 'FALLING'],
                            [Blockly.Msg.interrupMode_change, 'CHANGE'],
                            [Blockly.Msg.interrupMode_low, 'LOW'],
                        ]
                    }
                ],
                args1: [
                    {
                      type: 'input_statement',
                      name: 'BRANCH'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.BLE05_detachInterrupt = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLE05_detachInterrupt,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: seniorPins
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;

