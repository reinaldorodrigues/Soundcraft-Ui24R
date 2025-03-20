import { SoundcraftUI } from "soundcraft-ui-connection";

const conn = new SoundcraftUI("10.15.2.16");
await conn.connect();

setInterval(() => {
  conn.master.input(4).toggleMute();
}, 1000);
