/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_LINEFINDERCADA_CATEGORY_CONFIG}" id="BKY_LINEFINDERCADA_CATEGORY_CONFIG" colour="#F5C400" secondaryColour="#D9AD00">
    <block type="lineFinderCaDA_setDiagnosticFunctions" id="lineFinderCaDA_setDiagnosticFunctions"></block>
    <block type="lineFinderCaDA_setTimer" id="lineFinderCaDA_setTimer">
        <value name="LINE">
            <shadow type="math_0to1000_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
        <value name="OVER">
            <shadow type="math_0to1000_number">
                <field name="NUM">120</field>
            </shadow>
        </value>
        <value name="TURN">
            <shadow type="math_0to1000_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_setSpeed" id="lineFinderCaDA_setSpeed">
        <value name="LINE">
            <shadow type="math_uint8_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="LEAN">
            <shadow type="math_unint8_number">
                <field name="NUM">-30</field>
            </shadow>
        </value>
        <value name="TURN">
            <shadow type="math_unint8_number">
                <field name="NUM">-20</field>
            </shadow>
        </value>    
    </block>    
    <block type="lineFinderCaDA_setSpeedAdj" id="lineFinderCaDA_setSpeedAdj">
        <value name="LEFT">
            <shadow type="math_n30to30number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="RIGHT">
            <shadow type="math_n30to30number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_setSensorThreshold" id="lineFinderCaDA_setSensorThreshold">
        <value name="LEFT">
            <shadow type="math_0to1000_number">
                <field name="NUM">70</field>
            </shadow>
        </value>
        <value name="RIGHT">
            <shadow type="math_0to1000_number">
                <field name="NUM">70</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_mechData" id="lineFinderCaDA_mechData">
        <value name="WD">
            <shadow type="math_positive_number">
                <field name="NUM">43.2</field>
            </shadow>
        </value>
        <value name="TW">
            <shadow type="math_positive_number">
                <field name="NUM">104</field>
            </shadow>
        </value>
        <value name="SD">
            <shadow type="math_positive_number">
                <field name="NUM">58</field>
            </shadow>
        </value>
        <value name="LW">
            <shadow type="math_positive_number">
                <field name="NUM">24</field>
            </shadow>
        </value>
        <value name="GR">
            <shadow type="math_positive_number">
                <field name="NUM">0.5</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_setEfficiency" id="lineFinderCaDA_setEfficiency">
        <value name="STRAIGHT">
            <shadow type="math_0_0to1_0_number">
                <field name="NUM">0.8</field>
            </shadow>
        </value>
        <value name="TURN">
            <shadow type="math_0_0to1_0_number">
                <field name="NUM">0.8</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_setPortConnection" id="lineFinderCaDA_setPortConnection"></block>
    <block type="lineFinderCaDA_setServoPos" id="lineFinderCaDA_setServoPos">
        <value name="POS1">
            <shadow type="math_angle">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="POS2">
            <shadow type="math_angle">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <sep gap="36"/>
    <block type="lineFinderCaDA_task" id="lineFinderCaDA_task" />
    <block type="lineFinderCaDA_stepAction" id="lineFinderCaDA_stepAction">
        <value name="STEP">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>
<category name="%{BKY_LINEFINDERCADA_CATEGORY_LINEFINDER}" id="BKY_LINEFINDERCADA_CATEGORY_LINEFINDER" colour="#00B0F0" secondaryColour="#009ED8">
    <block type="lineFinderCaDA_actionStartBypass" id="lineFinderCaDA_actionStartBypass"></block>
    <block type="lineFinderCaDA_actionCrossBypass" id="lineFinderCaDA_actionCrossBypass"></block>
    <block type="lineFinderCaDA_actionCrossTurnLeft" id="lineFinderCaDA_actionCrossTurnLeft"></block>
    <block type="lineFinderCaDA_actionCrossTurnRight" id="lineFinderCaDA_actionCrossTurnRight"></block>
    <block type="lineFinderCaDA_actionCrossReturnLeft" id="lineFinderCaDA_actionCrossReturnLeft"></block>
    <block type="lineFinderCaDA_actionCrossReturnRight" id="lineFinderCaDA_actionCrossReturnRight"></block>
    <block type="lineFinderCaDA_actionSideBypass" id="lineFinderCaDA_actionSideBypass"></block>
    <block type="lineFinderCaDA_actionSideTurnLeft" id="lineFinderCaDA_actionSideTurnLeft"></block>
    <block type="lineFinderCaDA_actionSideTurnRight" id="lineFinderCaDA_actionSideTurnRight"></block>
    <block type="lineFinderCaDA_actionSideReturnLeft" id="lineFinderCaDA_actionSideReturnLeft"></block>
    <block type="lineFinderCaDA_actionSideReturnRight" id="lineFinderCaDA_actionSideReturnRight"></block>
    <block type="lineFinderCaDA_actionStopAfterTime" id="lineFinderCaDA_actionStopAfterTime">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionStopAfterDist" id="lineFinderCaDA_actionStopAfterDist">
        <value name="DIST">
            <shadow type="math_positive_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionStopAfterTimeSpeed" id="lineFinderCaDA_actionStopAfterTimeSpeed">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionStopAfterDistSpeed" id="lineFinderCaDA_actionStopAfterDistSpeed">
        <value name="DIST">
            <shadow type="math_positive_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
