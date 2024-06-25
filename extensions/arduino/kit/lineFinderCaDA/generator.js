/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    
    Blockly.Arduino['math_0to1000_number'] = Blockly.Arduino['math_number'];
    Blockly.Arduino['math_unint8_number'] = Blockly.Arduino['math_number'];
    Blockly.Arduino['math_0_0to1_0_number'] = Blockly.Arduino['math_number'];
    Blockly.Arduino['math_n30to30number'] = Blockly.Arduino['math_number'];

    Blockly.Arduino.lineFinderCaDA_setDiagnosticFunctions = function (block) {
        const func = block.getFieldValue('FUNC');

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return `fctDiagInit(${func});\n`;
    };

    Blockly.Arduino.lineFinderCaDA_setTimer = function (block) {
        const line = Blockly.Arduino.valueToCode(block, 'LINE', Blockly.Arduino.ORDER_ATOMIC);
        const over = Blockly.Arduino.valueToCode(block, 'OVER', Blockly.Arduino.ORDER_ATOMIC);
        const turn = Blockly.Arduino.valueToCode(block, 'TURN', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return `fctTimerVar(${line}, ${over}, ${turn});\n`;
    };

    Blockly.Arduino.lineFinderCaDA_setSpeed = function (block) {
        const line = Blockly.Arduino.valueToCode(block, 'LINE', Blockly.Arduino.ORDER_ATOMIC);
        const lean = Blockly.Arduino.valueToCode(block, 'LEAN', Blockly.Arduino.ORDER_ATOMIC);
        const turn = Blockly.Arduino.valueToCode(block, 'TURN', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return `fctSpeedVar(${line}, ${lean}, ${turn});\n`;
    };

    Blockly.Arduino.lineFinderCaDA_setSpeedAdj = function (block) {
        const type = block.getFieldValue('TYPE');
        const left = Blockly.Arduino.valueToCode(block, 'LEFT', Blockly.Arduino.ORDER_ATOMIC);
        const right = Blockly.Arduino.valueToCode(block, 'RIGHT', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return `fctSpeedAdj(${type}, ${left}, ${right});\n`;
    };

    Blockly.Arduino.lineFinderCaDA_setSensorThreshold = function (block) {
        const left = Blockly.Arduino.valueToCode(block, 'LEFT', Blockly.Arduino.ORDER_ATOMIC);
        const right = Blockly.Arduino.valueToCode(block, 'RIGHT', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return `fctSensorLMT(${left}, ${right});\n`;
    };

    Blockly.Arduino.lineFinderCaDA_mechData = function (block) {
        const wd = Blockly.Arduino.valueToCode(block, 'WD', Blockly.Arduino.ORDER_ATOMIC);
        const tw = Blockly.Arduino.valueToCode(block, 'TW', Blockly.Arduino.ORDER_ATOMIC);
        const sd = Blockly.Arduino.valueToCode(block, 'SD', Blockly.Arduino.ORDER_ATOMIC);
        const lw = Blockly.Arduino.valueToCode(block, 'LW', Blockly.Arduino.ORDER_ATOMIC);
        const gr = Blockly.Arduino.valueToCode(block, 'GR', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return `fctMechData(${wd}, ${tw}, ${sd}, ${lw}, ${gr});\n`;
    };

    Blockly.Arduino.lineFinderCaDA_setEfficiency = function (block) {
        const straight = Blockly.Arduino.valueToCode(block, 'STRAIGHT', Blockly.Arduino.ORDER_ATOMIC);
        const turn = Blockly.Arduino.valueToCode(block, 'TURN', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return `fctMechDataEff(${straight}, ${turn});\n`;
    };

    Blockly.Arduino.lineFinderCaDA_setPortConnection = function (block) {
        const port = block.getFieldValue('PORT');
        const peripherals = block.getFieldValue('PERIPHERALS');

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return `fctPortConfig(${port}, ${peripherals});\n`;
    };

    Blockly.Arduino.lineFinderCaDA_task = function (block) {
        const num = block.getFieldValue('NUM');

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';
      
        var code = `void task${num}() {\n`;
        code = Blockly.Arduino.scrub_(block, code);
        code = code.slice(2); // Delet first indent.
        code += '}\n';
      
        Blockly.Arduino.definitions_[`lineFinderCaDA_task${num}`] = code;
        return null;
    };

    Blockly.Arduino.lineFinderCaDA_stepAction = function (block) {
        const step = Blockly.Arduino.valueToCode(block, 'STEP', Blockly.Arduino.ORDER_ATOMIC);
        const action = Blockly.Arduino.valueToCode(block, 'ACTION', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

const code = `// STEP${step}:
if (vStepSeq == ${step}) {
  if (${action}) vStepSeq++;
}
`;
        
        return code;
    };

    Blockly.Arduino.lineFinderCaDA_actionStartBypass = function (block) {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return ['fctStartBypass()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionCrossBypass = function (block) {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return ['fctCrossBypass()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionCrossTurnLeft = function (block) {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return ['fctCrossTurnLeft()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionCrossTurnRight = function (block) {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return ['fctCrossTurnRight()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionCrossReturnLeft = function (block) {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return ['fctCrossReturnLeft()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionCrossReturnRight = function (block) {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return ['fctCrossReturnRight()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionSideBypass = function (block) {
        const side = block.getFieldValue('SIDE');

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctSideBypass(${side})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionSideTurnLeft = function (block) {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return ['fctSideTurnLeft()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionSideTurnRight = function (block) {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return ['fctSideTurnRight()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionSideReturnLeft = function (block) {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return ['fctSideReturnLeft()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionSideReturnRight = function (block) {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return ['fctSideReturnRight()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionStopAfterTime = function (block) {        
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctStopAfter(${time})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionStopAfterDist = function (block) {
        const dist = Blockly.Arduino.valueToCode(block, 'DIST', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctStopAfterDist(${dist})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionStopAfterTimeSpeed = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctStopAfter(${time}, ${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionStopAfterDistSpeed = function (block) {
        const dist = Blockly.Arduino.valueToCode(block, 'DIST', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctStopAfterDist(${dist}, ${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoForward = function () {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoForward()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoForwardTime = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoForward(${time})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoForwardDist = function (block) {
        const dist = Blockly.Arduino.valueToCode(block, 'DIST', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoForwardDist(${dist})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoForwardTimeSpeed = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoForward(${time}, ${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoForwardDistSpeed = function (block) {
        const dist = Blockly.Arduino.valueToCode(block, 'DIST', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoForwardDist(${dist}, ${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoBackward = function () {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoBackward()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoBackwardTime = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoBackward(${time})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoBackwardDist = function (block) {
        const dist = Blockly.Arduino.valueToCode(block, 'DIST', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoBackwardDist(${dist})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoBackwardTimeSpeed = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoBackward(${time}, ${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoBackwardDistSpeed = function (block) {
        const dist = Blockly.Arduino.valueToCode(block, 'DIST', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoBackwardDist(${dist}, ${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoLeft = function () {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoLeft()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoLeftTime = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoLeft(${time})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoLeftAngle = function (block) {
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoLeftAngle(${angle})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoLeftTimeSpeed = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoLeft(${time}, ${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoLeftAngleSpeed = function (block) {
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoLeftAngle(${angle}, ${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoRight = function () {
        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoRight()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoRightTime = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoRight(${time})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoRightAngle = function (block) {
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoRightAngle(${angle})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoRightTimeSpeed = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoRight(${time}, ${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionGoRightAngleSpeed = function (block) {
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctGoRightAngle(${angle}, ${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionWait = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctWait(${time})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionWaitAck = function (block) {
        const action = Blockly.Arduino.valueToCode(block, 'ACTION', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctWaitAct(${action})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionMultiPortAct = function (block) {
        const port = block.getFieldValue('PORT');
        const peripherals = block.getFieldValue('PERIPHERALS');
        const level = Blockly.Arduino.valueToCode(block, 'LEVEL', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctMultiPortAct(${port}, ${peripherals}, ${level}, ${time})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_level = function (block) {
        const value = block.getFieldValue('VALUE');

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`${value}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionSpeedUpdate = function (block) {
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctSpeedUpd(${speed})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_setServoPos = function (block) {
        const pos1 = Blockly.Arduino.valueToCode(block, 'POS1', Blockly.Arduino.ORDER_ATOMIC);
        const pos2 = Blockly.Arduino.valueToCode(block, 'POS2', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return `fctServoPos(${pos1}, ${pos2});\n`;
    };

    Blockly.Arduino.lineFinderCaDA_actionLoopJump = function (block) {
        const step = Blockly.Arduino.valueToCode(block, 'STEP', Blockly.Arduino.ORDER_ATOMIC);
        const times = Blockly.Arduino.valueToCode(block, 'TIMES', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctLoopJump(${step}, ${times})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lineFinderCaDA_actionLineFinderMode = function (block) {
        const type = Blockly.Arduino.valueToCode(block, 'TYPE', Blockly.Arduino.ORDER_ATOMIC);

        delete Blockly.Arduino.includes_.arduino;
        Blockly.Arduino.includes_['CaTurbot'] = '#include <CaTurbot.h>';
        Blockly.Arduino.setups_.CaTurbotLFR = 'fctLFRobInit();';        
        Blockly.Arduino.loops_.CaTurbotLFR = 'fctInputUpdate();\n  fctTaskUpdate();\n  fctDiagMsg();';

        return [`fctLineFinderMode(${type})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
