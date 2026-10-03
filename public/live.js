(() => {
  const names = ['portop', 'auroraOS', 'pkgtui', 'termdock', 'qawk'];
  const request = async (path) => {
    const response = await fetch(`https://api.github.com/${path}`, { headers: { Accept: 'application/vnd.github+json' }, signal: AbortSignal.timeout(7000) });
    if (!response.ok) throw new Error('GitHub unavailable');
    return response.json();
  };
  const render = (data) => {
    if (!data || !Array.isArray(data.repos)) return;
    const repos = data.repos.filter(r => !r.fork && !r.private && r.owner?.login === 'padovanl');
    if (!repos.length) return;
    document.querySelector('[data-total-repos]').textContent = String(repos.length);
    document.querySelector('[data-total-stars]').textContent = String(repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0));
    for (const r of repos) {
      if (!names.includes(r.name)) continue;
      document.querySelector(`[data-stars="${r.name}"]`).textContent = `☆ ${r.stargazers_count}`;
    }
    for (const [name, tag] of Object.entries(data.releases || {})) {
      if (names.includes(name) && typeof tag === 'string') document.querySelector(`[data-release="${name}"]`).textContent = tag;
    }
    const list = document.querySelector('[data-repo-list]');
    const others = repos.filter(r => !names.includes(r.name));
    list.replaceChildren();
    for (const r of others) {
      const link = document.createElement('a');
      link.href = `https://github.com/padovanl/${encodeURIComponent(r.name)}`;
      link.target = '_blank'; link.rel = 'noopener noreferrer';
      const title = document.createElement('span'); title.textContent = r.name;
      const description = document.createElement('span'); description.className = 'archive-description'; description.textContent = r.description || (r.language ? `${r.language} project` : 'Explore the repository');
      const language = document.createElement('span'); language.className = 'archive-language'; language.textContent = r.language || 'Code';
      link.append(title, description, language); list.append(link);
    }
    document.querySelector('.archive-count').textContent = `${others.length} more repositories`;
    const date = new Date(data.timestamp);
    if (!Number.isNaN(date.getTime())) document.querySelector('[data-data-note]').textContent = `GitHub data updated ${date.toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric'})}.`;
  };
  let cached;
  try { cached = JSON.parse(localStorage.getItem('lp-github-v1') || 'null'); render(cached); } catch {}
  if (cached && Date.now() - cached.timestamp < 15 * 60 * 1000) return;
  Promise.allSettled([request('users/padovanl/repos?per_page=100&sort=updated'), ...names.map(name => request(`repos/padovanl/${name}/releases/latest`))]).then(results => {
    if (results[0].status !== 'fulfilled' || !Array.isArray(results[0].value)) return;
    const data = { repos: results[0].value, timestamp: Date.now(), releases: { ...(cached?.releases || {}) } };
    names.forEach((name, i) => { const result = results[i+1]; if (result.status === 'fulfilled' && result.value.tag_name) data.releases[name] = result.value.tag_name; });
    render(data);
    try { localStorage.setItem('lp-github-v1', JSON.stringify(data)); } catch {}
  }).catch(() => {});
})();
