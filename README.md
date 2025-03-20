# Soundcraft Ui24R Mixer Control Scripts

Este repositório contém exemplos de scripts em Node.js para controlar a mesa de som **Soundcraft Ui24R** utilizando a biblioteca [soundcraft-ui-connection](https://github.com/fmalcher/soundcraft-ui).

## 📁 Arquivos disponíveis

### ✅ **mixer.js**
Este script conecta à mesa e executa comandos simples, como:
- Ajustar o nível do fader do canal 4.
- Mutar o canal 20.
- Desmutar o canal 20.
- Desconectar do mixer após a execução.

#### Exemplo do código:
```js
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
```

---

### ✅ **mixer2.js**
Script que conecta à mesa e alterna o estado de mute do canal 4 a cada segundo.

#### Exemplo do código:
```js
import { SoundcraftUI } from "soundcraft-ui-connection";

const conn = new SoundcraftUI("10.15.2.16");
await conn.connect();

setInterval(() => {
  conn.master.input(4).toggleMute();
}, 1000);
```

> **Observação:** este script usa `import` e `await`, então você deve executar com Node.js versão compatível (v14+ e com o arquivo usando extensão `.mjs` ou adicionando `"type": "module"` no `package.json`).

---

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/seurepositorio.git
cd seurepositorio
```

2. Instale as dependências:
```bash
npm install soundcraft-ui-connection
```

---

## ⏰ Como criar um cron job para executar o script automaticamente

1. Verifique o caminho do Node.js:
```bash
which node
```
Exemplo de saída: `/usr/bin/node`

2. Edite o `crontab`:
```bash
crontab -e
```

3. Adicione a linha para executar o script periodicamente (exemplo: a cada 5 minutos):
```bash
*/5 * * * * /usr/bin/node /caminho/do/seu/projeto/mixer.js >> /caminho/do/seu/projeto/mixer.log 2>&1
```

4. Salve e saia do editor.

5. Verifique se o cron está ativo:
```bash
sudo systemctl status cron
```

---

## ✅ Dica Extra
Se quiser, você pode criar um arquivo shell `run_mixer.sh` para facilitar a execução:
```bash
#!/bin/bash
/usr/bin/node /caminho/do/seu/projeto/mixer.js >> /caminho/do/seu/projeto/mixer.log 2>&1
```
E adicionar o cron apontando para o script:
```bash
*/5 * * * * /caminho/do/seu/projeto/run_mixer.sh
```

---

## 📞 Suporte
Em caso de dúvidas ou sugestões, abra uma issue.

