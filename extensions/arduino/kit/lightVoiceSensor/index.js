const lightVoiceSensor = formatMessage => ({
    name: formatMessage({
        id: 'lightVoiceSensor.name',
        default: 'Sound and light module'
    }),
    extensionId: 'lightVoiceSensor',
    version: '1.0.0',
    supportDevice: ['Zhuguang_arduinoEsp32'],
    author: 'openblock',
    iconURL: `asset/lightVoiceSensor.png`,
    description: formatMessage({
        id: 'lightVoiceSensor.description',
        default: 'A module include sound and light sensor.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
});

module.exports = lightVoiceSensor;
