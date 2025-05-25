import { readFileSync } from 'fs';
import { join } from 'path';

// Read cities from a CSV into an array.
// Load from this lib so it is only loaded once.

const csvData = readFileSync(join(process.cwd(), 'src', 'csv', 'cities.csv'), 'utf-8');

const cities =
    csvData
        .trim()
        .split('\n')
        .slice(1) // Skip header
        .map(line => {
            const [name, lat, lng] = line.split(',');
            return {name, lat, lng};
        });

export default cities;
