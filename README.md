<div align="center">

<h1>React Native Swipeable Panel</h1>

**rn-swipeable-panel** is a swipeable, easy to use bottom panel for your React Native projects. You can extend panel by swiping up, make it small or close by swiping down with pan gestures. Feel free to redesign inside of the panel.

[![npm version](https://img.shields.io/npm/v/rn-swipeable-panel.svg)](https://www.npmjs.com/package/rn-swipeable-panel)

</div>

<br/>

<div align="center" style="margin-bottom:1em">
    <img src="https://user-images.githubusercontent.com/19428358/82732219-913fb680-9d14-11ea-8128-55b20b0f7d1c.gif" width="auto" height="600"/>
</div>

<br/>

## ⚙️ Installation

```
$ yarn add rn-swipeable-panel
```

<!-- ## Usage -->

## 🚀 How to use

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

