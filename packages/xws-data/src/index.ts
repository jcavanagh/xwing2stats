import { lstatSync, readdirSync, readFileSync } from 'fs-extra';
import { basename, join, extname } from 'path';
import { get, map, set } from 'lodash';
import * as t from './types';

const isDirectory = (source: string) => lstatSync(source).isDirectory();
const isJSONFile = (source: string) => {
  const stat = lstatSync(source);
  return stat.isFile() && /\.json$/i.test(source);
};

const getDirectories = (source: string) => readdirSync(source).filter((name: string) => isDirectory(join(source, name)));
const getJSONFiles = (source: string) => {
  const files = readdirSync(source).filter((name: string) => isJSONFile(join(source, name)));
  return files.map((name: string) => ({
    path: join(source, name),
    file: JSON.parse(readFileSync(join(source, name)).toString())
  }));
};
const dataPath = join(__dirname, '../../node_modules/xwing-data2/data');

//How much folder depth to respect (depends on how unique the "name" field, or the filenames in the tree where depth > 1)
const MAX_DEPTH = 1;

//Map of depth -> aliases
const WRITE_ALIASES = {
  0: {
    pilots: 'ships',
    'damage-decks': 'damage_decks'
  }
};

//Roll up all the JSON into one data structure
const rollup = (data: t.Data, path: string[] = [], depth: number = 0): t.Data => {
  //Read from
  const fullPath = join(dataPath, ...path);
  //Write to
  const scope = map(path.slice(0, Math.min(path.length, MAX_DEPTH)), (val, index) => {
    return get(WRITE_ALIASES, [index, val], val);
  });

  //List all folders, turn them into keys
  const folders = getDirectories(fullPath);
  if (folders.length) {
    for (const folder of folders) {
      const newPath = [...path, folder];
      rollup(data, newPath, depth++);
    }
  } else {
    //Read all the JSON here and put it in stuff
    const jsonFiles = getJSONFiles(fullPath);
    if (jsonFiles.length === 1) {
      //Write the entire file as the folder key value
      set(data, scope, jsonFiles[0].file);
    } else {
      for (const { path, file } of jsonFiles) {
        const name = file.name || basename(path, extname(path));
        set(data, [...scope, name], file);
      }
    }
  }

  return data;
};

const data = rollup(<t.Data>{});
// import { writeFileSync } from 'fs-extra';
// writeFileSync('./data.json', JSON.stringify(data, null, 2));
export default data;
export const actions = data.actions;
export const conditions = data.conditions;
export const damage_decks = data.damage_decks;
export const factions = data.factions;
export const ships = data.ships;
export const stats = data.stats;
export { t as types };
