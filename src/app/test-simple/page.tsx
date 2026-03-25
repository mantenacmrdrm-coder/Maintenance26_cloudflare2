// src/app/test-simple/page.tsx
// Page 100% statique, SANS appel DB

export const dynamic = 'force-static';

export default function TestSimplePage() {
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>✅ TEST SIMPLE - Si vous voyez ceci, le worker fonctionne !</h1>
      <p>Cette page n'utilise PAS la base de données.</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </main>
  );
}