/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ZHG_EDUCATION_CATEGORY}" id="ZHG_EDUCATION_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <label text="%{BKY_QH_CAR_LABEL}"></label>
    <block type="qdp_esp32_carInitial"></block>
    <block type="qdp_esp32_carMove">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_esp32_carAround">
        <value name="speedLeft">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="speedRight">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>    
    <label text="%{BKY_QH_SENSOR_LABEL}"></label>   
    <block type="qdp_esp32_chaoshengboSerial"></block>
    <block type="qdp_esp32_grayscale"></block>
    <block type="qdp_esp32_lightSensor"></block>
    <block type="qdp_esp32_sound"></block>
    <label text="---RGB---"></label>
    <block type="rgb_esp32_led">
        <value name="num8">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="rgb_esp32_led2">
        <value name="num8">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <label text="%{BKY_QH_SERVO_LABEL}"></label>
    <block type="qdp_esp32_servomotor360">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_IR_LABEL}"></label>
    <block type="qdp_esp32_ir_re2"></block>
    <block type="qdp_ESP32_ir_recv_raw"></block>
    <block type="qdp_esp32_ir_send_nec">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">0xCF</field>
            </shadow>
        </value>
        <value name="bits">
            <shadow type="math_number">
                <field name="NUM">32</field>
            </shadow>
        </value>
    </block>
    <block type="QDP_esp32_ir_send_raw">
        <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">0,0,0</field>
            </shadow>
        </value>
        <value name="length">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="freq">
            <shadow type="math_number">
                <field name="NUM">38</field>
            </shadow>
        </value>
    </block>
</category>

`;

}

exports = addToolbox;
