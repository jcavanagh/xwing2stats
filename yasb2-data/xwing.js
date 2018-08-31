var exportObj,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

exportObj = typeof exports !== "undefined" && exports !== null ? exports : this;

exportObj.unreleasedExpansions = [];

exportObj.isReleased = function(data) {
  var source, _i, _len, _ref;
  _ref = data.sources;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (__indexOf.call(exportObj.unreleasedExpansions, source) < 0) {
      return true;
    }
  }
  return false;
};

String.prototype.canonicalize = function() {
  return this.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/\s+/g, '-');
};

exportObj.hugeOnly = function(ship) {
  var _ref;
  return (_ref = ship.data.huge) != null ? _ref : false;
};

exportObj.basicCardData = function() {
  return {
    ships: {
      "X-Wing": {
        name: "X-Wing",
        xws: "T-65 X-Wing".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 2,
        hull: 4,
        shields: 2,
        actions: ["Focus", "Lock", "Barrel Roll"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Y-Wing": {
        name: "Y-Wing",
        xws: "BTL-A4 Y-Wing".canonicalize(),
        factions: ["Rebel Alliance", "Scum and Villainy"],
        attack: 2,
        agility: 1,
        hull: 6,
        shields: 2,
        actions: ["Focus", "Lock"],
        actionsred: ["Barrel Roll", "Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [1, 1, 2, 1, 1, 0], [3, 1, 1, 1, 3, 0], [0, 0, 3, 0, 0, 3]]
      },
      "A-Wing": {
        name: "A-Wing",
        xws: "RZ-1 A-Wing".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 2,
        agility: 3,
        hull: 2,
        shields: 2,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "Boost"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0], [1, 1, 2, 1, 1, 0, 3, 3], [0, 0, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0]]
      },
      "YT-1300": {
        name: "YT-1300",
        xws: "Modified YT-1300 Light Freighter".canonicalize(),
        factions: ["Rebel Alliance"],
        attackdt: 3,
        agility: 1,
        hull: 8,
        shields: 5,
        actions: ["Focus", "Lock", "Rotate Arc"],
        actionsred: ["Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0], [1, 1, 2, 1, 1, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0]],
        large: true
      },
      "YT-1300 (Scum)": {
        name: "YT-1300 (Scum)",
        canonical_name: 'YT-1300'.canonicalize(),
        xws: "Customized YT-1300 Light Freighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attackdt: 2,
        agility: 1,
        hull: 8,
        shields: 3,
        actions: ["Focus", "Lock", "Rotate Arc"],
        actionsred: ["Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0], [1, 1, 2, 1, 1, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0]],
        large: true
      },
      "TIE Fighter": {
        name: "TIE Fighter",
        xws: "TIE/LN Fighter".canonicalize(),
        factions: ["Rebel Alliance", "Galactic Empire"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 0,
        actions: ["Focus", "Barrel Roll", "Evade"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 3], [0, 0, 1, 0, 0, 3], [0, 0, 1, 0, 0, 0]]
      },
      "TIE Advanced": {
        name: "TIE Advanced",
        xws: "TIE Advanced X1".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 2,
        actions: ["Focus", "R> Barrel Roll", "Lock", "Barrel Roll"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE Interceptor": {
        name: "TIE Interceptor",
        xws: "TIE Interceptor".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 0,
        actions: ["Focus", "Barrel Roll", "Boost", "Evade"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0], [1, 1, 2, 1, 1, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0]]
      },
      "Firespray-31": {
        name: "Firespray-31",
        xws: "Firespray-Class Patrol Craft".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        attackb: 3,
        agility: 2,
        hull: 6,
        shields: 4,
        actions: ["Focus", "Lock", "Boost"],
        actionsred: ["Reinforce"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0, 0, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]],
        medium: true
      },
      "HWK-290": {
        name: "HWK-290",
        xws: "Hwk-290 Light Freighter".canonicalize(),
        factions: ["Rebel Alliance", "Scum and Villainy"],
        attackt: 2,
        agility: 2,
        hull: 3,
        shields: 2,
        actions: ["Focus", "R> Rotate Arc", "Lock", "R> Rotate Arc", "Rotate Arc"],
        actionsred: ["Boost", "Jam"],
        maneuvers: [[0, 0, 3, 0, 0], [0, 2, 2, 2, 0], [1, 1, 2, 1, 1], [3, 1, 1, 1, 3], [0, 0, 1, 0, 0]]
      },
      "Lambda-Class Shuttle": {
        name: "Lambda-Class Shuttle",
        xws: "Lambda-Class T-4a Shuttle".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        attackb: 2,
        agility: 1,
        hull: 6,
        shields: 4,
        actions: ["Focus", "Coordinate", "Reinforce"],
        actionsred: ["Jam"],
        maneuvers: [[0, 0, 3, 0, 0], [0, 2, 2, 2, 0], [3, 1, 2, 1, 3], [0, 3, 1, 3, 0]],
        large: true
      },
      "B-Wing": {
        name: "B-Wing",
        xws: "A/SF-01 B-Wing".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 1,
        hull: 4,
        shields: 4,
        actions: ["Focus", "R> Barrel Roll", "Lock", "Barrel Roll"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 3, 3], [1, 1, 2, 1, 1, 3, 0, 0, 0, 0], [0, 3, 1, 3, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE Bomber": {
        name: "TIE Bomber",
        xws: "TIE/SA Bomber".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 2,
        hull: 6,
        shields: 0,
        actions: ["Focus", "Lock", "Barrel Roll", "R> Lock"],
        actionsred: ["Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 3], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 3]]
      },
      "Z-95 Headhunter": {
        name: "Z-95 Headhunter",
        xws: "Z-95-AF4 Headhunter".canonicalize(),
        factions: ["Rebel Alliance", "Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 2,
        shields: 2,
        actions: ["Focus", "Lock", "Barrel Roll"],
        actionsred: ["Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 1, 1, 1, 3], [0, 0, 1, 0, 0, 3]]
      },
      "TIE Defender": {
        name: "TIE Defender",
        xws: "TIE/D Defender".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 4,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "Boost"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 2, 0, 2, 3, 0], [3, 1, 2, 1, 3, 3], [1, 1, 2, 1, 1, 0], [0, 0, 2, 0, 0, 1], [0, 0, 2, 0, 0, 0]]
      },
      "E-Wing": {
        name: "E-Wing",
        xws: "E-Wing".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 3,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "R> Lock", "Boost", "R> Lock"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0], [1, 1, 2, 1, 1, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0]]
      },
      "TIE Phantom": {
        name: "TIE Phantom",
        xws: "TIE/PH Phantom".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 2,
        hull: 3,
        shields: 2,
        actions: ["Focus", "Evade", "Barrel Roll", "Cloak"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 3], [0, 0, 1, 0, 0, 3]]
      },
      "YT-2400": {
        name: "YT-2400",
        xws: "YT-2400 Light Freighter".canonicalize(),
        factions: ["Rebel Alliance"],
        attackdt: 4,
        agility: 2,
        hull: 6,
        shields: 4,
        actions: ["Focus", "Lock", "Rotate Arc"],
        actionsred: ["Barrel Roll"],
        large: true,
        maneuvers: [[0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 0], [1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 3]]
      },
      "VT-49 Decimator": {
        name: "VT-49 Decimator",
        xws: "VT-49 Decimator".canonicalize(),
        factions: ["Galactic Empire"],
        attackdt: 3,
        agility: 0,
        hull: 12,
        shields: 4,
        actions: ["Focus", "Lock", "Reinforce", "Rotate Arc"],
        actionsred: ["Coordinate"],
        large: true,
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0], [1, 1, 2, 1, 1, 0], [1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0]]
      },
      "StarViper": {
        name: "StarViper",
        xws: "Starviper-class Attack Platform".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 3,
        hull: 4,
        shields: 1,
        actions: ["Focus", "Lock", "Barrel Roll", "R> Focus", "Boost", "R> Focus"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0], [0, 1, 2, 1, 0, 0, 3, 3], [0, 0, 1, 0, 0, 0, 0, 0]]
      },
      "M3-A Interceptor": {
        name: "M3-A Interceptor",
        xws: "M3-A Interceptor".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 1,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0], [1, 2, 0, 2, 1, 0], [1, 1, 2, 1, 1, 0], [0, 1, 2, 1, 0, 3], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 3]]
      },
      "Aggressor": {
        name: "Aggressor",
        xws: "Aggressor Assault Fighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 3,
        hull: 5,
        shields: 3,
        actions: ["Calculate", "Evade", "Lock", "Boost"],
        actionsred: [],
        medium: true,
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0], [0, 2, 2, 2, 0, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0]]
      },
      "YV-666": {
        name: "YV-666",
        xws: "YV-666 Light Freighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attackf: 3,
        agility: 1,
        hull: 9,
        shields: 3,
        large: true,
        actions: ["Focus", "Reinforce", "Lock"],
        actionsred: [],
        maneuvers: [[0, 0, 3, 0, 0, 0], [0, 2, 2, 2, 0, 0], [3, 1, 2, 1, 3, 0], [1, 1, 2, 1, 1, 0], [0, 0, 1, 0, 0, 0]]
      },
      "Kihraxz Fighter": {
        name: "Kihraxz Fighter",
        xws: "Kihraxz Fighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 2,
        hull: 5,
        shields: 1,
        actions: ["Focus", "Lock", "Barrel Roll"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 0, 2, 1, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0, 3, 3], [0, 1, 2, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]]
      },
      "K-Wing": {
        name: "K-Wing",
        xws: "BTL-S8 K-Wing".canonicalize(),
        factions: ["Rebel Alliance"],
        attackdt: 2,
        agility: 1,
        hull: 6,
        shields: 3,
        medium: true,
        actions: ["Focus", "Lock", "Slam", "Rotate Arc", "Reload"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [1, 1, 2, 1, 1, 0], [0, 1, 1, 1, 0, 0]]
      },
      "TIE Punisher": {
        name: "TIE Punisher",
        xws: "TIE/CA Punisher".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 1,
        hull: 6,
        shields: 3,
        medium: true,
        actions: ["Focus", "Lock", "Boost", "R> Lock", "Reload"],
        actionsred: ["Barrel Roll"],
        maneuvers: [[0, 0, 3, 0, 0, 0], [0, 2, 2, 2, 0, 0], [1, 1, 2, 1, 1, 0], [3, 1, 1, 1, 3, 0], [0, 0, 0, 0, 0, 3]]
      },
      "VCX-100": {
        name: "VCX-100",
        xws: "VCX-100 Light Freighter".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 4,
        agility: 0,
        hull: 10,
        shields: 4,
        large: true,
        actions: ["Focus", "Lock", "Reinforce"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 2, 1, 3, 0], [1, 2, 2, 2, 1, 0], [3, 1, 1, 1, 3, 0], [0, 0, 1, 0, 0, 3]]
      },
      "Attack Shuttle": {
        name: "Attack Shuttle",
        xws: "Attack Shuttle".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 2,
        hull: 3,
        shields: 1,
        actions: ["Focus", "Evade", "Barrel Roll", "R> Evade"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0], [1, 1, 2, 1, 1, 0], [3, 1, 1, 1, 3, 0], [0, 0, 1, 0, 0, 3]]
      },
      "TIE Advanced Prototype": {
        name: "TIE Advanced Prototype",
        xws: "TIE Advanced V1".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 3,
        hull: 2,
        shields: 2,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "R> Focus", "Boost", "R> Focus"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 0, 2, 2, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 3, 3], [1, 1, 2, 1, 1, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]]
      },
      "G-1A Starfighter": {
        name: "G-1A Starfighter",
        xws: "G-1A Starfighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 1,
        hull: 5,
        shields: 4,
        medium: true,
        actions: ["Focus", "Lock", "Jam"],
        actionsred: [],
        maneuvers: [[0, 0, 3, 0, 0, 0], [3, 2, 2, 2, 3, 0], [1, 1, 2, 1, 1, 3], [0, 3, 1, 3, 0, 0], [0, 0, 3, 0, 0, 3]]
      },
      "JumpMaster 5000": {
        name: "JumpMaster 5000",
        xws: "JumpMaster 5000".canonicalize(),
        factions: ["Scum and Villainy"],
        large: true,
        attackt: 2,
        agility: 2,
        hull: 6,
        shields: 3,
        actions: ["Focus", "R> Rotate Arc", "Lock", "R> Rotate Arc"],
        actionsred: ["Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 2, 1, 3, 0, 0, 0], [1, 2, 2, 1, 3, 0, 0, 0], [0, 2, 2, 1, 0, 0, 3, 0], [0, 0, 1, 0, 0, 3, 0, 0]]
      },
      "ARC-170": {
        name: "ARC-170",
        xws: "Arc-170 Starfighter".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 3,
        attackb: 2,
        agility: 1,
        hull: 6,
        shields: 3,
        medium: true,
        actions: ["Focus", "Lock"],
        actionsred: ["Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [1, 2, 2, 2, 1, 0], [3, 1, 1, 1, 3, 0], [0, 0, 3, 0, 0, 3]]
      },
      "Fang Fighter": {
        name: "Fang Fighter",
        canonical_name: 'Protectorate Starfighter'.canonicalize(),
        xws: "Fang fighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 3,
        hull: 4,
        shields: 0,
        actions: ["Focus", "Lock", "Barrel Roll", "R> Focus", "Boost", "R> Focus"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0, 3, 3], [1, 1, 2, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Lancer-class Pursuit Craft": {
        name: "Lancer-class Pursuit Craft",
        xws: "Lancer-class Pursuit Craft".canonicalize(),
        factions: ["Scum and Villainy"],
        large: true,
        attack: 3,
        attackt: 2,
        agility: 2,
        hull: 8,
        shields: 2,
        actions: ["Focus", "Evade", "Lock", "Rotate Arc"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [1, 1, 2, 1, 1, 0], [2, 2, 2, 2, 2, 0], [0, 0, 2, 0, 0, 0], [0, 0, 1, 0, 0, 3]]
      },
      "Quadjumper": {
        name: "Quadjumper",
        xws: "Quadrijet Transfer Spacetug".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 0,
        actions: ["Barrel Roll", "Focus"],
        actionsred: ["Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 0, 3], [1, 2, 2, 2, 1, 0, 3, 3, 0, 0, 0, 3, 0], [0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "U-Wing": {
        name: "U-Wing",
        xws: "UT-60D U-Wing".canonicalize(),
        factions: ["Rebel Alliance"],
        medium: true,
        attack: 3,
        agility: 2,
        hull: 5,
        shields: 3,
        actions: ["Focus", "Lock"],
        actionsred: ["Coordinate"],
        maneuvers: [[0, 0, 3, 0, 0], [0, 2, 2, 2, 0], [1, 2, 2, 2, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]]
      },
      "TIE Striker": {
        name: "TIE Striker",
        xws: "TIE/SK Striker".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 2,
        hull: 4,
        shields: 0,
        actions: ["Focus", "Evade", "Barrel Roll"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 3, 0, 0], [1, 2, 2, 2, 1, 0, 3, 3], [0, 1, 2, 1, 0, 0, 0, 0]]
      },
      "Auzituck Gunship": {
        name: "Auzituck Gunship",
        xws: "Auzituck Gunship".canonicalize(),
        factions: ["Rebel Alliance"],
        attackf: 3,
        agility: 1,
        hull: 6,
        shields: 2,
        actions: ["Focus", "Reinforce"],
        actionsred: ["Barrel Roll"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0]]
      },
      "Scurrg H-6 Bomber": {
        name: "Scurrg H-6 Bomber",
        xws: "Scurrg H-6 Bomber".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 1,
        hull: 6,
        shields: 4,
        medium: true,
        actions: ["Focus", "Lock"],
        actionsred: ["Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 3, 3], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE Aggressor": {
        name: "TIE Aggressor",
        xws: "TIE/AG Aggressor".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 2,
        hull: 4,
        shields: 1,
        actions: ["Focus", "Lock", "Barrel Roll", "R> Evade"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Alpha-Class Star Wing": {
        name: "Alpha-Class Star Wing",
        xws: "Alpha-Class Star Wing".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 2,
        hull: 4,
        shields: 3,
        actions: ["Focus", "Lock", "Slam", "Reload"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0]]
      },
      "M12-L Kimogila Fighter": {
        name: "M12-L Kimogila Fighter",
        xws: "M12-L Kimogila Fighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 1,
        hull: 7,
        shields: 2,
        medium: true,
        actions: ["Focus", "Lock", "Reload"],
        actionsred: ["Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 2, 1, 3, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 0], [0, 0, 0, 0, 0, 3]]
      },
      "Sheathipede-Class Shuttle": {
        name: "Sheathipede-Class Shuttle",
        xws: "Sheathipede-Class Shuttle".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 2,
        attackb: 2,
        agility: 2,
        hull: 4,
        shields: 1,
        actions: ["Focus", "Lock", "Coordinate"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0], [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 2, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE Reaper": {
        name: "TIE Reaper",
        xws: "TIE Reaper".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 1,
        hull: 6,
        shields: 2,
        medium: true,
        actions: ["Focus", "Evade", "Jam"],
        actionsred: ["Coordinate"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 3, 3], [3, 1, 2, 1, 3, 0, 0, 0], [0, 1, 2, 1, 0, 0, 0, 0]]
      },
      "Escape Craft": {
        name: "Escape Craft",
        xws: "Escape Craft".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 2,
        shields: 2,
        actions: ["Focus", "Barrel Roll"],
        actionsred: ["Coordinate"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0, 0, 0], [3, 1, 2, 1, 3, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0]]
      },
      "T-70 X-Wing": {
        name: "T-70 X-Wing",
        xws: "T-70 X-Wing".canonicalize(),
        factions: ["Resistance"],
        attack: 3,
        agility: 2,
        hull: 4,
        shields: 3,
        actions: ["Focus", "Lock", "Boost"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]]
      },
      "RZ-2 A-Wing": {
        name: "RZ-2 A-Wing",
        xws: "RZ-2 A-Wing".canonicalize(),
        factions: ["Resistance"],
        attack: 2,
        attackt: 2,
        agility: 3,
        hull: 3,
        shields: 2,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0], [1, 2, 2, 2, 1, 0, 3, 3], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0]]
      },
      "TIE/FO Fighter": {
        name: "TIE/FO Fighter",
        xws: "TIE/FO Fighter".canonicalize(),
        factions: ["First Order"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 1,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [2, 2, 2, 2, 2, 0, 3, 3], [1, 1, 2, 1, 1, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0]]
      },
      "TIE Silencer": {
        name: "TIE Silencer",
        xws: "TIE Silencer".canonicalize(),
        factions: ["First Order"],
        attack: 3,
        agility: 3,
        hull: 4,
        shields: 2,
        actions: ["Focus", "Boost", "Lock", "Barrel Roll"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE/sf Fighter": {
        name: "TIE/sf Fighter",
        xws: "TIE/sf Fighter".canonicalize(),
        factions: ["First Order"],
        attack: 0,
        attackt: 0,
        agility: 2,
        hull: 3,
        shields: 3,
        actions: ["Focus", "> Rotate Arc", "Evade", "> Rotate Arc", "Lock", "> Rotate Arc", "Barrel Roll", "> Rotate Arc"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 0, 0], [3, 1, 2, 1, 3, 0, 3, 3, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Upsilon-class Shuttle": {
        name: "Upsilon-class Shuttle",
        xws: "Upsilon-class Shuttle".canonicalize(),
        factions: ["First Order"],
        attack: 0,
        agility: 0,
        hull: 0,
        shields: 6,
        actions: ["Focus", "Reinforce", "Lock", "Coordinate", "Jam"],
        actionsred: [],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [3, 1, 2, 1, 3, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        large: true
      },
      "B/SF-17 Bomber": {
        name: "B/SF-17 Bomber",
        xws: "B/SF-17 Bomber".canonicalize(),
        factions: ["Resistance"],
        attack: 0,
        agility: 0,
        hull: 9,
        shields: 3,
        actions: ["Focus", "Lock", "Rotate Arc", "Reload"],
        actionsred: [],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        large: true
      },
      "YT-1300 (Resistance)": {
        name: "YT-1300 (Resistance)",
        canonical_name: 'YT-1300'.canonicalize(),
        xws: "??? YT-1300 Light Freighter".canonicalize(),
        factions: ["Resistance"],
        attackdt: 0,
        agility: 0,
        hull: 0,
        shields: 3,
        actions: ["Focus", "Lock"],
        actionsred: ["Boost", "Rotate Arc"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0], [1, 1, 2, 1, 1, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0]],
        large: true
      },
      "Mining Guild TIE Fighter": {
        name: "Mining Guild TIE Fighter",
        xws: "Modified TIE/LN Fighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 0,
        actions: ["Focus", "Barrel Roll", "Evade"],
        actionsred: [],
        maneuvers: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 3], [0, 0, 1, 0, 0, 0], [0, 0, 3, 0, 0, 0]]
      }
    },
    pilotsById: [
      {
        name: "Cavern Angels Zealot",
        id: 0,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 1,
        points: 41,
        slots: ["Illicit", "Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Blue Squadron Escort",
        id: 1,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 2,
        points: 41,
        slots: ["Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Red Squadron Veteran",
        id: 2,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 3,
        points: 43,
        slots: ["Talent", "Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Jek Porkins",
        id: 3,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 4,
        points: 46,
        slots: ["Talent", "Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Luke Skywalker",
        id: 4,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 5,
        force: 2,
        points: 62,
        slots: ["Force", "Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Wedge Antilles",
        id: 5,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 6,
        points: 52,
        slots: ["Talent", "Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Garven Dreis (X-Wing)",
        canonical_name: 'Garven Dreis'.canonicalize(),
        id: 6,
        unique: true,
        xws: "garvendreis-t65xwing",
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 4,
        points: 47,
        slots: ["Talent", "Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Biggs Darklighter",
        id: 7,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 3,
        points: 48,
        slots: ["Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Edrio Two-Tubes",
        id: 8,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 2,
        points: 45,
        slots: ["Illicit", "Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Thane Kyrell",
        id: 9,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 5,
        points: 48,
        slots: ["Talent", "Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Leevan Tenza",
        id: 10,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 3,
        points: 46,
        slots: ["Illicit", "Talent", "Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "whoops",
        id: 11,
        skip: true
      }, {
        name: "Kullbee Sperado",
        id: 12,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 3,
        points: 48,
        slots: ["Illicit", "Talent", "Torpedo", "Astromech", "Modification", "Configuration"]
      }, {
        name: "Sabine Wren (TIE Fighter)",
        canonical_name: 'Sabine Wren'.canonicalize(),
        id: 13,
        unique: true,
        xws: "sabinewren-tielnfighter",
        faction: "Rebel Alliance",
        ship: "TIE Fighter",
        skill: 3,
        points: 28,
        slots: ["Talent", "Modification"]
      }, {
        name: "Ezra Bridger (TIE Fighter)",
        canonical_name: 'Ezra Bridger'.canonicalize(),
        id: 14,
        unique: true,
        xws: "ezrabridger-tielnfighter",
        faction: "Rebel Alliance",
        ship: "TIE Fighter",
        skill: 3,
        force: 1,
        points: 32,
        slots: ["Force", "Modification"]
      }, {
        name: '"Zeb" Orrelios (TIE Fighter)',
        canonical_name: '"Zeb" Orrelios'.canonicalize(),
        id: 15,
        unique: true,
        xws: "zeborrelios-tielnfighter",
        faction: "Rebel Alliance",
        ship: "TIE Fighter",
        skill: 2,
        points: 26,
        slots: ["Modification"]
      }, {
        name: "Captain Rex",
        id: 16,
        unique: true,
        faction: "Rebel Alliance",
        ship: "TIE Fighter",
        skill: 2,
        points: 32,
        slots: ["Modification"],
        applies_condition: 'Suppressive Fire'.canonicalize()
      }, {
        name: "Miranda Doni",
        id: 17,
        unique: true,
        faction: "Rebel Alliance",
        ship: "K-Wing",
        skill: 4,
        points: 48,
        slots: ["Torpedo", "Missile", "Missile", "Gunner", "Crew", "Device", "Device", "Modification"]
      }, {
        name: "Esege Tuketu",
        id: 18,
        unique: true,
        faction: "Rebel Alliance",
        ship: "K-Wing",
        skill: 3,
        points: 50,
        slots: ["Torpedo", "Missile", "Missile", "Gunner", "Crew", "Device", "Device", "Modification"]
      }, {
        name: "empty",
        id: 19,
        skip: true
      }, {
        name: "Warden Squadron Pilot",
        id: 20,
        faction: "Rebel Alliance",
        ship: "K-Wing",
        skill: 2,
        points: 40,
        slots: ["Torpedo", "Missile", "Missile", "Gunner", "Crew", "Device", "Device", "Modification"]
      }, {
        name: "Corran Horn",
        id: 21,
        unique: true,
        faction: "Rebel Alliance",
        ship: "E-Wing",
        skill: 5,
        points: 74,
        slots: ["Talent", "Sensor", "Torpedo", "Astromech", "Modification"]
      }, {
        name: "Gavin Darklighter",
        id: 22,
        unique: true,
        faction: "Rebel Alliance",
        ship: "E-Wing",
        skill: 4,
        points: 68,
        slots: ["Talent", "Sensor", "Torpedo", "Astromech", "Modification"]
      }, {
        name: "Rogue Squadron Escort",
        id: 23,
        faction: "Rebel Alliance",
        ship: "E-Wing",
        skill: 4,
        points: 63,
        slots: ["Talent", "Sensor", "Torpedo", "Astromech", "Modification"]
      }, {
        name: "Knave Squadron Escort",
        id: 24,
        faction: "Rebel Alliance",
        ship: "E-Wing",
        skill: 2,
        points: 61,
        slots: ["Sensor", "Torpedo", "Astromech", "Modification"]
      }, {
        name: "Norra Wexley (Y-Wing)",
        id: 25,
        unique: true,
        canonical_name: 'Norra Wexley'.canonicalize(),
        xws: "norrawexley-btla4ywing",
        faction: "Rebel Alliance",
        ship: "Y-Wing",
        skill: 5,
        points: 43,
        slots: ["Talent", "Turret", "Torpedo", "Astromech", "Modification", "Device", "Gunner"]
      }, {
        name: "Horton Salm",
        id: 26,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Y-Wing",
        skill: 4,
        points: 38,
        slots: ["Talent", "Turret", "Torpedo", "Astromech", "Modification", "Device", "Gunner"]
      }, {
        name: '"Dutch" Vander',
        id: 27,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Y-Wing",
        skill: 4,
        points: 42,
        slots: ["Talent", "Turret", "Torpedo", "Astromech", "Modification", "Device", "Gunner"]
      }, {
        name: "Evaan Verlaine",
        id: 28,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Y-Wing",
        skill: 3,
        points: 36,
        slots: ["Talent", "Turret", "Torpedo", "Astromech", "Modification", "Device", "Gunner"]
      }, {
        name: "Gold Squadron Veteran",
        id: 29,
        faction: "Rebel Alliance",
        ship: "Y-Wing",
        skill: 3,
        points: 34,
        slots: ["Talent", "Turret", "Torpedo", "Astromech", "Modification", "Device", "Gunner"]
      }, {
        name: "Gray Squadron Bomber",
        id: 30,
        faction: "Rebel Alliance",
        ship: "Y-Wing",
        skill: 2,
        points: 32,
        slots: ["Turret", "Torpedo", "Astromech", "Modification", "Device", "Gunner"]
      }, {
        name: "Bodhi Rook",
        id: 31,
        unique: true,
        faction: "Rebel Alliance",
        ship: "U-Wing",
        skill: 4,
        points: 49,
        slots: ["Talent", "Sensor", "Crew", "Crew", "Modification", "Configuration"]
      }, {
        name: "Cassian Andor",
        id: 32,
        unique: true,
        faction: "Rebel Alliance",
        ship: "U-Wing",
        skill: 3,
        points: 47,
        slots: ["Talent", "Sensor", "Crew", "Crew", "Modification", "Configuration"]
      }, {
        name: "Heff Tobber",
        id: 33,
        unique: true,
        faction: "Rebel Alliance",
        ship: "U-Wing",
        skill: 2,
        points: 45,
        slots: ["Talent", "Sensor", "Crew", "Crew", "Modification", "Configuration"]
      }, {
        name: "Magva Yarro",
        id: 34,
        unique: true,
        faction: "Rebel Alliance",
        ship: "U-Wing",
        skill: 3,
        points: 50,
        slots: ["Talent", "Sensor", "Crew", "Crew", "Modification", "Configuration", "Illicit"]
      }, {
        name: "Saw Gerrera",
        id: 35,
        unique: true,
        faction: "Rebel Alliance",
        ship: "U-Wing",
        skill: 4,
        points: 52,
        slots: ["Talent", "Sensor", "Crew", "Crew", "Modification", "Configuration", "Illicit"]
      }, {
        name: "Benthic Two-Tubes",
        id: 36,
        unique: true,
        faction: "Rebel Alliance",
        ship: "U-Wing",
        skill: 2,
        points: 47,
        slots: ["Illicit", "Sensor", "Crew", "Crew", "Modification", "Configuration"]
      }, {
        name: "Blue Squadron Scout",
        id: 37,
        unique: true,
        faction: "Rebel Alliance",
        ship: "U-Wing",
        skill: 2,
        points: 43,
        slots: ["Sensor", "Crew", "Crew", "Modification", "Configuration"]
      }, {
        name: "Partisan Renegade",
        id: 38,
        faction: "Rebel Alliance",
        ship: "U-Wing",
        skill: 1,
        points: 43,
        slots: ["Illicit", "Sensor", "Crew", "Crew", "Modification", "Configuration"]
      }, {
        name: "Dash Rendar",
        id: 39,
        unique: true,
        faction: "Rebel Alliance",
        ship: "YT-2400",
        skill: 5,
        points: 100,
        slots: ["Talent", "Missile", "Gunner", "Crew", "Modification", "Title", "Illicit"]
      }, {
        name: '"Leebo"',
        id: 40,
        unique: true,
        faction: "Rebel Alliance",
        ship: "YT-2400",
        skill: 3,
        points: 98,
        slots: ["Missile", "Gunner", "Crew", "Modification", "Title", "Illicit"],
        ship_override: {
          actions: ["Calculate", "Lock", "Rotate Arc"]
        }
      }, {
        name: "Wild Space Fringer",
        id: 41,
        faction: "Rebel Alliance",
        ship: "YT-2400",
        skill: 1,
        points: 88,
        slots: ["Missile", "Gunner", "Crew", "Modification", "Title", "Illicit"]
      }, {
        name: "Han Solo",
        id: 42,
        unique: true,
        xws: "hansolo-modifiedyt1300lightfreighter",
        faction: "Rebel Alliance",
        ship: "YT-1300",
        skill: 6,
        points: 92,
        slots: ["Talent", "Missile", "Gunner", "Crew", "Crew", "Modification", "Title", "Illicit"]
      }, {
        name: "Lando Calrissian",
        id: 43,
        unique: true,
        xws: "landocalrissian-modifiedyt1300lightfreighter",
        faction: "Rebel Alliance",
        ship: "YT-1300",
        skill: 5,
        points: 92,
        slots: ["Talent", "Missile", "Gunner", "Crew", "Crew", "Modification", "Title", "Illicit"]
      }, {
        name: "Chewbacca",
        id: 44,
        unique: true,
        faction: "Rebel Alliance",
        ship: "YT-1300",
        skill: 4,
        charge: 1,
        recurring: true,
        points: 84,
        slots: ["Talent", "Missile", "Gunner", "Crew", "Crew", "Modification", "Title", "Illicit"]
      }, {
        name: "Outer Rim Smuggler",
        id: 45,
        faction: "Rebel Alliance",
        ship: "YT-1300",
        skill: 1,
        points: 78,
        slots: ["Missile", "Gunner", "Crew", "Crew", "Modification", "Title", "Illicit"]
      }, {
        name: "Jan Ors",
        id: 46,
        unique: true,
        faction: "Rebel Alliance",
        ship: "HWK-290",
        skill: 5,
        points: 42,
        slots: ["Talent", "Device", "Crew", "Modification", "Modification", "Title"]
      }, {
        name: "Roark Garnet",
        id: 47,
        unique: true,
        faction: "Rebel Alliance",
        ship: "HWK-290",
        skill: 4,
        points: 38,
        slots: ["Talent", "Device", "Crew", "Modification", "Modification", "Title"]
      }, {
        name: "Kyle Katarn",
        id: 48,
        unique: true,
        faction: "Rebel Alliance",
        ship: "HWK-290",
        skill: 3,
        points: 38,
        slots: ["Talent", "Device", "Crew", "Modification", "Modification", "Title"]
      }, {
        name: "Rebel Scout",
        id: 49,
        faction: "Rebel Alliance",
        ship: "HWK-290",
        skill: 2,
        points: 32,
        slots: ["Device", "Crew", "Modification", "Modification", "Title"]
      }, {
        name: "Jake Farrell",
        id: 50,
        unique: true,
        faction: "Rebel Alliance",
        ship: "A-Wing",
        skill: 4,
        points: 40,
        slots: ["Talent", "Missile"]
      }, {
        name: "Arvel Crynyd",
        id: 51,
        unique: true,
        faction: "Rebel Alliance",
        ship: "A-Wing",
        skill: 3,
        points: 36,
        slots: ["Talent", "Missile"]
      }, {
        name: "Green Squadron Pilot",
        id: 52,
        faction: "Rebel Alliance",
        ship: "A-Wing",
        skill: 3,
        points: 34,
        slots: ["Talent", "Missile"]
      }, {
        name: "Phoenix Squadron Pilot",
        id: 53,
        faction: "Rebel Alliance",
        ship: "A-Wing",
        skill: 1,
        points: 30,
        slots: ["Missile"]
      }, {
        name: "Airen Cracken",
        id: 54,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Z-95 Headhunter",
        skill: 5,
        points: 36,
        slots: ["Talent", "Missile", "Modification"]
      }, {
        name: "Lieutenant Blount",
        id: 55,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Z-95 Headhunter",
        skill: 4,
        points: 30,
        slots: ["Talent", "Missile", "Modification"]
      }, {
        name: "Tala Squadron Pilot",
        id: 56,
        faction: "Rebel Alliance",
        ship: "Z-95 Headhunter",
        skill: 2,
        points: 25,
        slots: ["Talent", "Missile", "Modification"]
      }, {
        name: "Bandit Squadron Pilot",
        id: 57,
        faction: "Rebel Alliance",
        ship: "Z-95 Headhunter",
        skill: 1,
        points: 23,
        slots: ["Missile", "Modification"]
      }, {
        name: "Wullffwarro",
        id: 58,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Auzituck Gunship",
        skill: 4,
        points: 56,
        slots: ["Talent", "Crew", "Crew", "Modification"]
      }, {
        name: "Lowhhrick",
        id: 59,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Auzituck Gunship",
        skill: 3,
        points: 52,
        slots: ["Talent", "Crew", "Crew", "Modification"]
      }, {
        name: "Kashyyyk Defender",
        id: 60,
        faction: "Rebel Alliance",
        ship: "Auzituck Gunship",
        skill: 3,
        points: 46,
        slots: ["Crew", "Crew", "Modification"]
      }, {
        name: "Hera Syndulla (VCX-100)",
        id: 61,
        unique: true,
        canonical_name: 'Hera Syndulla'.canonicalize(),
        xws: "herasyndulla-vcx100lightfreighter",
        faction: "Rebel Alliance",
        ship: "VCX-100",
        skill: 5,
        points: 76,
        slots: ["Talent", "Torpedo", "Gunner", "Crew", "Crew", "Modification", "Turret", "Title"]
      }, {
        name: "Kanan Jarrus",
        id: 62,
        unique: true,
        faction: "Rebel Alliance",
        ship: "VCX-100",
        skill: 3,
        force: 2,
        points: 90,
        slots: ["Force", "Torpedo", "Gunner", "Crew", "Crew", "Modification", "Turret", "Title"]
      }, {
        name: '"Chopper"',
        id: 63,
        unique: true,
        faction: "Rebel Alliance",
        ship: "VCX-100",
        skill: 2,
        points: 72,
        slots: ["Torpedo", "Gunner", "Crew", "Crew", "Modification", "Turret", "Title"],
        ship_override: {
          actions: ["Calculate", "Lock", "Reinforce"]
        }
      }, {
        name: "Lothal Rebel",
        id: 64,
        faction: "Rebel Alliance",
        ship: "VCX-100",
        skill: 2,
        points: 70,
        slots: ["Torpedo", "Gunner", "Crew", "Crew", "Modification", "Turret", "Title"]
      }, {
        name: "Hera Syndulla",
        id: 65,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Attack Shuttle",
        skill: 5,
        points: 39,
        slots: ["Talent", "Crew", "Modification", "Turret", "Title"]
      }, {
        name: "Sabine Wren",
        canonical_name: 'Sabine Wren'.canonicalize(),
        id: 66,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Attack Shuttle",
        skill: 3,
        points: 38,
        slots: ["Talent", "Crew", "Modification", "Turret", "Title"]
      }, {
        name: "Ezra Bridger",
        id: 67,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Attack Shuttle",
        skill: 3,
        force: 1,
        points: 41,
        slots: ["Force", "Crew", "Modification", "Turret", "Title"]
      }, {
        name: '"Zeb" Orrelios',
        id: 68,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Attack Shuttle",
        skill: 2,
        points: 34,
        slots: ["Crew", "Modification", "Turret", "Title"]
      }, {
        name: "Fenn Rau (Sheathipede)",
        id: 69,
        unique: true,
        xws: "fennrau-sheathipedeclassshuttle",
        faction: "Rebel Alliance",
        ship: "Sheathipede-Class Shuttle",
        skill: 6,
        points: 52,
        slots: ["Talent", "Crew", "Modification", "Astromech", "Title"]
      }, {
        name: "Ezra Bridger (Sheathipede)",
        canonical_name: 'Ezra Bridger'.canonicalize(),
        id: 70,
        unique: true,
        xws: "ezrabridger-sheathipedeclassshuttle",
        faction: "Rebel Alliance",
        ship: "Sheathipede-Class Shuttle",
        skill: 3,
        force: 1,
        points: 42,
        slots: ["Force", "Crew", "Modification", "Astromech", "Title"]
      }, {
        name: '"Zeb" Orrelios (Sheathipede)',
        canonical_name: '"Zeb" Orrelios'.canonicalize(),
        id: 71,
        unique: true,
        xws: "zeborrelios-sheathipedeclassshuttle",
        faction: "Rebel Alliance",
        ship: "Sheathipede-Class Shuttle",
        skill: 2,
        points: 32,
        slots: ["Talent", "Crew", "Modification", "Astromech", "Title"]
      }, {
        name: "AP-5",
        id: 72,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Sheathipede-Class Shuttle",
        skill: 1,
        points: 30,
        slots: ["Talent", "Crew", "Modification", "Astromech", "Title"]
      }, {
        name: "Braylen Stramm",
        id: 73,
        unique: true,
        faction: "Rebel Alliance",
        ship: "B-Wing",
        skill: 4,
        points: 50,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Torpedo", "Modification"]
      }, {
        name: "Ten Numb",
        id: 74,
        unique: true,
        faction: "Rebel Alliance",
        ship: "B-Wing",
        skill: 4,
        points: 50,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Torpedo", "Modification"]
      }, {
        name: "Blade Squadron Veteran",
        id: 75,
        faction: "Rebel Alliance",
        ship: "B-Wing",
        skill: 3,
        points: 44,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Torpedo", "Modification"]
      }, {
        name: "Blue Squadron Pilot",
        id: 76,
        faction: "Rebel Alliance",
        ship: "B-Wing",
        skill: 2,
        points: 42,
        slots: ["Sensor", "Cannon", "Cannon", "Torpedo", "Modification"]
      }, {
        name: "Norra Wexley",
        id: 77,
        unique: true,
        faction: "Rebel Alliance",
        ship: "ARC-170",
        skill: 5,
        points: 55,
        slots: ["Talent", "Torpedo", "Crew", "Gunner", "Astromech", "Modification"]
      }, {
        name: "Shara Bey",
        id: 78,
        unique: true,
        faction: "Rebel Alliance",
        ship: "ARC-170",
        skill: 4,
        points: 53,
        slots: ["Talent", "Torpedo", "Crew", "Gunner", "Astromech", "Modification"]
      }, {
        name: "Garven Dreis",
        id: 79,
        unique: true,
        faction: "Rebel Alliance",
        ship: "ARC-170",
        skill: 4,
        points: 51,
        slots: ["Talent", "Torpedo", "Crew", "Gunner", "Astromech", "Modification"]
      }, {
        name: "Ibtisam",
        id: 80,
        unique: true,
        faction: "Rebel Alliance",
        ship: "ARC-170",
        skill: 3,
        points: 50,
        slots: ["Talent", "Torpedo", "Crew", "Gunner", "Astromech", "Modification"]
      }, {
        name: "IG-88A",
        id: 81,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Aggressor",
        skill: 4,
        points: 70,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "IG-88B",
        id: 82,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Aggressor",
        skill: 4,
        points: 70,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "IG-88C",
        id: 83,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Aggressor",
        skill: 4,
        points: 70,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "IG-88D",
        id: 84,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Aggressor",
        skill: 4,
        points: 70,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Kavil",
        id: 85,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Y-Wing",
        skill: 5,
        points: 42,
        slots: ["Talent", "Turret", "Torpedo", "Gunner", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: "Drea Renthal",
        id: 86,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Y-Wing",
        skill: 4,
        points: 40,
        slots: ["Talent", "Turret", "Torpedo", "Gunner", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: "Hired Gun",
        id: 87,
        faction: "Scum and Villainy",
        ship: "Y-Wing",
        skill: 2,
        points: 34,
        slots: ["Talent", "Turret", "Torpedo", "Gunner", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: "Crymorah Goon",
        id: 88,
        faction: "Scum and Villainy",
        ship: "Y-Wing",
        skill: 1,
        points: 32,
        slots: ["Turret", "Torpedo", "Gunner", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: "Han Solo (Scum)",
        id: 89,
        unique: true,
        xws: "hansolo",
        faction: "Scum and Villainy",
        ship: "YT-1300 (Scum)",
        skill: 6,
        points: 54,
        slots: ["Talent", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Lando Calrissian (Scum)",
        id: 90,
        unique: true,
        xws: "landocalrissian",
        faction: "Scum and Villainy",
        ship: "YT-1300 (Scum)",
        skill: 4,
        points: 49,
        slots: ["Talent", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "L3-37",
        id: 91,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YT-1300 (Scum)",
        skill: 2,
        points: 47,
        slots: ["Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"],
        ship_override: {
          actions: ["Calculate", "Lock", "Rotate Arc"]
        }
      }, {
        name: "Freighter Captain",
        id: 92,
        faction: "Scum and Villainy",
        ship: "YT-1300 (Scum)",
        skill: 1,
        points: 46,
        slots: ["Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Lando Calrissian (Scum) (Escape Craft)",
        canonical_name: 'Lando Calrissian (Scum)'.canonicalize(),
        id: 93,
        unique: true,
        xws: "landocalrissian-escapecraft",
        faction: "Scum and Villainy",
        ship: "Escape Craft",
        skill: 4,
        points: 26,
        slots: ["Talent", "Crew", "Modification"]
      }, {
        name: "Outer Rim Pioneer",
        id: 94,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Escape Craft",
        skill: 3,
        points: 24,
        slots: ["Talent", "Crew", "Modification"]
      }, {
        name: "L3-37 (Escape Craft)",
        canonical_name: 'L3-37'.canonicalize(),
        id: 95,
        unique: true,
        xws: "l337-escapecraft",
        faction: "Scum and Villainy",
        ship: "Escape Craft",
        skill: 2,
        points: 22,
        slots: ["Talent", "Crew", "Modification"],
        ship_override: {
          actions: ["Calculate", "Barrel Roll"]
        }
      }, {
        name: "Autopilot Drone",
        id: 96,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Escape Craft",
        skill: 1,
        charge: 3,
        points: 12,
        slots: [],
        ship_override: {
          actions: ["Calculate", "Barrel Roll"]
        }
      }, {
        name: "Fenn Rau",
        id: 97,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 6,
        points: 68,
        slots: ["Talent", "Torpedo"]
      }, {
        name: "Old Teroch",
        id: 98,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 5,
        points: 56,
        slots: ["Talent", "Torpedo"]
      }, {
        name: "Kad Solus",
        id: 99,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 4,
        points: 54,
        slots: ["Talent", "Torpedo"]
      }, {
        name: "Joy Rekkoff",
        id: 100,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 4,
        points: 52,
        slots: ["Talent", "Torpedo"]
      }, {
        name: "Skull Squadron Pilot",
        id: 101,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 4,
        points: 50,
        slots: ["Talent", "Torpedo"]
      }, {
        name: "Zealous Recruit",
        id: 102,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 1,
        points: 44,
        slots: ["Torpedo"]
      }, {
        name: "Boba Fett",
        id: 103,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-31",
        skill: 5,
        points: 80,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Emon Azzameen",
        id: 104,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-31",
        skill: 4,
        points: 76,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Kath Scarlet",
        id: 105,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-31",
        skill: 4,
        points: 74,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Koshka Frost",
        id: 106,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-31",
        skill: 3,
        points: 71,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Krassis Trelix",
        id: 107,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-31",
        skill: 3,
        points: 70,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Bounty Hunter",
        id: 108,
        faction: "Scum and Villainy",
        ship: "Firespray-31",
        skill: 2,
        points: 66,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "4-LOM",
        id: 109,
        unique: true,
        faction: "Scum and Villainy",
        ship: "G-1A Starfighter",
        skill: 3,
        points: 49,
        slots: ["Talent", "Sensor", "Crew", "Illicit", "Modification", "Title"],
        ship_override: {
          actions: ["Calculate", "Lock", "Jam"]
        }
      }, {
        name: "Zuckuss",
        id: 110,
        unique: true,
        faction: "Scum and Villainy",
        ship: "G-1A Starfighter",
        skill: 3,
        points: 47,
        slots: ["Talent", "Sensor", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Gand Findsman",
        id: 111,
        faction: "Scum and Villainy",
        ship: "G-1A Starfighter",
        skill: 1,
        points: 43,
        slots: ["Sensor", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Palob Godalhi",
        id: 112,
        unique: true,
        faction: "Scum and Villainy",
        ship: "HWK-290",
        skill: 3,
        points: 38,
        slots: ["Talent", "Crew", "Device", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Dace Bonearm",
        id: 113,
        unique: true,
        faction: "Scum and Villainy",
        ship: "HWK-290",
        skill: 4,
        charge: 3,
        recurring: true,
        points: 36,
        slots: ["Talent", "Crew", "Device", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Torkil Mux",
        id: 114,
        unique: true,
        faction: "Scum and Villainy",
        ship: "HWK-290",
        skill: 2,
        points: 36,
        slots: ["Crew", "Device", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Dengar",
        id: 115,
        unique: true,
        faction: "Scum and Villainy",
        ship: "JumpMaster 5000",
        skill: 6,
        charge: 1,
        recurring: true,
        points: 64,
        slots: ["Talent", "Crew", "Torpedo", "Illicit", "Modification", "Title"]
      }, {
        name: "Tel Trevura",
        id: 116,
        unique: true,
        faction: "Scum and Villainy",
        ship: "JumpMaster 5000",
        skill: 4,
        charge: 1,
        points: 60,
        slots: ["Talent", "Crew", "Torpedo", "Illicit", "Modification", "Title"]
      }, {
        name: "Manaroo",
        id: 117,
        unique: true,
        faction: "Scum and Villainy",
        ship: "JumpMaster 5000",
        skill: 3,
        points: 56,
        slots: ["Talent", "Crew", "Torpedo", "Illicit", "Modification", "Title"]
      }, {
        name: "Contracted Scout",
        id: 118,
        faction: "Scum and Villainy",
        ship: "JumpMaster 5000",
        skill: 2,
        points: 52,
        slots: ["Torpedo", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Talonbane Cobra",
        id: 119,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 5,
        points: 50,
        slots: ["Talent", "Missile", "Illicit", "Modification", "Modification", "Modification"]
      }, {
        name: "Graz",
        id: 120,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 4,
        points: 47,
        slots: ["Talent", "Missile", "Illicit", "Modification", "Modification", "Modification"]
      }, {
        name: "Viktor Hel",
        id: 121,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 4,
        points: 45,
        slots: ["Talent", "Missile", "Illicit", "Modification", "Modification", "Modification"]
      }, {
        name: "Captain Jostero",
        id: 122,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 3,
        points: 43,
        slots: ["Missile", "Illicit", "Modification", "Modification", "Modification"]
      }, {
        name: "Black Sun Ace",
        id: 123,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 3,
        points: 42,
        slots: ["Talent", "Missile", "Illicit", "Modification", "Modification", "Modification"]
      }, {
        name: "Cartel Marauder",
        id: 124,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 2,
        points: 40,
        slots: ["Missile", "Illicit", "Modification", "Modification", "Modification"]
      }, {
        name: "Asajj Ventress",
        id: 125,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Lancer-class Pursuit Craft",
        skill: 4,
        points: 84,
        force: 2,
        slots: ["Force", "Crew", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Ketsu Onyo",
        id: 126,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Lancer-class Pursuit Craft",
        skill: 5,
        points: 74,
        slots: ["Talent", "Crew", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Sabine Wren (Scum)",
        id: 127,
        unique: true,
        xws: "sabinewren-lancerclasspursuitcraft",
        faction: "Scum and Villainy",
        ship: "Lancer-class Pursuit Craft",
        skill: 3,
        points: 68,
        slots: ["Talent", "Crew", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Shadowport Hunter",
        id: 128,
        faction: "Scum and Villainy",
        ship: "Lancer-class Pursuit Craft",
        skill: 2,
        points: 64,
        slots: ["Crew", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Torani Kulda",
        id: 129,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M12-L Kimogila Fighter",
        skill: 4,
        points: 50,
        slots: ["Talent", "Torpedo", "Missile", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Dalan Oberos",
        id: 130,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M12-L Kimogila Fighter",
        skill: 3,
        charge: 2,
        points: 48,
        slots: ["Talent", "Torpedo", "Missile", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Cartel Executioner",
        id: 131,
        faction: "Scum and Villainy",
        ship: "M12-L Kimogila Fighter",
        skill: 3,
        points: 44,
        slots: ["Talent", "Torpedo", "Missile", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Serissu",
        id: 132,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 5,
        points: 43,
        slots: ["Talent", "Modification", "Hardpoint"]
      }, {
        name: "Genesis Red",
        id: 133,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 4,
        points: 35,
        slots: ["Talent", "Modification", "Hardpoint"]
      }, {
        name: "Laetin A'shera",
        id: 134,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 3,
        points: 35,
        slots: ["Talent", "Modification", "Hardpoint"]
      }, {
        name: "Quinn Jast",
        id: 135,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 3,
        points: 35,
        slots: ["Talent", "Modification", "Hardpoint"]
      }, {
        name: "Tansarii Point Veteran",
        id: 136,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 3,
        points: 33,
        slots: ["Talent", "Modification", "Hardpoint"]
      }, {
        name: "Inaldra",
        id: 137,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 2,
        points: 32,
        slots: ["Modification", "Hardpoint"]
      }, {
        name: "Sunny Bounder",
        id: 138,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 1,
        points: 31,
        slots: ["Modification", "Hardpoint"]
      }, {
        name: "Cartel Spacer",
        id: 139,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 1,
        points: 29,
        slots: ["Modification", "Hardpoint"]
      }, {
        name: "Constable Zuvio",
        id: 140,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Quadjumper",
        skill: 4,
        points: 33,
        slots: ["Talent", "Tech", "Crew", "Device", "Illicit", "Modification"]
      }, {
        name: "Sarco Plank",
        id: 141,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Quadjumper",
        skill: 2,
        points: 31,
        slots: ["Tech", "Crew", "Device", "Illicit", "Modification"]
      }, {
        name: "Unkar Plutt",
        id: 142,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Quadjumper",
        skill: 2,
        points: 30,
        slots: ["Tech", "Crew", "Device", "Illicit", "Modification"]
      }, {
        name: "Jakku Gunrunner",
        id: 143,
        faction: "Scum and Villainy",
        ship: "Quadjumper",
        skill: 1,
        points: 28,
        slots: ["Tech", "Crew", "Device", "Illicit", "Modification"]
      }, {
        name: "Captain Nym",
        id: 144,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Scurrg H-6 Bomber",
        skill: 5,
        charge: 1,
        recurring: true,
        points: 52,
        slots: ["Talent", "Turret", "Crew", "Device", "Device", "Modification", "Title"]
      }, {
        name: "Sol Sixxa",
        id: 145,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Scurrg H-6 Bomber",
        skill: 3,
        points: 49,
        slots: ["Talent", "Turret", "Crew", "Device", "Device", "Modification", "Title"]
      }, {
        name: "Lok Revenant",
        id: 146,
        faction: "Scum and Villainy",
        ship: "Scurrg H-6 Bomber",
        skill: 2,
        points: 46,
        slots: ["Turret", "Crew", "Device", "Device", "Modification", "Title"]
      }, {
        name: "Guri",
        id: 147,
        unique: true,
        faction: "Scum and Villainy",
        ship: "StarViper",
        skill: 5,
        points: 62,
        slots: ["Talent", "Sensor", "Torpedo", "Modification", "Title"],
        ship_override: {
          actions: ["Calculate", "Lock", "Barrel Roll", "R> Calculate", "Boost", "R> Calculate"]
        }
      }, {
        name: "Prince Xizor",
        id: 148,
        unique: true,
        faction: "Scum and Villainy",
        ship: "StarViper",
        skill: 4,
        points: 54,
        slots: ["Talent", "Sensor", "Torpedo", "Modification", "Title"]
      }, {
        name: "Dalan Oberos (StarViper)",
        id: 149,
        unique: true,
        xws: "dalanoberos-starviperclassattackplatform",
        faction: "Scum and Villainy",
        ship: "StarViper",
        skill: 4,
        points: 54,
        slots: ["Talent", "Sensor", "Torpedo", "Modification", "Title"]
      }, {
        name: "Black Sun Assassin",
        id: 150,
        faction: "Scum and Villainy",
        ship: "StarViper",
        skill: 3,
        points: 48,
        slots: ["Talent", "Sensor", "Torpedo", "Modification", "Title"]
      }, {
        name: "Black Sun Enforcer",
        id: 151,
        faction: "Scum and Villainy",
        ship: "StarViper",
        skill: 2,
        points: 46,
        slots: ["Sensor", "Torpedo", "Modification", "Title"]
      }, {
        name: "Moralo Eval",
        id: 152,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YV-666",
        skill: 4,
        charge: 2,
        points: 72,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Crew", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Bossk",
        id: 153,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YV-666",
        skill: 4,
        points: 70,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Crew", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Latts Razzi",
        id: 154,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YV-666",
        skill: 3,
        points: 66,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Crew", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Trandoshan Slaver",
        id: 155,
        faction: "Scum and Villainy",
        ship: "YV-666",
        skill: 2,
        points: 58,
        slots: ["Cannon", "Missile", "Crew", "Crew", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "N'dru Suhlak",
        id: 156,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Z-95 Headhunter",
        skill: 4,
        points: 31,
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "Kaa'to Leeachos",
        id: 157,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Z-95 Headhunter",
        skill: 3,
        points: 29,
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "Black Sun Soldier",
        id: 158,
        faction: "Scum and Villainy",
        ship: "Z-95 Headhunter",
        skill: 3,
        points: 27,
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "Binayre Pirate",
        id: 159,
        faction: "Scum and Villainy",
        ship: "Z-95 Headhunter",
        skill: 1,
        points: 24,
        slots: ["Missile", "Illicit", "Modification"]
      }, {
        name: "Nashtah Pup",
        id: 160,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Z-95 Headhunter",
        skill: 1,
        points: 6,
        slots: ["Missile", "Illicit", "Modification"]
      }, {
        name: "Major Vynder",
        id: 161,
        unique: true,
        faction: "Galactic Empire",
        ship: "Alpha-Class Star Wing",
        skill: 4,
        points: 41,
        slots: ["Talent", "Sensor", "Torpedo", "Missile", "Modification", "Configuration"]
      }, {
        name: "Lieutenant Karsabi",
        id: 162,
        unique: true,
        faction: "Galactic Empire",
        ship: "Alpha-Class Star Wing",
        skill: 3,
        points: 39,
        slots: ["Talent", "Sensor", "Torpedo", "Missile", "Modification", "Configuration"]
      }, {
        name: "Rho Squadron Pilot",
        id: 163,
        faction: "Galactic Empire",
        ship: "Alpha-Class Star Wing",
        skill: 3,
        points: 37,
        slots: ["Talent", "Sensor", "Torpedo", "Missile", "Modification", "Configuration"]
      }, {
        name: "Nu Squadron Pilot",
        id: 164,
        faction: "Galactic Empire",
        ship: "Alpha-Class Star Wing",
        skill: 2,
        points: 35,
        slots: ["Sensor", "Torpedo", "Missile", "Modification", "Configuration"]
      }, {
        name: "Captain Kagi",
        id: 165,
        unique: true,
        faction: "Galactic Empire",
        ship: "Lambda-Class Shuttle",
        skill: 4,
        points: 48,
        slots: ["Sensor", "Cannon", "Crew", "Crew", "Modification", "Title"]
      }, {
        name: "Lieutenant Sai",
        id: 166,
        unique: true,
        faction: "Galactic Empire",
        ship: "Lambda-Class Shuttle",
        skill: 3,
        points: 47,
        slots: ["Sensor", "Cannon", "Crew", "Crew", "Modification", "Title"]
      }, {
        name: "Colonel Jendon",
        id: 167,
        unique: true,
        faction: "Galactic Empire",
        ship: "Lambda-Class Shuttle",
        skill: 3,
        charge: 2,
        points: 46,
        slots: ["Sensor", "Cannon", "Crew", "Crew", "Modification", "Title"]
      }, {
        name: "Omicron Group Pilot",
        id: 168,
        faction: "Galactic Empire",
        ship: "Lambda-Class Shuttle",
        skill: 1,
        points: 43,
        slots: ["Sensor", "Cannon", "Crew", "Crew", "Modification", "Title"]
      }, {
        name: "Grand Inquisitor",
        id: 169,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced Prototype",
        skill: 5,
        points: 58,
        force: 2,
        slots: ["Force", "Sensor", "Missile"]
      }, {
        name: "Seventh Sister",
        id: 170,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced Prototype",
        skill: 4,
        points: 48,
        force: 2,
        slots: ["Force", "Sensor", "Missile"]
      }, {
        name: "Inquisitor",
        id: 171,
        faction: "Galactic Empire",
        ship: "TIE Advanced Prototype",
        skill: 3,
        points: 40,
        force: 1,
        slots: ["Force", "Sensor", "Missile"]
      }, {
        name: "Baron of the Empire",
        id: 172,
        faction: "Galactic Empire",
        ship: "TIE Advanced Prototype",
        skill: 3,
        points: 34,
        slots: ["Talent", "Sensor", "Missile"]
      }, {
        name: "Darth Vader",
        id: 173,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced",
        skill: 6,
        points: 70,
        force: 3,
        slots: ["Force", "Sensor", "Missile", "Modification"]
      }, {
        name: "Maarek Stele",
        id: 174,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced",
        skill: 5,
        points: 50,
        slots: ["Talent", "Sensor", "Missile", "Modification"]
      }, {
        name: "Ved Foslo",
        id: 175,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced",
        skill: 4,
        points: 47,
        slots: ["Talent", "Sensor", "Missile", "Modification"]
      }, {
        name: "Zertik Strom",
        id: 176,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced",
        skill: 3,
        points: 45,
        slots: ["Sensor", "Missile", "Modification"]
      }, {
        name: "Storm Squadron Ace",
        id: 177,
        faction: "Galactic Empire",
        ship: "TIE Advanced",
        skill: 3,
        points: 43,
        slots: ["Talent", "Sensor", "Missile", "Modification"]
      }, {
        name: "Tempest Squadron Pilot",
        id: 178,
        faction: "Galactic Empire",
        ship: "TIE Advanced",
        skill: 2,
        points: 41,
        slots: ["Sensor", "Missile", "Modification"]
      }, {
        name: "Soontir Fel",
        id: 179,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Interceptor",
        skill: 6,
        points: 52,
        slots: ["Talent", "Modification", "Modification"]
      }, {
        name: "Turr Phennir",
        id: 180,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Interceptor",
        skill: 4,
        points: 44,
        slots: ["Talent", "Modification", "Modification"]
      }, {
        name: "Saber Squadron Ace",
        id: 181,
        faction: "Galactic Empire",
        ship: "TIE Interceptor",
        skill: 4,
        points: 40,
        slots: ["Talent", "Modification", "Modification"]
      }, {
        name: "Alpha Squadron Pilot",
        id: 182,
        faction: "Galactic Empire",
        ship: "TIE Interceptor",
        skill: 1,
        points: 34,
        slots: ["Modification", "Modification"]
      }, {
        name: "Major Vermeil",
        id: 183,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Reaper",
        skill: 4,
        points: 49,
        slots: ["Talent", "Crew", "Crew", "Modification"]
      }, {
        name: "Captain Feroph",
        id: 184,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Reaper",
        skill: 3,
        points: 47,
        slots: ["Talent", "Crew", "Crew", "Modification"]
      }, {
        name: '"Vizier"',
        id: 185,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Reaper",
        skill: 2,
        points: 45,
        slots: ["Crew", "Crew", "Modification"]
      }, {
        name: "Scarif Base Pilot",
        id: 186,
        faction: "Galactic Empire",
        ship: "TIE Reaper",
        skill: 1,
        points: 41,
        slots: ["Crew", "Crew", "Modification"]
      }, {
        name: "Lieutenant Kestal",
        id: 187,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Aggressor",
        skill: 4,
        points: 36,
        slots: ["Talent", "Turret", "Missile", "Missile", "Gunner", "Modification"]
      }, {
        name: '"Double Edge"',
        id: 188,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Aggressor",
        skill: 2,
        points: 33,
        slots: ["Talent", "Turret", "Missile", "Missile", "Gunner", "Modification"]
      }, {
        name: "Onyx Squadron Scout",
        id: 189,
        faction: "Galactic Empire",
        ship: "TIE Aggressor",
        skill: 3,
        points: 32,
        slots: ["Talent", "Turret", "Missile", "Missile", "Gunner", "Modification"]
      }, {
        name: "Sienar Specialist",
        id: 190,
        faction: "Galactic Empire",
        ship: "TIE Aggressor",
        skill: 2,
        points: 30,
        slots: ["Turret", "Missile", "Missile", "Gunner", "Modification"]
      }, {
        name: '"Redline"',
        id: 191,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Punisher",
        skill: 5,
        points: 44,
        slots: ["Sensor", "Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Modification"]
      }, {
        name: '"Deathrain"',
        id: 192,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Punisher",
        skill: 4,
        points: 42,
        slots: ["Sensor", "Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Modification"]
      }, {
        name: "Cutlass Squadron Pilot",
        id: 193,
        faction: "Galactic Empire",
        ship: "TIE Punisher",
        skill: 2,
        points: 36,
        slots: ["Sensor", "Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Modification"]
      }, {
        name: "Colonel Vessery",
        id: 194,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Defender",
        skill: 4,
        points: 88,
        slots: ["Talent", "Sensor", "Cannon", "Missile"]
      }, {
        name: "Countess Ryad",
        id: 195,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Defender",
        skill: 4,
        points: 86,
        slots: ["Talent", "Sensor", "Cannon", "Missile"]
      }, {
        name: "Rexler Brath",
        id: 196,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Defender",
        skill: 5,
        points: 84,
        slots: ["Talent", "Sensor", "Cannon", "Missile"]
      }, {
        name: "Onyx Squadron Ace",
        id: 197,
        faction: "Galactic Empire",
        ship: "TIE Defender",
        skill: 4,
        points: 78,
        slots: ["Talent", "Sensor", "Cannon", "Missile"]
      }, {
        name: "Delta Squadron Pilot",
        id: 198,
        faction: "Galactic Empire",
        ship: "TIE Defender",
        skill: 1,
        points: 72,
        slots: ["Sensor", "Cannon", "Missile"]
      }, {
        name: '"Whisper"',
        id: 199,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Phantom",
        skill: 5,
        points: 52,
        slots: ["Talent", "Sensor", "Crew", "Modification"]
      }, {
        name: '"Echo"',
        id: 200,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Phantom",
        skill: 4,
        points: 50,
        slots: ["Talent", "Sensor", "Crew", "Modification"]
      }, {
        name: '"Sigma Squadron Ace"',
        id: 201,
        faction: "Galactic Empire",
        ship: "TIE Phantom",
        skill: 4,
        points: 46,
        slots: ["Talent", "Sensor", "Crew", "Modification"]
      }, {
        name: "Imdaar Test Pilot",
        id: 202,
        faction: "Galactic Empire",
        ship: "TIE Phantom",
        skill: 3,
        points: 44,
        slots: ["Sensor", "Crew", "Modification"]
      }, {
        name: "Captain Jonus",
        id: 203,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Bomber",
        skill: 4,
        points: 36,
        slots: ["Talent", "Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Modification"]
      }, {
        name: "Major Rhymer",
        id: 204,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Bomber",
        skill: 4,
        points: 34,
        slots: ["Talent", "Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Modification"]
      }, {
        name: "Tomax Bren",
        id: 205,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Bomber",
        skill: 5,
        points: 34,
        slots: ["Talent", "Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Modification"]
      }, {
        name: '"Deathfire"',
        id: 206,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Bomber",
        skill: 2,
        points: 32,
        slots: ["Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Modification"]
      }, {
        name: "Gamma Squadron Ace",
        id: 207,
        faction: "Galactic Empire",
        ship: "TIE Bomber",
        skill: 3,
        points: 30,
        slots: ["Talent", "Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Modification"]
      }, {
        name: "Scimitar Squadron Pilot",
        id: 208,
        faction: "Galactic Empire",
        ship: "TIE Bomber",
        skill: 2,
        points: 28,
        slots: ["Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Modification"]
      }, {
        name: '"Countdown"',
        id: 209,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Striker",
        skill: 4,
        points: 44,
        slots: ["Talent", "Gunner", "Device", "Modification"]
      }, {
        name: '"Pure Sabacc"',
        id: 210,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Striker",
        skill: 4,
        points: 44,
        slots: ["Talent", "Gunner", "Device", "Modification"]
      }, {
        name: '"Duchess"',
        id: 211,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Striker",
        skill: 5,
        points: 42,
        slots: ["Talent", "Gunner", "Device", "Modification"]
      }, {
        name: "Black Squadron Scout",
        id: 212,
        faction: "Galactic Empire",
        ship: "TIE Striker",
        skill: 3,
        points: 38,
        slots: ["Talent", "Gunner", "Device", "Modification"]
      }, {
        name: "Planetary Sentinel",
        id: 213,
        faction: "Galactic Empire",
        ship: "TIE Striker",
        skill: 1,
        points: 34,
        slots: ["Gunner", "Device", "Modification"]
      }, {
        name: "Rear Admiral Chiraneau",
        id: 214,
        unique: true,
        faction: "Galactic Empire",
        ship: "VT-49 Decimator",
        skill: 5,
        points: 88,
        slots: ["Talent", "Torpedo", "Crew", "Crew", "Gunner", "Device", "Modification", "Title"]
      }, {
        name: "Captain Oicunn",
        id: 215,
        unique: true,
        faction: "Galactic Empire",
        ship: "VT-49 Decimator",
        skill: 3,
        points: 84,
        slots: ["Talent", "Torpedo", "Crew", "Crew", "Gunner", "Device", "Modification", "Title"]
      }, {
        name: "Patrol Leader",
        id: 216,
        faction: "Galactic Empire",
        ship: "VT-49 Decimator",
        skill: 2,
        points: 80,
        slots: ["Torpedo", "Crew", "Crew", "Gunner", "Device", "Modification", "Title"]
      }, {
        name: '"Howlrunner"',
        id: 217,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 5,
        points: 40,
        slots: ["Talent", "Modification"]
      }, {
        name: "Iden Versio",
        id: 218,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 4,
        charge: 1,
        points: 40,
        slots: ["Talent", "Modification"]
      }, {
        name: '"Mauler" Mithel',
        id: 219,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 5,
        points: 32,
        slots: ["Talent", "Modification"]
      }, {
        name: '"Scourge" Skutu',
        id: 220,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 5,
        points: 32,
        slots: ["Talent", "Modification"]
      }, {
        name: '"Wampa"',
        id: 221,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 1,
        recurring: true,
        charge: 1,
        points: 30,
        slots: ["Modification"]
      }, {
        name: "Del Meeko",
        id: 222,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 4,
        points: 30,
        slots: ["Talent", "Modification"]
      }, {
        name: "Gideon Hask",
        id: 223,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 4,
        points: 30,
        slots: ["Talent", "Modification"]
      }, {
        name: "Seyn Marana",
        id: 224,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 4,
        points: 30,
        slots: ["Talent", "Modification"]
      }, {
        name: "Valen Rudor",
        id: 225,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 3,
        points: 28,
        slots: ["Talent", "Modification"]
      }, {
        name: '"Night Beast"',
        id: 226,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 2,
        points: 26,
        slots: ["Modification"]
      }, {
        name: "Black Squadron Ace",
        id: 227,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 3,
        points: 26,
        slots: ["Talent", "Modification"]
      }, {
        name: "Obsidian Squadron Pilot",
        id: 228,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 2,
        points: 24,
        slots: ["Modification"]
      }, {
        name: "Academy Pilot",
        id: 229,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 1,
        points: 23,
        slots: ["Modification"]
      }, {
        name: "Spice Runner",
        id: 230,
        faction: "Scum and Villainy",
        ship: "HWK-290",
        skill: 1,
        points: 32,
        slots: ["Crew", "Device", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Poe Dameron",
        id: 231,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-Wing",
        skill: 6,
        points: 100,
        charge: 1,
        recurring: true,
        slots: ["Astromech", "Modification", "Configuration", "Tech", "Title", "Hardpoint"]
      }, {
        name: "Lieutenant Bastian",
        id: 232,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-Wing",
        skill: 6,
        points: 1,
        slots: ["Astromech", "Modification", "Configuration", "Tech", "Hardpoint"]
      }, {
        name: '"Midnight"',
        id: 233,
        unique: true,
        faction: "First Order",
        ship: "TIE/FO Fighter",
        skill: 6,
        points: 100,
        slots: ["Modification"]
      }, {
        name: '"Longshot"',
        id: 234,
        unique: true,
        faction: "First Order",
        ship: "TIE/FO Fighter",
        skill: 3,
        points: 100,
        slots: ["Modification"]
      }, {
        name: '"Muse"',
        id: 235,
        unique: true,
        faction: "First Order",
        ship: "TIE/FO Fighter",
        skill: 2,
        points: 100,
        slots: ["Modification"]
      }, {
        name: "Kylo Ren",
        id: 236,
        unique: true,
        faction: "First Order",
        ship: "TIE Silencer",
        skill: 5,
        force: 2,
        points: 100,
        applies_condition: 'I\'ll Show You the Dark Side'.canonicalize(),
        slots: ["Force", "Tech", "Modification"]
      }, {
        name: '"Blackout"',
        id: 237,
        unique: true,
        faction: "First Order",
        ship: "TIE Silencer",
        skill: 5,
        points: 100,
        slots: ["Talent", "Tech", "Modification"]
      }, {
        name: "Lieutenant Dormitz",
        id: 238,
        unique: true,
        faction: "First Order",
        ship: "Upsilon-class Shuttle",
        skill: 0,
        points: 100,
        slots: ["Tech", "Tech", "Crew", "Crew", "Cannon", "Sensor", "Modification"]
      }, {
        name: "Lulo Lampar",
        id: 239,
        unique: true,
        faction: "Resistance",
        ship: "RZ-2 A-Wing",
        skill: 5,
        points: 100,
        slots: ["Talent", "Missile"]
      }, {
        name: "Tallissan Lintra",
        id: 240,
        unique: true,
        faction: "Resistance",
        ship: "RZ-2 A-Wing",
        skill: 5,
        charge: 1,
        recurring: true,
        points: 100,
        slots: ["Talent", "Missile"]
      }, {
        name: "Lulo Lampar",
        id: 241,
        unique: true,
        faction: "Resistance",
        ship: "RZ-2 A-Wing",
        skill: 5,
        points: 100,
        slots: ["Talent", "Missile"]
      }, {
        name: '"Backdraft"',
        id: 242,
        unique: true,
        faction: "First Order",
        ship: "TIE/sf Fighter",
        skill: 4,
        points: 100,
        slots: ["Talent", "Tech", "Gunner", "Sensor", "Modification"]
      }, {
        name: '"Quickdraw"',
        id: 243,
        unique: true,
        faction: "First Order",
        ship: "TIE/sf Fighter",
        skill: 0,
        points: 100,
        slots: ["Talent", "Tech", "Gunner", "Sensor", "Modification"]
      }, {
        name: "Rey",
        id: 244,
        unique: true,
        faction: "Resistance",
        ship: "YT-1300 (Resistance)",
        skill: 0,
        points: 100,
        force: 2,
        slots: ["Force", "Crew", "Crew", "Gunner", "Modification"]
      }, {
        name: "Han Solo (Resistance)",
        id: 245,
        unique: true,
        faction: "Resistance",
        ship: "YT-1300 (Resistance)",
        skill: 6,
        points: 100,
        slots: ["Talent", "Crew", "Crew", "Gunner", "Modification"]
      }, {
        name: "Chewbacca (Resistance)",
        id: 246,
        unique: true,
        faction: "Resistance",
        ship: "YT-1300 (Resistance)",
        skill: 4,
        points: 100,
        slots: ["Talent", "Crew", "Crew", "Gunner", "Modification"]
      }, {
        name: "Captain Seevor",
        id: 247,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Mining Guild TIE Fighter",
        skill: 3,
        charge: 1,
        Recurring: true,
        points: 100,
        slots: ["Talent", "Modification"]
      }, {
        name: "Mining Guild Surveyor",
        id: 248,
        faction: "Scum and Villainy",
        ship: "Mining Guild TIE Fighter",
        skill: 2,
        points: 100,
        slots: ["Modification"]
      }, {
        name: "Ahhav",
        id: 249,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Mining Guild TIE Fighter",
        skill: 0,
        points: 100,
        slots: ["Talent", "Modification"]
      }, {
        name: "Finch Dallow",
        id: 250,
        unique: true,
        faction: "Resistance",
        ship: "B/SF-17 Bomber",
        skill: 0,
        points: 100,
        slots: ["Talent", "Modification"]
      }
    ],
    upgradesById: [
      {
        name: '"Chopper" (Astromech)',
        id: 0,
        slot: "Astromech",
        canonical_name: '"Chopper"'.canonicalize(),
        points: 2,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: '"Genius"',
        id: 1,
        slot: "Astromech",
        points: 0,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "R2 Astromech",
        id: 2,
        slot: "Astromech",
        points: 6,
        charge: 2
      }, {
        name: "R2-D2",
        id: 3,
        unique: true,
        slot: "Astromech",
        points: 8,
        charge: 3,
        faction: "Rebel Alliance"
      }, {
        name: "R3 Astromech",
        id: 4,
        slot: "Astromech",
        points: 3
      }, {
        name: "R4 Astromech",
        id: 5,
        slot: "Astromech",
        points: 2,
        restriction_func: function(ship) {
          return !((ship.data.large != null) || (ship.data.medium != null));
        },
        modifier_func: function(stats) {
          var turn, _i, _ref, _results;
          _results = [];
          for (turn = _i = 0, _ref = stats.maneuvers[1].length; 0 <= _ref ? _i < _ref : _i > _ref; turn = 0 <= _ref ? ++_i : --_i) {
            if (stats.maneuvers[1][turn] > 0) {
              if (stats.maneuvers[1][turn] === 3) {
                stats.maneuvers[1][turn] = 1;
              } else {
                stats.maneuvers[1][turn] = 2;
              }
            }
            if (stats.maneuvers[2][turn] > 0) {
              if (stats.maneuvers[2][turn] === 3) {
                _results.push(stats.maneuvers[2][turn] = 1);
              } else {
                _results.push(stats.maneuvers[2][turn] = 2);
              }
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, {
        name: "R5 Astromech",
        id: 6,
        slot: "Astromech",
        points: 5,
        charge: 2
      }, {
        name: "R5-D8",
        id: 7,
        unique: true,
        slot: "Astromech",
        points: 7,
        charge: 3,
        faction: "Rebel Alliance"
      }, {
        name: "R5-P8",
        id: 8,
        slot: "Astromech",
        points: 4,
        unique: true,
        faction: "Scum and Villainy",
        charge: 3
      }, {
        name: "R5-TK",
        id: 9,
        slot: "Astromech",
        points: 1,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Heavy Laser Cannon",
        id: 10,
        slot: "Cannon",
        points: 4,
        attackbull: 4,
        range: "2-3"
      }, {
        name: "Ion Cannon",
        id: 11,
        slot: "Cannon",
        points: 5,
        attack: 3,
        range: "1-3"
      }, {
        name: "Jamming Beam",
        id: 12,
        slot: "Cannon",
        points: 2,
        attack: 3,
        range: "1-2"
      }, {
        name: "Tractor Beam",
        id: 13,
        slot: "Cannon",
        points: 3,
        attack: 3,
        range: "1-3"
      }, {
        name: "Admiral Sloane",
        id: 14,
        slot: "Crew",
        points: 10,
        unique: true,
        faction: "Galactic Empire"
      }, {
        name: "Agent Kallus",
        id: 15,
        slot: "Crew",
        points: 6,
        unique: true,
        faction: "Galactic Empire",
        applies_condition: 'Hunted'.canonicalize()
      }, {
        name: "Boba Fett",
        id: 16,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Baze Malbus",
        id: 17,
        slot: "Crew",
        points: 8,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "C-3PO",
        id: 18,
        slot: "Crew",
        points: 12,
        unique: true,
        faction: "Rebel Alliance",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Calculate') < 0) {
            return stats.actions.push('Calculate');
          }
        }
      }, {
        name: "Cassian Andor",
        id: 19,
        slot: "Crew",
        points: 6,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Cad Bane",
        id: 20,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Chewbacca",
        id: 21,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Rebel Alliance",
        charge: 2,
        recurring: true
      }, {
        name: "Chewbacca (Scum)",
        id: 22,
        slot: "Crew",
        xws: "chewbacca-crew",
        points: 4,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: '"Chopper" (Crew)',
        id: 23,
        canonical_name: '"Chopper"'.canonicalize(),
        xws: "chopper-crew",
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Ciena Ree",
        id: 24,
        slot: "Crew",
        points: 10,
        unique: true,
        faction: "Galactic Empire",
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actions, "Coordinate") >= 0 || __indexOf.call(ship.effectiveStats().actionsred, "Coordinate") >= 0;
        }
      }, {
        name: "Cikatro Vizago",
        id: 25,
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Darth Vader",
        id: 26,
        slot: "Crew",
        points: 14,
        force: 1,
        unique: true,
        faction: "Galactic Empire",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Death Troopers",
        id: 27,
        slot: "Crew",
        points: 6,
        unique: true,
        faction: "Galactic Empire",
        restriction_func: function(ship, upgrade_obj) {
          return ship.hasAnotherUnoccupiedSlotLike(upgrade_obj);
        },
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnotherUpgradeSlot();
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Director Krennic",
        id: 28,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Galactic Empire",
        applies_condition: 'Optimized Prototype'.canonicalize(),
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Lock') < 0) {
            return stats.actions.push('Lock');
          }
        }
      }, {
        name: "Emperor Palpatine",
        id: 29,
        slot: "Crew",
        points: 13,
        force: 1,
        unique: true,
        faction: "Galactic Empire",
        restriction_func: function(ship, upgrade_obj) {
          return ship.hasAnotherUnoccupiedSlotLike(upgrade_obj);
        },
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnotherUpgradeSlot();
        },
        also_occupies_upgrades: ["Crew"],
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Freelance Slicer",
        id: 30,
        slot: "Crew",
        points: 3
      }, {
        name: "4-LOM",
        id: 31,
        slot: "Crew",
        points: 3,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: 'GNK "Gonk" Droid',
        id: 32,
        slot: "Crew",
        points: 10,
        charge: 1
      }, {
        name: "Grand Inquisitor",
        id: 33,
        slot: "Crew",
        points: 16,
        unique: true,
        force: 1,
        faction: "Galactic Empire",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Grand Moff Tarkin",
        id: 34,
        slot: "Crew",
        points: 10,
        unique: true,
        faction: "Galactic Empire",
        charge: 2,
        recurring: true,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actions, "Lock") >= 0 || __indexOf.call(ship.effectiveStats().actionsred, "Lock") >= 0;
        }
      }, {
        name: "Hera Syndulla",
        id: 35,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "IG-88D",
        id: 36,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Informant",
        id: 37,
        slot: "Crew",
        points: 5,
        unique: true,
        applies_condition: 'Listening Device'.canonicalize()
      }, {
        name: "ISB Slicer",
        id: 38,
        slot: "Crew",
        points: 3,
        faction: "Galactic Empire"
      }, {
        name: "Jabba the Hutt",
        id: 39,
        slot: "Crew",
        points: 8,
        unique: true,
        faction: "Scum and Villainy",
        charge: 4,
        restriction_func: function(ship, upgrade_obj) {
          return ship.hasAnotherUnoccupiedSlotLike(upgrade_obj);
        },
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnotherUpgradeSlot();
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Jyn Erso",
        id: 40,
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Kanan Jarrus",
        id: 41,
        slot: "Crew",
        points: 14,
        force: 1,
        unique: true,
        faction: "Rebel Alliance",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Ketsu Onyo",
        id: 42,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "L3-37",
        id: 43,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Lando Calrissian",
        id: 44,
        slot: "Crew",
        xws: "landocalrissian",
        points: 5,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Lando Calrissian (Scum)",
        id: 45,
        slot: "Crew",
        xws: "landocalrissian-crew",
        points: 8,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Leia Organa",
        id: 46,
        slot: "Crew",
        points: 8,
        unique: true,
        faction: "Rebel Alliance",
        charge: 3,
        recurring: true
      }, {
        name: "Latts Razzi",
        id: 47,
        slot: "Crew",
        points: 7,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Maul",
        id: 48,
        slot: "Crew",
        points: 13,
        unique: true,
        force: 1,
        modifier_func: function(stats) {
          return stats.force += 1;
        },
        restriction_func: function(ship) {
          var builder, t, thing, things, _ref;
          builder = ship.builder;
          if (builder.faction === "Scum and Villainy") {
            return true;
          }
          _ref = builder.uniques_in_use;
          for (t in _ref) {
            things = _ref[t];
            if (__indexOf.call((function() {
              var _i, _len, _results;
              _results = [];
              for (_i = 0, _len = things.length; _i < _len; _i++) {
                thing = things[_i];
                _results.push(thing.canonical_name.getXWSBaseName());
              }
              return _results;
            })(), 'ezrabridger') >= 0) {
              return true;
            }
          }
          return false;
        }
      }, {
        name: "Minister Tua",
        id: 49,
        slot: "Crew",
        points: 7,
        unique: true,
        faction: "Galactic Empire"
      }, {
        name: "Moff Jerjerrod",
        id: 50,
        slot: "Crew",
        points: 12,
        unique: true,
        faction: "Galactic Empire",
        charge: 2,
        recurring: true,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actions, "Coordinate") >= 0 || __indexOf.call(ship.effectiveStats().actionsred, "Coordinate") >= 0;
        }
      }, {
        name: "Magva Yarro",
        id: 51,
        slot: "Crew",
        points: 7,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Nien Nunb",
        id: 52,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Rebel Alliance",
        modifier_func: function(stats) {
          var s, spd, _i, _len, _ref, _ref1, _results;
          _ref1 = (_ref = stats.maneuvers) != null ? _ref : [];
          _results = [];
          for (spd = _i = 0, _len = _ref1.length; _i < _len; spd = ++_i) {
            s = _ref1[spd];
            if (spd === 0) {
              continue;
            }
            if (s[1] > 0) {
              if (s[1] = 1) {
                s[1] = 2;
              } else if (s[1] = 3) {
                s[1] = 1;
              }
            }
            if (s[3] > 0) {
              if (s[3] = 1) {
                _results.push(s[3] = 2);
              } else if (s[3] = 3) {
                _results.push(s[3] = 1);
              } else {
                _results.push(void 0);
              }
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, {
        name: "Novice Technician",
        id: 53,
        slot: "Crew",
        points: 4
      }, {
        name: "Perceptive Copilot",
        id: 54,
        slot: "Crew",
        points: 10
      }, {
        name: "Qi'ra",
        id: 55,
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "R2-D2 (Crew)",
        id: 56,
        slot: "Crew",
        canonical_name: 'r2d2-crew',
        xws: "r2d2-crew",
        points: 8,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Sabine Wren",
        id: 57,
        slot: "Crew",
        points: 3,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Saw Gerrera",
        id: 58,
        slot: "Crew",
        points: 8,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Seasoned Navigator",
        id: 59,
        slot: "Crew",
        points: 5
      }, {
        name: "Seventh Sister",
        id: 60,
        slot: "Crew",
        points: 12,
        force: 1,
        unique: true,
        faction: "Galactic Empire",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Tactical Officer",
        id: 61,
        slot: "Crew",
        points: 2,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actionsred, "Coordinate") >= 0;
        },
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Coordinate') < 0) {
            return stats.actions.push('Coordinate');
          }
        }
      }, {
        name: "Tobias Beckett",
        id: 62,
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "0-0-0",
        id: 63,
        slot: "Crew",
        points: 3,
        unique: true,
        restriction_func: function(ship) {
          var builder, t, thing, things, _ref;
          builder = ship.builder;
          if (builder.faction === "Scum and Villainy") {
            return true;
          }
          _ref = builder.uniques_in_use;
          for (t in _ref) {
            things = _ref[t];
            if (__indexOf.call((function() {
              var _i, _len, _results;
              _results = [];
              for (_i = 0, _len = things.length; _i < _len; _i++) {
                thing = things[_i];
                _results.push(thing.canonical_name.getXWSBaseName());
              }
              return _results;
            })(), 'darthvader') >= 0) {
              return true;
            }
          }
          return false;
        }
      }, {
        name: "Unkar Plutt",
        id: 64,
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: '"Zeb" Orrelios',
        id: 65,
        slot: "Crew",
        points: 1,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Zuckuss",
        id: 66,
        slot: "Crew",
        points: 3,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Bomblet Generator",
        id: 67,
        slot: "Device",
        points: 5,
        charge: 2,
        applies_condition: 'Bomblet'.canonicalize(),
        restriction_func: function(ship, upgrade_obj) {
          return ship.hasAnotherUnoccupiedSlotLike(upgrade_obj);
        },
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnotherUpgradeSlot();
        },
        also_occupies_upgrades: ["Device"]
      }, {
        name: "Conner Nets",
        id: 68,
        slot: "Device",
        points: 6,
        charge: 1,
        applies_condition: 'Conner Net'.canonicalize()
      }, {
        name: "Proton Bombs",
        id: 69,
        slot: "Device",
        points: 5,
        charge: 2,
        applies_condition: 'Proton Bomb'.canonicalize()
      }, {
        name: "Proximity Mines",
        id: 70,
        slot: "Device",
        points: 6,
        charge: 2,
        applies_condition: 'Proximity Mine'.canonicalize()
      }, {
        name: "Seismic Charges",
        id: 71,
        slot: "Device",
        points: 3,
        charge: 2,
        applies_condition: 'Seismic Charge'.canonicalize()
      }, {
        name: "Heightened Perception",
        id: 72,
        slot: "Force",
        points: 3
      }, {
        name: "Instinctive Aim",
        id: 73,
        slot: "Force",
        points: 2
      }, {
        name: "Supernatural Reflexes",
        id: 74,
        slot: "Force",
        points: 12,
        restriction_func: function(ship) {
          return !((ship.data.large != null) || (ship.data.medium != null));
        }
      }, {
        name: "Sense",
        id: 75,
        slot: "Force",
        points: 6
      }, {
        name: "Agile Gunner",
        id: 76,
        slot: "Gunner",
        points: 10
      }, {
        name: "Bistan",
        id: 77,
        slot: "Gunner",
        points: 14,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Bossk",
        id: 78,
        slot: "Gunner",
        points: 10,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "BT-1",
        id: 79,
        slot: "Gunner",
        points: 2,
        unique: true,
        restriction_func: function(ship) {
          var builder, t, thing, things, _ref;
          builder = ship.builder;
          if (builder.faction === "Scum and Villainy") {
            return true;
          }
          _ref = builder.uniques_in_use;
          for (t in _ref) {
            things = _ref[t];
            if (__indexOf.call((function() {
              var _i, _len, _results;
              _results = [];
              for (_i = 0, _len = things.length; _i < _len; _i++) {
                thing = things[_i];
                _results.push(thing.canonical_name.getXWSBaseName());
              }
              return _results;
            })(), 'darthvader') >= 0) {
              return true;
            }
          }
          return false;
        }
      }, {
        name: "Dengar",
        id: 80,
        slot: "Gunner",
        points: 6,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Ezra Bridger",
        id: 81,
        slot: "Gunner",
        points: 18,
        force: 1,
        unique: true,
        faction: "Rebel Alliance",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Fifth Brother",
        id: 82,
        slot: "Gunner",
        points: 12,
        force: 1,
        unique: true,
        faction: "Galactic Empire",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Greedo",
        id: 83,
        slot: "Gunner",
        points: 1,
        unique: true,
        faction: "Scum and Villainy",
        charge: 1
      }, {
        name: "Han Solo",
        id: 84,
        slot: "Gunner",
        xws: "hansolo",
        points: 12,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Han Solo (Scum)",
        id: 85,
        slot: "Gunner",
        xws: "hansolo-gunner",
        points: 4,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Hotshot Gunner",
        id: 86,
        slot: "Gunner",
        points: 7
      }, {
        name: "Luke Skywalker",
        id: 87,
        slot: "Gunner",
        points: 30,
        force: 1,
        unique: true,
        faction: "Rebel Alliance",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Skilled Bombardier",
        id: 88,
        slot: "Gunner",
        points: 2
      }, {
        name: "Veteran Tail Gunner",
        id: 89,
        slot: "Gunner",
        points: 4,
        restriction_func: function(ship) {
          return ship.data.attackb != null;
        }
      }, {
        name: "Veteran Turret Gunner",
        id: 90,
        slot: "Gunner",
        points: 8,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actions, "Rotate Arc") >= 0 || __indexOf.call(ship.effectiveStats().actionsred, "Rotate Arc") >= 0;
        }
      }, {
        name: "Cloaking Device",
        id: 91,
        slot: "Illicit",
        points: 5,
        unique: true,
        charge: 2,
        restriction_func: function(ship) {
          return !(ship.data.large != null);
        }
      }, {
        name: "Contraband Cybernetics",
        id: 92,
        slot: "Illicit",
        points: 5,
        charge: 1
      }, {
        name: "Deadman's Switch",
        id: 93,
        slot: "Illicit",
        points: 2
      }, {
        name: "Feedback Array",
        id: 94,
        slot: "Illicit",
        points: 4
      }, {
        name: "Inertial Dampeners",
        id: 95,
        slot: "Illicit",
        points: 1
      }, {
        name: "Rigged Cargo Chute",
        id: 96,
        slot: "Illicit",
        points: 4,
        charge: 1,
        restriction_func: function(ship) {
          return (ship.data.medium != null) || (ship.data.large != null);
        }
      }, {
        name: "Barrage Rockets",
        id: 97,
        slot: "Missile",
        points: 6,
        attack: 3,
        range: "2-3",
        charge: 5,
        restriction_func: function(ship, upgrade_obj) {
          return ship.hasAnotherUnoccupiedSlotLike(upgrade_obj);
        },
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnotherUpgradeSlot();
        },
        also_occupies_upgrades: ['Missile']
      }, {
        name: "Cluster Missiles",
        id: 98,
        slot: "Missile",
        points: 5,
        attack: 3,
        range: "1-2",
        charge: 4
      }, {
        name: "Concussion Missiles",
        id: 99,
        slot: "Missile",
        points: 6,
        attack: 3,
        range: "2-3",
        charge: 3
      }, {
        name: "Homing Missiles",
        id: 100,
        slot: "Missile",
        points: 3,
        attack: 4,
        range: "2-3",
        charge: 2
      }, {
        name: "Ion Missiles",
        id: 101,
        slot: "Missile",
        points: 4,
        attack: 3,
        range: "2-3",
        charge: 3
      }, {
        name: "Proton Rockets",
        id: 102,
        slot: "Missile",
        points: 7,
        attackbull: 5,
        range: "1-2",
        charge: 1
      }, {
        name: "Ablative Plating",
        id: 103,
        slot: "Modification",
        points: 4,
        charge: 2,
        restriction_func: function(ship) {
          return (ship.data.medium != null) || (ship.data.large != null);
        }
      }, {
        name: "Advanced SLAM",
        id: 104,
        slot: "Modification",
        points: 3,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actions, "Slam") >= 0 || __indexOf.call(ship.effectiveStats().actionsred, "Slam") >= 0;
        }
      }, {
        name: "Afterburners",
        id: 105,
        slot: "Modification",
        points: 8,
        charge: 2,
        restriction_func: function(ship) {
          var _ref, _ref1;
          return !(((_ref = ship.data.large) != null ? _ref : false) || ((_ref1 = ship.data.medium) != null ? _ref1 : false));
        }
      }, {
        name: "Electronic Baffle",
        id: 106,
        slot: "Modification",
        points: 2
      }, {
        name: "Engine Upgrade",
        id: 107,
        slot: "Modification",
        points: '*',
        basepoints: 3,
        variablebase: true,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actionsred, "Boost") >= 0;
        },
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Boost') < 0) {
            return stats.actions.push('Boost');
          }
        }
      }, {
        name: "Munitions Failsafe",
        id: 108,
        slot: "Modification",
        points: 2
      }, {
        name: "Static Discharge Vanes",
        id: 109,
        slot: "Modification",
        points: 6
      }, {
        name: "Tactical Scrambler",
        id: 110,
        slot: "Modification",
        points: 2,
        restriction_func: function(ship) {
          return (ship.data.medium != null) || (ship.data.large != null);
        }
      }, {
        name: "Advanced Sensors",
        id: 111,
        slot: "Sensor",
        points: 8
      }, {
        name: "Collision Detector",
        id: 112,
        slot: "Sensor",
        points: 5,
        charge: 2
      }, {
        name: "Fire-Control System",
        id: 113,
        slot: "Sensor",
        points: 3
      }, {
        name: "Trajectory Simulator",
        id: 114,
        slot: "Sensor",
        points: 3
      }, {
        name: "Composure",
        id: 115,
        slot: "Talent",
        points: 2,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actions, "Focus") >= 0 || __indexOf.call(ship.effectiveStats().actionsred, "Focus") >= 0;
        }
      }, {
        name: "Crack Shot",
        id: 116,
        slot: "Talent",
        points: 1,
        charge: 1
      }, {
        name: "Daredevil",
        id: 117,
        slot: "Talent",
        points: 3,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actions, "Boost") >= 0 && !((ship.data.large != null) || (ship.data.medium != null));
        }
      }, {
        name: "Debris Gambit",
        id: 118,
        slot: "Talent",
        points: 2,
        restriction_func: function(ship) {
          return !(ship.data.large != null);
        },
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actionsred, 'Evade') < 0) {
            return stats.actionsred.push('Evade');
          }
        }
      }, {
        name: "Elusive",
        id: 119,
        slot: "Talent",
        points: 3,
        charge: 1
      }, {
        name: "Expert Handling",
        id: 120,
        slot: "Talent",
        points: '*',
        basepoints: 2,
        variablebase: true,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actionsred, "Barrel Roll") >= 0;
        },
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Barrel Roll') < 0) {
            return stats.actions.push('Barrel Roll');
          }
        }
      }, {
        name: "Fearless",
        id: 121,
        slot: "Talent",
        points: 3,
        faction: "Scum and Villainy"
      }, {
        name: "Intimidation",
        id: 122,
        slot: "Talent",
        points: 3
      }, {
        name: "Juke",
        id: 123,
        slot: "Talent",
        points: 4,
        restriction_func: function(ship) {
          return !(ship.data.large != null);
        }
      }, {
        name: "Lone Wolf",
        id: 124,
        slot: "Talent",
        points: 4,
        unique: true,
        recurring: true,
        charge: 1
      }, {
        name: "Marksmanship",
        id: 125,
        slot: "Talent",
        points: 1
      }, {
        name: "Outmaneuver",
        id: 126,
        slot: "Talent",
        points: 6
      }, {
        name: "Predator",
        id: 127,
        slot: "Talent",
        points: 2
      }, {
        name: "Ruthless",
        id: 128,
        slot: "Talent",
        points: 1,
        faction: "Galactic Empire"
      }, {
        name: "Saturation Salvo",
        id: 129,
        slot: "Talent",
        points: 6,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actions, "Reload") >= 0 || __indexOf.call(ship.effectiveStats().actionsred, "Reload") >= 0;
        }
      }, {
        name: "Selfless",
        id: 130,
        slot: "Talent",
        points: 3,
        faction: "Rebel Alliance"
      }, {
        name: "Squad Leader",
        id: 131,
        slot: "Talent",
        points: 4,
        unique: true,
        modifier_func: function(stats) {
          if (stats.actionsred != null) {
            if (__indexOf.call(stats.actionsred, 'Coordinate') < 0) {
              return stats.actionsred.push('Coordinate');
            }
          }
        }
      }, {
        name: "Swarm Tactics",
        id: 132,
        slot: "Talent",
        points: 3
      }, {
        name: "Trick Shot",
        id: 133,
        slot: "Talent",
        points: 1
      }, {
        name: "Adv. Proton Torpedoes",
        id: 134,
        slot: "Torpedo",
        points: 6,
        attack: 5,
        range: "1",
        charge: 1
      }, {
        name: "Ion Torpedoes",
        id: 135,
        slot: "Torpedo",
        points: 6,
        attack: 4,
        range: "2-3",
        charge: 2
      }, {
        name: "Proton Torpedoes",
        id: 136,
        slot: "Torpedo",
        points: 9,
        attack: 4,
        range: "2-3",
        charge: 2
      }, {
        name: "Dorsal Turret",
        id: 137,
        slot: "Turret",
        points: 4,
        attackt: 2,
        range: "1-2",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Ion Cannon Turret",
        id: 138,
        slot: "Turret",
        points: 6,
        attackt: 3,
        range: "1-2",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Os-1 Arsenal Loadout",
        id: 139,
        points: 0,
        slot: "Configuration",
        ship: "Alpha-Class Star Wing",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Torpedo"
          }, {
            type: exportObj.Upgrade,
            slot: "Missile"
          }
        ]
      }, {
        name: "Pivot Wing",
        id: 140,
        points: 0,
        slot: "Configuration",
        ship: "U-Wing"
      }, {
        name: "Pivot Wing (Open)",
        id: 141,
        points: 0,
        skip: true
      }, {
        name: "Servomotor S-Foils",
        id: 142,
        points: 0,
        slot: "Configuration",
        ship: "X-Wing"
      }, {
        name: "Blank",
        id: 143,
        skip: true
      }, {
        name: "Xg-1 Assault Configuration",
        id: 144,
        points: 0,
        slot: "Configuration",
        ship: "Alpha-Class Star Wing",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Cannon"
          }
        ]
      }, {
        name: "L3-37's Programming",
        id: 145,
        points: 0,
        slot: "Configuration",
        faction: "Scum and Villainy"
      }, {
        name: "Andrasta",
        id: 146,
        slot: "Title",
        points: 6,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-31",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Device"
          }
        ],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Reload') < 0) {
            return stats.actions.push('Reload');
          }
        }
      }, {
        name: "Dauntless",
        id: 147,
        slot: "Title",
        points: 6,
        unique: true,
        faction: "Galactic Empire",
        ship: "VT-49 Decimator"
      }, {
        name: "Ghost",
        id: 148,
        slot: "Title",
        unique: true,
        points: 0,
        faction: "Rebel Alliance",
        ship: "VCX-100"
      }, {
        name: "Havoc",
        id: 149,
        slot: "Title",
        points: 4,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Scurrg H-6 Bomber",
        unequips_upgrades: ['Crew'],
        also_occupies_upgrades: ['Crew'],
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Sensor'
          }, {
            type: exportObj.Upgrade,
            slot: 'Astromech'
          }
        ]
      }, {
        name: "Hound's Tooth",
        id: 150,
        slot: "Title",
        points: 1,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YV-666"
      }, {
        name: "IG-2000",
        id: 151,
        slot: "Title",
        points: 2,
        faction: "Scum and Villainy",
        ship: "Aggressor"
      }, {
        name: "Lando's Millennium Falcon",
        id: 152,
        slot: "Title",
        points: 6,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YT-1300 (Scum)"
      }, {
        name: "Marauder",
        id: 153,
        slot: "Title",
        points: 3,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-31",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Gunner"
          }
        ]
      }, {
        name: "Millennium Falcon",
        id: 154,
        slot: "Title",
        points: 6,
        unique: true,
        faction: "Rebel Alliance",
        ship: "YT-1300",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Evade') < 0) {
            return stats.actions.push('Evade');
          }
        }
      }, {
        name: "Mist Hunter",
        id: 155,
        slot: "Title",
        points: 2,
        unique: true,
        faction: "Scum and Villainy",
        ship: "G-1A Starfighter",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Barrel Roll') < 0) {
            return stats.actions.push('Barrel Roll');
          }
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Cannon"
          }
        ]
      }, {
        name: "Moldy Crow",
        id: 156,
        slot: "Title",
        points: 12,
        unique: true,
        ship: "HWK-290"
      }, {
        name: "Outrider",
        id: 157,
        slot: "Title",
        points: 14,
        unique: true,
        faction: "Rebel Alliance",
        ship: "YT-2400"
      }, {
        name: "Phantom (Sheathipede)",
        id: 158,
        slot: "Title",
        points: 2,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Sheathipede-Class Shuttle"
      }, {
        name: "Punishing One",
        id: 159,
        slot: "Title",
        points: 8,
        unique: true,
        faction: "Scum and Villainy",
        ship: "JumpMaster 5000",
        unequips_upgrades: ['Crew'],
        also_occupies_upgrades: ['Crew'],
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Astromech'
          }
        ]
      }, {
        name: "Shadow Caster",
        id: 160,
        slot: "Title",
        points: 6,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Lancer-class Pursuit Craft"
      }, {
        name: "Slave I",
        id: 161,
        slot: "Title",
        points: 5,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-31",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Torpedo"
          }
        ]
      }, {
        name: "ST-321",
        id: 162,
        slot: "Title",
        points: 6,
        unique: true,
        faction: "Galactic Empire",
        ship: "Lambda-Class Shuttle"
      }, {
        name: "Virago",
        id: 163,
        slot: "Title",
        points: 10,
        unique: true,
        charge: 2,
        ship: "StarViper",
        modifier_func: function(stats) {
          return stats.shields += 1;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Modification"
          }
        ]
      }, {
        name: "Hull Upgrade",
        id: 164,
        slot: "Modification",
        points: '*',
        basepoints: 2,
        variableagility: true,
        modifier_func: function(stats) {
          return stats.hull += 1;
        }
      }, {
        name: "Shield Upgrade",
        id: 165,
        slot: "Modification",
        points: '*',
        basepoints: 3,
        variableagility: true,
        modifier_func: function(stats) {
          return stats.shields += 1;
        }
      }, {
        name: "Stealth Device",
        id: 166,
        slot: "Modification",
        points: '*',
        basepoints: 3,
        variableagility: true,
        charge: 1,
        modifier_func: function(stats) {
          return stats.agility += 1;
        }
      }, {
        name: "Phantom",
        id: 167,
        slot: "Title",
        points: 2,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Attack Shuttle"
      }, {
        name: "Hardpoint: Cannon",
        id: 168,
        slot: "Hardpoint",
        points: 0,
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Cannon"
          }
        ]
      }, {
        name: "Hardpoint: Torpedo",
        id: 169,
        slot: "Hardpoint",
        points: 0,
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Torpedo"
          }
        ]
      }, {
        name: "Hardpoint: Missile",
        id: 170,
        slot: "Hardpoint",
        points: 0,
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Missile"
          }
        ]
      }, {
        name: "Black One",
        id: 171,
        slot: "Title",
        charge: 1,
        points: 0,
        faction: "Resistance",
        ship: "T-70 X-Wing",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Slam') < 0) {
            return stats.actions.push('Slam');
          }
        }
      }, {
        name: "Heroic",
        id: 172,
        slot: "Talent",
        points: 0,
        faction: "Resistance"
      }, {
        name: "Rose Tico",
        id: 173,
        slot: "Crew",
        points: 0,
        faction: "Resistance"
      }, {
        name: "Finn",
        id: 174,
        slot: "Gunner",
        points: 0,
        faction: "Resistance"
      }, {
        name: "Integrated S-Foils",
        id: 175,
        slot: "Configuration",
        points: 0,
        faction: "Resistance",
        ship: "T-70 X-Wing"
      }, {
        name: "Integrated S-Foils (Open)",
        id: 176,
        skip: true
      }, {
        name: "Targeting Synchronizer",
        id: 177,
        slot: "Tech",
        points: 0,
        restriction_func: function(ship) {
          return __indexOf.call(ship.effectiveStats().actions, "Lock") >= 0 || __indexOf.call(ship.effectiveStats().actionsred, "Lock") >= 0;
        }
      }, {
        name: "Primed Thrusters",
        id: 178,
        slot: "Tech",
        points: 0
      }, {
        name: "Kylo Ren (Crew)",
        id: 179,
        slot: "Crew",
        points: 0,
        force: 1,
        faction: "First Order",
        applies_condition: 'I\'ll Show You the Dark Side'.canonicalize(),
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "General Hux",
        id: 180,
        slot: "Crew",
        points: 0,
        faction: "First Order"
      }, {
        name: "Fanatical",
        id: 181,
        slot: "Talent",
        points: 0,
        faction: "First Order"
      }, {
        name: "Special Forces Gunner",
        id: 182,
        slot: "Gunner",
        points: 0,
        faction: "First Order"
      }, {
        name: "Captain Phasma",
        id: 183,
        slot: "Crew",
        points: 0,
        faction: "First Order"
      }, {
        name: "Supreme Leader Snoke",
        id: 184,
        slot: "Crew",
        points: 0,
        force: 1,
        faction: "First Order",
        restriction_func: function(ship, upgrade_obj) {
          return ship.hasAnotherUnoccupiedSlotLike(upgrade_obj);
        },
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnotherUpgradeSlot();
        },
        also_occupies_upgrades: ["Crew"],
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Hyperspace Tracking Data",
        id: 185,
        slot: "Tech",
        points: 0
      }, {
        name: "Advanced Optics",
        id: 186,
        slot: "Tech",
        points: 0
      }, {
        name: "Rey (Gunner)",
        id: 187,
        slot: "Gunner",
        points: 0,
        force: 1,
        faction: "Resistance",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }
    ],
    conditionsById: [
      {
        name: 'Zero Condition',
        id: 0
      }, {
        name: 'Suppressive Fire',
        id: 1,
        unique: true
      }, {
        name: 'Hunted',
        id: 2,
        unique: true
      }, {
        name: 'Listening Device',
        id: 3,
        unique: true
      }, {
        name: 'Optimized Prototype',
        id: 4,
        unique: true
      }, {
        name: 'I\'ll Show You the Dark Side',
        id: 5,
        unique: true
      }, {
        name: 'Proton Bomb',
        id: 6
      }, {
        name: 'Seismic Charge',
        id: 7
      }, {
        name: 'Bomblet',
        id: 8
      }, {
        name: 'Loose Cargo',
        id: 9
      }, {
        name: 'Conner Net',
        id: 10
      }, {
        name: 'Proximity Mine',
        id: 11
      }
    ],
    modificationsById: [],
    titlesById: []
  };
};

