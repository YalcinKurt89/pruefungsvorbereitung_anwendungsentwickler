function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      // Stroked triangle
      ctx.beginPath();
      ctx.moveTo(300, 200);
      ctx.lineTo(100, 200);
      ctx.lineTo(200, 100);
      ctx.fillStyle = "green";
      ctx.strokeStyle = "green";
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
      ctx.fillText("Kosten", 295, 235);
      ctx.stroke();

    }
  }
  
  draw();