/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const configColour = '#F5C400';
    const configSecondaryColour = '#D9AD00';

    const lineFinderColour = '#00B0F0';
    const lineFinderSecondaryColour = '#009ED8';

    const runColour = '#92D050';
    const runSecondaryColour = '#86BF49';

    const actionColour = '#FFC000';
    const actionSecondaryColour = '#E5AC00';

    
    Blockly.Blocks['math_0to1000_number'] = {
        init: function() {
        this.jsonInit({
            "message0": "%1",
            "args0": [
            {
                "type": "field_slider",
                "name": "NUM",
                "value": "0",
                "precision": 1,
                "min": "0",
                "max": "1000"
            }
            ],
            "output": "Number",
            "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
            "colour": Blockly.Colours.textField,
            "colourSecondary": Blockly.Colours.textField,
            "colourTertiary": Blockly.Colours.textField
        });
        }
    };

    Blockly.Blocks['math_unint8_number'] = {
        init: function() {
        this.jsonInit({
            message0: "%1",
            args0: [
            {
                "type": "field_slider",
                "name": "NUM",
                "value": "0",
                "precision": 1,
                "min": "-255",
                "max": "0"
            }
            ],
            "output": "Number",
            "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
            "colour": Blockly.Colours.textField,
            "colourSecondary": Blockly.Colours.textField,
            "colourTertiary": Blockly.Colours.textField
        });
        }
    };

    Blockly.Blocks['math_0_0to1_0_number'] = {
        init: function() {
        this.jsonInit({
            message0: "%1",
            args0: [
            {
                "type": "field_slider",
                "name": "NUM",
                "value": "0",
                "precision": 0.1,
                "min": "0",
                "max": "1"
            }
            ],
            "output": "Number",
            "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
            "colour": Blockly.Colours.textField,
            "colourSecondary": Blockly.Colours.textField,
            "colourTertiary": Blockly.Colours.textField
        });
        }
    };

    Blockly.Blocks['math_n30to30number'] = {
        init: function() {
        this.jsonInit({
            message0: "%1",
            args0: [
            {
                "type": "field_slider",
                "name": "NUM",
                "value": "0",
                "precision": 1,
                "min": "-30",
                "max": "30"
            }
            ],
            "output": "Number",
            "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
            "colour": Blockly.Colours.textField,
            "colourSecondary": Blockly.Colours.textField,
            "colourTertiary": Blockly.Colours.textField
        });
        }
    };

    Blockly.Blocks.lineFinderCaDA_setDiagnosticFunctions = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_SETDIAGNOSTICFUNCTIONS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'FUNC',
                        options: [
                            ['BLE', '2'],
                            ['USB', '1'],
                            [Blockly.Msg.LINEFINDERCADA_OFF, '0']
                        ]
                    }
                ],
                colour: configColour,
                secondaryColour: configSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_setTimer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_SETTIMER,
                args0: [
                    {
                        type: 'input_value',
                        name: 'LINE'
                    },
                    {
                        type: 'input_value',
                        name: 'OVER'
                    },
                    {
                        type: 'input_value',
                        name: 'TURN'
                    }
                ],
                colour: configColour,
                secondaryColour: configSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_setSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_SETSPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'LINE'
                    },
                    {
                        type: 'input_value',
                        name: 'LEAN'
                    },
                    {
                        type: 'input_value',
                        name: 'TURN'
                    }
                ],
                colour: configColour,
                secondaryColour: configSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_setSpeedAdj = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_SETSPEEDADJ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.LINEFINDERCADA_FORWARD, '1'],
                            [Blockly.Msg.LINEFINDERCADA_BACKWARD, '2'],
                            [Blockly.Msg.LINEFINDERCADA_TURNLEFT, '3'],
                            [Blockly.Msg.LINEFINDERCADA_TURNRIGHT, '4'],
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'LEFT'
                    },
                    {
                        type: 'input_value',
                        name: 'RIGHT'
                    }
                ],
                colour: configColour,
                secondaryColour: configSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_setSensorThreshold = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_SETSENSORTHRESHOLD,
                args0: [
                    {
                        type: 'input_value',
                        name: 'LEFT'
                    },
                    {
                        type: 'input_value',
                        name: 'RIGHT'
                    }
                ],
                colour: configColour,
                secondaryColour: configSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_mechData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_MECHDATA,
                args0: [
                    {
                        type: 'input_value',
                        name: 'WD'
                    },
                    {
                        type: 'input_value',
                        name: 'TW'
                    },
                    {
                        type: 'input_value',
                        name: 'SD'
                    },
                    {
                        type: 'input_value',
                        name: 'LW'
                    },
                    {
                        type: 'input_value',
                        name: 'GR'
                    }
                ],
                colour: configColour,
                secondaryColour: configSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_setEfficiency = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_SETTURNEFFICIENCY,
                args0: [
                    {
                        type: 'input_value',
                        name: 'STRAIGHT'
                    },
                    {
                        type: 'input_value',
                        name: 'TURN'
                    }
                ],
                colour: configColour,
                secondaryColour: configSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_setPortConnection = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_SETPORTCONNECTION,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PERIPHERALS',
                        options: [
                            [Blockly.Msg.LINEFINDERCADA_ULTRASONICWAVE, '8'],
                            [Blockly.Msg.LINEFINDERCADA_SPEAKER, '4'],
                            [Blockly.Msg.LINEFINDERCADA_SERVO, '2'],
                            [Blockly.Msg.LINEFINDERCADA_INDICATORLIGHT, '1'],
                            [Blockly.Msg.LINEFINDERCADA_NONE, '0']
                        ]
                    },
                ],
                colour: configColour,
                secondaryColour: configSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_task = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_TASK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            ['01', '01'],
                            ['02', '02'],
                            ['03', '03'],
                            ['04', '04'],
                            ['05', '05'],
                            ['06', '06'],
                            ['07', '07'],
                            ['08', '08'],
                            ['09', '09'],
                            ['10', '10'],
                            ['11', '11'],
                            ['12', '12'],
                            ['13', '13'],
                            ['14', '14'],
                            ['15', '15'],
                            ['16', '16'],
                            ['17', '17'],
                            ['18', '18'],
                            ['19', '19'],
                            ['20', '20']
                        ]
                    }
                ],
                colour: configColour,
                secondaryColour: configSecondaryColour,
                extensions: ['shape_hat']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_stepAction = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_STEPACTION,
                args0: [
                    {
                        type: 'input_value',
                        name: 'STEP'
                    },
                    {
                        type: 'input_value',
                        name: 'ACTION',
                        check: 'Boolean'
                    },
                ],
                colour: configColour,
                secondaryColour: configSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionStartBypass = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONSTARTBYPASS,
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionCrossBypass = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONCROSSBYPASS,
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionCrossTurnLeft = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONCROSSTURNLEFT,
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionCrossTurnRight = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONCROSSTURNRIGHT,
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionCrossReturnLeft = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONCROSSRETURNLEFT,
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionCrossReturnRight= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONCROSSRETURNRIGHT,
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionSideBypass= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONSIDEBYPASS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SIDE',
                        options: [
                            [Blockly.Msg.LINEFINDERCADA_NORMAL, '1'],
                            [Blockly.Msg.LINEFINDERCADA_TURNLEFTT, '2'],
                            [Blockly.Msg.LINEFINDERCADA_TURNRIGHTT, '3']
                        ]
                    },
                ],
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionSideTurnLeft= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONSIDETURNLEFT,
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionSideTurnRight = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONSIDETURNRIGHT,
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionSideReturnLeft = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONSIDERETURNLEFT,
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionSideReturnRight = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONSIDERETURNRIGHT,
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionStopAfterTime = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONSTOPAFTERTIME,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionStopAfterDist = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONSTOPAFTERDIST,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DIST'
                    }
                ],
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionStopAfterTimeSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONSTOPAFTERTIMESPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionStopAfterDistSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONSTOPAFTERDISTSPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DIST'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: lineFinderColour,
                secondaryColour: lineFinderSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoForwardTime = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOFORWARDTIME,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoForwardDist = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOFORWARDDIST,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DIST'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoForwardTimeSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOFORWARDTIMESPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoForwardDistSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOFORWARDDISTSPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DIST'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoBackwardTime = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOBACKWARDTIME,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoBackwardDist = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOBACKWARDDIST,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DIST'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoBackwardTimeSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOBACKWARDTIMESPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoBackwardDistSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOBACKWARDDISTSPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DIST'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoLeftTime = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOLEFTTIME,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoLeftAngle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOLEFTANGLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ANGLE'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoLeftTimeSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOLEFTTIMESPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoLeftAngleSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGOLEFTANGLESPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ANGLE'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoRightTime = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGORIGHTTIME,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoRightAngle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGORIGHTANGLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ANGLE'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoRightTimeSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGORIGHTTIMESPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionGoRightAngleSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONGORIGHTANGLESPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ANGLE'
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: runColour,
                secondaryColour: runSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionWait = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONWAIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: actionColour,
                secondaryColour: actionSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionWaitAck = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONWAITACK,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ACTION',
                        check: 'Boolean'
                    }
                ],
                colour: actionColour,
                secondaryColour: actionSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_actionMultiPortAct = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LINEFINDERCADA_ACTIONMULTIPORTACT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['1', 'port1'],
                            ['2', 'port2'],
                            ['1+2', 'port5']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PERIPHERALS',
                        options: [
                            [Blockly.Msg.LINEFINDERCADA_SPEAKER, '4'],
                            [Blockly.Msg.LINEFINDERCADA_SERVO, '2'],
                            [Blockly.Msg.LINEFINDERCADA_INDICATORLIGHT, '1']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'LEVEL'
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: actionColour,
                secondaryColour: actionSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lineFinderCaDA_level = {
        init: function () {
            this.jsonInit({
                message0: "%1",
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'VALUE',
                        options: [
                            ['0', '0'],
                            ['1', '1']
                        ]
                    }
                ],
                colour: actionColour,
                secondaryColour: actionSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
