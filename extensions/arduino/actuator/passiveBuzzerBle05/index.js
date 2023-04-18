const passiveBuzzer = formatMessage => ({
    name: formatMessage({
        id: 'passiveBuzzer.name',
        default: 'Passive Buzzer'
    }),
    extensionId: 'passiveBuzzerBle05',
    version: '1.0.0',
    supportDevice: ['magicLogicBLE05'],
    author: 'CaDA',
    iconURL: `asset/passiveBuzzer.png`,
    description: formatMessage({
        id: 'passiveBuzzer.description',
        default: 'Unlike the active buzzer, the passive buzzer can be used to make different tones of sound and play some ringtones.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['actuator'],
    helpLink: 'http://doc.cada-e.com/doku.php?id=magiclogicmasteredu'
});

module.exports = passiveBuzzer;
