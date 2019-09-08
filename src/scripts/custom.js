(function(){
	"use strict";
	//====================
	var theCanvas = document.getElementById("codefloat");
	var context = theCanvas.getContext("2d");
	var codeFloatArray = new Array();

	// Setting up rAF. Thank you Paul Irish.
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame	|| 
		window.webkitRequestAnimationFrame		|| 
		window.mozRequestAnimationFrame			|| 
		window.oRequestAnimationFrame			|| 
		window.msRequestAnimationFrame			|| 
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
	})();


		var codeSprite = new Image();
		codeSprite.addEventListener('load', eventSpriteLoaded , false);
		codeSprite.src="src/images/bg_codeSprite.png";
		
		
		function eventSpriteLoaded() {
				// Initial function calls.
				initCodeFloaters();
				animloop(); // Kicking off the RaF. It will self-call after this.
		}

	// ====================
	// FUNCTIONS
	// ====================


	function animloop(){
		requestAnimFrame(animloop);
		//if ( canvasParent.is(':visible') ) {
			drawCanvas();
			//console.log('animloop(): Doing the loop.');
		//} //else{
			//console.log('animloop(): Stopping the loop.');
		//}
	}


	function drawCanvas() {
		// Clear Canvas. Or in this case, add a gradient.
		//context.fillStyle = "#ffffff";
		//context.fillRect(0,0,theCanvas.width,theCanvas.height);
		context.clearRect(0, 0, theCanvas.width, theCanvas.height);
		renderCodeFloaters();
	}// end of drawCanvas()
		
		
		function initCodeFloaters() {
			// I wanted to control the distance and speed of the items, so I'm not automating where they start.
			var
				html5Name1 = new CodeFloater( { x:theCanvas.width, y:7, spriteX:0, spriteY:0, width:450, height:91, speed:0.16, alpha:0.13 } ),
				html5Name2 = new CodeFloater( { x:( theCanvas.width/2 - html5Name1.width/2 ), y:html5Name1.y, spriteX:0, spriteY:0, width:450, height:91, speed:html5Name1.speed, alpha:html5Name1.alpha } ),
				
				jsName1 = new CodeFloater( { x:-300, y:-2, spriteX:450, spriteY:0, width:410, height:52, speed:.35, alpha:0.19 } ),
				jsName2 = new CodeFloater( { x:( (theCanvas.width/2 - jsName1.width/2) + 150), y:jsName1.y, spriteX:450, spriteY:0, width:409, height:52, speed:jsName1.speed, alpha:jsName1.alpha } ),

				phpName1 = new CodeFloater( { x:30, y:77, spriteX:450, spriteY:52, width:118, height:40, speed:-0.23, alpha:0.18 } ),
				phpName2 = new CodeFloater( { x:( phpName1.x + phpName1.width + 300 ), y:phpName1.y, spriteX:450, spriteY:52, width:118, height:40, speed:phpName1.speed, alpha:phpName1.alpha } ),
				phpName3 = new CodeFloater( { x:( phpName2.x + phpName2.width + 300 ), y:phpName1.y, spriteX:450, spriteY:52, width:118, height:40, speed:phpName1.speed, alpha:phpName1.alpha } ),
				
				canvasName1 = new CodeFloater( { x:-67, y:45, spriteX:573, spriteY:52, width:267, height:30, speed:0.8, alpha:0.22 } ),
				canvasName2 = new CodeFloater( { x:( canvasName1.x + canvasName1.width + 477 ), y:canvasName1.y, spriteX:573, spriteY:52, width:267, height:30, speed:canvasName1.speed, alpha:canvasName1.alpha} ),


				html5Code1 = new CodeFloater( { x:-500, y:-3, spriteX:0, spriteY:91, width:900, height:26, speed:-0.67, alpha:0.13 } ),
				html5Code2 = new CodeFloater( { x:( html5Code1.x + html5Code1.width + 135 ), y:html5Code1.y, spriteX:0, spriteY:91, width:900, height:26, speed:html5Code1.speed, alpha:html5Code1.alpha } ),
				
				jsCode1 = new CodeFloater( { x:45, y:35, spriteX:0, spriteY:141, width:952, height:26, speed:0.64, alpha:0.10 } ),
				jsCode2 = new CodeFloater( { x:( jsCode1.x + jsCode1.width + 109 ), y:jsCode1.y, spriteX:0, spriteY:141, width:952, height:26, speed:jsCode1.speed, alpha:jsCode1.alpha} ),

				jsCode3 = new CodeFloater( { x:-200, y:50, spriteX:0, spriteY:141, width:952, height:26, speed:-0.96, alpha:0.16 } ),
				jsCode4 = new CodeFloater( { x:( jsCode3.x + jsCode3.width + 109 ), y:jsCode3.y, spriteX:0, spriteY:141, width:952, height:26, speed:jsCode3.speed, alpha:jsCode3.alpha} ),
				
				phpCode1 = new CodeFloater( { x:-475, y:22, spriteX:0, spriteY:116, width:423, height:25, speed:-0.62, alpha:0.13 } ),
				phpCode2 = new CodeFloater( { x:( phpCode1.x + phpCode1.width + 108 ), y:phpCode1.y, spriteX:0, spriteY:116, width:423, height:25, speed:phpCode1.speed, alpha:phpCode1.alpha } ),

				phpCode3 = new CodeFloater( { x:10, y:86, spriteX:0, spriteY:116, width:423, height:25, speed:0.62, alpha:0.14 } ),
				phpCode4 = new CodeFloater( { x:( phpCode3.x + phpCode3.width + 108 ), y:phpCode3.y, spriteX:0, spriteY:116, width:423, height:25, speed:phpCode3.speed, alpha:phpCode3.alpha } ),

				jQCode1 = new CodeFloater( { x:-320, y:2, spriteX:450, spriteY:116, width:530, height:25, speed:0.82, alpha:0.12 } ),
				jQCode2 = new CodeFloater( { x:( jQCode1.x + jQCode1.width + 108 ), y:jQCode1.y, spriteX:450, spriteY:116, width:530, height:25, speed:jQCode1.speed, alpha:jQCode1.alpha } ),
				
				jQCode3 = new CodeFloater( { x:-10, y:55, spriteX:450, spriteY:116, width:530, height:25, speed:-0.63, alpha:0.10 } ),
				jQCode4 = new CodeFloater( { x:( jQCode3.x + jQCode3.width + 108 ), y:jQCode3.y, spriteX:450, spriteY:116, width:530, height:25, speed:jQCode3.speed, alpha:jQCode3.alpha } ),

				loremCode1 = new CodeFloater( { x:(theCanvas.width*.8), y:23, spriteX:0, spriteY:192, width:653, height:26, speed:.56, alpha:0.10 } ),
				loremCode2 = new CodeFloater( { x:( loremCode1.x + loremCode1.width + 258.5 ), y:loremCode1.y, spriteX:0, spriteY:192, width:653, height:26, speed:loremCode1.speed, alpha:loremCode1.alpha } ),

				loremCode3 = new CodeFloater( { x:(theCanvas.width*.2), y:96, spriteX:0, spriteY:192, width:653, height:26, speed:-.67, alpha:0.14 } ),
				loremCode4 = new CodeFloater( { x:( loremCode3.x + loremCode3.width + 258.5 ), y:loremCode3.y, spriteX:0, spriteY:192, width:653, height:26, speed:loremCode3.speed, alpha:loremCode3.alpha } ),


				htmlCode1 = new CodeFloater( { x:-100, y:72, spriteX:0, spriteY:166, width:925, height:26, speed:-0.62, alpha:0.09 } ),
				htmlCode2 = new CodeFloater( { x:( htmlCode1.x + htmlCode1.width + 108 ), y:htmlCode1.y, spriteX:0, spriteY:166, width:957, height:26, speed:htmlCode1.speed, alpha:htmlCode1.alpha } )

				;
		
				codeFloatArray.push(
						html5Name1, html5Name2,
						jsName1, jsName2,
						phpName1, phpName2, phpName3, 
						canvasName1, canvasName2,
						html5Code1, html5Code2,
						jsCode1, jsCode2, jsCode3, jsCode4,
						phpCode1, phpCode2, phpCode3, phpCode4,
						jQCode1, jQCode2, jQCode3, jQCode4,
						loremCode1, loremCode2, loremCode3, loremCode4,
						htmlCode1, htmlCode2
				);
		}// end of initCodeFloaters()
	function renderCodeFloaters() {
		for (var i = 0; i< codeFloatArray.length; i++) {
			codeFloatArray[i].drawSelf();
		}
	}

	// ===========================================================
	function CodeFloater(settings) { // Bouncer Class
				this.x = settings.x;
				this.y = settings.y;
				this.spriteX = settings.spriteX;
				this.spriteY = settings.spriteY;
				this.width = settings.width;
				this.height = settings.height;
				
		this.speed = settings.speed;
		this.alpha = settings.alpha;
		this.difference = 0;
		
		CodeFloater.prototype.drawSelf = function () {
			
			this.updatePosition();
			context.save();
			context.globalAlpha = this.alpha;
						//context.drawImage(codeSprite, sx, sy, sw, sh, dx, dy, dw, dh);
						context.drawImage(codeSprite, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y,  this.width, this.height);
			context.restore();
		};
		CodeFloater.prototype.updatePosition = function () {
			if (this.speed > 0 && this.x + this.speed >= theCanvas.width) {
				this.x -= theCanvas.width + this.width + this.speed;
			}
			else if(this.speed < 0 && this.x + this.speed <= -this.width) {
				this.x += theCanvas.width + this.width + this.speed;
			}
			else {
				this.x += this.speed;
			}
		};
		CodeFloater.prototype.getWidth = function(){
			return this.width;
		};
	} //end of CodeFloater class
	// ===========================================================
}());