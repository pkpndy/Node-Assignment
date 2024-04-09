const fs = require('fs');

function countWords(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            const words = data.split(/\s+/).filter(word => word.trim() !== '');
            resolve(words.length);
        });
    });
}

async function main() {
    try {
        const wordCount = await countWords('data.txt');
        console.log('Total word count:', wordCount);
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
