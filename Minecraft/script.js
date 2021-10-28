// hides the Crafting stuff on load

function hideCrafts() {
  document.getElementById("crafting").style.display = "none";
  document.getElementById("carfting").style.display = "none";
  document.getElementById("adv_crafting").style.display = "none";
  document.getElementById("pro_crafting").style.display = "none";
}

function hideMines() {
  document.getElementById("mining").style.display = "none";
}

function hideSmelts() {
  document.getElementById("craft_furnace").style.display = "none";
  document.getElementById("iron").style.display = "none";
}

// The dirt achievement stuff
function showAchievement() {
  var achievementElement = document.getElementById("dirt_achievement");

  achievementElement.classList.remove("hide", "fade-out");

  achievementElement.classList.add("fade-in");
}

function hideAchievement() {
  var achievementElement = document.getElementById("dirt_achievement");
  achievementElement.classList.add("fade-out");
  achievementElement.classList.remove("fade-in");
  setTimeout(function () {
    achievementElement.classList.add("hide");
  }, 5000); // Note that this interval matches the timing of CSS animation
}

// end dirt achievement

function showTreeAchievement() {
  var achievementElement = document.getElementById("tree_achievement");

  achievementElement.classList.remove("hide", "fade-out");

  achievementElement.classList.add("fade-in");
}

function hideTreeAchievement() {
  var achievementElement = document.getElementById("tree_achievement");
  achievementElement.classList.add("fade-out");
  achievementElement.classList.remove("fade-in");
  setTimeout(function () {
    achievementElement.classList.add("hide");
  }, 5000); // Note that this interval matches the timing of CSS animation
}

function showCutTreeAchievement() {
  var achievementElement = document.getElementById("cut_tree_achievement");

  achievementElement.classList.remove("hide", "fade-out");

  achievementElement.classList.add("fade-in");
}

function hideCutTreeAchievement() {
  var achievementElement = document.getElementById("cut_tree_achievement");
  achievementElement.classList.add("fade-out");
  achievementElement.classList.remove("fade-in");
  setTimeout(function () {
    achievementElement.classList.add("hide");
  }, 5000); // Note that this interval matches the timing of CSS animation
}

// Durability for pickaxe
var colval = 0;
var R = 0;
var G = 0;
var B = 0;

function check() {
  color = document.getElementById("Durability");
  x = color.value;
  if (best_pick == "wood") {
    if (x > 30) {
      R = Math.round(-0.14651 * x ** 2 + 4.32203 * x + 255);
      if (R == 0) {
        R = "00";
      }
      G = 255;
    } else if (x < 28) {
      R = 255;
      G = Math.round(-0.14651 * x ** 2 + 12.9661 * x + 0);
      if (G == 0) {
        G = "00";
      }
    } else {
      R = 255;
      G = 255;
    }
  } else if (best_pick == "stone") {
    if (x > 67) {
      R = Math.round(-0.02927 * x ** 2 + 1.93182 * x + 255);
      if (R == 0) {
        R = "00";
      }
      G = 255;
    } else if (x < 65) {
      R = 255;
      G = Math.round(-0.02927 * x ** 2 + 5.79545 * x + 0);
      if (G == 0) {
        G = "00";
      }
    } else {
      R = 255;
      G = 255;
    }
  }

  B = 0;

  colval = "#" + R.toString(16) + G.toString(16) + "00";
  Durability.style.background = colval;
  if (document.getElementById("Durability").value <= 0) {
    document.getElementById("Durability").value = 0;
    h = h - 1;
    document.getElementById("woodPick").value = 0;
  }
}

// This script section is about the Forestry and Basic Crafting sections.

var i = 0;
var dirt = 0;
function getDirt() {
  document.getElementById("dirts").value = ++i;
  if (dirt == 0) {
    showAchievement();
    hideAchievement();
    dirt = 1;
  }
  document.getElementById("dirt").disabled = true;
  setTimeout(function () {
    document.getElementById("dirt").disabled = false;
  }, 750);
}

var a = 0;
function getGrass() {
  if (document.getElementById("dirts").value > 0) {
    document.getElementById("dirts").value = --i;
    document.getElementById("grasses").value = ++a;
  }
}

var b = 0;
var tree = 0;
function growTree() {
  if (document.getElementById("grasses").value > 0) {
    if (tree == 0) {
      showTreeAchievement();
      hideTreeAchievement();
      tree = 1;
    }
    document.getElementById("grasses").value = --a;
    document.getElementById("trees").value = ++b;
    document.getElementById("tree").disabled = true;
    setTimeout(function () {
      document.getElementById("tree").disabled = false;
    }, 15000);
  }
}
var c = 0; // Logs that player has
var cut = 0;
var carfting_show = 0; // Checks whether or not Planks are shown
function cutTree() {
  if (document.getElementById("trees").value > 0) {
    if (cut == 0) {
      showCutTreeAchievement();
      hideCutTreeAchievement();
      cut = 1;
    }
    if (carfting_show == 0) {
      document.getElementById("carfting").style.display = "block";
      carfting_show = 1;
    }
    c = c + 5;
    document.getElementById("logs").value = c;
    document.getElementById("trees").value = --b;
    document.getElementById("cutTree").disabled = true;
    setTimeout(function () {
      document.getElementById("cutTree").disabled = false;
    }, 10000);
  }
}

var d = 0; // Amount of Planks player has
var crafting_show = 0; // Checks whether or not Crafting Table recipe is shown
function craftPlanks() {
  if (document.getElementById("logs").value > 0) {
    if (crafting_show == 0) {
      document.getElementById("crafting").style.display = "block";
      crafting_show = 1;
    }
    d = d + 4;
    c = c - 1;
    document.getElementById("planks").value = d;
    document.getElementById("logs").value = c;
  }
}

