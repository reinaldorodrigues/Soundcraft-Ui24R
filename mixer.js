const { SoundcraftUI } = require("soundcraft-ui-connection");

const mixer = new SoundcraftUI("10.15.2.16");
mixer.connect();

// Ajustar o nível do fader do canal 4.
mixer.master.input(4).setFaderLevel(0.5);

// EMutar o canal 20.
mixer.master.input(20).mute();

// Desmutar o canal 20.
mixer.master.input(20).unmute();

// Desconectar do mixer após a execução.
mixer.disconnect();
