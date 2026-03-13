import fs from 'fs';

const getFares = async () => {
    try {
        const res = await fetch('https://mtcbus.tn.gov.in/Home/fares');
        const data = await res.text();

        let fullParse = '';
        const tabs = ['Ordinary Services', 'Express Services', 'Deluxe Services', 'A/C Service', 'Small', 'Night services', 'E/V Deluxe Service', 'E/V A/C Service', 'Chennai Ula Services', 'Pink Services'];

        for (let i = 0; i < 10; i++) {
            fullParse += `\n\n=== TAB ${i}: ${tabs[i]} ===\n`;
            const start = data.indexOf(`id="tab${i}"`);
            if (start === -1) {
                console.log(`Tab ${i} not found`);
                continue;
            }

            let end = data.indexOf(`id="tab${i + 1}"`, start);
            if (end === -1 && i < 9) end = data.indexOf(`id="tab${i + 2}"`, start); // Handle missing tabs just in case

            const section = end !== -1 ? data.slice(start, end) : data.slice(start);

            // Find rows
            const rows = section.match(/<tr[^>]*>([\s\S]*?)<\/tr>/g) || [];
            rows.forEach(r => {
                const cells = r.match(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g) || [];
                const textCells = cells.map(c => c.replace(/<\/?[^>]+(>|$)/g, '').replace(/&nbsp;/g, '').trim()).filter(c => c);
                if (textCells.length > 0) {
                    fullParse += textCells.join(' | ') + '\n';
                }
            });
        }
        fs.writeFileSync('d:/Transit-Save (COPY)/transitsave-main/tmp_fares_all.txt', fullParse, 'utf8');
    } catch (err) {
        console.error(err);
    }
};
getFares();