var e = 0; // tables not place
var adv_crafting_show = 0;
function craftTable() {
  if (document.getElementById("planks").value > 3) {
    if (adv_crafting_show == 0) {
      document.getElementById("adv_crafting").style.display = "block";
      adv_crafting_show = 1;
    }
    e = e + 1;
    d = d - 4;
    document.getElementById("tables").value = e;
    document.getElementById("planks").value = d;
  }
}

var f = 0; // tables place
var pro_crafting_show = 0;
function placeTable() {
  if (document.getElementById("tables").value > 0) {
    if (pro_crafting_show == 0) {
      document.getElementById("pro_crafting").style.display = "block";
      pro_crafting_show = 1;
    }
    f = f + 1;
    e = e - 1;
    document.getElementById("Placedtables").value = f;
    document.getElementById("tables").value = e;
  }
}

var g = 0; // Sticks
function makeSticks() {
  if (document.getElementById("planks").value > 1) {
    g = g + 4;
    d = d - 2;
    document.getElementById("planks").value = d;
    document.getElementById("sticks").value = g;
  }
}
var best_pick = "none";
var mining_show = 0;
var h = 0;
function makeStonePick() {
  if (document.getElementById("stone").value >= 3) {
    if (document.getElementById("sticks").value >= 2) {
      if (document.getElementById("woodPick").value == 0) {
        g = g - 2;
        document.getElementById("stone").value =
          document.getElementById("stone").value - 3;
        h = h + 1;
        best_pick = "stone";
        document.getElementById("sticks").value = g;
        document.getElementById("woodPick").value = h;
        document.getElementById("Durability").value = 132; // actual durability: 59
        check();
      }
    }
  }
}

function makeWoodPick() {
  if (document.getElementById("planks").value >= 3) {
    if (document.getElementById("sticks").value >= 2) {
      if (document.getElementById("woodPick").value == 0) {
        if (mining_show == 0) {
          mining_show = 1;
          document.getElementById("mining").style.display = "block";
        }
        g = g - 2;
        d = d - 3;
        h = h + 1;
        best_pick = "wood";
        document.getElementById("planks").value = d;
        document.getElementById("sticks").value = g;
        document.getElementById("woodPick").value = h;
        document.getElementById("Durability").value = 59; // actual durability: 59
        check();
      }
    }
  }
}

// Mining stuff

var mine = 0;

var stone_pick = 0;

var stone = 0;
var coal = 0;
var iron_ore = 0;
var gold_ore = 0;
var redstone = 0;
var lapis = 0;
var diamond = 0;
var emerald = 0;

var furnace = 0;
var furnaces = 0;
var furnaces_available = 0;

function mineBlock() {
  // Iron is 7700, Coal is 38400, Redstone is 2500 * 5, Gold is 750, Diamond is 370, Lapis is 343 * 6, Emerald is 20, 1229917 other
  mine = Math.floor(Math.random() * 1280000) + 1;

  if (document.getElementById("Durability").value > 0) {
    if (mine <= 20 && mine >= 0) {
      if (best_pick != "wood" && best_pick != "stone") {
        emerald = emerald + 1;
      } else {
        stone = stone + 1;
        document.getElementById("stone").value = stone;
      }
    } else if (mine <= 21 && mine <= 363) {
      if (best_pick != "wood") {
        lapis = lapis + Math.floor(Math.random() * 5) + 1; // lapis + 4 to 8
      } else {
        stone = stone + 1;
        document.getElementById("stone").value = stone;
      }
    } else if (mine <= 364 && mine <= 733) {
      if (best_pick != "wood" && best_pick != "stone") {
        diamond = diamond + 1;
      } else {
        stone = stone + 1;
        document.getElementById("stone").value = stone;
      }
    } else if (mine <= 734 && mine <= 1483) {
      if (best_pick != "wood" && best_pick != "stone") {
        gold_ore = gold_ore + 1;
      } else {
        stone = stone + 1;
        document.getElementById("stone").value = stone;
      }
    } else if (mine <= 1484 && mine <= 3983) {
      if (best_pick != "wood" && best_pick != "stone") {
        redstone = redstone + Math.floor(Math.random() * 2) + 1; // redstone + 4 to 5
      } else {
        stone = stone + 1;
        document.getElementById("stone").value = stone;
      }
    } else if (mine <= 3984 && mine <= 11683) {
      if (best_pick != "wood") {
        iron_ore = iron_ore + 1;
        document.getElementById("iron_ore").value = iron_ore;
      } else {
        stone = stone + 1;
        document.getElementById("stone").value = stone;
      }
    } else if (mine <= 11684 && mine <= 50083) {
      coal = coal + 1;
      document.getElementById("coal").value = coal;
    } else {
      stone = stone + 1;
      document.getElementById("stone").value = stone;
    }
    document.getElementById("Durability").value =
      document.getElementById("Durability").value - 1;
    check();

    if (stone_pick == 0 && stone >= 3) {
      stone_pick = 1;
      document.getElementById("makeWoodPick").innerHTML =
        "Craft Stone Pickaxe - Cost: 2 Sticks, 3 Cobblestone";
      document.getElementById("pick").innerHTML = "Stone";
      document.getElementById("makeWoodPick").onclick = makeStonePick;
    }
    if (furnace == 0 && stone >= 8 && coal >= 1 && iron_ore >= 1) {
      furnace = 1;
      document.getElementById("craft_furnace").style.display = "block";
    }
  }
}
