
  var buttonpriorities = {
    priority_primary: "primary",
    priority_secondary: "secondary",
    priority_tertiary: "tertiary"
  };
  
  var buttonicons = {
    icon_none: "i-none",
    icon_left: "i-left",
    icon_right: "i-right",
    icon_only: "i-only"
  };
  
  var buttonstates = {
    state_inactive: "inactive",
    state_active: "active",
    state_hover: "hover",
    state_focused: "focused",
    state_selected: "selected",
    state_disabled: "disabled"
  };
  
  var platforms = {
    platform_ios: "ios",
    platform_android: "android",
    platform_web: "web",
  };
  
  var count = 0;
  
  var allThePrimaryButts = [];
  
  var allTheButts = [];
  var allTheStates = [];
  var allTheIcons = [];
  var allThePriorities = [];
  var allTheStyles = [];
  var allThePlatforms = [];
  
  /*
  the ...Names are for stripping out the underscores
  */
  var allTheStatesNames = [];
  var allTheIconsNames = [];
  var allThePrioritiesNames = [];
  var allThePlatformsNames = [];
  
  var newNode = document.createElement("div");
  
  /*Create all the buttons*/
  
  for (var platform in platforms) {
    if (platforms.hasOwnProperty(platform)) {
      for (var state in buttonstates) {
        if (buttonstates.hasOwnProperty(state)) {
          for (var icon in buttonicons) {
            if (buttonicons.hasOwnProperty(icon)) {
              for (var priority in buttonpriorities) {
                if (buttonpriorities.hasOwnProperty(priority)) {
                 
                    allTheButts.push(
                      '<button class="' +
                        state +
                        " " +
                        icon +
                        " " +
                        platform +
                        " " +
                        priority +
                        ' btn">' +
                        '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="GP-DS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Desktop-HD-Copy" transform="translate(-536.000000, -655.000000)" fill="#000000">\n            <path d="M536,665 C536,670.52 540.47,675 545.99,675 C551.52,675 556,670.52 556,665 C556,659.48 551.52,655 545.99,655 C540.47,655 536,659.48 536,665 Z M538,665 C538,660.58 541.58,657 546,657 C550.42,657 554,660.58 554,665 C554,669.42 550.42,673 546,673 C541.58,673 538,669.42 538,665 Z M545,663 L545,670 L547,670 L547,663 L545,663 Z M545,660 L545,662 L547,662 L547,660 L545,660 Z" id="Shape"></path>\n        </g>\n    </g>\n</svg>' +
                        "</button>"
                    );
                  
  
                  allTheStates.push(state);
  
                  allTheIcons.push(icon);
  
                  allThePriorities.push(priority);
  
                  allThePlatforms.push(platform);
                }
              }
            }
          }
        }
  }
  }
  }
  
  for (var i = 0; i < allTheStates.length; i++) {
    allTheStatesNames.push(allTheStates[i].replace("_", "</b> : "));
  }

  for (var i = 0; i < allTheIcons.length; i++) {
    allTheIconsNames.push(allTheIcons[i].replace("_", "</b> : "));
  }
  
  for (var i = 0; i < allThePriorities.length; i++) {
    allThePrioritiesNames.push(allThePriorities[i].replace("_", "</b> : "));
  }
  
  for (var i = 0; i < allThePlatforms.length; i++) {
    allThePlatformsNames.push(allThePlatforms[i].replace("_", "</b> : "));
  }
  
  for (var i = 0; i < allTheButts.length; i++) {
    //console.log(window.allTheButts[i].getPropertyValue("font-size"));
    elem.innerHTML +=
      "<tr><td>" +
      "<b>" +

      " <br /> " +
      "</td><td>" +
      "<b>" +
      allThePrioritiesNames[i] +
      " <br /> " +
      "</td><td>" +
      "<b>" +
      allTheIconsNames[i] +
      " <br />" +
      "</td><td>" +
      "<b>" +
      allTheStatesNames[i] +
      "</td><td>" +
      allTheButts[i] +
      "</td></tr>"+
      allThePlatforms[i] +
      "</td></tr>";
  }
  
  for (var i = 0; i < allThePrimaryButts.length; i++) {
    primaryButts.innerHTML += allThePrimaryButts[i];
  }
  
  for (var i = 0; i < butthole.length; i++) {
    if (butthole[i].classList.contains("state_disabled")) {
      butthole[i].classList.add("sorryasshole");
      butthole[i].disabled = true;
    }
  }
  