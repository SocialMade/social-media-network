
export const acquireYouTubeAction = (command, iframeId, args) => {
  const objmess = {
    "event": "command",
    "func": command,
    "args": args || {}
  };

  const message = JSON.stringify(objmess);

  if (iframeId && iframeId.length > 0) {
    const player = new window.YT.Player(iframeId);
    player.getIframe().contentWindow.postMessage(message, "*");
  }

  return message;
}

export const YTAction = (iframeId) => {

  if (!iframeId || iframeId.length === 0) {
    return null;
  }

  const command = (command, args) => {
    const objmess = {
      "event": "command",
      "func": command,
      "args": args || {}
    };
    return JSON.stringify(objmess);
  };

  const oPlayer = new window.YT.Player(iframeId);

  return ({
    Command: command,
    Play: () => {
      if (oPlayer) {
        oPlayer.getIframe().contentWindow.postMessage(command("playVideo"), "*");
      }
    },
    Stop: () => {
      if (oPlayer) {
        oPlayer.getIframe().contentWindow.postMessage(command("stopVideo"), "*");
      }
    },
    Pause: () => {
      if (oPlayer) {
        oPlayer.getIframe().contentWindow.postMessage(command("pauseVideo"), "*");
      }
    },
    Destroy: () => {
      if (oPlayer) {
        oPlayer.getIframe().contentWindow.postMessage(command("destroy"), "*");
      }
    },
    Mute: () => {
      if (oPlayer) {
        oPlayer.getIframe().contentWindow.postMessage(command("mute"), "*");
      }
    },
    UnMute: () => {
      if (oPlayer) {
        oPlayer.getIframe().contentWindow.postMessage(command("unMute"), "*");
      }
    },
    getState: () => {
      if (oPlayer) {
        const state = oPlayer.getIframe().contentWindow.postMessage(command("getPlayerState"), "*");
        return state;
      }
    }
  });
}