exportObj.setupCardData = function(basic_cards, pilot_translations, upgrade_translations, condition_translations, modification_translations, title_translations) {
  var card, cards, condition, condition_data, condition_name, e, expansion, field, i, modification, modification_data, modification_name, name, pilot, pilot_data, pilot_name, ship_data, ship_name, source, title, title_data, title_name, translation, translations, upgrade, upgrade_data, upgrade_name, _base, _base1, _base2, _base3, _base4, _base5, _base6, _base7, _base8, _base9, _i, _j, _k, _l, _len, _len1, _len10, _len11, _len12, _len13, _len14, _len15, _len2, _len3, _len4, _len5, _len6, _len7, _len8, _len9, _m, _n, _name, _name1, _name2, _name3, _name4, _name5, _name6, _name7, _name8, _name9, _o, _p, _q, _r, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref2, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref3, _ref30, _ref31, _ref32, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _s, _t, _u, _v, _w, _x;
  _ref = basic_cards.pilotsById;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    pilot_data = _ref[i];
    if (pilot_data.id !== i) {
      throw new Error("ID mismatch: pilot at index " + i + " has ID " + pilot_data.id);
    }
  }
  _ref1 = basic_cards.upgradesById;
  for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
    upgrade_data = _ref1[i];
    if (upgrade_data.id !== i) {
      throw new Error("ID mismatch: upgrade at index " + i + " has ID " + upgrade_data.id);
    }
  }
  _ref2 = basic_cards.titlesById;
  for (i = _k = 0, _len2 = _ref2.length; _k < _len2; i = ++_k) {
    title_data = _ref2[i];
    if (title_data.id !== i) {
      throw new Error("ID mismatch: title at index " + i + " has ID " + title_data.id);
    }
  }
  _ref3 = basic_cards.modificationsById;
  for (i = _l = 0, _len3 = _ref3.length; _l < _len3; i = ++_l) {
    modification_data = _ref3[i];
    if (modification_data.id !== i) {
      throw new Error("ID mismatch: modification at index " + i + " has ID " + modification_data.id);
    }
  }
  _ref4 = basic_cards.conditionsById;
  for (i = _m = 0, _len4 = _ref4.length; _m < _len4; i = ++_m) {
    condition_data = _ref4[i];
    if (condition_data.id !== i) {
      throw new Error("ID mismatch: condition at index " + i + " has ID " + condition_data.id);
    }
  }
  exportObj.pilots = {};
  _ref5 = basic_cards.pilotsById;
  for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
    pilot_data = _ref5[_n];
    if (pilot_data.skip == null) {
      pilot_data.sources = [];
      pilot_data.english_name = pilot_data.name;
      pilot_data.english_ship = pilot_data.ship;
      if (pilot_data.canonical_name == null) {
        pilot_data.canonical_name = pilot_data.english_name.canonicalize();
      }
      exportObj.pilots[pilot_data.name] = pilot_data;
    }
  }
  for (pilot_name in pilot_translations) {
    translations = pilot_translations[pilot_name];
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.pilots[pilot_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for pilot " + pilot_name);
        throw e;
      }
    }
  }
  exportObj.upgrades = {};
  _ref6 = basic_cards.upgradesById;
  for (_o = 0, _len6 = _ref6.length; _o < _len6; _o++) {
    upgrade_data = _ref6[_o];
    if (upgrade_data.skip == null) {
      upgrade_data.sources = [];
      upgrade_data.english_name = upgrade_data.name;
      if (upgrade_data.canonical_name == null) {
        upgrade_data.canonical_name = upgrade_data.english_name.canonicalize();
      }
      exportObj.upgrades[upgrade_data.name] = upgrade_data;
    }
  }
  for (upgrade_name in upgrade_translations) {
    translations = upgrade_translations[upgrade_name];
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.upgrades[upgrade_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for upgrade " + upgrade_name);
        throw e;
      }
    }
  }
  exportObj.modifications = {};
  _ref7 = basic_cards.modificationsById;
  for (_p = 0, _len7 = _ref7.length; _p < _len7; _p++) {
    modification_data = _ref7[_p];
    if (modification_data.skip == null) {
      modification_data.sources = [];
      modification_data.english_name = modification_data.name;
      if (modification_data.canonical_name == null) {
        modification_data.canonical_name = modification_data.english_name.canonicalize();
      }
      exportObj.modifications[modification_data.name] = modification_data;
    }
  }
  for (modification_name in modification_translations) {
    translations = modification_translations[modification_name];
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.modifications[modification_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for modification " + modification_name);
        throw e;
      }
    }
  }
  exportObj.titles = {};
  _ref8 = basic_cards.titlesById;
  for (_q = 0, _len8 = _ref8.length; _q < _len8; _q++) {
    title_data = _ref8[_q];
    if (title_data.skip == null) {
      title_data.sources = [];
      title_data.english_name = title_data.name;
      if (title_data.canonical_name == null) {
        title_data.canonical_name = title_data.english_name.canonicalize();
      }
      exportObj.titles[title_data.name] = title_data;
    }
  }
  for (title_name in title_translations) {
    translations = title_translations[title_name];
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.titles[title_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for title " + title_name);
        throw e;
      }
    }
  }
  exportObj.conditions = {};
  _ref9 = basic_cards.conditionsById;
  for (_r = 0, _len9 = _ref9.length; _r < _len9; _r++) {
    condition_data = _ref9[_r];
    if (condition_data.skip == null) {
      condition_data.sources = [];
      condition_data.english_name = condition_data.name;
      if (condition_data.canonical_name == null) {
        condition_data.canonical_name = condition_data.english_name.canonicalize();
      }
      exportObj.conditions[condition_data.name] = condition_data;
    }
  }
  for (condition_name in condition_translations) {
    translations = condition_translations[condition_name];
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.conditions[condition_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for condition " + condition_name);
        throw e;
      }
    }
  }
  _ref10 = basic_cards.ships;
  for (ship_name in _ref10) {
    ship_data = _ref10[ship_name];
    if (ship_data.english_name == null) {
      ship_data.english_name = ship_name;
    }
    if (ship_data.canonical_name == null) {
      ship_data.canonical_name = ship_data.english_name.canonicalize();
    }
  }
  _ref11 = exportObj.manifestByExpansion;
  for (expansion in _ref11) {
    cards = _ref11[expansion];
    for (_s = 0, _len10 = cards.length; _s < _len10; _s++) {
      card = cards[_s];
      if (card.skipForSource) {
        continue;
      }
      try {
        switch (card.type) {
          case 'pilot':
            exportObj.pilots[card.name].sources.push(expansion);
            break;
          case 'upgrade':
            exportObj.upgrades[card.name].sources.push(expansion);
            break;
          case 'modification':
            exportObj.modifications[card.name].sources.push(expansion);
            break;
          case 'title':
            exportObj.titles[card.name].sources.push(expansion);
            break;
          case 'ship':
            '';
            break;
          default:
            throw new Error("Unexpected card type " + card.type + " for card " + card.name + " of " + expansion);
        }
      } catch (_error) {
        e = _error;
        console.error("Error adding card " + card.name + " (" + card.type + ") from " + expansion);
      }
    }
  }
  _ref12 = exportObj.pilots;
  for (name in _ref12) {
    card = _ref12[name];
    card.sources = card.sources.sort();
  }
  _ref13 = exportObj.upgrades;
  for (name in _ref13) {
    card = _ref13[name];
    card.sources = card.sources.sort();
  }
  _ref14 = exportObj.modifications;
  for (name in _ref14) {
    card = _ref14[name];
    card.sources = card.sources.sort();
  }
  _ref15 = exportObj.titles;
  for (name in _ref15) {
    card = _ref15[name];
    card.sources = card.sources.sort();
  }
  exportObj.expansions = {};
  exportObj.pilotsById = {};
  exportObj.pilotsByLocalizedName = {};
  _ref16 = exportObj.pilots;
  for (pilot_name in _ref16) {
    pilot = _ref16[pilot_name];
    exportObj.fixIcons(pilot);
    exportObj.pilotsById[pilot.id] = pilot;
    exportObj.pilotsByLocalizedName[pilot.name] = pilot;
    _ref17 = pilot.sources;
    for (_t = 0, _len11 = _ref17.length; _t < _len11; _t++) {
      source = _ref17[_t];
      if (!(source in exportObj.expansions)) {
        exportObj.expansions[source] = 1;
      }
    }
  }
  if (Object.keys(exportObj.pilotsById).length !== Object.keys(exportObj.pilots).length) {
    throw new Error("At least one pilot shares an ID with another");
  }
  exportObj.pilotsByFactionCanonicalName = {};
  exportObj.pilotsByUniqueName = {};
  _ref18 = exportObj.pilots;
  for (pilot_name in _ref18) {
    pilot = _ref18[pilot_name];
    ((_base = ((_base1 = exportObj.pilotsByFactionCanonicalName)[_name1 = pilot.faction] != null ? _base1[_name1] : _base1[_name1] = {}))[_name = pilot.canonical_name] != null ? _base[_name] : _base[_name] = []).push(pilot);
    ((_base2 = exportObj.pilotsByUniqueName)[_name2 = pilot.canonical_name.getXWSBaseName()] != null ? _base2[_name2] : _base2[_name2] = []).push(pilot);
  }
  exportObj.pilotsByFactionXWS = {};
  _ref19 = exportObj.pilots;
  for (pilot_name in _ref19) {
    pilot = _ref19[pilot_name];
    ((_base3 = ((_base4 = exportObj.pilotsByFactionXWS)[_name4 = pilot.faction] != null ? _base4[_name4] : _base4[_name4] = {}))[_name3 = pilot.xws] != null ? _base3[_name3] : _base3[_name3] = []).push(pilot);
  }
  exportObj.upgradesById = {};
  exportObj.upgradesByLocalizedName = {};
  _ref20 = exportObj.upgrades;
  for (upgrade_name in _ref20) {
    upgrade = _ref20[upgrade_name];
    exportObj.fixIcons(upgrade);
    exportObj.upgradesById[upgrade.id] = upgrade;
    exportObj.upgradesByLocalizedName[upgrade.name] = upgrade;
    _ref21 = upgrade.sources;
    for (_u = 0, _len12 = _ref21.length; _u < _len12; _u++) {
      source = _ref21[_u];
      if (!(source in exportObj.expansions)) {
        exportObj.expansions[source] = 1;
      }
    }
  }
  if (Object.keys(exportObj.upgradesById).length !== Object.keys(exportObj.upgrades).length) {
    throw new Error("At least one upgrade shares an ID with another");
  }
  exportObj.upgradesBySlotCanonicalName = {};
  exportObj.upgradesBySlotXWSName = {};
  exportObj.upgradesBySlotUniqueName = {};
  _ref22 = exportObj.upgrades;
  for (upgrade_name in _ref22) {
    upgrade = _ref22[upgrade_name];
    ((_base5 = exportObj.upgradesBySlotCanonicalName)[_name5 = upgrade.slot] != null ? _base5[_name5] : _base5[_name5] = {})[upgrade.canonical_name] = upgrade;
    ((_base6 = exportObj.upgradesBySlotXWSName)[_name6 = upgrade.slot] != null ? _base6[_name6] : _base6[_name6] = {})[upgrade.xws] = upgrade;
    ((_base7 = exportObj.upgradesBySlotUniqueName)[_name7 = upgrade.slot] != null ? _base7[_name7] : _base7[_name7] = {})[upgrade.canonical_name.getXWSBaseName()] = upgrade;
  }
  exportObj.modificationsById = {};
  exportObj.modificationsByLocalizedName = {};
  _ref23 = exportObj.modifications;
  for (modification_name in _ref23) {
    modification = _ref23[modification_name];
    exportObj.fixIcons(modification);
    if (modification.huge != null) {
      if (modification.restriction_func == null) {
        modification.restriction_func = exportObj.hugeOnly;
      }
    } else if (modification.restriction_func == null) {
      modification.restriction_func = function(ship) {
        var _ref24;
        return !((_ref24 = ship.data.huge) != null ? _ref24 : false);
      };
    }
    exportObj.modificationsById[modification.id] = modification;
    exportObj.modificationsByLocalizedName[modification.name] = modification;
    _ref24 = modification.sources;
    for (_v = 0, _len13 = _ref24.length; _v < _len13; _v++) {
      source = _ref24[_v];
      if (!(source in exportObj.expansions)) {
        exportObj.expansions[source] = 1;
      }
    }
  }
  if (Object.keys(exportObj.modificationsById).length !== Object.keys(exportObj.modifications).length) {
    throw new Error("At least one modification shares an ID with another");
  }
  exportObj.modificationsByCanonicalName = {};
  exportObj.modificationsByUniqueName = {};
  _ref25 = exportObj.modifications;
  for (modification_name in _ref25) {
    modification = _ref25[modification_name];
    (exportObj.modificationsByCanonicalName != null ? exportObj.modificationsByCanonicalName : exportObj.modificationsByCanonicalName = {})[modification.canonical_name] = modification;
    (exportObj.modificationsByUniqueName != null ? exportObj.modificationsByUniqueName : exportObj.modificationsByUniqueName = {})[modification.canonical_name.getXWSBaseName()] = modification;
  }
  exportObj.titlesById = {};
  exportObj.titlesByLocalizedName = {};
  _ref26 = exportObj.titles;
  for (title_name in _ref26) {
    title = _ref26[title_name];
    exportObj.fixIcons(title);
    exportObj.titlesById[title.id] = title;
    exportObj.titlesByLocalizedName[title.name] = title;
    _ref27 = title.sources;
    for (_w = 0, _len14 = _ref27.length; _w < _len14; _w++) {
      source = _ref27[_w];
      if (!(source in exportObj.expansions)) {
        exportObj.expansions[source] = 1;
      }
    }
  }
  if (Object.keys(exportObj.titlesById).length !== Object.keys(exportObj.titles).length) {
    throw new Error("At least one title shares an ID with another");
  }
  exportObj.conditionsById = {};
  _ref28 = exportObj.conditions;
  for (condition_name in _ref28) {
    condition = _ref28[condition_name];
    exportObj.fixIcons(condition);
    exportObj.conditionsById[condition.id] = condition;
    _ref29 = condition.sources;
    for (_x = 0, _len15 = _ref29.length; _x < _len15; _x++) {
      source = _ref29[_x];
      if (!(source in exportObj.expansions)) {
        exportObj.expansions[source] = 1;
      }
    }
  }
  if (Object.keys(exportObj.conditionsById).length !== Object.keys(exportObj.conditions).length) {
    throw new Error("At least one condition shares an ID with another");
  }
  exportObj.titlesByShip = {};
  _ref30 = exportObj.titles;
  for (title_name in _ref30) {
    title = _ref30[title_name];
    if (!(title.ship in exportObj.titlesByShip)) {
      exportObj.titlesByShip[title.ship] = [];
    }
    exportObj.titlesByShip[title.ship].push(title);
  }
  exportObj.titlesByCanonicalName = {};
  exportObj.titlesByUniqueName = {};
  _ref31 = exportObj.titles;
  for (title_name in _ref31) {
    title = _ref31[title_name];
    if (title.canonical_name === '"Heavy Scyk" Interceptor'.canonicalize()) {
      ((_base8 = (exportObj.titlesByCanonicalName != null ? exportObj.titlesByCanonicalName : exportObj.titlesByCanonicalName = {}))[_name8 = title.canonical_name] != null ? _base8[_name8] : _base8[_name8] = []).push(title);
      ((_base9 = (exportObj.titlesByUniqueName != null ? exportObj.titlesByUniqueName : exportObj.titlesByUniqueName = {}))[_name9 = title.canonical_name.getXWSBaseName()] != null ? _base9[_name9] : _base9[_name9] = []).push(title);
    } else {
      (exportObj.titlesByCanonicalName != null ? exportObj.titlesByCanonicalName : exportObj.titlesByCanonicalName = {})[title.canonical_name] = title;
      (exportObj.titlesByUniqueName != null ? exportObj.titlesByUniqueName : exportObj.titlesByUniqueName = {})[title.canonical_name.getXWSBaseName()] = title;
    }
  }
  exportObj.conditionsByCanonicalName = {};
  _ref32 = exportObj.conditions;
  for (condition_name in _ref32) {
    condition = _ref32[condition_name];
    (exportObj.conditionsByCanonicalName != null ? exportObj.conditionsByCanonicalName : exportObj.conditionsByCanonicalName = {})[condition.canonical_name] = condition;
  }
  return exportObj.expansions = Object.keys(exportObj.expansions).sort();
};

