
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TestLogPage() {
  const timestamp = new Date().toISOString();
  
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: 'green' }}>✅ WORKER NEXT.JS EXÉCUTÉ !</h1>
      <p><strong>Timestamp:</strong> {timestamp}</p>
      <p><strong>URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'server-side'}</p>
      <hr />
      <h2>🎉 Félicitations !</h2>
      <p>Si vous voyez cette page, cela signifie que :</p>
      <ul>
        <li>✅ Le déploiement Cloudflare fonctionne</li>
        <li>✅ Le worker OpenNext est opérationnel</li>
        <li>✅ Le routage Next.js fonctionne</li>
      </ul>
      <hr />
      <p><em>Le problème 404 sur "/" est probablement un problème de routage spécifique à la page d'accueil.</em></p>
    </main>
  );
}