const csv = require("csvtojson/v2");
const fs = require("fs-extra");

files = process.argv.slice(2);

if (files && files.length > 0) {
  let i = 0;
  files.map(file => {
    csv()
      .fromFile(file)
      .then(jsonObj => {
        fs.writeFileSync(`csv-to-json-${i}.json`, JSON.stringify(jsonObj));
        console.log(`Wrote file ${file} to a JSON file.`);
        i++;
      });
  });
}
