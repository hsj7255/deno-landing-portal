// Deno Deploy Entrypoint: Minimalist Tech Blog & Edge Showcase
const HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alex Chen &middot; Cloud & Systems Engineer</title>
  <style>
    :root { --bg: #0d1117; --text: #c9d1d9; --accent: #58a6ff; --card: #161b22; --border: #30363d; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; padding: 3rem 1.5rem; max-width: 680px; margin: 0 auto; }
    h1 { font-size: 1.8rem; color: #fff; margin-bottom: 0.5rem; }
    p.bio { color: #8b949e; margin-bottom: 1.5rem; }
    .card { background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.25rem; margin-bottom: 1rem; }
    .title { color: #f0f6fc; font-weight: 600; text-decoration: none; display: block; margin-bottom: 0.3rem; }
    .meta { font-size: 0.8rem; color: #8b949e; margin-bottom: 0.5rem; }
    footer { margin-top: 3rem; font-size: 0.8rem; color: #8b949e; text-align: center; }
  </style>
</head>
<body>
  <header>
    <h1>Alex Chen</h1>
    <p class="bio">Cloud Architecture &amp; Distributed Systems. Building zero-latency runtime experiments.</p>
  </header>
  <main>
    <div class="card">
      <div class="meta">Nov 2026 &middot; 6 min read</div>
      <a class="title" href="#">Deterministic Heap Snapshots in Edge Micro-Runtimes</a>
      <p style="font-size:0.9rem;color:#8b949e;">Exploring cold-start mitigations and memory pooling in modern V8 and Deno edge workers.</p>
    </div>
    <div class="card">
      <div class="meta">Oct 2026 &middot; 4 min read</div>
      <a class="title" href="#">QUIC vs TCP Congestion Dynamics across Cellular Networks</a>
      <p style="font-size:0.9rem;color:#8b949e;">An empirical analysis of BBRv2 pacing algorithms under transient packet loss.</p>
    </div>
  </main>
  <footer>
    <p>&copy; 2026 Alex Chen. Powered by Deno Deploy.</p>
  </footer>
</body>
</html>`;

Deno.serve((req) => {
  const url = new URL(req.url);
  if (url.pathname === "/health") {
    return new Response(JSON.stringify({ status: "UP", service: "deno-landing-portal", timestamp: Date.now() }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(HTML_CONTENT, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});
