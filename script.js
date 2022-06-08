		function dropDown() {
			var menu = document.getElementById("topNav");
			var icon = document.getElementById("icon");
			var header = document.querySelector(".header-content");
			if (menu.className === "menu") {
				menu.className += " responsive";
				icon.className = "fas fa-times";
				header.style.minHeight = '100vh';
			} else {
				menu.className = "menu";
				header.style.minHeight = null;
				icon.className = "fas fa-bars";
			}
		}