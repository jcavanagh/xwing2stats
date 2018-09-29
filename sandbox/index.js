const xwing = require('../yasb2-data/xwing');
const _ = require('lodash');

const BASE_ATTACK_WEIGHT = [0, 1, 2, 3, 4];
const WEIGHTS = {
  ship: {
    hull: 1,
    shields: 1.2,
    attack: BASE_ATTACK_WEIGHT,
    attackt: BASE_ATTACK_WEIGHT.map(aw => aw * 1.2),
    attackdt: BASE_ATTACK_WEIGHT.map(aw => aw * 1.5),
    agility: [0, 1, 2, 3, 4]
  },
  pilot: {
    force: 5
    // slots: {

    // }
  }
};

const SIZE = {
  small: 1,
  medium: 0.9,
  large: 0.8
};

const invalid = w => _.isNaN(w) || w == null;

const weight = (pilot, weightKey) => {
  // console.log(pilot);
  return _.reduce(
    WEIGHTS[weightKey],
    (w, val, key) => {
      const pilotValue = _.get(pilot, [weightKey, key]);
      if (invalid(pilotValue)) {
        if (!key.includes('attack')) {
          console.warn(`No pilot value for path: ${weightKey}, ${key}`, pilot);
        }
        return w;
      }
      const mult = _.isFunction(val) ? val(pilotValue) : _.isArray(val) ? val[pilotValue] : val;
      if (invalid(mult)) {
        if (!key.includes('attack')) {
          console.warn(`No weight value for path: ${weightKey}, ${key}`, pilot);
        }
        return w;
      }
      w = w + pilotValue * mult;
      // console.log(key, pilotValue, mult, w);
      return w;
    },
    0
  );
};

const shipValue = pilot => {
  const sizeMultipler = _.get(SIZE, pilot.ship.large ? 'large' : pilot.ship.medium ? 'medium' : 'small');
  const ship = weight(pilot, 'ship');
  // console.log(sizeMultipler, ship);
  return (ship + 0) * sizeMultipler;
};

const pilotValue = pilot => {
  //Initiative, pilot ability, force
  return pilot.pilot.skill + 0 + 0;
};

const pilotPointEfficiency = pilot => {
  const value = _.sum([shipValue(pilot), pilotValue(pilot)]);
  const points = pilot.pilot.points;
  // console.log(value, points);
  return {
    pilot: pilot.pilot.name,
    ship: pilot.ship.name,
    faction: pilot.pilot.faction,
    value: value / points
  };
};

const efficiency = _.sortBy(pilotedShips.map(pilotPointEfficiency), 'value');

console.log(efficiency.reverse());