</category>
<category name="%{BKY_LINEFINDERCADA_CATEGORY_RUN}" id="BKY_LINEFINDERCADA_CATEGORY_RUN" colour="#92D050" secondaryColour="#86BF49">
    <block type="lineFinderCaDA_actionGoForward" id="lineFinderCaDA_actionGoForward">
    </block>
    <block type="lineFinderCaDA_actionGoForwardTime" id="lineFinderCaDA_actionGoForwardTime">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoForwardDist" id="lineFinderCaDA_actionGoForwardDist">
        <value name="DIST">
            <shadow type="math_positive_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoForwardTimeSpeed" id="lineFinderCaDA_actionGoForwardTimeSpeed">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoForwardDistSpeed" id="lineFinderCaDA_actionGoForwardDistSpeed">
        <value name="DIST">
            <shadow type="math_positive_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoBackward" id="lineFinderCaDA_actionGoBackward">
    </block>
    <block type="lineFinderCaDA_actionGoBackwardTime" id="lineFinderCaDA_actionGoBackwardTime">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoBackwardDist" id="lineFinderCaDA_actionGoBackwardDist">
        <value name="DIST">
            <shadow type="math_positive_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoBackwardTimeSpeed" id="lineFinderCaDA_actionGoBackwardTimeSpeed">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoBackwardDistSpeed" id="lineFinderCaDA_actionGoBackwardDistSpeed">
        <value name="DIST">
            <shadow type="math_positive_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoLeft" id="lineFinderCaDA_actionGoLeft">
    </block>
    <block type="lineFinderCaDA_actionGoLeftTime" id="lineFinderCaDA_actionGoLeftTime">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoLeftAngle" id="lineFinderCaDA_actionGoLeftAngle">
        <value name="ANGLE">
            <shadow type="math_positive_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoLeftTimeSpeed" id="lineFinderCaDA_actionGoLeftTimeSpeed">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoLeftAngleSpeed" id="lineFinderCaDA_actionGoLeftAngleSpeed">
        <value name="ANGLE">
            <shadow type="math_positive_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoRight" id="lineFinderCaDA_actionGoRight">
    </block>
    <block type="lineFinderCaDA_actionGoRightTime" id="lineFinderCaDA_actionGoRightTime">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoRightAngle" id="lineFinderCaDA_actionGoRightAngle">
        <value name="ANGLE">
            <shadow type="math_positive_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoRightTimeSpeed" id="lineFinderCaDA_actionGoRightTimeSpeed">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionGoRightAngleSpeed" id="lineFinderCaDA_actionGoRightAngleSpeed">
        <value name="ANGLE">
            <shadow type="math_positive_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
</category>
<category name="%{BKY_LINEFINDERCADA_CATEGORY_ACTION}" id="BKY_LINEFINDERCADA_CATEGORY_ACTION" colour="#FFC000" secondaryColour="#E5AC00">
    <block type="lineFinderCaDA_actionWait" id="lineFinderCaDA_actionWait">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionWaitAck" id="lineFinderCaDA_actionWaitAck"></block>
    <block type="lineFinderCaDA_actionMultiPortAct" id="lineFinderCaDA_actionMultiPortAct">
        <value name="LEVEL">
            <shadow type="math_positive_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionLoopJump" id="lineFinderCaDA_actionLoopJump">
        <value name="STEP">
            <shadow type="math_positive_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="TIMES">
            <shadow type="math_positive_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionLineFinderMode" id="lineFinderCaDA_actionLineFinderMode">
        <value name="TYPE">
            <shadow type="math_positive_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="lineFinderCaDA_actionSpeedUpdate" id="lineFinderCaDA_actionSpeedUpdate">
        <value name="SPEED">
            <shadow type="math_positive_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
