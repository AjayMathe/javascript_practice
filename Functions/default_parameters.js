function defaultDemo(name = 'world') {
    console.log(`hello ${name}`);
}

defaultDemo();
defaultDemo('John');

//default parameters should always come at the end

function defaultDemo2(name = 'world', message) {
    console.log(`hello ${name}. ${message}`);
}

defaultDemo2('john', 'how are u');