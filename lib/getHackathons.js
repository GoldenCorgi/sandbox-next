import path from 'path';
import { parse } from 'csv-parse/sync';
import fs from 'fs';




export async function getSortedPostsData() {
  var csvFile = "public/hackathon.csv"
  const data = fs.readFileSync(csvFile, 'utf8')
  var jsonData = parse(data, { columns: true, skip_empty_lines: true, relax_column_count: true });

  return jsonData.slice(0, 7)

  console.log(ree)
  return ree
}
