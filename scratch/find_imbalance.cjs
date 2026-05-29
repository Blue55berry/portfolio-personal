
const fs = require('fs');
const content = fs.readFileSync('d:/important/important/portfolio/src/components/Skills.tsx', 'utf8');
const lines = content.split('\n');

let braces = 0;
for (let i = 0; i < lines.length; i++) {
    for (let char of lines[i]) {
        if (char === '{') braces++;
        if (char === '}') braces--;
    }
    if (braces < 0) {
        console.log('Negative braces at line', i + 1, 'Value:', braces);
    }
}
console.log('Final Braces:', braces);
