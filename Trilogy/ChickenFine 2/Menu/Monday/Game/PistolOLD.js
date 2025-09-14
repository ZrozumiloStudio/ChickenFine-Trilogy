		function shoot() {
            var newImages = document.getElementById("gun");
            newImages.src = "images/gunshoot.png";
			
			var newImages2 = document.getElementById("gun");
			setInterval(function() {
                newImages2.src = "images/gun.png";
            }, 590);
            
			//playSound();
            player.x -= player.speed * Math.cos(player.direction);
            player.y -= player.speed * Math.sin(player.direction);
            player.x -= player.speed * Math.cos(player.direction);
            player.y -= player.speed * Math.sin(player.direction);
			PistolSound();
			CrushWall();

            var newImage2 = document.getElementById("gun");
            setInterval(function() {
              newImage2.src = document.getElementById("gun").src;
            }, 1000);
         };