import fs from 'fs';
const getFares = async () => {
    try {
        const res = await fetch('https://mtcbus.tn.gov.in/Home/fares');
        const data = await res.text();
        const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/g;
        let match;
        let i = 0;
        let out = '';
        while ((match = tableRegex.exec(data)) !== null) {
            out += `\n\n--- TABLE ${i} ---\n`;
            const clean = match[1].replace(/<\/tr>/g, '\n').replace(/<\/?[^>]+(>|$)/g, '\t');
            out += clean.replace(/\t+/g, '\t').trim();
            i++;
        }
        fs.writeFileSync('tmp_fares.txt', out, 'utf8');
    } catch (err) {
        console.error(err);
    }
};
getFares();
