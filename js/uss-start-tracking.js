//Created by Nafis on 7/27/2021

AFRAME.registerComponent('start-tracking', {
    init: function () {
        const container = document.getElementById('container')
        container.style.backgroundImage = "url('https://techcoreassets.blob.core.windows.net/images/stabilization.gif')"

        setTimeout(() => {
            const uss = document.createElement('a-entity')
            uss.id = 'model'
            uss.setAttribute('gltf-model', '#3dmodel')
            this.el.sceneEl.appendChild(uss)
            uss.setAttribute('position', '0 0 0')
            uss.setAttribute('rotation', '0 -90 0')
            uss.setAttribute('scale', '1 1 1')
            uss.setAttribute('visible', 'true')
            container.style.backgroundImage = "none"
        }, 10000)
    }
})