exportObj.fixIcons = function(data) {
  if (data.text != null) {
    return data.text = data.text.replace(/%ASTROMECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-astromech"></i>').replace(/%BULLSEYEARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bullseyearc"></i>').replace(/%GUNNER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-gunner"></i>').replace(/%SINGLETURRETARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-singleturretarc"></i>').replace(/%FRONTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-frontarc"></i>').replace(/%REARARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reararc"></i>').replace(/%ROTATEARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-rotatearc"></i>').replace(/%FULLFRONTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-fullfrontarc"></i>').replace(/%FULLREARARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-fullreararc"></i>').replace(/%DEVICE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-device"></i>').replace(/%RELOAD%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reload"></i>').replace(/%CONFIG%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-config"></i>').replace(/%FORCE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-forcecharge"></i>').replace(/%CHARGE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-charge"></i>').replace(/%CALCULATE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-calculate"></i>').replace(/%BANKLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bankleft"></i>').replace(/%BANKRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bankright"></i>').replace(/%BARRELROLL%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-barrelroll"></i>').replace(/%BOMB%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bomb"></i>').replace(/%BOOST%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-boost"></i>').replace(/%CANNON%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cannon"></i>').replace(/%CARGO%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cargo"></i>').replace(/%CLOAK%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cloak"></i>').replace(/%COORDINATE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-coordinate"></i>').replace(/%CRIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-crit"></i>').replace(/%CREW%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-crew"></i>').replace(/%DUALCARD%/g, '<span class="card-restriction">Dual card.</span>').replace(/%ELITE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-elite"></i>').replace(/%EVADE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-evade"></i>').replace(/%FOCUS%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-focus"></i>').replace(/%HARDPOINT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hardpoint"></i>').replace(/%HIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hit"></i>').replace(/%ILLICIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-illicit"></i>').replace(/%JAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-jam"></i>').replace(/%KTURN%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-kturn"></i>').replace(/%MISSILE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-missile"></i>').replace(/%RECOVER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-recover"></i>').replace(/%REINFORCE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reinforce"></i>').replace(/%SALVAGEDASTROMECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-salvagedastromech"></i>').replace(/%SLAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-slam"></i>').replace(/%SLOOPLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sloopleft"></i>').replace(/%SLOOPRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sloopright"></i>').replace(/%STRAIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-straight"></i>').replace(/%STOP%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-stop"></i>').replace(/%SENSOR%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-system"></i>').replace(/%LOCK%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-lock"></i>').replace(/%TEAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-team"></i>').replace(/%TECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-tech"></i>').replace(/%TORPEDO%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-torpedo"></i>').replace(/%TROLLLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-trollleft"></i>').replace(/%TROLLRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-trollright"></i>').replace(/%TURNLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turnleft"></i>').replace(/%TURNRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turnright"></i>').replace(/%TURRET%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turret"></i>').replace(/%UTURN%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-kturn"></i>').replace(/%HUGESHIPONLY%/g, '<span class="card-restriction">Huge ship only.</span>').replace(/%LARGESHIPONLY%/g, '<span class="card-restriction">Large ship only.</span>').replace(/%SMALLSHIPONLY%/g, '<span class="card-restriction">Small ship only.</span>').replace(/%REBELONLY%/g, '<span class="card-restriction">Rebel only.</span>').replace(/%IMPERIALONLY%/g, '<span class="card-restriction">Imperial only.</span>').replace(/%SCUMONLY%/g, '<span class="card-restriction">Scum only.</span>').replace(/%LIMITED%/g, '<span class="card-restriction">Limited.</span>').replace(/%LINEBREAK%/g, '<br /><br />').replace(/%DE_HUGESHIPONLY%/g, '<span class="card-restriction">Nur für riesige Schiffe.</span>').replace(/%DE_LARGESHIPONLY%/g, '<span class="card-restriction">Nur für grosse Schiffe.</span>').replace(/%DE_REBELONLY%/g, '<span class="card-restriction">Nur für Rebellen.</span>').replace(/%DE_IMPERIALONLY%/g, '<span class="card-restriction">Nur für das Imperium.</span>').replace(/%DE_SCUMONLY%/g, '<span class="card-restriction">Nur für Abschaum & Kriminelle.</span>').replace(/%DE_GOZANTIONLY%/g, '<span class="card-restriction">Nur für Kreuzer der <em>Gozanti</em>-Klasse.</span>').replace(/%DE_LIMITED%/g, '<span class="card-restriction">Limitiert.</span>').replace(/%DE_SMALLSHIPONLY%/g, '<span class="card-restriction">Nur für kleine Schiffe.</span>').replace(/%DE_DUALCARD%/g, '<span class="card-restriction">Doppelseiteige Karte.</span>').replace(/%FR_HUGESHIPONLY%/g, '<span class="card-restriction">Vaisseau immense uniquement.</span>').replace(/%FR_LARGESHIPONLY%/g, '<span class="card-restriction">Grand vaisseau uniquement.</span>').replace(/%FR_REBELONLY%/g, '<span class="card-restriction">Rebelle uniquement.</span>').replace(/%FR_IMPERIALONLY%/g, '<span class="card-restriction">Impérial uniquement.</span>').replace(/%FR_SCUMONLY%/g, '<span class="card-restriction">Racailles uniquement.</span>');
  }
};

