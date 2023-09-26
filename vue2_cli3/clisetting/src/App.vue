<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import("./assets/css/reset.css");
export default{
  name: 'App',
  beforeCreate() {
    const isChrome = !!window.chrome && !!window.chrome.webstore,
        isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
        isFirefox = typeof InstallTrigger !== 'undefined',
        // isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)),
        // isIE = /*@cc_on!@*/false || !!document.documentMode,
        isIE = /*@cc_on!@*/!!document.documentMode,
        isEdge = !isIE && !!window.StyleMedia,
        isBlink = (isChrome || isOpera) && !!window.CSS;

    if (isChrome) {
      document.querySelector('html').classList.add('chrome');
    } else if (isOpera) {
      document.querySelector('opera').classList.add('opera');
    } else if (isIE) {
      document.querySelector('html').classList.add('ie');
    } else if (isEdge) {
      document.querySelector('html').classList.add('edge');
    } else if (isFirefox) {
      document.querySelector('html').classList.add('firefox');
    } else if (isBlink) {
      document.querySelector('html').classList.add('blink');
    }
  }

  
}
</script>
<style>

</style>
