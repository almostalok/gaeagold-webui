const fs = require('fs');
let code = fs.readFileSync('lib/site-data.ts', 'utf8');
code = code.replace({ label: 'Blog', href: '#' },, '');
code = code.replace(const companyLinks = ['Our Story', 'Corporate Info', 'Contact Us', 'Blog'];, const companyLinks = ['Our Story', 'Corporate Info', 'Contact Us'];);
fs.writeFileSync('lib/site-data.ts', code);

let footer = fs.readFileSync('components/Footer.tsx', 'utf8');
footer = footer.replace(const companyLinks = ['Our Story', 'Corporate Info', 'Contact Us', 'Blog'];, const companyLinks = ['Our Story', 'Corporate Info', 'Contact Us'];);
fs.writeFileSync('components/Footer.tsx', footer);
