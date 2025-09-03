import fs from 'fs';
import path from 'path';
const postsDirectory = path.join(process.cwd(), "/app")
console.log(postsDirectory)
export const ReadFile = () => {
    const fileNames = fs.readdirSync(postsDirectory)
    console.log('fileNames', fileNames)

    const filePath = path.join(postsDirectory, 'expale.json');
    console.log('filePath', filePath);
    try {


        const data = fs.readFileSync(filePath, 'utf8');
        const json = JSON.parse(data);
        console.log('data', json);
    } catch (error) {
        console.error('Error reading or parsing example.txt:', error);
    }

}
