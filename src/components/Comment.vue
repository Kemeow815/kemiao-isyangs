<script setup lang="ts">
const cdnScript: HTMLScriptElement = document.createElement('script')
cdnScript.src = 'https://source.kemiaofx.top/twikoo/twikoo.all.min.js'
cdnScript.async = true

function loadSecondScript() {
  const initScript = document.createElement('script')
  initScript.innerHTML = `
            twikoo.init({
                envId: "https://twikoo-isyang.314926.xyz",
                el: '#twikoo-comment'
            });
        `
  initScript.id = 'twikoo-init-id'
  document.body.appendChild(initScript)
}

cdnScript.onload = loadSecondScript
document.body.appendChild(cdnScript)

const initScript = document.getElementById('twikoo-init-id')
if (initScript) {
  initScript.remove()
  loadSecondScript()
}
</script>

<template>
  <div class="max-w-65ch m-auto">
    <div id="twikoo-comment" />
  </div>
</template>