exportObj.canonicalizeShipNames = function(card_data) {
  var ship_data, ship_name, _ref, _results;
  _ref = card_data.ships;
  _results = [];
  for (ship_name in _ref) {
    ship_data = _ref[ship_name];
    ship_data.english_name = ship_name;
    _results.push(ship_data.canonical_name != null ? ship_data.canonical_name : ship_data.canonical_name = ship_data.english_name.canonicalize());
  }
  return _results;
};

exportObj.renameShip = function(english_name, new_name) {
  exportObj.ships[new_name] = exportObj.ships[english_name];
  exportObj.ships[new_name].name = new_name;
  exportObj.ships[new_name].english_name = english_name;
  return delete exportObj.ships[english_name];
};

exportObj.randomizer = function(faction_name, points) {
  var listcount, shiplistmaster;
  shiplistmaster = exportObj.basicCardData;
  return listcount = 0;
};

exportObj = typeof exports !== "undefined" && exports !== null ? exports : this;

if (exportObj.codeToLanguage == null) {
  exportObj.codeToLanguage = {};
}

exportObj.codeToLanguage.en = 'English';

if (exportObj.translations == null) {
  exportObj.translations = {};
}

exportObj.translations.English = {
  action: {
    "Barrel Roll": '<i class="xwing-miniatures-font xwing-miniatures-font-barrelroll"></i>',
    "Boost": '<i class="xwing-miniatures-font xwing-miniatures-font-boost"></i>',
    "Evade": '<i class="xwing-miniatures-font xwing-miniatures-font-evade"></i>',
    "Focus": '<i class="xwing-miniatures-font xwing-miniatures-font-focus"></i>',
    "Lock": '<i class="xwing-miniatures-font xwing-miniatures-font-lock"></i>',
    "Reload": '<i class="xwing-miniatures-font xwing-miniatures-font-reload"></i>',
    "Rotate Arc": '<i class="xwing-miniatures-font xwing-miniatures-font-rotatearc"></i>',
    "Reinforce": '<i class="xwing-miniatures-font xwing-miniatures-font-reinforce"></i>',
    "Jam": '<i class="xwing-miniatures-font xwing-miniatures-font-jam"></i>',
    "Calculate": '<i class="xwing-miniatures-font xwing-miniatures-font-calculate"></i>',
    "Coordinate": '<i class="xwing-miniatures-font xwing-miniatures-font-coordinate"></i>',
    "Cloak": '<i class="xwing-miniatures-font xwing-miniatures-font-cloak"></i>',
    "Slam": '<i class="xwing-miniatures-font xwing-miniatures-font-slam"></i>',
    "R> Barrel Roll": '<r><i class="xwing-miniatures-font xwing-miniatures-font-linked"></i> <i class="xwing-miniatures-font xwing-miniatures-font-barrelroll"></i></r>',
    "R> Focus": '<r><i class="xwing-miniatures-font xwing-miniatures-font-linked"></i> <i class="xwing-miniatures-font xwing-miniatures-font-focus"></i></r>',
    "R> Lock": '<r><i class="xwing-miniatures-font xwing-miniatures-font-linked"></i> <i class="xwing-miniatures-font xwing-miniatures-font-lock"></i></r>',
    "> Rotate Arc": '<i class="xwing-miniatures-font xwing-miniatures-font-linked"></i> <i class="xwing-miniatures-font xwing-miniatures-font-rotatearc"></i>',
    "R> Rotate Arc": '<r><i class="xwing-miniatures-font xwing-miniatures-font-linked"></i> <i class="xwing-miniatures-font xwing-miniatures-font-rotatearc"></i></r>',
    "R> Evade": '<r><i class="xwing-miniatures-font xwing-miniatures-font-linked"></i> <i class="xwing-miniatures-font xwing-miniatures-font-evade"></i></r>',
    "R> Calculate": '<r><i class="xwing-miniatures-font xwing-miniatures-font-linked"></i> <i class="xwing-miniatures-font xwing-miniatures-font-calculate"></i></r>'
  },
  sloticon: {
    "Astromech": '<i class="xwing-miniatures-font xwing-miniatures-font-astromech"></i>',
    "Force": '<i class="xwing-miniatures-font xwing-miniatures-font-forcepower"></i>',
    "Bomb": '<i class="xwing-miniatures-font xwing-miniatures-font-bomb"></i>',
    "Cannon": '<i class="xwing-miniatures-font xwing-miniatures-font-cannon"></i>',
    "Crew": '<i class="xwing-miniatures-font xwing-miniatures-font-crew"></i>',
    "Talent": '<i class="xwing-miniatures-font xwing-miniatures-font-talent"></i>',
    "Missile": '<i class="xwing-miniatures-font xwing-miniatures-font-missile"></i>',
    "Sensor": '<i class="xwing-miniatures-font xwing-miniatures-font-system"></i>',
    "Torpedo": '<i class="xwing-miniatures-font xwing-miniatures-font-torpedo"></i>',
    "Turret": '<i class="xwing-miniatures-font xwing-miniatures-font-turret"></i>',
    "Illicit": '<i class="xwing-miniatures-font xwing-miniatures-font-illicit"></i>',
    "Configuration": '<i class="xwing-miniatures-font xwing-miniatures-font-configuration"></i>',
    "Modification": '<i class="xwing-miniatures-font xwing-miniatures-font-modification"></i>',
    "Gunner": '<i class="xwing-miniatures-font xwing-miniatures-font-gunner"></i>',
    "Device": '<i class="xwing-miniatures-font xwing-miniatures-font-device"></i>',
    "Tech": '<i class="xwing-miniatures-font xwing-miniatures-font-tech"></i>',
    "Title": '<i class="xwing-miniatures-font xwing-miniatures-font-title"></i>'
  },
  slot: {
    "Astromech": "Astromech",
    "Force": "Force",
    "Bomb": "Bomb",
    "Cannon": "Cannon",
    "Crew": "Crew",
    "Missile": "Missile",
    "Sensor": "Sensor",
    "Torpedo": "Torpedo",
    "Turret": "Turret",
    "Hardpoint": "Hardpoint",
    "Illicit": "Illicit",
    "Configuration": "Configuration",
    "Talent": "Talent",
    "Modification": "Modification",
    "Gunner": "Gunner",
    "Device": "Device",
    "Tech": "Tech",
    "Title": "Title"
  },
  sources: {
    "Core": "Core",
    "The Force Awakens Core Set": "The Force Awakens Core Set"
  },
  ui: {
    shipSelectorPlaceholder: "Select a ship",
    pilotSelectorPlaceholder: "Select a pilot",
    upgradePlaceholder: function(translator, language, slot) {
      return "No " + (translator(language, 'slot', slot)) + " Upgrade";
    },
    modificationPlaceholder: "No Modification",
    titlePlaceholder: "No Title",
    upgradeHeader: function(translator, language, slot) {
      return "" + (translator(language, 'slot', slot)) + " Upgrade";
    },
    unreleased: "unreleased",
    epic: "epic",
    limited: "limited"
  },
  byCSSSelector: {
    '.unreleased-content-used .translated': 'This squad uses unreleased content!',
    '.epic-content-used .translated': 'This squad uses Epic content!',
    '.illegal-epic-too-many-small-ships .translated': 'You may not field more than 12 of the same type Small ship!',
    '.illegal-epic-too-many-large-ships .translated': 'You may not field more than 6 of the same type Large ship!',
    '.collection-invalid .translated': 'You cannot field this list with your collection!',
    '.game-type-selector option[value="standard"]': 'Standard',
    '.game-type-selector option[value="custom"]': 'Custom',
    '.game-type-selector option[value="epic"]': 'Epic',
    '.game-type-selector option[value="team-epic"]': 'Team Epic',
    '.xwing-card-browser option[value="name"]': 'Name',
    '.xwing-card-browser option[value="source"]': 'Source',
    '.xwing-card-browser option[value="type-by-points"]': 'Type (by Points)',
    '.xwing-card-browser option[value="type-by-name"]': 'Type (by Name)',
    '.xwing-card-browser .translate.select-a-card': 'Select a card from the list at the left.',
    '.xwing-card-browser .translate.sort-cards-by': 'Sort cards by',
    '.info-well .info-ship td.info-header': 'Ship',
    '.info-well .info-skill td.info-header': 'Initiative',
    '.info-well .info-actions td.info-header': 'Actions',
    '.info-well .info-upgrades td.info-header': 'Upgrades',
    '.info-well .info-range td.info-header': 'Range',
    '.clear-squad': 'New Squad',
    '.save-list': 'Save',
    '.save-list-as': 'Save as…',
    '.delete-list': 'Delete',
    '.backend-list-my-squads': 'Load squad',
    '.view-as-text': '<span class="hidden-phone"><i class="fa fa-print"></i>&nbsp;Print/View as </span>Text',
    '.randomize': 'Random!',
    '.randomize-options': 'Randomizer options…',
    '.notes-container > span': 'Squad Notes',
    '.bbcode-list': 'Copy the BBCode below and paste it into your forum post.<textarea></textarea><button class="btn btn-copy">Copy</button>',
    '.html-list': '<textarea></textarea><button class="btn btn-copy">Copy</button>',
    '.vertical-space-checkbox': "Add space for damage/upgrade cards when printing <input type=\"checkbox\" class=\"toggle-vertical-space\" />",
    '.color-print-checkbox': "Print color <input type=\"checkbox\" class=\"toggle-color-print\" />",
    '.print-list': '<i class="fa fa-print"></i>&nbsp;Print',
    '.do-randomize': 'Randomize!',
    '#browserTab': 'Card Browser',
    '#aboutTab': 'About',
    '.choose-obstacles': 'Choose Obstacles',
    '.choose-obstacles-description': 'Choose up to three obstacles to include in the permalink for use in external programs. (This feature is in BETA; support for displaying which obstacles were selected in the printout is not yet supported.)',
    '.coreasteroid0-select': 'Core Asteroid 0',
    '.coreasteroid1-select': 'Core Asteroid 1',
    '.coreasteroid2-select': 'Core Asteroid 2',
    '.coreasteroid3-select': 'Core Asteroid 3',
    '.coreasteroid4-select': 'Core Asteroid 4',
    '.coreasteroid5-select': 'Core Asteroid 5',
    '.yt2400debris0-select': 'YT2400 Debris 0',
    '.yt2400debris1-select': 'YT2400 Debris 1',
    '.yt2400debris2-select': 'YT2400 Debris 2',
    '.vt49decimatordebris0-select': 'VT49 Debris 0',
    '.vt49decimatordebris1-select': 'VT49 Debris 1',
    '.vt49decimatordebris2-select': 'VT49 Debris 2',
    '.core2asteroid0-select': 'Force Awakens Asteroid 0',
    '.core2asteroid1-select': 'Force Awakens Asteroid 1',
    '.core2asteroid2-select': 'Force Awakens Asteroid 2',
    '.core2asteroid3-select': 'Force Awakens Asteroid 3',
    '.core2asteroid4-select': 'Force Awakens Asteroid 4',
    '.core2asteroid5-select': 'Force Awakens Asteroid 5'
  },
  singular: {
    'pilots': 'Pilot',
    'modifications': 'Modification',
    'titles': 'Title'
  },
  types: {
    'Pilot': 'Pilot',
    'Modification': 'Modification',
    'Title': 'Title'
  }
};

