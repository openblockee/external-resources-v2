/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#4C97FF';
    const secondaryColour = '#FF4F00';
    const color2 = '#B943FF';
    const secondaryColour2 = '#9900FF';

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

    const note = [
        ['C3', 'note_C3'],
        ['C#3', 'note_Db3'],
        ['D3', 'note_D3'],
        ['D#3', 'note_Eb3'],
        ['E3', 'note_E3'],
        ['F3', 'note_F3'],
        ['F#3', 'note_Gb3'],
        ['G3', 'note_G3'],
        ['G#3', 'note_Ab3'],
        ['A3', 'note_A3'],
        ['A#3', 'note_Bb3'],
        ['B3', 'note_B3'],
        ['C4', 'note_C4'],
        ['C#4', 'note_Db4'],
        ['D4', 'note_D4'],
        ['D#4', 'note_Eb4'],
        ['E4', 'note_E4'],
        ['F4', 'note_F4'],
        ['F#4', 'note_Gb4'],
        ['G4', 'note_G4'],
        ['G#4', 'note_Ab4'],
        ['A4', 'note_A4'],
        ['A#4', 'note_Bb4'],
        ['B4', 'note_B4'],
        ['C5', 'note_C5'],
        ['C#5', 'note_Db5'],
        ['D5', 'note_D5'],
        ['D#5', 'note_Eb5'],
        ['E5', 'note_E5'],
        ['F5', 'note_F5'],
        ['F#5', 'note_Gb5'],
        ['G5', 'note_G5'],
        ['G#5', 'note_Ab5'],
        ['A5', 'note_A5'],
        ['A#5', 'note_Bb5'],
        ['B5', 'note_B5']
    ];

    const beatTime = [
        ['1', '1'],
        ['1/2', '0.5'],
        ['1/4', '0.25'],
        ['1/8', '0.125'],
        ['1/16', '0.0625'],
        ['2', '2'],
        ['4', '4']
    ];

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
                        name: 'PIN',
                        options: [
                            [Blockly.Msg.leds_green, '13'],
                            [Blockly.Msg.leds_blue, '8']]
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

    Blockly.Blocks.passiveBuzzer_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PASSIVEBUZZER_INIT,
                colour: color2,
                secondaryColour: secondaryColour2,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.passiveBuzzer_playToneForBeat = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PASSIVEBUZZER_PLAYTONEFORBEAT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'FREQ',
                        options: note
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TIME',
                        options: beatTime
                    }
                ],
                colour: color2,
                secondaryColour: secondaryColour2,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.passiveBuzzer_setTempo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PASSIVEBUZZER_SETTEMPO,
                args0: [
                    {
                        type: 'input_value',
                        name: 'BPM'
                    }
                ],
                colour: color2,
                secondaryColour: secondaryColour2,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.passiveBuzzer_playRingtone = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PASSIVEBUZZER_PLAYRINGTONE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NO',
                        options: [
                            [Blockly.Msg.PASSIVEBUZZER_CONNECTION, 'R_connection'],
                            [Blockly.Msg.PASSIVEBUZZER_DISCONNECTION, 'R_disconnection'],
                            [Blockly.Msg.PASSIVEBUZZER_DIDI, 'R_buttonPushed'],
                            [Blockly.Msg.PASSIVEBUZZER_MODE1, 'R_mode1'],
                            [Blockly.Msg.PASSIVEBUZZER_MODE2, 'R_mode2'],
                            [Blockly.Msg.PASSIVEBUZZER_MODE3, 'R_mode3'],
                            [Blockly.Msg.PASSIVEBUZZER_SURPRISE, 'R_surprise'],
                            [Blockly.Msg.PASSIVEBUZZER_OHOOH, 'R_OhOoh'],
                            [Blockly.Msg.PASSIVEBUZZER_OHOOH2, 'R_OhOoh2'],
                            [Blockly.Msg.PASSIVEBUZZER_CUDDLY, 'R_cuddly'],
                            [Blockly.Msg.PASSIVEBUZZER_SLEEPING, 'R_sleeping'],
                            [Blockly.Msg.PASSIVEBUZZER_HAPPY, 'R_happy'],
                            [Blockly.Msg.PASSIVEBUZZER_SUPERHAPPY, 'R_superHappy'],
                            [Blockly.Msg.PASSIVEBUZZER_HAPPYSHORT, 'R_happy_short'],
                            [Blockly.Msg.PASSIVEBUZZER_SAD, 'R_sad'],
                            [Blockly.Msg.PASSIVEBUZZER_CONFUSED, 'R_confused'],
                            [Blockly.Msg.PASSIVEBUZZER_FART1, 'R_fart1'],
                            [Blockly.Msg.PASSIVEBUZZER_FART2, 'R_fart2'],
                            [Blockly.Msg.PASSIVEBUZZER_FART3, 'R_fart3']
                        ]
                    }
                ],
                colour: color2,
                secondaryColour: secondaryColour2,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;

