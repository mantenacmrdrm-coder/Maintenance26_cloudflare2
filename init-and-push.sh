#!/bin/bash

# Vérifie qu'on est dans le bon dossier ()
#  
if [ ! -d ".git" ]; then
  echo "➡️  Initialisation du dépôt Git..."
  git init
else
  echo "⚠️  Dépôt Git déjà initialisé."
fi

# Vérifie si le token existe
if [ -z "$GITHUB_TOKEN" ]; then
  echo "❌ Erreur : La variable GITHUB_TOKEN n'est pas définie."
  echo "   Exécutez : export GITHUB_TOKEN='votre_token'"
  exit 1
fi

# Configure le remote
REPO_OWNER="mantenacmrdrm-coder"
REPO_NAME="Maintenance26_cloudflare2"
REMOTE_URL="https://$REPO_OWNER:$GITHUB_TOKEN@github.com/$REPO_OWNER/$REPO_NAME.git"

echo "➡️  Configuration du remote..."
git remote remove origin 2>/dev/null
git remote add origin "$REMOTE_URL"

# Crée un .gitignore minimal si absent
if [ ! -f ".gitignore" ]; then
  echo "➡️  Création de .gitignore..."
  cat > .gitignore << 'EOF'
node_modules/
.wrangler/
dist/
.env
.env.local
.DS_Store
npm-debug.log
EOF
fi

# CORRECTION ICI : On ajoute toujours les fichiers avant de tester
echo "➡️  Ajout des fichiers..."
git add .

# On vérifie s'il y a quelque chose à commiter
if ! git diff --cached --quiet 2>/dev/null; then
  echo "➡️  Création du commit..."
  git commit -m "feat: update project"
else
  echo "⚠️  Aucune modification nouvelle à commiter."
fi

# Push vers main
echo "➡️  Envoi vers la branche 'main' sur GitHub..."
git branch -M main
# On ajoute --force au cas où le remote a un historique différent (ex: README créé sur GitHub)
# Ou essayez sans --force d'abord si vous voulez préserver l'historique distant
git push -u origin main --force 

echo "✅ Opération terminée."