<div>

  <h1>Clone do C6-bank</h1>
  <div align="center">
    <img src=https://img.shields.io/badge/-typescript-blue>
    <img src=https://img.shields.io/github/issues/ThiagoOpaula/C6-bank-clone >
    <img src=https://img.shields.io/github/forks/ThiagoOpaula/C6-bank-clone >
    <img src=https://img.shields.io/github/stars/ThiagoOpaula/C6-bank-clone >
    <img src=https://img.shields.io/github/license/ThiagoOpaula/C6-bank-clone >
  </div>
  
  <div>Aplicativo clone do App do c6-bank, feito totalmente em react native usando typescript, todas animações foram feitas usando o react native Swipeable Panel</div>

  
  
  <div align="center">
    <img src=https://media.giphy.com/media/fvkpC3AtmtnZ6Sr9Mt/giphy.gif>
  </div>
  
  ## ⚙️ Instalação dos pacotes

```
$ yarn
```
Depois é só digitar 
```
$ yarn android
```
para rodar no emulador ou dispositivo fisico android

<h1>React Native Swipeable Panel</h1>

**rn-swipeable-panel** é um painel inferior deslizante e fácil de usar para seus projetos do React Native. Você pode estender o painel deslizando para cima, diminuindo ou fechando deslizando para baixo com gestos de panorâmica. Sinta-se livre para redesenhar dentro do painel.

[![npm version](https://img.shields.io/npm/v/rn-swipeable-panel.svg)](https://www.npmjs.com/package/rn-swipeable-panel)

</div>

<br/>

<div align="center" style="margin-bottom:1em">
    <img src="https://user-images.githubusercontent.com/19428358/82732219-913fb680-9d14-11ea-8128-55b20b0f7d1c.gif" width="auto" height="600"/>
</div>

<br/>

## ⚙️ Instalação

```
$ yarn add rn-swipeable-panel
```

<!-- ## Usage -->

## 🚀 Como usar

```javascript
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SwipeablePanel from "rn-swipeable-panel";

export default App = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <PanelContent /> {/* Your Content Here */}
      </SwipeablePanel>
    </View>
  );
};
```