if (exportObj.cardLoaders == null) {
  exportObj.cardLoaders = {};
}

exportObj.cardLoaders.English = function() {
  var basic_cards, condition_translations, modification_translations, pilot_translations, title_translations, upgrade_translations;
  exportObj.cardLanguage = 'English';
  basic_cards = exportObj.basicCardData();
  exportObj.canonicalizeShipNames(basic_cards);
  exportObj.ships = basic_cards.ships;
  pilot_translations = {
    "4-LOM": {
      text: "After you fully execute a red maneuver, gain 1 calculate token. At the start of the End Phase, you may choose 1 ship at range 0-1. If you do, transfer 1 of your stress tokens to that ship."
    },
    "Academy Pilot": {
      text: " "
    },
    "Airen Cracken": {
      text: "After you perform an attack, you may choose 1 friendly ship at range 1. That ship may perform an action, treating it as red."
    },
    "Alpha Squadron Pilot": {
      text: "AUTOTHRUSTERS: After you perform an action. you may perform a red %BARRELROLL% or a red %BOOST% action."
    },
    "AP-5": {
      text: "While you coordinate, if you chose a ship with exactly 1 stress token, it can perform actions. %LINEBREAK% COMMS SHUTTLE: While you are docked, your carrier ship gains %COORDINATE%. Before your carrier ship activates, it may perform a %COORDINATE% action."
    },
    "Arvel Crynyd": {
      text: "You can perform primary attacks at range 0. If you would fail a %BOOST% action by overlapping another ship, resolve it as though you were partially executing a maneuver instead. %LINEBREAK% VECTORED THRUSTERS: After you perform an action, you may perform a red %BOOST% action."
    },
    "Asajj Ventress": {
      text: "At the start of the Engagement Phase, you may choose 1 enemy ship in your %SINGLETURRETARC% at range 0-2 and spend 1 %FORCE% token. If you do, that ship gains 1 stress token unless it removes 1 green token."
    },
    "Autopilot Drone": {
      text: "RIGGED ENERGY CELLS: During the System Phase, if you are not docked, lose 1 %CHARGE%. At the end of the Activation Phase, if you have 0 %CHARGE%, you are destroyed. Before you are removed each ship at range 0-1 suffers 1 %CRIT% damage"
    },
    "Bandit Squadron Pilot": {
      text: " "
    },
    "Baron of the Empire": {
      text: " "
    },
    "Benthic Two-Tubes": {
      text: "After you perform a %FOCUS% action, you may transfer 1 of your focus tokens to a friendly ship at range 1-2."
    },
    "Biggs Darklighter": {
      text: "While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 %HIT% or %CRIT% damage to cancel 1 matching result."
    },
    "Binayre Pirate": {
      text: " "
    },
    "Black Squadron Ace": {
      text: " "
    },
    "Black Squadron Scout": {
      text: "ADAPTIVE AILERONS: Before you reveal your dial, if you are not stressed, you MUST execute a white (1 %BANKLEFT%), (1 %STRAIGHT%) or (1 %BANKRIGHT%)"
    },
    "Black Sun Ace": {
      text: " "
    },
    "Black Sun Assassin": {
      text: "MICROTHRUSTERS: While you perform a barrel roll, you MUST use the (1 %BANKLEFT%) or (1 %BANKRIGHT%) template instead of the [1 %STRAIGHT%] template."
    },
    "Black Sun Enforcer": {
      text: "MICROTHRUSTERS: While you perform a barrel roll, you MUST use the (1 %BANKLEFT%) or (1 %BANKRIGHT%) template instead of the [1 %STRAIGHT%] template."
    },
    "Black Sun Soldier": {
      text: " "
    },
    "Blade Squadron Veteran": {
      text: " "
    },
    "Blue Squadron Escort": {
      text: " "
    },
    "Blue Squadron Pilot": {
      text: " "
    },
    "Blue Squadron Scout": {
      text: " "
    },
    "Boba Fett": {
      text: "While you defend or perform an attack, you may reroll 1 of your dice for each enemy ship at range 0-1."
    },
    "Bodhi Rook": {
      text: "Friendly ships can acquire locks onto objects at range 0-3 of any friendly ship."
    },
    "Bossk": {
      text: "While you perform a primary attack, after the Neutralize Results step, you may spend 1 %CRIT% result to add 2 %HIT% results."
    },
    "Bounty Hunter": {
      text: " "
    },
    "Braylen Stramm": {
      text: "While you defend or perform an attack, if you are stressed, you may reroll up to 2 of your dice."
    },
    "Captain Feroph": {
      text: "While you defend, if the attacker does not have any green tokens, you may change 1 of your blank or %FOCUS% results to an %EVADE% result. %LINEBREAK% ADAPTIVE AILERONS: Before you reveal your dial, if you are not stressed, you MUST execute a white (1 %BANKLEFT%), (1 %STRAIGHT%) or (1 %BANKRIGHT%)"
    },
    "Captain Jonus": {
      text: "While a friendly ship at range 0-1 performs a %TORPEDO% or %MISSILE% attack, that ship may reroll up to 2 attack dice. %LINEBREAK% NIMBLE BOMBER: If you would drop a device using a %STRAIGHT% template, you may use %BANKLEFT% a or %BANKRIGHT% tempate of the same speed instead."
    },
    "Captain Jostero": {
      text: "After an enemy ship suffers damage, if it is not defending, you may perform a bonus attack against that ship."
    },
    "Captain Kagi": {
      text: "At the start of the Engagement Phase, you may choose 1 or more friendly ships at range 0-3. If you do, transfer all enemy lock tokens from the chosen ships to you."
    },
    "Captain Nym": {
      text: "Before a friendly bomb or mine would detonate, you may spend 1 %CHARGE% to prevent it from detonating. While you defend against an attack obstructed by a bomb or mine, roll 1 additional defense die."
    },
    "Captain Oicunn": {
      text: "You can perform primary attacks at range 0."
    },
    "Captain Rex": {
      text: "After you perform an attack, assign the Suppressive Fire condition to the defender."
    },
    "Cartel Executioner": {
      text: "DEAD TO RIGHTS: While you perform an attack, if the defender is in your %BULLSEYEARC%, defense dice cannot be modified using green tokens."
    },
    "Cartel Marauder": {
      text: "The versatile Kihraxz was modeled after Incom's popular X-wing starfighter, but an array of aftermarket modification kits ensure a wide variety of designs."
    },
    "Cartel Spacer": {
      text: "WEAPON HARDPOINT: You can equip 1 %CANNON%, %TORPEDO% or %MISSILE% upgrade."
    },
    "Cassian Andor": {
      text: "At the start of the Activation Phase, you may choose 1 friendly ship at range 1-3. If you do, that ship removes 1 stress token."
    },
    "Cavern Angels Zealot": {
      text: " "
    },
    "Chewbacca": {
      text: "Before you would be dealt a faceup damage card, you may spend 1 %CHARGE% to be dealt the card facedown instead."
    },
    '"Chopper"': {
      text: "At the start of the Engagement Phase, each enemy ship at range 0 gains 2 jam tokens.TAIL GUN: While you have a docked ship, you have a primary %REARARC% weapon with an attack value equal to your docked ship's Primary %FRONTARC% attack value."
    },
    "Colonel Jendon": {
      text: "At the start of the Activation Phase, you may spend 1 %CHARGE%. If you do, while friendly ships acquire lock this round, they must acquire locks beyond range 3 instead of at range 0-3."
    },
    "Colonel Vessery": {
      text: "While you perform an attack against a locked ship, after you roll attack dice, you may acquire a lock on the defender. %LINEBREAK% FULL THROTTLE: After you FULLY execute a speed 3-5 maneuver, you may perform an %EVADE% action."
    },
    "Constable Zuvio": {
      text: "If you would drop a device, you may launch it using a [1 %STRAIGHT%] template instead. %LINEBREAK% SPACETUG TRACTOR ARRAY: ACTION: Choose a ship in your %FRONTARC% at range 1. That ship gains one tractor token, or 2 tractor tokens if it is in your %BULLSEYEARC% at range 1"
    },
    "Contracted Scout": {
      text: " "
    },
    "Corran Horn": {
      text: "At initiative 0, you may perform a bonus primary attack against an enemy ship in your %BULLSEYEARC%. If you do, at the start of the next Planning Phase, gain 1 disarm token. %LINEBREAK% EXPERIMENTAL SCANNERS: You can acquire locks beyond range 3. You cannot acquite locks at range 1."
    },
    '"Countdown"': {
      text: "While you defend, after the Neutralize Results step, if you are not stressed, you may suffer 1 %HIT% damage and gain 1 stress token. If you do, cancel all dice results. %LINEBREAK% ADAPTIVE AILERONS: Before you reveal your dial, if you are not stressed, you MUST execute a white (1 %BANKLEFT%), (1 %STRAIGHT%) or (1 %BANKRIGHT%)"
    },
    "Countess Ryad": {
      text: "While you would execute a %STRAIGHT% maneuver, you may increase the difficulty of the maneuver. If you do, execute it as a %KTURN% maneuver instead. %LINEBREAK% FULL THROTTLE: After you FULLY execute a speed 3-5 maneuver, you may perform an %EVADE% action."
    },
    "Crymorah Goon": {
      text: " "
    },
    "Cutlass Squadron Pilot": {
      text: " "
    },
    "Dace Bonearm": {
      text: "After an enemy ship at range 0-3 receives at least 1 ion token, you may spend 3 %CHARGE%. If you do, that ship gains 2 additional ion tokens."
    },
    "Dalan Oberos": {
      text: "At the start of the Engagement Phase, you may choose 1 shielded ship in your %BULLSEYEARC% and spend 1 %CHARGE%. If you do, that ship loses 1 shield and you recover 1 shield. %LINEBREAK% DEAD TO RIGHTS: While you perform an attack, if the defender is in your %BULLSEYEARC%, defense dice cannot be modified using green tokens."
    },
    "Dalan Oberos (StarViper)": {
      text: "After you fully execute a maneuver, you may gain 1 stress token to rotate your ship 90˚.  %LINEBREAK% MICROTHRUSTERS: While you perform a barrel roll, you MUST use the (1 %BANKLEFT%) or (1 %BANKRIGHT%) template instead of the [1 %STRAIGHT%] template."
    },
    "Darth Vader": {
      text: "After you perform an action, you may spend 1 %FORCE% to perform an action. %LINEBREAK% ADVANCED TARGETING COMPUTER: While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 %HIT% result to a %CRIT% result."
    },
    "Dash Rendar": {
      text: "While you move, you ignore obstacles. %LINEBREAK% SENSOR BLINDSPOT: While you perform a primary attack at range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die."
    },
    '"Deathfire"': {
      text: "After you are destroyed, before you are removed, you may perform an attack and drop or launch 1 device. %LINEBREAK% NIMBLE BOMBER: If you would drop a device using a %STRAIGHT% template, you may use %BANKLEFT% a or %BANKRIGHT% tempate of the same speed instead."
    },
    '"Deathrain"': {
      text: "After you drop or launch a device, you may perform an action."
    },
    "Del Meeko": {
      text: "While a friendly ship at range 0-2 defends against a damaged attacker, the defender may reroll 1 defense die."
    },
    "Delta Squadron Pilot": {
      text: "FULL THROTTLE: After you FULLY execute a speed 3-5 maneuver, you may perform an %EVADE% action."
    },
    "Dengar": {
      text: "After you defend, if the attcker is in your %FRONTARC%, you may spend 1 %CHARGE% to perform a bonus attack against the attacker."
    },
    '"Double Edge"': {
      text: "After you perform a %TURRET% or %MISSILE% attack that misses, you may perform a bonus attack using a different weapon."
    },
    "Drea Renthal": {
      text: "While a friendly non-limited ship performs an attack, if the defender is in your firing arc, the attacker may reroll 1 attack die."
    },
    '"Duchess"': {
      text: "You may choose not to use your Adaptive Ailerons. You may use your Adaptive Ailerons even while stressed. %LINEBREAK% ADAPTIVE AILERONS: Before you reveal your dial, if you are not stressed, you MUST execute a white (1 %BANKLEFT%), (1 %STRAIGHT%) or (1 %BANKRIGHT%)"
    },
    '"Dutch" Vander': {
      text: "After you perform the %LOCK% action, you may choose 1 friendly ship at range 1-3. That ship may acquire a lock on the object you locked, ignoring range restrictions."
    },
    '"Echo"': {
      text: "While you decloak, you must use the (2 %BANKLEFT%) or (2 %BANKRIGHT%) template instead of the (2 %STRAIGHT%) template. STYGUM ARRAY: After you decloak, you may perform an %EVADE% action. At the Start of the End Phase, you may spend 1 evade token to gain one cloak token."
    },
    "Edrio Two-Tubes": {
      text: "Before you activate, if you are focused, you may perform an action."
    },
    "Emon Azzameen": {
      text: "If you would drop a device using a [1 %STRAIGHT%] template, you may use the [3 %TURNLEFT%], [3 %STRAIGHT%], or [3 %TURNRIGHT%] template instead."
    },
    "Esege Tuketu": {
      text: "While a friendly ship at range 0-2 defends or performs an attack, it may spend your focus tokens as if that ship has them."
    },
    "Evaan Verlaine": {
      text: "At the start of the Engagement Phase, you may spend 1 focus token to choose a friendly ship at range 0-1. If you do, that ship rolls 1 additional defense die while defending until the end of the round."
    },
    "Ezra Bridger": {
      text: "While you defend or perform an attack, if you are stressed, you may spend 1 %FORCE% to change up to 2 of your %FOCUS% results to %EVADE% or %HIT% results. %LINEBREAK% LOCKED AND LOADED: While you are docked, after your carrier ship performs a primary %FRONTARC% or %TURRET% attack, it may perform a bonus %REARARC% attack"
    },
    "Ezra Bridger (Sheathipede)": {
      text: "While you defend or perform an attack, if you are stressed, you may spend 1 %FORCE% to change up to 2 of your %FOCUS% results to %EVADE%/%HIT% results. %LINEBREAK% LOCKED AND LOADED: While you are docked, after your carrier ship performs a primary %FRONTARC% or %TURRET% attack, it may perform a bonus %REARARC% attack"
    },
    "Ezra Bridger (TIE Fighter)": {
      text: "While you defend or perform an attack, if you are stressed, you may spend 1 %FORCE% to change up to 2 of your %FOCUS% results to %EVADE% or %HIT% results."
    },
    "Fenn Rau": {
      text: "While you defend or perform an attack, if the attack range is 1, you may roll 1 additional die. %LINEBREAK% CONCORDIA FACEOFF: While you defend, if the attack range is 1 and you are in the attackers %FRONTARC%, change 1 result to an %EVADE% result"
    },
    "Fenn Rau (Sheathipede)": {
      text: "After an enemy ship in your firing arc engages, if you are not stressed, you may gain 1 stress token. If you do, that ship cannot spend tokens to modify dice while it performs an attack during this phase. %LINEBREAK% COMMS SHUTTLE: While you are docked, your carrier ship gains %COORDINATE%. Before your carrier shpi activates, it may perform a %COORDINATE% action."
    },
    "Freighter Captain": {
      text: " "
    },
    "Gamma Squadron Ace": {
      text: "NIMBLE BOMBER: If you would drop a device using a %STRAIGHT% template, you may use %BANKLEFT% a or %BANKRIGHT% tempate of the same speed instead."
    },
    "Gand Findsman": {
      text: "The legendary Findsmen of Gand worship enshrouding mists of their home planet, using signs, augurs, and mystical rituals to track their quarry."
    },
    "Garven Dreis": {
      text: "After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token."
    },
    "Garven Dreis (X-Wing)": {
      text: "After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token."
    },
    "Gavin Darklighter": {
      text: "While a friendly ship performs an attack, if the defender is in your %FRONTARC%, the attacker may change 1 %HIT% result to a %CRIT% result. %LINEBREAK% EXPERIMENTAL SCANNERS: You can acquire locks beyond range 3. You cannot acquite locks at range 1."
    },
    "Genesis Red": {
      text: "After you acquire a lock, you must remove all of your focus and evade tokens. Then gain the same number of focus and evade tokens that the locked ship has. %LINEBREAK% WEAPON HARDPOINT: You can equip 1 %CANNON%, %TORPEDO% or %MISSILE% upgrade."
    },
    "Gideon Hask": {
      text: "While you perform an attack against a damaged defender, roll 1 additional attack die."
    },
    "Gold Squadron Veteran": {
      text: " "
    },
    "Grand Inquisitor": {
      text: "While you defend at attack range 1, you may spend 1 %FORCE% to prevent the range 1 bonus. While you perform an attack against a defender at attack range 2-3, you may spend 1 %FORCE% to apply the range 1 bonus."
    },
    "Gray Squadron Bomber": {
      text: " "
    },
    "Graz": {
      text: "While you defend, if you are behind the attacker, roll 1 additional defense die. While you perform an attack, if you are behind the defender roll 1 additional attack die."
    },
    "Green Squadron Pilot": {
      text: "VECTORED THRUSTERS: After you perform an action, you may perform a red %BOOST% action."
    },
    "Guri": {
      text: "At the start of the Engagement Phase, if there is at least 1 enemy ship at range 0-1, you may gain 1 focus token.  %LINEBREAK% MICROTHRUSTERS: While you perform a barrel roll, you MUST use the (1 %BANKLEFT%) or (1 %BANKRIGHT%) template instead of the [1 %STRAIGHT%] template."
    },
    "Han Solo (Scum)": {
      text: "Whlie you defend or perform a primary attack, if the attack is obstructed by an obstacle, you may roll 1 additional die."
    },
    "Han Solo": {
      text: "After you roll dice, if you are at range 0-1 of an obstacle, you may reroll all of your dice. This does not count as rerolling for the purpose of other effects."
    },
    "Heff Tobber": {
      text: "After an enemy ship executes a maneuver, if it is at range 0, you may perform an action."
    },
    "Hera Syndulla": {
      text: "After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty. %LINEBREAK% LOCKED AND LOADED: While you are docked, after your carrier ship performs a primary %FRONTARC% or %TURRET% attack, it may perform a bonus %REARARC% attack"
    },
    "Hera Syndulla (VCX-100)": {
      text: "After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty. TAIL GUN: While you have a docked ship, you have a primary %REARARC% weapon with an attack value equal to your docked ship's Primary %FRONTARC% attack value."
    },
    "Hired Gun": {
      text: "Just the mention of Imperial credits can bring a host of less-than-trustworthy individuals to your side."
    },
    "Horton Salm": {
      text: "While you perform an attack, you may reroll 1 attack die for each other friendly ship at range 0-1 of the defender."
    },
    '"Howlrunner"': {
      text: "While a friendly ship at range 0-1 performs a primary attack, that ship may reroll 1 attack die."
    },
    "Ibtisam": {
      text: "After you fully execute a maneuver, if you are stressed, you may roll 1 attack die. On a %HIT% or %CRIT% result, remove 1 stress token."
    },
    "Iden Versio": {
      text: "Before a friendly TIE/ln fighter at range 0-1 would suffer 1 or more damage, you may spend 1 %CHARGE%. If you do, prevent that damage."
    },
    "IG-88A": {
      text: "At the start of the Engagement Phase, you may choose 1 friendly ship with %CALCULATE% on its action bar at range 1-3. If you do, transfer 1 of your calculate tokens to it. %LINEBREAK% ADVANCED DROID BRAIN: After you perform a %CALCULATE% action, gain 1 calculate token."
    },
    "IG-88B": {
      text: "After you perform an attack that misses, you may perform a bonus %CANNON% attack. %LINEBREAK% ADVANCED DROID BRAIN: After you perform a %CALCULATE% action, gain 1 calculate token."
    },
    "IG-88C": {
      text: "After you perform a %BOOST% action, you may perform an %EVADE% action. %LINEBREAK% ADVANCED DROID BRAIN: After you perform a %CALCULATE% action, gain 1 calculate token."
    },
    "IG-88D": {
      text: "While you execute a Segnor's Loop (%SLOOPLEFT% or %SLOOPRIGHT%) maneuver, you may use another template of the same speed instead: either the turn (%TURNLEFT% or %TURNRIGHT%) of the same direction or the straight (%STRAIGHT%) template. %LINEBREAK% ADVANCED DROID BRAIN: After you perform a %CALCULATE% action, gain 1 calculate token."
    },
    "Imdaar Test Pilot": {
      text: "STYGUM ARRAY: After you decloak, you may perform an %EVADE% action. At the Start of the End Phase, you may spend 1 evade token to gain one cloak token."
    },
    "Inaldra": {
      text: "While you defend or perform an attack, you may suffer 1 %HIT% damage to reroll any number of your dice. %LINEBREAK% WEAPON HARDPOINT: You can equip 1 %CANNON%, %TORPEDO% or %MISSILE% upgrade."
    },
    "Inquisitor": {
      text: "The fearsome Inquisitors are given a great deal of autonomy and access to the Empire's latest technology, like the prototype TIE Advanced v1."
    },
    "Jake Farrell": {
      text: "After you perform a %BARRELROLL% or %BOOST% action, you may choose a friendly ship at range 0-1. That ship may perform a %FOCUS% action. %LINEBREAK% VECTORED THRUSTERS: After you perform an action, you may perform a red %BOOST% action."
    },
    "Jakku Gunrunner": {
      text: "SPACETUG TRACTOR ARRAY: ACTION: Choose a ship in your %FRONTARC% at range 1. That ship gains one tractor token, or 2 tractor tokens if it is in your %BULLSEYEARC% at range 1"
    },
    "Jan Ors": {
      text: "While a friendly ship in your firing arc performs a primary attack, if you are not stressed, you may gain 1 stress token. If you do, that ship may roll 1 additional attack die."
    },
    "Jek Porkins": {
      text: "After you receive a stress token, you may roll 1 attack die to remove it. On a %HIT% result, suffer 1 %HIT% damage."
    },
    "Joy Rekkoff": {
      text: "While you perform an attack, you may spend 1 %CHARGE% from an equipped %TORPEDO% upgrade. If you do, the defender rolls 1 fewer defense die. %LINEBREAK% CONCORDIA FACEOFF: While you defend, if the attack range is 1 and you are in the attackers %FRONTARC%, change 1 result to an %EVADE% result"
    },
    "Kaa'to Leeachos": {
      text: "At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself."
    },
    "Kad Solus": {
      text: "After you fully execute a red maneuver, gain 2 focus tokens."
    },
    "Kanan Jarrus": {
      text: "While a friendly ship in your firing arc defends, you may spend 1 %FORCE%. If you do, the attacker rolls 1 fewer attack die. TAIL GUN: While you have a docked ship, you have a primary %REARARC% weapon with an attack value equal to your docked ship's Primary %FRONTARC% attack value."
    },
    "Kashyyyk Defender": {
      text: "Equipped with three wide-range Sureggi twin laser cannons, the Auzituck gunship acts as a powerful deterrent to slaver operations in the Kashyyyk system."
    },
    "Kath Scarlet": {
      text: "While you perform a primary attack, if there is at least 1 friendly non-limited ship at range 0 of the defender, roll 1 additional attack die."
    },
    "Kavil": {
      text: "While you perform a non-%FRONTARC% attack, roll 1 additional attack die."
    },
    "Ketsu Onyo": {
      text: "At the start of the Engagement Phase, you may choose 1 ship in both your %FRONTARC% and %SINGLETURRETARC% at range 0-1. If you do, that ship gains 1 tractor token."
    },
    "Knave Squadron Escort": {
      text: "EXPERIMENTAL SCANNERS: You can acquire locks beyond range 3. You cannot acquite locks at range 1."
    },
    "Koshka Frost": {
      text: "While you defend or perform an attack, if the enemy ship is stressed, you may reroll 1 of your dice."
    },
    "Krassis Trelix": {
      text: "You can perform %FRONTARC% special attacks from your %REARARC%. While you perform a special attack, you may reroll 1 attack die."
    },
    "Kullbee Sperado": {
      text: "After you perform a %BARRELROLL% or %BOOST% action, you may flip your equipped %CONFIG% upgrade card."
    },
    "Kyle Katarn": {
      text: "At the start of the Engagement Phase, you may transfer 1 of your focus tokens to a friendly ship in your firing arc."
    },
    "L3-37 (Escape Craft)": {
      text: "If you are not shielded, decrease the difficulty of your bank (%BANKLEFT% and %BANKRIGHT%) maneuvers. %LINEBREAK% CO-PILOT: While you are docked, your carried ship has your pilot ability in addition it's own."
    },
    "L3-37": {
      text: "If you are not shielded, decrease the difficulty of your bank (%BANKLEFT% and %BANKRIGHT%) maneuvers."
    },
    "Laetin A'shera": {
      text: "After you defend or perform an attack, if the attack missed, gain 1 evade token. %LINEBREAK% WEAPON HARDPOINT: You can equip 1 %CANNON%, %TORPEDO% or %MISSILE% upgrade."
    },
    "Lando Calrissian (Scum) (Escape Craft)": {
      text: "After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results. %LINEBREAK% CO-PILOT: While you are docked, your carried ship has your pilot ability in addition it's own."
    },
    "Lando Calrissian": {
      text: "After you fully execute a blue maneuver, you may choose a friendly ship at range 0-3. That ship may perform an action."
    },
    "Lando Calrissian (Scum)": {
      text: "After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results."
    },
    "Latts Razzi": {
      text: "At the start of the Engagement Phase, you may choose a ship at range 1 and spend a lock you have on that ship. If you do, that ship gains 1 tractor token."
    },
    '"Leebo"': {
      text: "After you defend or perform an attack, if you spent a calculate token, gain 1 calculate token. %LINEBREAK% SENSOR BLINDSPOT: While you perform a primary attack at range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die."
    },
    "Leevan Tenza": {
      text: "After you perform a %BARRELROLL% or %BOOST% action, you may perform a red %EVADE% action."
    },
    "Lieutenant Blount": {
      text: "While you perform a primary attack, if there is at least 1 other friendly ship at range 0-1 of the defender, you may roll 1 additional attack die."
    },
    "Lieutenant Karsabi": {
      text: "After you gain a disarm token, if you are not stressed, you may gain 1 stress token to remove 1 disarm token."
    },
    "Lieutenant Kestal": {
      text: "While you perform an attack, after the defender rolls defense dice, you may spend 1 focus token to cancel all of the defender's blank/%FOCUS% results."
    },
    "Lieutenant Sai": {
      text: "After you a perform a %COORDINATE% action, if the ship you chose performed an action on your action bar, you may perform that action."
    },
    "Lok Revenant": {
      text: " "
    },
    "Lothal Rebel": {
      text: "TAIL GUN: While you have a docked ship, you have a primary %REARARC% weapon with an attack value equal to your docked ship's Primary %FRONTARC% attack value."
    },
    "Lowhhrick": {
      text: "After a friendly ship at range 0-1 becomes the defender, you may spend 1 reinforce token. If you do, that ship gains 1 evade token."
    },
    "Luke Skywalker": {
      text: "After you become the defender (before dice are rolled), you may recover 1 %FORCE%."
    },
    "Maarek Stele": {
      text: "While you perform an attack, if the defender would be dealt a faceup damage card, instead draw 3 damage cards, choose 1, and discard the rest. %LINEBREAK% ADVANCED TARGETING COPMUTER: While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 %HIT% result to a %CRIT% result."
    },
    "Magva Yarro": {
      text: "While a friendly ship at range 0-2 defends, the attacker cannot reroll more than 1 attack die."
    },
    "Major Rhymer": {
      text: "While you perform a %TORPEDO% or %MISSILE% attack, you may increase or decrease the range requirement by 1, to a limit of 0-3. %LINEBREAK% NIMBLE BOMBER: If you would drop a device using a %STRAIGHT% template, you may use %BANKLEFT% a or %BANKRIGHT% tempate of the same speed instead."
    },
    "Major Vermeil": {
      text: "While you perform an attack, if the defender does not have any green tokens, you may change 1 of your  blank  or %FOCUS% results to a %HIT% result. %LINEBREAK% ADAPTIVE AILERONS: Before you reveal your dial, if you are not stressed, you MUST execute a white (1 %BANKLEFT%), (1 %STRAIGHT%) or (1 %BANKRIGHT%)"
    },
    "Major Vynder": {
      text: "While you defend, if you are disarmed, roll 1 additional defense die."
    },
    "Manaroo": {
      text: "At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, transfer all green tokens assigned to you to that ship."
    },
    '"Mauler" Mithel': {
      text: "While you perform an attack at attack range 1, roll 1 additional attack die."
    },
    "Miranda Doni": {
      text: "While you perform a primary attack, you may either spend 1 shield to roll 1 additional attack die or, if you are not shielded, you may roll 1 fewer attack die to recover 1 shield."
    },
    "Moralo Eval": {
      text: "If you would flee, you may spend 1 %CHARGE%. If you do, place yourself in reserves instead. At the start of the next Planning Phase, place youself within range 1 of the edge of the play area that you fled from."
    },
    "Nashtah Pup": {
      text: "You can deploy only via emergency deployment, and you have the name, initiative, pilot ability, and ship %CHARGE% of the friendly, destroyed Hound's Tooth. %LINEBREAK% ESCAPE CRAFT SETUP: Requires the HOUND'S TOOTH. You MUST begin the game docked with the HOUND'S TOOTH"
    },
    "N'dru Suhlak": {
      text: "While you perform a primary attack, if there are no other friendly ships at range 0-2, roll 1 additional attack die."
    },
    '"Night Beast"': {
      text: "After you fully execute a blue maneuver, you may perform a %FOCUS% action."
    },
    "Norra Wexley": {
      text: "While you defend, if there is an enemy ship at range 0-1, add 1 %EVADE% result to your dice results."
    },
    "Norra Wexley (Y-Wing)": {
      text: "While you defend, if there is an enemy ship at range 0-1, you may add 1 %EVADE% result to your dice results."
    },
    "Nu Squadron Pilot": {
      text: " "
    },
    "Obsidian Squadron Pilot": {
      text: " "
    },
    "Old Teroch": {
      text: "At the start of the Engagement Phase, you may choose 1 enemy ship at range 1. If you do and you are in its %FRONTARC%, it removes all of its green tokens. %LINEBREAK% CONCORDIA FACEOFF: While you defend, if the attack range is 1 and you are in the attackers %FRONTARC%, change 1 result to an %EVADE% result."
    },
    "Omicron Group Pilot": {
      text: " "
    },
    "Onyx Squadron Ace": {
      text: "FULL THROTTLE: After you FULLY execute a speed 3-5 maneuver, you may perform an %EVADE% action."
    },
    "Onyx Squadron Scout": {
      text: " "
    },
    "Outer Rim Pioneer": {
      text: "Friendly ships at range 0-1 can perform attacks at range 0 of obstacles. %LINEBREAK% CO-PILOT: While you are docked, your carried ship has your pilot ability in addition it's own."
    },
    "Outer Rim Smuggler": {
      text: " "
    },
    "Palob Godalhi": {
      text: "At the start of the Engagement Phase, you may choose 1 enemy ship in your firing arc at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself."
    },
    "Partisan Renegade": {
      text: " "
    },
    "Patrol Leader": {
      text: " "
    },
    "Phoenix Squadron Pilot": {
      text: "VECTORED THRUSTERS: After you perform an action, you may perform a red %BOOST% action."
    },
    "Planetary Sentinel": {
      text: "ADAPTIVE AILERONS: Before you reveal your dial, if you are not stressed, you MUST execute a white (1 %BANKLEFT%), (1 %STRAIGHT%) or (1 %BANKRIGHT%)"
    },
    "Prince Xizor": {
      text: "While you defend, after the Neutralize Results step, another friendly ship at range 0-1 and in the attack arc may suffer 1 %HIT% or %CRIT% damage. If it does, cancel 1 matching result.  %LINEBREAK% MICROTHRUSTERS: While you perform a barrel roll, you MUST use the (1 %BANKLEFT%) or (1 %BANKRIGHT%) template instead of the [1 %STRAIGHT%] template."
    },
    '"Pure Sabacc"': {
      text: "While you perform an attack, if you have 1 or fewer damage cards, you may roll 1 additional attack die. %LINEBREAK% ADAPTIVE AILERONS: Before you reveal your dial, if you are not stressed, you MUST execute a white (1 %BANKLEFT%), (1 %STRAIGHT%) or (1 %BANKRIGHT%)"
    },
    "Quinn Jast": {
      text: "At the start of the Engagement Phase, you may gain 1 disarm token to recover 1 %CHARGE% on 1 of your equipped upgrades. %LINEBREAK% WEAPON HARDPOINT: You can equip 1 %CANNON%, %TORPEDO% or %MISSILE% upgrade."
    },
    "Rear Admiral Chiraneau": {
      text: "While you perform an attack, if you are reinforced and the defender is in the %FULLFRONTARC% or %FULLREARARC% matching your reinforce token, you may change 1 of your %FOCUS% results to a %CRIT% result."
    },
    "Rebel Scout": {
      text: " "
    },
    "Red Squadron Veteran": {
      text: " "
    },
    '"Redline"': {
      text: "You can maintain up to 2 locks. After you perform an action, you may acquire a lock."
    },
    "Rexler Brath": {
      text: "After you perform an attack that hits, if you are evading, expose 1 of the defender's damage cards. %LINEBREAK% FULL THROTTLE: After you FULLY execute a speed 3-5 maneuver, you may perform an %EVADE% action."
    },
    "Rho Squadron Pilot": {
      text: " "
    },
    "Roark Garnet": {
      text: "At the start of the Engagement Phase, you may choose 1 ship in your firing arc. If you do, it engages at initiative 7 instead of its standard initiative value this phase."
    },
    "Rogue Squadron Escort": {
      text: "EXPERIMENTAL SCANNERS: You can acquire locks beyond range 3. You cannot acquire locks at range 1."
    },
    "Saber Squadron Ace": {
      text: "AUTOTHRUSTERS: After you perform an action. you may perform a red %BARRELROLL% or a red %BOOST% action."
    },
    "Sabine Wren": {
      text: "Before you activate, you may perform a %BARRELROLL% or %BOOST% action. %LINEBREAK% LOCKED AND LOADED: While you are docked, after your carrier ship performs a primary %FRONTARC% or %TURRET% attack, it may perform a bonus %REARARC% attack"
    },
    "Sabine Wren (Scum)": {
      text: "While you defend, if the attacker is in your %SINGLETURRETARC% at range 0-2, you may add 1 %FOCUS% result to your dice results."
    },
    "Sabine Wren (TIE Fighter)": {
      text: "Before you activate, you may perform a %BARRELROLL% or %BOOST% action."
    },
    "Sarco Plank": {
      text: "While you defend, you may treat your agility value as equal to the speed of the maneuver you executed this round. %LINEBREAK% SPACETUG TRACTOR ARRAY: ACTION: Choose a ship in your %FRONTARC% at range 1. That ship gains one tractor token, or 2 tractor tokens if it is in your %BULLSEYEARC% at range 1"
    },
    "Saw Gerrera": {
      text: "While a damaged friendly ship at range 0-3 performs an attack, it may reroll 1 attack die."
    },
    "Scarif Base Pilot": {
      text: "ADAPTIVE AILERONS: Before you reveal your dial, if you are not stressed, you MUST execute a white (1 %BANKLEFT%), (1 %STRAIGHT%) or (1 %BANKRIGHT%)"
    },
    "Scimitar Squadron Pilot": {
      text: "NIMBLE BOMBER: If you would drop a device using a %STRAIGHT% template, you may use %BANKLEFT% a or %BANKRIGHT% template of the same speed instead."
    },
    '"Scourge" Skutu': {
      text: "While you perform an attack against a defender in your %BULLSEYEARC%, roll 1 additional attack die."
    },
    "Serissu": {
      text: "While a friendly ship at range 0-1 defends, it may reroll 1 of its dice. %LINEBREAK% WEAPON HARDPOINT: You can equip 1 %CANNON%, %TORPEDO% or %MISSILE% upgrade."
    },
    "Seventh Sister": {
      text: "While you perform a primary attack, before the Neutralize Results step, you may spend 2 %FORCE% to cancel 1 %EVADE% result."
    },
    "Seyn Marana": {
      text: "While you perform an attack, you may spend 1 %CRIT% result. If you do, deal 1 facedown damage card to the defender, then cancel you remaining results."
    },
    "Shadowport Hunter": {
      text: "Crime syndicates augment the lethal skills of their loyal contractors with the best technology available, like the fast and formidable Lancer-class pursuit craft."
    },
    "Shara Bey": {
      text: "While you defend or perform a primary attack, you may spend 1 lock you have on the enemy ship to add 1 %FOCUS% result to your dice results."
    },
    "Sienar Specialist": {
      text: " "
    },
    '"Sigma Squadron Ace"': {
      text: "STYGUM ARRAY: After you decloak, you may perform an %EVADE% action. At the Start of the End Phase, you may spend 1 evade token to gain one cloak token."
    },
    "Skull Squadron Pilot": {
      text: "CONCORDIA FACEOFF: While you defend, if the attack range is 1 and you are in the attackers %FRONTARC%, change 1 result to an %EVADE% result."
    },
    "Sol Sixxa": {
      text: "If you would drop a device using a [1 %STRAIGHT%] template, you may drop it using any other speed 1 template instead."
    },
    "Soontir Fel": {
      text: "At the start of the Engagement Phase, if there is an enemy ship in your %BULLSEYEARC%, gain 1 focus token. %LINEBREAK% AUTOTHRUSTERS: After you perform an action. you may perform a red %BARRELROLL% or a red %BOOST% action."
    },
    "Spice Runner": {
      text: " "
    },
    "Storm Squadron Ace": {
      text: "ADVANCED TARGETING COPMUTER: While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 %HIT% result to a %CRIT% result."
    },
    "Sunny Bounder": {
      text: "While you defend or perform an attack, after you roll or reroll your dice, if you have the same result on each of your dice, you may add 1 matching result. %LINEBREAK% WEAPON HARDPOINT: You can equip 1 %CANNON%, %TORPEDO% or %MISSILE% upgrade."
    },
    "Tala Squadron Pilot": {
      text: " "
    },
    "Talonbane Cobra": {
      text: "While you defend at attack range 3 or perform an attack at range 1, roll 1 additional die."
    },
    "Tansarii Point Veteran": {
      text: "WEAPON HARDPOINT: You can equip 1 %CANNON%, %TORPEDO% or %MISSILE% upgrade."
    },
    "Tel Trevura": {
      text: "If you would be destroyed, you may spend 1 %CHARGE%. If you do, discard all of your damage cards, suffer 5 %HIT% damage, and place yourself in reserves instead. At the start of the next planning phase, place yourself within range 1 of your player edge."
    },
    "Tempest Squadron Pilot": {
      text: "ADVANCED TARGETING COPMUTER: While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 %HIT% result to a %CRIT% result."
    },
    "Ten Numb": {
      text: "While you defend or perform an attack, you may spend 1 stress token to change all of your %FOCUS% results to %EVADE% or %HIT% results."
    },
    "Thane Kyrell": {
      text: "While you perform an attack, you may spend 1 %FOCUS%, %HIT%, or %CRIT% result to look at the defender's facedown damage cards, choose 1, and expose it."
    },
    "Tomax Bren": {
      text: "After you perform a %RELOAD% action, you may recover 1 %CHARGE% token on 1 of your equipped %TALENT% upgrade cards. %LINEBREAK% NIMBLE BOMBER: If you would drop a device using a %STRAIGHT% template, you may use %BANKLEFT% a or %BANKRIGHT% tempate of the same speed instead."
    },
    "Torani Kulda": {
      text: "After you perform an attack, each enemy ship in your %BULLSEYEARC% suffers 1 %HIT% damage unless it removes 1 green token. %LINEBREAK% DEAD TO RIGHTS: While you perform an attack, if the defender is in your %BULLSEYEARC%, defense dice cannot be modified using green tokens."
    },
    "Torkil Mux": {
      text: "At the start of the Engagement Phase, you may choose 1 ship in your firing arc. If you do, that ship engages at initiative 0 instead of its normal initiative value this round."
    },
    "Trandoshan Slaver": {
      text: " "
    },
    "Turr Phennir": {
      text: "After you perform an attack, you may perform a %BARRELROLL% or %BOOST% action, even if you are stressed. %LINEBREAK% AUTOTHRUSTERS: After you perform an action. you may perform a red %BARRELROLL% or a red %BOOST% action."
    },
    "Unkar Plutt": {
      text: "At the start of the Engagement Phase, if there are one or more other ships at range 0, you and each other ship at range 0 gain 1 tractor token. %LINEBREAK% SPACETUG TRACTOR ARRAY: ACTION: Choose a ship in your %FRONTARC% at range 1. That ship gains one tractor token, or 2 tractor tokens if it is in your %BULLSEYEARC% at range 1"
    },
    "Valen Rudor": {
      text: "After a friendly ship at range 0-1 defends (after damage is resolved, if any), you may perform an action."
    },
    "Ved Foslo": {
      text: "While you execute a maneuver, you may execute a maneuver of the same bearing and difficulty of a speed 1 higher or lower instead. %LINEBREAK% ADVANCED TARGETING COPMUTER: While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 %HIT% result to a %CRIT% result."
    },
    "Viktor Hel": {
      text: "After you defend, if you did not roll exactly 2 defense dice, the attack gains 1 stress token."
    },
    '"Vizier"': {
      text: "After you fully execute a speed 1 maneuver using your Adaptive Ailerons ship ability, you may perform a %COORDINATE% action. If you do, skip your Perform Action step. %LINEBREAK% ADAPTIVE AILERONS: Before you reveal your dial, if you are not stressed, you MUST execute a white (1 %BANKLEFT%), (1 %STRAIGHT%) or (1 %BANKRIGHT%)"
    },
    '"Wampa"': {
      text: "While you perform an attack, you may spend 1 %CHARGE% to roll 1 additional attack die. After defending, lose 1 %CHARGE%."
    },
    "Warden Squadron Pilot": {
      text: " "
    },
    "Wedge Antilles": {
      text: "While you perform an attack, the defender rolls 1 fewer defense die."
    },
    '"Whisper"': {
      text: "After you perform an attack that hits, gain 1 evade token. STYGUM ARRAY: After you decloak, you may perform an %EVADE% action. At the Start of the End Phase, you may spend 1 evade token to gain one cloak token."
    },
    "Wild Space Fringer": {
      text: "SENSOR BLINDSPOT: While you perform a primary attack at range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die."
    },
    "Wullffwarro": {
      text: "While you perform a primary attack, if you are damaged, you may roll 1 additional attack die."
    },
    "Zealous Recruit": {
      text: "CONCORDIA FACEOFF: While you defend, if the attack range is 1 and you are in the attackers %FRONTARC%, change 1 result to an %EVADE% result"
    },
    '"Zeb" Orrelios': {
      text: "While you defend, %CRIT% results are neutralized before %HIT% results. %LINEBREAK% LOCKED AND LOADED: While you are docked, after your carrier ship performs a primary %FRONTARC% or %TURRET% attack, it may perform a bonus %REARARC% attack"
    },
    '"Zeb" Orrelios (Sheathipede)': {
      text: "While you defend, %CRIT% results are neutralized before %HIT% results. %LINEBREAK% COMMS SHUTTLE: While you are docked, your carrier ship gains %COORDINATE%. Before your carrier shpi activates, it may perform a %COORDINATE% action."
    },
    '"Zeb" Orrelios (TIE Fighter)': {
      text: "While you defend, %CRIT% results are neutralized before %HIT% results."
    },
    "Zertik Strom": {
      text: "During the End Phase, you may spend a lock you have on an enemy ship to expose 1 of that ship's damage cards. %LINEBREAK% ADVANCED TARGETING COPMUTER: While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 %HIT% result to a %CRIT% result."
    },
    "Zuckuss": {
      text: "While you perform a primary attack, you may roll 1 additional attack die. If you do, the defender rolls 1 additional defense die."
    },
    "Poe Dameron": {
      text: "After you perform an action, you may spend 1 %CHARGE% to perform a white action, treating it as red. %LINEBREAK% WEAPON HARDPOINT: You can equip 1 %CANNON%, %TORPEDO% or %MISSILE% upgrade."
    },
    "Lieutenant Bastian": {
      text: "After a ship at range 1-2 is dealt a damage card, you may acquire a lock on that ship. %LINEBREAK% WEAPON HARDPOINT: You can equip 1 %CANNON%, %TORPEDO% or %MISSILE% upgrade."
    },
    '"Midnight"': {
      text: "While you defend or perform an attack, if you have a lock on the enemy ship, that ship's dice cannot be modified."
    },
    '"Longshot"': {
      text: "While you perform a primary attack at attack range 3, roll 1 additional attack die."
    },
    '"Muse"': {
      text: "At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token."
    },
    "Kylo Ren": {
      text: " After you defend, you may spend 1 %FORCE% to assign the I'll Show You the Dark Side condition to the attacker. %LINEBREAK% AUTOTHRUSTERS: After you perform an action. you may perform a red %BARRELROLL% or a red %BOOST% action."
    },
    '"Blackout"': {
      text: " ??? %LINEBREAK% AUTOTHRUSTERS: After you perform an action. you may perform a red %BARRELROLL% or a red %BOOST% action."
    },
    "Lieutenant Dormitz": {
      text: " ... are placed, other ... be placed anywhere in ... range 0-2 of you. %LINEBREAK% ... : while you perform a %CANNON% ... additional die. "
    },
    "Tallissan Lintra": {
      text: "While an enemy ship in your %BULLSEYEARC% performs an attack, you may spend 1 %CHARGE%.  If you do, the defender rolls 1 additional die."
    },
    "Lulo Lampar": {
      text: "While you defend or perform a primary attack, if you are stressed, you must roll 1 fewer defense die or 1 additional attack die."
    },
    '"Backdraft"': {
      text: " ... perform a %TURRET% primary ... defender is in your %BACKARC% ... additional dice. %LINEBREAK% ... TURRET: You can... indicator only to your ... must treat the %FRONTARC% ... your equipped %MISSILE% ... as %TURRET%. "
    },
    '"Quickdraw"': {
      text: " ??? %LINEBREAK% ... TURRET: You can... indicator only to your ... must treat the %FRONTARC% ... your equipped %MISSILE% ... as %TURRET%. "
    },
    "Rey": {
      text: " ... perform an attack, ... in your %FRONTARC%, you may ... change 1 of your blank ... or %HIT% result. "
    },
    "Han Solo (Resistance)": {
      text: " ??? "
    },
    "Chewbacca (Resistance)": {
      text: " ??? "
    },
    "Captain Seevor": {
      text: " While you defend or perform an attack, before the attack dice are rolled, if you are not in the enemy ship's %BULLSEYEARC%, you may spend 1 %CHARGE%. If you do, the enemy ship gains one jam token. "
    },
    "Mining Guild Surveyor": {
      text: " "
    },
    "Ahhav": {
      text: " ??? "
    },
    "Finch Dallow": {
      text: " ... drop a bomb, you ... play area touching ... instead. "
    }
  };
  upgrade_translations = {
    "0-0-0": {
      text: "<i>Requires: Scum or Darth Vader</i> %LINEBREAK% At the start of the Engagement Phase, you may choose 1 enemy ship at range 0-1. If you do, you gain 1 calculate token unless that ship chooses to gain 1 stress token."
    },
    "4-LOM": {
      text: "While you perform an attack, after rolling attack dice, you may name a type of green token. If you do, gain 2 ion tokens and, during this attack, the defender cannot spend tokens of the named type."
    },
    "Ablative Plating": {
      text: "<i>Requires: Medium or Large Base</i> %LINEBREAK% Before you would suffer damage from an obstacle or from a friendly bomb detonating, you may spend 1 %CHARGE%. If you do, prevent 1 damage."
    },
    "Admiral Sloane": {
      text: "After another friendly ship at range 0-3 defends, if it is destroyed, the attacker gains 2 stress tokens. While a friendly ship at range 0-3 performs an attack against a stressed ship, it may reroll 1 attack die."
    },
    "Adv. Proton Torpedoes": {
      text: "Attack (%LOCK%): Spend 1 %CHARGE%. Change 1 %HIT% result to a %CRIT% result."
    },
    "Advanced Sensors": {
      text: "After you reveal your dial, you may perform 1 action. If you do, you cannot perform another action during your activation."
    },
    "Advanced SLAM": {
      text: "<i>Requires: %SLAM%</i> %LINEBREAK% After you perform a %SLAM% action, if you fully executed that maneuver, you may perform a white action on your action bar, treating that action as red."
    },
    "Afterburners": {
      text: "<i>Requires: Small Base</i> %LINEBREAK% After you fully execute a speed 3-5 maneuver, you may spend 1 %CHARGE% to perform a %BOOST% action, even while stressed."
    },
    "Agent Kallus": {
      text: "Setup: Assign the Hunted condition to 1 enemy ship. While you perform an attack against th eship with the Hunted condition, you may change 1 of your %FOCUS% results to a %HIT% result."
    },
    "Agile Gunner": {
      text: "In the End Phase you may rotate your %TURRET% indi﻿cator﻿"
    },
    "Andrasta": {
      text: "<i>Adds: %RELOAD%</i> %LINEBREAK% Add %DEVICE% slot."
    },
    "Barrage Rockets": {
      text: "Attack (%FOCUS%): Spend 1 %CHARGE%. If the defender is in your %BULLSEYEARC%, you may spend 1 or more %CHARGE% to reroll that many attack dice."
    },
    "Baze Malbus": {
      text: "While you perform a %FOCUS% action, you may treat it as red. If you do, gain 1 additional focus token for each enemy ship at range 0-1 to a maximum of 2."
    },
    "Bistan": {
      text: "After you perform a primary attack, if you are focused, you may perform a bonus %SINGLETURRETARC% attack against a ship you have not already attacked this round."
    },
    "Boba Fett": {
      text: "Setup: Start in reserve. At the end of Setup, place yourself at range 0 of an obstacle and beyond range 3 of an enemy ship."
    },
    "Bomblet Generator": {
      text: "Bomb During the System Phase, you may spend 1 %CHARGE% to drop a Bomblet with the [1 %STRAIGHT%] template. At the start of the Activation Phase, you may spend 1 shield to recover 2 %CHARGE%."
    },
    "Bossk": {
      text: "After you perform a primary attack that misses, if you are not stressed you must receive 1 stress token to perform a bonus primary attack against the same target."
    },
    "BT-1": {
      text: "<i>Requires: Scum or Darth Vader</i> %LINEBREAK% While you perform an attack, you may change 1 %HIT% result to a %CRIT% result for each stress token the defender has."
    },
    "C-3PO": {
      text: "<i>Adds: %CALCULATE%</i> %LINEBREAK% Before rolling defense dice, you may spend 1 calculate token to guess aloud a number 1 or higher. If you do, and you roll exactly that many %EVADE% results, add 1 %EVADE% result. After you perform the %CALCULATE% action, gain 1 calculate token."
    },
    "Cad Bane": {
      text: "After you drop or launch a device, you may perform a red %BOOST% action."
    },
    "Cassian Andor": {
      text: "During the System Phase, you may choose 1 enemy ship at range 1-2 and guess aloud a bearing and speed, then look at that ship's dial. If the chosen ship's bearing and speed match your guess, you may set your dial to another maneuver."
    },
    "Chewbacca": {
      text: "At the start of the Engagement Phase, you may spend 2 %CHARGE% to repair 1 faceup damage card."
    },
    "Chewbacca (Scum)": {
      text: "At the start of the End Phase, you may spend 1 focus token to repair 1 of your faceup damage cards."
    },
    '"Chopper" (Astromech)': {
      text: "Action: Spend 1 non-recurring %CHARGE% from another equipped upgrade to recover 1 shield. Action: Spend 2 shields to recover 1 non-recurring %CHARGE% on an equipped upgrade."
    },
    '"Chopper" (Crew)': {
      text: "During the Perform Action step, you may perform 1 action, even while stressed. After you perform an action while stressed, suffer 1 %HIT% damage unless you expose 1 of your damage cards."
    },
    "Ciena Ree": {
      text: "<i>Requires: %COORDINATE%</i> %LINEBREAK% After you perform a %COORDINATE% action, if the ship you coordinated performed a %BARRELROLL% or %BOOST% action, it may gain 1 stress token to rotate 90˚."
    },
    "Cikatro Vizago": {
      text: "During the End Phase, you may choose 2 %ILLICIT% upgrades equipped to friendly ships at range 0-1. If you do, you may exchange these upgrades. End of Game: Return all %ILLICIT% upgrades to their original ships."
    },
    "Cloaking Device": {
      text: "<i>Requires: Small or Medium Base</i> %LINEBREAK% Action: Spend 1 %CHARGE% to perform a %CLOAK% action. At the start of the Planning Phase, roll 1 attack die. On a %FOCUS% result, decloak or discard your cloak token."
    },
    "Cluster Missiles": {
      text: "Attack (%LOCK%): Spend 1 %CHARGE%. After this attack, you may perform this attack as a bonus attack against a different target at range 0-1 of the defender, ignoring the %LOCK% requirement."
    },
    "Collision Detector": {
      text: "While you boost or barrel roll, you can move through and overlap obstacles. After you move through or overlap an obstacle, you may spend 1 %CHARGE% to ignore its effects until the end of the round."
    },
    "Composure": {
      text: "<i>Requires: %FOCUS%</i> %LINEBREAK% If you fail an action and don't have any green tokens you may perform a %FOCUS% action."
    },
    "Concussion Missiles": {
      text: "Attack (%LOCK%): Spend 1 %CHARGE%. After this attack hits, each ship at range 0-1 of the defender exposes 1 of its damage cards."
    },
    "Conner Nets": {
      text: "Mine During the System Phase, you may spend 1 %CHARGE% to drop a Conner Net using the [1 %STRAIGHT%] template. This card's %CHARGE% cannot be recovered."
    },
    "Contraband Cybernetics": {
      text: "Before you activate, you may spend 1 %CHARGE%. If you do, until the end of the round, you can perform actions and execute red maneuvers, even while stressed."
    },
    "Crack Shot": {
      text: "While you perform a primary attack, if the defender is in your %BULLSEYEARC%, before the Neutralize Results step, you may spend 1 %CHARGE% to cancel 1 %EVADE% result."
    },
    "Daredevil": {
      text: "<i>Requires: White %BOOST% and Small Base</i> %LINEBREAK% While you perform a white %BOOST% action, you may treat it as red to use the [1%TURNLEFT%] or [1 %TURNRIGHT%] template instead."
    },
    "Darth Vader": {
      text: "At the start of the Engagement Phase, you may choose 1 ship in your firing arc at range 0-2 and spend 1 %FORCE%. If you do, that ship suffers 1 %HIT% damage unless it chooses to remove 1 green token."
    },
    "Dauntless": {
      text: "After you partially execute a maneuver, you may perform 1 white action, treating that action as red."
    },
    "Deadman's Switch": {
      text: "After you are destroyed, each other ship at range 0-1 suffers 1 %HIT% damage."
    },
    "Death Troopers": {
      text: "During the Activation Phase, enemy ships at range 0-1 cannot remove stress tokens."
    },
    "Debris Gambit": {
      text: "<i>Requires: Small or Medium Base. Adds: <r>%EVADE%</r></i> %LINEBREAK% While you perform a red %EVADE% action, if there is an obstacle at range 0-1, treat the action as white instead."
    },
    "Dengar": {
      text: "After you defend, if the attacker is in your firing arc, you may spend 1 %CHARGE%. If you do, roll 1 attack die unless the attacker chooses to remove 1 green token. On a %HIT% or %CRIT% result, the attacker suffers 1 %HIT% damage."
    },
    "Director Krennic": {
      text: "<i>Adds: %LOCK%</i> %LINEBREAK% Setup: Before placing forces, assign the Optimized Prototype condition to another friendly ship."
    },
    "Dorsal Turret": {
      text: "<i>Adds: %ROTATEARC%</i> %LINEBREAK%"
    },
    "Electronic Baffle": {
      text: "During the End Phase, you may suffer 1 %HIT% damage to remove 1 red token."
    },
    "Elusive": {
      text: "<i>Requires: Small or Medium Base</i> %LINEBREAK% While you defend, you may spend 1 %CHARGE% to reroll 1 defense die. After you fully execute a red maneuver, recover 1 %CHARGE%."
    },
    "Emperor Palpatine": {
      text: "While another friendly ship defends or performs an attack, you may spend 1 %FORCE% to modify 1 of its dice as though that ship had spent 1 %FORCE%."
    },
    "Engine Upgrade": {
      text: "<i>Requires: <r>%BOOST%</r>. Adds: %BOOST% %LINEBREAK% This upgrade has a variable cost, worth 3, 6, or 9 points depending on if the ship base is small, medium or large respectively.</i>"
    },
    "Expert Handling": {
      text: "<i>Requires: <r>%BARRELROLL%</r>. Adds: %BARRELROLL% %LINEBREAK% This upgrade has a variable cost, worth 2, 4, or 6 points depending on if the ship base is small, medium or large respectively.</i>"
    },
    "Ezra Bridger": {
      text: "After you perform a primary attack, you may spend 1 %FORCE% to perform a bonus %TURRET% attack from a %TURRET% you have not attacked from this round. If you do and you are stressed, you may reroll 1 attack die."
    },
    "Fearless": {
      text: "While you perform a %FRONTARC% primary attack, if the attack range is 1 and you are in the defender's %FRONTARC%, you may change 1 of your results to a %HIT% result."
    },
    "Feedback Array": {
      text: "Before you engage, you may gain 1 ion token and 1 disarm token. If you do, each ship at range 0 suffers 1 %HIT% damage."
    },
    "Fifth Brother": {
      text: "While you perform an attack, you may spend 1 %FORCE% to change 1 of your %FOCUS% results to a %CRIT% result."
    },
    "Fire-Control System": {
      text: "While you perform an attack, if you have a lock on the defender, you may reroll 1 attack die. If you do, you cannot spend your lock during this attack."
    },
    "Freelance Slicer": {
      text: "While you defend, before attack dice are rolled, you may spend a lock you have on the attacker to roll 1 attack die. If you do, the attacker gains 1 %JAM% token. Then, on a %HIT% or %CRIT% result, gain 1 %JAM% token."
    },
    '"Genius"': {
      text: "After you fully execute a maneuver, if you have not dropped or launched a device this round, you may drop 1 bomb."
    },
    "Ghost": {
      text: "You can dock 1 attack shuttle or Sheathipede-class shuttle. Your docked ships can deploy only from your rear guides."
    },
    "Grand Inquisitor": {
      text: "After an enemy ship at range 0-2 reveals its dial, you may spend 1 %FORCE% to perform 1 white action on your action bar, treating that action as red."
    },
    "Grand Moff Tarkin": {
      text: "<i>Requires: %LOCK%</i> %LINEBREAK% During the System Phase, you may spend 2 %CHARGE%. If you do, each friendly ship may acquire a lock on a ship that you have locked."
    },
    "Greedo": {
      text: "While you perform an attack, you may spend 1 %CHARGE% to change 1 %HIT% result to a %CRIT% result. While you defend, if your %CHARGE% is active, the attacker may change 1 %HIT% result to a %CRIT% result."
    },
    "Han Solo": {
      text: "During the Engagement Phase, at initiative 7, you may perform a %TURRET% attack. You cannot attack from that %TURRET% again this round."
    },
    "Han Solo (Scum)": {
      text: "Before you engage, you may perform a red %FOCUS% action."
    },
    "Havoc": {
      text: "Remove %CREW% slot. Add %SENSOR% and %ASTROMECH% slots."
    },
    "Heavy Laser Cannon": {
      text: "Attack: After the Modify Attack Dice step, change all %CRIT% results to %HIT% results."
    },
    "Heightened Perception": {
      text: "At the start of the Engagement Phase, you may spend 1 %FORCE%. If you do, engage at initiative 7 instead of your standard initiative value this phase."
    },
    "Hera Syndulla": {
      text: "You can execute red maneuvers even while stressed. After you fully execute a red maneuver, if you have 3 or more stress tokens, remove 1 stress token and suffer 1 %HIT% damage."
    },
    "Homing Missiles": {
      text: "Attack (%LOCK%): Spend 1 %CHARGE%. After you declare the defender, the defender may choose to suffer 1 %HIT% damage. If it does, skip the Attack and Defense Dice steps and the attack is treated as hitting."
    },
    "Hotshot Gunner": {
      text: "While you perform a %TURRET% attack, after the Modify Defense Dice step, the defender removes 1 focus or calculate token."
    },
    "Hound's Tooth": {
      text: "1 Z-95 AF4 headhunter can dock with you."
    },
    "Hull Upgrade": {
      text: "Add 1 Hull Point %LINEBREAK%<i>This upgrade has a variable cost, worth 2, 3, 5, or 7 points depending on if the ship agility is 0, 1, 2, or 3 respectively.</i>"
    },
    "IG-2000": {
      text: "You have the pilot ability of each other friendly ship with the IG-2000 upgrade."
    },
    "IG-88D": {
      text: "<i>Adds: %CALCULATE%</i> %LINEBREAK% You have the pilot ability of each other friendly ship with the IG-2000 upgrade. After you perform a %CALCULATE% action, gain 1 calculate token. ADVANCED DROID BRAIN: After you perform a %CALCULATE% action, gain 1 calculate token."
    },
    "Inertial Dampeners": {
      text: "Before you would execute a maneuver, you may spend 1 shield. If you do, execute a white [0 %STOP%] instead of the maneuver you revealed, then gain 1 stress token."
    },
    "Informant": {
      text: "Setup: After placing forces, choose 1 enemy ship and assign the Listening Device condition to it."
    },
    "Instinctive Aim": {
      text: "While you perform a special attack, you may spend 1 %FORCE% to ignore the %FOCUS% or %LOCK% requirement."
    },
    "Intimidation": {
      text: "While an enemy ship at range 0 defends, it rolls 1 fewer defense die."
    },
    "Ion Cannon Turret": {
      text: "<i>Adds: %ROTATEARC%</i> %LINEBREAK% Attack: If this attack hits, spend 1 %HIT% or %CRIT% result to cause the defender to suffer 1 %HIT% damage. All remaining %HIT%/%CRIT% results inflict ion tokens instead of damage."
    },
    "Ion Cannon": {
      text: "Attack: If this attack hits, spend 1 %HIT% or %CRIT% result to cause the defender to suffer 1 %HIT% damage. All remaining %HIT%/%CRIT% results inflict ion tokens instead of damage."
    },
    "Ion Missiles": {
      text: "Attack (%LOCK%): Spend 1 %CHARGE%. If this attack hits, spend 1 %HIT% or %CRIT% result to cause the defender to suffer 1 %HIT% damage. All remaining %HIT%/%CRIT% results inflict ion tokens instead of damage."
    },
    "Ion Torpedoes": {
      text: "Attack (%LOCK%): Spend 1 %CHARGE%. If this attack hits, spend 1 %HIT% or %CRIT% result to cause the defender to suffer 1 %HIT% damage. All remaining %HIT%/%CRIT% results inflict ion tokens instead of damage."
    },
    "ISB Slicer": {
      text: "During the End Phase, enemy ships at range 1-2 cannot remove jam tokens."
    },
    "Jabba the Hutt": {
      text: "During the End Phase, you may choose 1 friendly ship at range 0-2 and spend 1 %CHARGE%. If you do, that ship recovers 1 %CHARGE% on 1 of its equipped %ILLICIT% upgrades."
    },
    "Jamming Beam": {
      text: "Attack: If this attack hits, all %HIT%/%CRIT% results inflict jam tokens instead of damage."
    },
    "Juke": {
      text: "<i>Requires: Small or Medium Base</i> %LINEBREAK% While you perform an attack, if you are evading, you may change 1 of the defender's %EVADE% results to a %FOCUS% result."
    },
    "Jyn Erso": {
      text: "If a friendly ship at range 0-3 would gain a focus token, it may gain 1 evade token instead."
    },
    "Kanan Jarrus": {
      text: "After a friendly ship at range 0-2 fully executes a white maneuver, you may spend 1 %FORCE% to remove 1 stress token from that ship."
    },
    "Ketsu Onyo": {
      text: "At the start of the End Phase, you may choose 1 enemy ship at range 0-2 in your firing arc. If you do, that ship does not remove its tractor tokens."
    },
    "L3-37": {
      text: "Setup: Equip this side faceup. While you defend, you may flip this card. If you do, the attack must reroll all attack dice"
    },
    "L3-37's Programming": {
      text: "If you are not shielded, decrease the difficulty of your bank (%BANKLEFT% and %BANKRIGHT%) maneuvers."
    },
    "Lando Calrissian": {
      text: "Action: Roll 2 defense dice. For each %FOCUS% result, gain 1 focus token. For each %EVADE% result, gain 1 evade token. If both results are blank, the opposing player chooses focus or evade. You gain 1 token of that type."
    },
    "Lando Calrissian (Scum)": {
      text: "After you roll dice, you may spend 1 green token to reroll up to 2 of your results."
    },
    "Lando's Millennium Falcon": {
      text: "1 Escape Craft may dock with you. While you have an Escape Craft docked, you may spend its shields as if they were on your ship card. While you perform a primary attack against a stressed ship, roll 1 additional attack die."
    },
    "Latts Razzi": {
      text: "While you defend, if the attacker is stressed, you may remove 1 stress from the attacker to change 1 of your blank/%FOCUS% results to an %EVADE% result."
    },
    "Leia Organa": {
      text: "At the start of the Activation Phase, you may spend 3 %CHARGE%. During this phase, each friendly ship reduces the difficulty of its red maneuvers."
    },
    "Lone Wolf": {
      text: "While you defend or perform an attack, if there are no other friendly ships at range 0-2, you may spend 1 %CHARGE% to reroll 1 of your dice."
    },
    "Luke Skywalker": {
      text: "At the start of the Engagement Phase, you may spend 1 %FORCE% to rotate your %TURRET% indicator."
    },
    "Magva Yarro": {
      text: "After you defend, if the attack hit, you may acquire a lock on the attacker."
    },
    "Marauder": {
      text: "While you perform a primary %REARARC% attack,, you may reroll 1 attack die. Add %GUNNER% slot."
    },
    "Marksmanship": {
      text: "While you perform an attack, if the defender is in your %BULLSEYEARC%, you may change 1 %HIT% result to a %CRIT% result."
    },
    "Maul": {
      text: "<i>Requires: Scum or Ezra Bridger</i> %LINEBREAK% After you suffer damage, you may gain 1 stress token to recover 1 %FORCE%. You can equip \"Dark Side\" upgrades."
    },
    "Millennium Falcon": {
      text: "<i>Adds: %EVADE%</i> %LINEBREAK% While you defend, if you are evading, you may reroll 1 defense die."
    },
    "Minister Tua": {
      text: "At the start of the Engagement Phase, if you are damaged, you may perform a red %REINFORCE% action."
    },
    "Mist Hunter": {
      text: "<i>Adds: %BARRELROLL% </i> %LINEBREAK% Add %CANNON% slot."
    },
    "Moff Jerjerrod": {
      text: "<i>Requires: %COORDINATE%</i> %LINEBREAK% During the System Phase, you may spend 2 %CHARGE%. If you do, choose the (1 %BANKLEFT%), (1 %STRAIGHT%), or (1 %BANKRIGHT%) template. Each friendly ship may perform a red %BOOST% action using that template."
    },
    "Moldy Crow": {
      text: "Gain a %FRONTARC% primary weapon with a value of \"3.\" During the End Phase, do not remove up to 2 focus tokens."
    },
    "Munitions Failsafe": {
      text: "While you perform a %TORPEDO% or %MISSILE% attack, after rolling attack dice, you may cancel all dice results to recover 1 %CHARGE% you spent as a cost for the attack."
    },
    "Nien Nunb": {
      text: "Decrease the difficulty of your bank maneuvers [%BANKLEFT% and %BANKRIGHT%]."
    },
    "Novice Technician": {
      text: "At the end of the round, you may roll 1 attack die to repair 1 faceup damage card. Then, on a %HIT% result, expose 1 damage card."
    },
    "Os-1 Arsenal Loadout": {
      text: "While you have exactly 1 disarm token, you can still perform %TORPEDO% and %MISSILE% attacks against targets you have locked. If you do, you cannot spend you lock during the attack. Add %TORPEDO% and %MISSILE% slots."
    },
    "Outmaneuver": {
      text: "While you perform a %FRONTARC% attack, if you are not in the defender's firing arc, the defender rolls 1 fewer defense die."
    },
    "Outrider": {
      text: "While you perform an attack that is obstructed by an obstacle, the defender rolls 1 fewer defense die. After you fully execute a maneuver, if you moved through or overlapped an obstacle, you may remove 1 of your red or orange tokens."
    },
    "Perceptive Copilot": {
      text: "After you perform a %FOCUS% action, gain 1 focus token."
    },
    "Phantom": {
      text: "You can dock at range 0-1."
    },
    "Phantom (Sheathipede)": {
      text: "You can dock at range 0-1."
    },
    "Pivot Wing": {
      text: "<b>Closed:</b> While you defend, roll 1 fewer defense die. After you execute a [0 %STOP%] maneuver, you may rotate your ship 90˚ or 180˚. Before you activate, you may flip this card %LINEBREAK% <b>Open:</b> Before you activate, you may flip this card"
    },
    "Predator": {
      text: "While you perform a primary attack, if the defender is in your %BULLSEYEARC%, you may reroll 1 attack die."
    },
    "Proton Bombs": {
      text: "Bomb During the System Phase, you may spend 1 %CHARGE% to drop a Proton Bomb using the [1 %STRAIGHT%] template."
    },
    "Proton Rockets": {
      text: "Attack (%FOCUS%): Spend 1 %CHARGE%."
    },
    "Proton Torpedoes": {
      text: "Attack (%LOCK%): Spend 1 %CHARGE%. Change 1 %HIT% result to a %CRIT% result."
    },
    "Proximity Mines": {
      text: "Mine During the System Phase, you may spend 1 %CHARGE% to drop a Proximity Mine using the [1 %STRAIGHT%] template. This card's %CHARGE% cannot be recovered."
    },
    "Punishing One": {
      text: "When you perform a primary attack, if the defender is in your %FRONTARC%, roll 1 additional attack die. Remove %CREW% slot. Add %ASTROMECH% slot."
    },
    "Qi'ra": {
      text: "While you move and perform attacks, you ignore all obstacles that you are locking."
    },
    "R2 Astromech": {
      text: "After you reveal your dial, you may spend 1 %CHARGE% and gain 1 disarm token to recover 1 shield."
    },
    "R2-D2": {
      text: "After you reveal your dial, you may spend 1 %CHARGE% and gain 1 disarm token to recover 1 shield."
    },
    "R2-D2 (Crew)": {
      text: "During the End Phase, if you are damaged and not shielded, you may roll 1 attack die to recover 1 shield. On a %HIT% result, expose 1 of your damage cards."
    },
    "R3 Astromech": {
      text: "You can maintain up to 2 locks. Each lock must be on a different object. After you perform a %LOCK% action, you may acquire a lock."
    },
    "R4 Astromech": {
      text: "<i>Requires: Small Base</i> %LINEBREAK% Decrease the difficulty of your speed 1-2 basic maneuvers (%TURNLEFT%, %BANKLEFT%, %STRAIGHT%, %BANKRIGHT%, %TURNRIGHT%)."
    },
    "R5 Astromech": {
      text: "Action: Spend 1 %CHARGE% to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card."
    },
    "R5-D8": {
      text: "Action: Spend 1 %CHARGE% to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card."
    },
    "R5-P8": {
      text: "While you perform an attack against a defender in your %FRONTARC%, you may spend 1 %CHARGE% to reroll 1 attack die. If the rerolled results is a %CRIT%, suffer 1 %CRIT% damage."
    },
    "R5-TK": {
      text: "You can perform attacks against friendly ships."
    },
    "Rigged Cargo Chute": {
      text: "<i>Requires: Medium or Large Base</i> %LINEBREAK% Action: Spend 1 %CHARGE%. Drop 1 loose cargo using the [1 %STRAIGHT%] template."
    },
    "Ruthless": {
      text: "While you perform an attack, you may choose another friendly ship at range 0-1 of the defender. If you do, that ship suffers 1 %HIT% damage and you may change 1 of your die results to a %HIT% result."
    },
    "Sabine Wren": {
      text: "Setup: Place 1 ion, 1 jam, 1 stress, and 1 tractor token on this card. After a ship suffers the effect of a friendly bomb, you may remove 1 ion, jam, stress, or tractor token from this card. If you do, that ship gains a matching token."
    },
    "Saturation Salvo": {
      text: "<i>Requires: %RELOAD%</i> %LINEBREAK% While you perform a %TORPEDO% or %MISSILE% attack, you may spend 1 charge from that upgrade. If you do, choose two defense dice. The defender must reroll those dice."
    },
    "Saw Gerrera": {
      text: "While you perform an attack, you may suffer 1 %HIT% damage to change all of your %FOCUS% results to %CRIT% results."
    },
    "Seasoned Navigator": {
      text: "After you reveal your dial, you may set your dial to another non-red maneuver of the same speed. While you execute that maneuver, increase its difficulty."
    },
    "Seismic Charges": {
      text: "Bomb During the System Phase, you may spend 1 %CHARGE% to drop a Seismic Charge with the [1 %STRAIGHT%] template."
    },
    "Selfless": {
      text: "Whlie another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 %CRIT% damage to cancel 1 %CRIT% result."
    },
    "Sense": {
      text: "During the System Phase, you may choose 1 ship at range 0-1 and look at its dial. If you spend 1 %FORCE%, you may choose a ship at range 0-3 instead."
    },
    "Servomotor S-Foils": {
      text: "<b>Closed:</b> While you perform a primary attack, roll 1 fewer attack die. Before you activate, you may flip this card %LINEBREAK% <i>Adds: %BOOST%, %FOCUS% > <r>%BOOST%</r></i> %LINEBREAK% <b>Open:</b> Before you activate, you may flip this card"
    },
    "Seventh Sister": {
      text: "If an enemy ship at range 0-1 would gain a stress token, you may spend 1 %FORCE% to have it gain 1 jam or tractor token instead."
    },
    "Shadow Caster": {
      text: "After you perform an attack that hits, if the defender is in your %SINGLETURRETARC% and your %FRONTARC%, the defender gains 1 tractor token."
    },
    "Shield Upgrade": {
      text: "Add 1 Shield Point %LINEBREAK%<i>This upgrade has a variable cost, worth 3, 4, 6, or 8 points depending on if the ship agility is 0, 1, 2, or 3 respectively.</i>"
    },
    "Skilled Bombardier": {
      text: "If you would drop or launch a device, you may use a template of the same bearing with a speed 1 higher or lower."
    },
    "Slave I": {
      text: "After you reveal a turn, (%TURNLEFT% or %TURNRIGHT%) or bank (%BANKLEFT% or %BANKRIGHT%) maneuver you may set your dial to the maneuver of the same speed and bearing in the other direction. Add %TORPEDO% slot."
    },
    "Squad Leader": {
      text: "<i>Adds: <r>%COORDINATE%</r></i> %LINEBREAK% While you coordinate, the ship you choose can perform an action only if that action is also on your action bar."
    },
    "ST-321": {
      text: "After you perform a %COORDINATE% action, you may choose an enemy ship at range 0-3 of the ship you coordinated. If you do, acquire a lock on that enemy ship, ignoring range restrictions."
    },
    "Static Discharge Vanes": {
      text: "Before you would gain 1 ion or jam token, if you are not stressed, you may choose another ship at range 0–1 and gain 1 stress token. If you do, the chosen ship gains that ion or jam token instead."
    },
    "Stealth Device": {
      text: "While you defend, if your %CHARGE% is active, roll 1 additional defense die. After you suffer damage, lost 1 %CHARGE%. %LINEBREAK%<i>This upgrade has a variable cost, worth 3, 4, 6, or 8 points depending on if the ship agility is 0, 1, 2, or 3 respectively.</i>"
    },
    "Supernatural Reflexes": {
      text: "<i>Requires: Small Base</i> %LINEBREAK% Before you activate, you may spend 1 %FORCE% to perform a %BARRELROLL% or %BOOST% action. Then, if you performed an action you do not have on your action bar, suffer 1 %HIT% damage."
    },
    "Swarm Tactics": {
      text: "At the start of the Engagement Phase, you may choose 1 friendly ship at range 1. If you do, that ship treats its initiative as equal to yours until the end of the round."
    },
    "Tactical Officer": {
      text: "<i>Requires: <r>%COORDINATE%</r>. Adds: %COORDINATE%</i>"
    },
    "Tactical Scrambler": {
      text: "<i>Requires: Medium or Large Base</i> %LINEBREAK% While you obstruct an enemy ship's attack, the defender rolls 1 additional defense die."
    },
    "Tobias Beckett": {
      text: "Setup: After placing forces, you may choose 1 obstacle in the play area. If you do, place it anywhere in the play area beyond range 2 of any board edge or ship and beyond range 1 of other obstacles."
    },
    "Tractor Beam": {
      text: "Attack: If this attack hits, all %HIT%/%CRIT% results inflict tractor tokens instead of damage."
    },
    "Trajectory Simulator": {
      text: "During the System Phase, if you would drop or launch a bomb, you may launch it using the (5 %STRAIGHT%) tempplate instead."
    },
    "Trick Shot": {
      text: "While you perform an attack that is obstructed by an obstacle, roll 1 additional attack die."
    },
    "Unkar Plutt": {
      text: "After you partially excute a maneuver, you may suffer 1 %HIT% damage to perform 1 white action."
    },
    "Veteran Tail Gunner": {
      text: "<i>Requires: %REARARC%</i> %LINEBREAK% After you perform a primary %FRONTARC% attack, you may perform a bonus primary %REARARC% attack."
    },
    "Veteran Turret Gunner": {
      text: "<i>Requires: %ROTATEARC%</i> %LINEBREAK% After you perform a primary attack, you may perform a bonus %SINGLETURRETARC% attack using a %SINGLETURRETARC% you did not already attack from this round."
    },
    "Virago": {
      text: "During the End Phase, you may spend 1 %CHARGE% to perform a red %BOOST% action. Add %MODIFICATION% slot."
    },
    "Xg-1 Assault Configuration": {
      text: "While you have exactly 1 disarm token, you can still perform %CANNON% attacks. While you perform a %CANNON% attack while disarmed, roll a maximum of 3 attack dice. Add %CANNON% slot."
    },
    '"Zeb" Orrelios': {
      text: "You can perform primary attacks at range 0. Enemy ships at range 0 can perform primary attacks against you."
    },
    "Zuckuss": {
      text: "While you perform an attack, if you are not stressed, you may choose 1 defense die and gain 1 stress token. If you do, the defender must reroll that die."
    },
    'GNK "Gonk" Droid': {
      text: "Setup: Lose 1 %CHARGE%. Action: Recover 1 %CHARGE%. Action: Spend 1 %CHARGE% to recover 1 shield."
    },
    "Hardpoint: Cannon": {
      text: "Adds a %CANNON% slot"
    },
    "Hardpoint: Missile": {
      text: "Adds a %MISSILE% slot"
    },
    "Hardpoint: Torpedo": {
      text: "Adds a %TORPEDO% slot"
    },
    "Black One": {
      text: "<i>Adds: %SLAM%</i> %LINEBREAK% After you perform a %SLAM% action, lose 1 %CHARGE%. Then you may gain 1 ion token to remove 1 disarm token. %LINEBREAK% If your charge is inactive, you cannot perform the %SLAM% action."
    },
    "Heroic": {
      text: " While you defend or perform an attack, if you have only blank results and have 2 or more results, you may reroll any number of your dice. "
    },
    "Rose Tico": {
      text: " ??? "
    },
    "Finn": {
      text: " While you defend or perform a primary attack, if the enemy ship is in your %FRONTARC%, you may add 1 blank result to your roll ... can be rerolled or otherwise ...  "
    },
    "Integrated S-Foils": {
      text: "<b>Closed:</b> While you perform a primary attack, if the defender is not in your %BULLSEYEARC%, roll 1 fewer attack die. Before you activate, you may flip this card. %LINEBREAK% <i>Adds: %BARRELROLL%, %FOCUS% > <r>%BARRELROLL%</r></i> %LINEBREAK% <b>Open:</b> ???"
    },
    "Targeting Synchronizer": {
      text: "<i>Requires: %LOCK%</i> %LINEBREAK% While a friendly ship at range 1-2 performs an attack against a target you have locked, that ship ignores the %LOCK% attack requirement. "
    },
    "Primed Thrusters": {
      text: "<i>Requires: Small Base</i> %LINEBREAK% While you have 2 or fewer stress tokens, you can perform %BARRELROLL% and %BOOST% actions even while stressed. "
    },
    "Kylo Ren (Crew)": {
      text: " Action: Choose 1 enemy ship at range 1-3. If you do, spend 1 %FORCE% to assign the I'll Show You the Dark Side condition to that ship. "
    },
    "General Hux": {
      text: " ... perform a white %COORDINATE% action ... it as red. If you do, you ... up to 2 additional ships ... ship type, and each ship you coordinate must perform the same action, treating that action as red. "
    },
    "Fanatical": {
      text: " While you perform a primary attack, if you are not shielded, you may change 1 %FOCUS% result to a %HIT% result. "
    },
    "Special Forces Gunner": {
      text: " ... you perform a primary %FRONTARC% attack, ... your %SINGLETURRETARC% is in your %FRONTARC%, you may roll 1 additional attack die. After you perform a primary %FRONTARC% attack, ... your %TURRET% is in your %BACKARC%, you may perform a bonus primary %SINGLETURRETARC% attack. "
    },
    "Captain Phasma": {
      text: " ??? "
    },
    "Supreme Leader Snoke": {
      text: " ??? "
    },
    "Hyperspace Tracking Data": {
      text: " Setup: Before placing forces, you may ... 0 and 6 ... "
    },
    "Advanced Optics": {
      text: " While you perform an attack, you may spend 1 focus to change 1 of your blank results to a %HIT% result. "
    },
    "Rey (Gunner)": {
      text: " ... defend or ... If the ... in your %SINGLETURRETARC% ... 1 %FORCE% to ... 1 of your blank results to a %EVADE% or %HIT% result. "
    }
  };
  condition_translations = {
    'Suppressive Fire': {
      text: 'While you perform an attack against a ship other than <strong>Captain Rex</strong>, roll 1 fewer attack die. %LINEBREAK% After <strong>Captain Rex</strong> defends, remove this card.  %LINEBREAK% At the end of the Combat Phase, if <strong>Captain Rex</strong> did not perform an attack this phase, remove this card. %LINEBREAK% After <strong>Captain Rex</strong> is destroyed, remove this card.'
    },
    'Hunted': {
      text: 'After you are destroyed, you must choose another friendly ship and assign this condition to it, if able.'
    },
    'Listening Device': {
      text: 'During the System Phase, if an enemy ship with the <strong>Informant</strong> upgrade is at range 0-2, flip your dial faceup.'
    },
    'Optimized Prototype': {
      text: 'While you perform a %FRONTARC% primary attack against a ship locked by a friendly ship with the <strong>Director Krennic</strong> upgrade, you may spend 1 %HIT%/%CRIT%/%FOCUS% result. If you do, choose one: the defender loses 1 shield or the defender flips 1 of its facedown damage cards.'
    },
    'I\'ll Show You the Dark Side': {
      text: ' ??? '
    },
    'Proton Bomb': {
      text: '(Bomb Token) - At the end of the Activation Phase, this device detonates. When this device detonates, each ship at range 0–1 suffers 1 %CRIT% damage.'
    },
    'Seismic Charge': {
      text: '(Bomb Token) - At the end of the Activation Phase this device detonates. When this device detonates, choose 1 obstacle at range 0–1. Each ship at range 0–1 of the obstacle suffers 1 %HIT% damage. Then remove that obstacle. '
    },
    'Bomblet': {
      text: '(Bomb Token) - At the end of the Activation Phase this device detonates. When this device detonates, each ship at range 0–1 rolls 2 attack dice. Each ship suffers 1 %HIT% damage for each %HIT%/%CRIT% result.'
    },
    'Loose Cargo': {
      text: '(Debris Token) - Loose cargo is a debris cloud.'
    },
    'Conner Net': {
      text: '(Mine Token) - After a ship overlaps or moves through this device, it detonates. When this device detonates, the ship suffers 1 %HIT% damage and gains 3 ion tokens.'
    },
    'Proximity Mine': {
      text: '(Mine Token) - After a ship overlaps or moves through this device, it detonates. When this device detonates, that ship rolls 2 attack dice. That ship then suffers 1 %HIT% plus 1 %HIT%/%CRIT% damage for each matching result.'
    }
  };
  return modification_translations = title_translations = exportObj.setupCardData(basic_cards, pilot_translations, upgrade_translations, condition_translations, modification_translations, title_translations);
};
