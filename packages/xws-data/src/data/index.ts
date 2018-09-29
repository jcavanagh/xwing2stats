import { lstatSync, readdirSync, readFileSync } from 'fs-extra';
import { basename, join, extname } from 'path';
import { set } from 'lodash';

interface DataFile {
  name: string;
  xws: string;
}

interface DataFileItem {
  path: string;
  file: DataFile;
}

const isDirectory = (source: string) => lstatSync(source).isDirectory();
const isJSONFile = (source: string) => {
  const stat = lstatSync(source);
  return stat.isFile() && /\.json$/i.test(source);
};

const getDirectories = (source: string) => readdirSync(source).filter((name: string) => isDirectory(join(source, name)));
const getJSONFiles = (source: string): DataFileItem[] => {
  const files = readdirSync(source).filter((name: string) => isJSONFile(join(source, name)));
  return files.map(
    (name: string): DataFileItem => ({
      path: join(source, name),
      file: JSON.parse(readFileSync(join(source, name)).toString())
    })
  );
};
const dataPath = join(__dirname, '../../node_modules/xwing-data2/data');

//Roll up all the JSON into one data structure
const rollup = (data: object, scope: string[] = []) => {
  const fullPath = join(dataPath, ...scope);

  //List all folders, turn them into keys
  const folders = getDirectories(fullPath);
  if (folders.length) {
    for (const folder of folders) {
      const folderScope = [...scope, folder];
      rollup(data, folderScope);
    }
  } else {
    //Read all the JSON here and put it in stuff
    const jsonFiles = getJSONFiles(fullPath);
    if (jsonFiles.length === 1) {
      //Write the entire file as the folder key value
      set(data, scope, jsonFiles[0]);
    } else {
      for (const { path, file } of jsonFiles) {
        const name = file.name || basename(path, extname(path));
        set(data, [...scope, name], file);
      }
    }
  }

  return data;
};

const data = rollup({});
import { writeFileSync } from 'fs-extra';
import { fstat } from 'fs';
writeFileSync('./data.json', JSON.stringify(data, null, 2));
export default data;
