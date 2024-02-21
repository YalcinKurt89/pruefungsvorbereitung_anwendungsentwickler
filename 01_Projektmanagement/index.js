function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");


        ctx.beginPath();
        ctx.moveTo(300, 200);
        ctx.lineTo(100, 200);
        ctx.lineTo(200, 100);
        // ctx.fillStyle = "green";
        // ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(140, 210);
        ctx.lineTo(140, 240);
        ctx.lineTo(0, 240);
        ctx.lineTo(0, 210);
        ctx.lineTo(140, 210);
        ctx.closePath();
        ctx.font = "25px arial";
        ctx.fillText("Zeit", 50, 235);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(400, 210);
        ctx.lineTo(400, 240);
        ctx.lineTo(260, 240);
        ctx.lineTo(260, 210);
        ctx.lineTo(400, 210);
        ctx.closePath();
        ctx.font = "25px arial";
        ctx.fillText("Kosten", 292, 235);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(270, 60);
        ctx.lineTo(270, 90);
        ctx.lineTo(130, 90);
        ctx.lineTo(130, 60);
        ctx.lineTo(270, 60);
        ctx.closePath();
        ctx.font = "25px arial";
        ctx.fillText("Leistung", 152, 83);
        ctx.stroke();

    }
  }
  
  draw();