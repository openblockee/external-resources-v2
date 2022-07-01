const rgbModule = formatMessage => ({
    name: formatMessage({
        id: 'rgbModule.name',
        default: 'RGB module'
    }),
    extensionId: 'rgbModule',
    version: '1.0.0',
    supportDevice: ['Zhuguang_arduinoEsp32'],
    author: 'openblock',
    iconURL: `asset/rgbModule.png`,
    description: formatMessage({
        id: 'rgbModule.description',
        default: 'A module include 4 RGB Light.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['actuator'],
});

module.exports = rgbModule;
