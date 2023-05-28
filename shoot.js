AFRAME.registerComponent("paintball", {
    init: function () {
      this.shootPaintBalls();
},
    shootPaintBalls: function () {
        window.addEventListener("keydown", (e) => {
          if (e.key === "z") {
            var paintball = document.createElement("a-entity");
    
            paintball.setAttribute("geometry", {
              primitive: "sphere",
              radius: 0.1,
            });
            var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);
        paintball.setAttribute("velocity", direction.multiplyScalar(-10));

        var scene = document.querySelector("#scene");
        paintball.addEventListener("collide", this.removepaintball);

        scene.appendChild(paintball);
        ) 






    
