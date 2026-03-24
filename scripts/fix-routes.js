// scripts/fix-routes.js
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', '_routes.json');
const dest = path.join(__dirname, '..', '.open-next', '_routes.json');

// S'assurer que .open-next existe
const openNextDir = path.join(__dirname, '..', '.open-next');
if (!fs.existsSync(openNextDir)) {
  fs.mkdirSync(openNextDir, { recursive: true });
  console.log('✅ Created .open-next/ directory');
}

// Copier ou créer le fichier
if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('✅ Copied _routes.json to .open-next/');
} else {
  // Créer un fichier par défaut
  fs.writeFileSync(dest, '{"version":1,"include":["/*"],"exclude":[]}');
  console.log('✅ Created default _routes.json in .open-next/');
}

// Vérifier que le fichier existe vraiment
if (fs.existsSync(dest)) {
  console.log('✅ _routes.json confirmed in .open-next/');
  console.log('   Content:', fs.readFileSync(dest, 'utf8'));
} else {
  console.error('❌ ERROR: _routes.json not found after creation!');
  process.exit(1);
}