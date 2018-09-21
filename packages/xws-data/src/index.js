const xwing = require('../data/xwing');
const _ = require('lodash');

export const basicCardData = xwing.basicCardData();
export const shipsByName = _.transform(
  basicCardData.ships,
  (all, ship) => {
    all[ship.name] = ship;
  },
  {}
);

export const pilotedShips = basicCardData.pilotsById.filter(p => !p.skip).map(pilot => {
  const ship = shipsByName[pilot.ship];
  if (!ship) {
    console.error(`No ship for name:${JSON.stringify(pilot)}`);
  }
  return { pilot, ship };
});

export const ships = basicCardData.ships;
