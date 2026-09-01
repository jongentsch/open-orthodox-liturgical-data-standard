import { useMemo, useState } from 'react';

type View = 'corpus' | 'digests' | 'compose';
type Kind = 'Person' | 'Observance' | 'Work';
type Status = 'reviewed' | 'proposed' | 'contested';

type Claim = {
  id: string;
  type: string;
  value: string;
  scope: string;
  source: string;
  citation: string;
  status: Status;
};

type CorpusRecord = {
  id: string;
  kind: Kind;
  label: string;
  meta: string;
  summary: string;
  claims: Claim[];
};

const corpus: CorpusRecord[] = [
  {
    id: 'example:person:nicholas-myra', kind: 'Person', label: 'Nicholas of Myra', meta: '3 observances · 4 claims',
    summary: 'A stable subject anchor for claims made about Nicholas in different traditions and sources.',
    claims: [
      { id: 'claim:nicholas-name-en', type: 'Name claim', value: 'Nicholas of Myra', scope: 'English · short display name', source: 'Example research catalog', citation: 'Catalog §N-12, entry 4', status: 'reviewed' },
      { id: 'claim:nicholas-name-el', type: 'Name claim', value: 'Νικόλαος ὁ Μυρέων', scope: 'Greek · historical title', source: 'Example Greek witness', citation: 'Witness G-14, fol. 22r', status: 'reviewed' },
      { id: 'claim:nicholas-participation', type: 'Participation claim', value: 'Commemorated by the repose observance', scope: 'Example Slavic calendar profile', source: 'Example calendar witness, 2024', citation: 'Calendar S-24, Dec. 6', status: 'proposed' },
      { id: 'claim:nicholas-birthplace', type: 'Place association claim', value: 'Patara', scope: 'Biographical tradition', source: 'Example synaxarion translation', citation: 'Synaxarion E-2, p. 117', status: 'contested' },
    ],
  },
  {
    id: 'example:observance:nicholas-repose', kind: 'Observance', label: 'Repose of Nicholas', meta: '2 date claims · 3 names',
    summary: 'An observance anchor kept distinct from both the person and any particular calendar date.',
    claims: [
      { id: 'claim:repose-date-dec6', type: 'Date claim', value: 'December 6', scope: 'Julian-calendar source profile', source: 'Example calendar witness A', citation: 'Calendar A, December 6', status: 'reviewed' },
      { id: 'claim:repose-date-dec19', type: 'Civil-date mapping claim', value: 'December 19', scope: '1900–2099 Gregorian display mapping', source: 'Example mapping definition', citation: 'Mapping JG-13, rule 2', status: 'reviewed' },
      { id: 'claim:repose-rank', type: 'Rank claim', value: 'Polyeleos', scope: 'Example local usage', source: 'Example typikon profile', citation: 'Typikon T-9, §44', status: 'proposed' },
    ],
  },
  {
    id: 'example:observance:nicholas-relics', kind: 'Observance', label: 'Translation of the relics', meta: '2 witnesses · 2 claims',
    summary: 'A separate event-observance whose relationship to Nicholas is asserted rather than folded into identity.',
    claims: [
      { id: 'claim:relics-date-may9', type: 'Date claim', value: 'May 9', scope: 'Julian-calendar source profile', source: 'Example Slavic calendar', citation: 'Calendar S-18, May 9', status: 'reviewed' },
      { id: 'claim:relics-place', type: 'Place claim', value: 'Bari', scope: 'Destination named by source', source: 'Example historical catalog', citation: 'Catalog H-7, record 882', status: 'reviewed' },
    ],
  },
  {
    id: 'example:work:life-nicholas-a', kind: 'Work', label: 'Life of Nicholas, recension A', meta: 'Greek · 2 witnesses',
    summary: 'A conceptual work related to multiple physical or digital witnesses without collapsing them together.',
    claims: [
      { id: 'claim:work-language', type: 'Language claim', value: 'Greek', scope: 'Language of this recension', source: 'Example manuscript catalog', citation: 'MSS catalog M-4, no. 31', status: 'reviewed' },
      { id: 'claim:work-subject', type: 'Subject claim', value: 'Nicholas of Myra', scope: 'Primary person treated by the work', source: 'Example manuscript catalog', citation: 'MSS catalog M-4, no. 31', status: 'reviewed' },
    ],
  },
];

const initialSelection = new Set([
  'claim:nicholas-name-en', 'claim:nicholas-name-el', 'claim:nicholas-participation',
  'claim:repose-date-dec6', 'claim:repose-date-dec19', 'claim:repose-rank',
]);

const allClaims = corpus.flatMap((record) => record.claims.map((claim) => ({ ...claim, anchor: record })));

function shortHash(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function App() {
  const [view, setView] = useState<View>('corpus');
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<'All' | Kind>('All');
  const [selectedRecordId, setSelectedRecordId] = useState(corpus[0].id);
  const [selectedClaimIds, setSelectedClaimIds] = useState(initialSelection);
  const [releaseOpen, setReleaseOpen] = useState(false);

  const selectedRecord = corpus.find((record) => record.id === selectedRecordId) ?? corpus[0];
  const selectedClaims = allClaims.filter((claim) => selectedClaimIds.has(claim.id));
  const selectedAnchors = new Set(selectedClaims.map((claim) => claim.anchor.id));
  const releasePayload = {
    profile: 'oolds-research-alpha', digest: 'Nicholas study', version: 1, immutable: true,
    anchorIds: [...selectedAnchors].sort(), claimIds: selectedClaims.map((claim) => claim.id).sort(),
  };
  const releaseHash = shortHash(JSON.stringify(releasePayload));

  const filteredCorpus = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return corpus.filter((record) => {
      const kindMatches = kind === 'All' || record.kind === kind;
      const textMatches = !needle || `${record.label} ${record.id} ${record.summary}`.toLocaleLowerCase().includes(needle);
      return kindMatches && textMatches;
    });
  }, [kind, query]);

  const toggleClaim = (claimId: string) => {
    setSelectedClaimIds((current) => {
      const next = new Set(current);
      if (next.has(claimId)) next.delete(claimId); else next.add(claimId);
      return next;
    });
  };

  const addRecordClaims = (record: CorpusRecord) => {
    setSelectedClaimIds((current) => new Set([...current, ...record.claims.map((claim) => claim.id)]));
  };

  const downloadRelease = () => {
    const contents = JSON.stringify({ ...releasePayload, contentId: `demo-${releaseHash}` }, null, 2);
    const url = URL.createObjectURL(new Blob([contents], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `nicholas-study-release-demo-${releaseHash}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="brand-lockup" onClick={() => setView('corpus')} aria-label="Open corpus">
          <span className="brand-mark" aria-hidden="true">O</span>
          <span><span className="eyebrow">Open Orthodox Liturgical Data Standard</span><strong>Research Alpha</strong></span>
        </button>
        <nav className="topnav" aria-label="Primary navigation">
          {(['corpus', 'digests', 'compose'] as View[]).map((item) => (
            <button key={item} className={`nav-item ${view === item ? 'active' : ''}`} onClick={() => setView(item)}>{item[0].toUpperCase() + item.slice(1)}</button>
          ))}
        </nav>
        <div className="alpha-badge"><span />Non-normative demo</div>
      </header>

      <section className="notice" aria-label="Prototype notice">
        <strong>Alpha fixture workspace</strong>
        <span>Illustrative records only. This demonstrates concepts; it does not define the v0.1 schema.</span>
      </section>

      {view === 'corpus' && (
        <div className="workspace">
          <aside className="corpus-panel">
            <div className="panel-heading"><div><p className="eyebrow">Research corpus</p><h2>Explore anchors</h2></div><span className="count-pill">{filteredCorpus.length}</span></div>
            <label className="search-box"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search the illustrative corpus" placeholder="Search people, events, works…" /></label>
            <div className="filter-row" aria-label="Corpus filters">
              {(['All', 'Person', 'Observance', 'Work'] as const).map((filter) => <button key={filter} className={`chip ${kind === filter ? 'active' : ''}`} onClick={() => setKind(filter)}>{filter}</button>)}
            </div>
            <div className="record-list">
              {filteredCorpus.map((record) => (
                <button className={`record-row ${record.id === selectedRecord.id ? 'selected' : ''}`} key={record.id} onClick={() => setSelectedRecordId(record.id)}>
                  <span className={`record-icon kind-${record.kind.toLowerCase()}`}>{record.kind.slice(0, 1)}</span>
                  <span className="record-copy"><strong>{record.label}</strong><small>{record.meta}</small></span>
                </button>
              ))}
              {filteredCorpus.length === 0 && <p className="empty-state">No illustrative anchors match those filters.</p>}
            </div>
          </aside>

          <article className="record-detail">
            <div className="record-header">
              <div><div className="record-kicker"><span className="type-dot" />{selectedRecord.kind} anchor</div><h2>{selectedRecord.label}</h2><p className="record-id">{selectedRecord.id}</p></div>
              <button className="primary-button" onClick={() => addRecordClaims(selectedRecord)}>Add claims to digest</button>
            </div>
            <p className="record-summary">{selectedRecord.summary}</p>
            <div className="principle-card"><span className="principle-number">01</span><p><strong>The anchor identifies the subject.</strong> Everything asserted about the subject remains a sourced, scoped claim.</p></div>
            <section className="section-block">
              <div className="section-heading"><div><p className="eyebrow">Attributed assertions</p><h3>Claims about this anchor</h3></div><span className="section-count">{selectedRecord.claims.length} visible</span></div>
              <div className="claim-stack">
                {selectedRecord.claims.map((claim) => {
                  const isSelected = selectedClaimIds.has(claim.id);
                  return (
                    <article className={`claim-card ${isSelected ? 'included' : ''}`} key={claim.id}>
                      <div className="claim-main"><span className="claim-type">{claim.type}</span><h4>{claim.value}</h4><p>{claim.scope}</p></div>
                      <div className="claim-source"><span className={`status status-${claim.status}`}>{claim.status}</span><small>According to</small><strong>{claim.source}</strong><span className="citation">{claim.citation}</span></div>
                      <button className={`claim-toggle ${isSelected ? 'selected' : ''}`} onClick={() => toggleClaim(claim.id)} aria-label={`${isSelected ? 'Remove' : 'Add'} ${claim.value} ${isSelected ? 'from' : 'to'} digest`}>{isSelected ? '✓' : '+'}</button>
                    </article>
                  );
                })}
              </div>
            </section>
          </article>

          <DigestPanel selectedClaims={selectedClaims} anchorCount={selectedAnchors.size} onRemove={toggleClaim} onPreview={() => setReleaseOpen(true)} onOpenDigests={() => setView('digests')} />
        </div>
      )}

      {view === 'digests' && <DigestWorkspace selectedClaims={selectedClaims} anchorCount={selectedAnchors.size} releaseHash={releaseHash} onOpenCorpus={() => setView('corpus')} onPreview={() => setReleaseOpen(true)} />}
      {view === 'compose' && <ComposeWorkspace releaseHash={releaseHash} onOpenDigests={() => setView('digests')} />}

      {releaseOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setReleaseOpen(false)}>
          <section className="release-modal" role="dialog" aria-modal="true" aria-labelledby="release-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-header"><div><p className="eyebrow">Release preview</p><h2 id="release-title">Nicholas study · v1</h2></div><button className="icon-button" onClick={() => setReleaseOpen(false)} aria-label="Close release preview">×</button></div>
            <div className="release-seal"><span>Immutable</span><strong>demo-{releaseHash}</strong><small>Illustrative content identifier</small></div>
            <div className="release-grid"><div><strong>{selectedAnchors.size}</strong><span>anchor records</span></div><div><strong>{selectedClaims.length}</strong><span>selected claims</span></div><div><strong>{new Set(selectedClaims.map((claim) => claim.source)).size}</strong><span>cited sources</span></div></div>
            <div className="boundary-explainer"><strong>The release copies selected evidence across a boundary.</strong><p>Draft notes, collaborator presence, and unselected corpus records remain outside. Any later change creates a new release instead of silently altering this one.</p></div>
            <pre className="manifest-preview">{JSON.stringify(releasePayload, null, 2)}</pre>
            <div className="modal-actions"><button className="secondary-button" onClick={() => setReleaseOpen(false)}>Keep editing</button><button className="primary-button" onClick={downloadRelease}>Download illustrative JSON</button></div>
          </section>
        </div>
      )}
    </main>
  );
}

function DigestPanel({ selectedClaims, anchorCount, onRemove, onPreview, onOpenDigests }: {
  selectedClaims: Array<Claim & { anchor: CorpusRecord }>;
  anchorCount: number;
  onRemove: (claimId: string) => void;
  onPreview: () => void;
  onOpenDigests: () => void;
}) {
  return (
    <aside className="digest-panel">
      <div className="panel-heading"><div><p className="eyebrow">Mutable team digest</p><h2>Nicholas study</h2></div><span className="team-stack" aria-label="Three illustrative collaborators"><i>JG</i><i>AN</i><i>+1</i></span></div>
      <p className="digest-description">A shared selection comparing identity, observance, and name evidence across example witnesses.</p>
      <div className="digest-stat-grid"><div><strong>{selectedClaims.length}</strong><span>selected claims</span></div><div><strong>{anchorCount}</strong><span>anchor records</span></div></div>
      <div className="digest-items"><p className="eyebrow">Current selection</p>
        {selectedClaims.slice(0, 5).map((claim) => <div className="digest-item" key={claim.id}><span className={`mini-kind kind-${claim.anchor.kind.toLowerCase()}`}>{claim.anchor.kind[0]}</span><div><strong>{claim.value}</strong><small>{claim.type} · {claim.source}</small></div><button onClick={() => onRemove(claim.id)} aria-label={`Remove ${claim.value}`}>×</button></div>)}
        {selectedClaims.length > 5 && <button className="text-button" onClick={onOpenDigests}>+ {selectedClaims.length - 5} more in digest</button>}
      </div>
      <div className="release-boundary"><span className="lock-mark" aria-hidden="true">◇</span><div><strong>Release boundary</strong><p>Private notes stay here. A release contains only explicitly selected records.</p></div></div>
      <button className="release-button" onClick={onPreview} disabled={selectedClaims.length === 0}>Preview immutable release</button>
    </aside>
  );
}

function DigestWorkspace({ selectedClaims, anchorCount, releaseHash, onOpenCorpus, onPreview }: {
  selectedClaims: Array<Claim & { anchor: CorpusRecord }>;
  anchorCount: number;
  releaseHash: string;
  onOpenCorpus: () => void;
  onPreview: () => void;
}) {
  return (
    <div className="page-shell">
      <header className="page-hero"><div><p className="eyebrow">Evidence workspaces</p><h2>Digests turn research into reviewable selections.</h2><p>Individuals can collect evidence privately; teams can refine shared digests; immutable releases make an exact selection citable and composable.</p></div><button className="primary-button" onClick={onOpenCorpus}>Add from corpus</button></header>
      <div className="digest-layout">
        <section className="active-digest-card">
          <div className="card-topline"><span className="state-pill mutable">Mutable</span><span>Team digest · 3 collaborators</span></div><h3>Nicholas study</h3><p>Compare identity, observance, and name evidence across several illustrative witnesses.</p>
          <div className="large-stats"><div><strong>{selectedClaims.length}</strong><span>claims</span></div><div><strong>{anchorCount}</strong><span>anchors</span></div><div><strong>3</strong><span>sources</span></div></div>
          <div className="table-list">{selectedClaims.map((claim) => <div className="table-row" key={claim.id}><span className={`mini-kind kind-${claim.anchor.kind.toLowerCase()}`}>{claim.anchor.kind[0]}</span><div><strong>{claim.value}</strong><small>{claim.anchor.label} · {claim.citation}</small></div><span className={`status status-${claim.status}`}>{claim.status}</span></div>)}</div>
          <button className="release-button" onClick={onPreview}>Preview release from this selection</button>
        </section>
        <aside className="release-history">
          <p className="eyebrow">Release history</p><h3>Citable snapshots</h3>
          <article className="history-card current"><div><span className="state-pill immutable">Immutable</span><small>Current preview</small></div><strong>Nicholas study · v1</strong><code>demo-{releaseHash}</code><p>Would lock the exact selection at left.</p></article>
          <article className="history-card"><div><span className="state-pill immutable">Immutable</span><small>Fixture</small></div><strong>Nicholas study · v0</strong><code>demo-81c4aa21</code><p>Earlier illustrative selection: 4 claims, 2 anchors.</p></article>
          <div className="concept-note"><strong>Why both?</strong><p>A digest is where people work. A release is what other people and systems can reliably cite.</p></div>
        </aside>
      </div>
    </div>
  );
}

function ComposeWorkspace({ releaseHash, onOpenDigests }: { releaseHash: string; onOpenDigests: () => void }) {
  const [composed, setComposed] = useState(false);
  return (
    <div className="page-shell compose-shell">
      <header className="page-hero"><div><p className="eyebrow">Deterministic composition</p><h2>Combine releases without erasing disagreement.</h2><p>The composer consumes locked inputs. It preserves attributed claims side by side and makes the chosen output policy explicit.</p></div><button className="secondary-button" onClick={onOpenDigests}>Review digests</button></header>
      <section className="pipeline" aria-label="Composition pipeline">
        <article className="input-release"><span className="source-mark blue">A</span><div><small>Team release</small><strong>Nicholas study · v1</strong><code>demo-{releaseHash}</code></div></article><span className="pipeline-plus">+</span>
        <article className="input-release"><span className="source-mark gold">B</span><div><small>Local calendar release</small><strong>Parish calendar profile · v3</strong><code>demo-42d91b7e</code></div></article><span className="pipeline-arrow">→</span>
        <article className={`input-release output ${composed ? 'ready' : ''}`}><span className="source-mark navy">C</span><div><small>Combined output</small><strong>Winter observances research set</strong><code>{composed ? 'demo-b6a209d4' : 'not generated'}</code></div></article>
      </section>
      <div className="compose-grid">
        <section className="conflict-card">
          <div className="section-heading"><div><p className="eyebrow">Preserved variance</p><h3>Two date expressions, one observance</h3></div><span className="conflict-badge">No silent winner</span></div>
          <div className="comparison-head"><span>Claim</span><span>Source and scope</span><span>Output treatment</span></div>
          <div className="comparison-row"><div><span className="source-key blue">A</span><strong>December 6</strong></div><p>Julian-calendar source profile<br /><small>Calendar A, December 6</small></p><span className="treatment">Preserve</span></div>
          <div className="comparison-row"><div><span className="source-key gold">B</span><strong>December 19</strong></div><p>Gregorian civil display, 1900–2099<br /><small>Mapping JG-13, rule 2</small></p><span className="treatment">Preserve</span></div>
          <div className="explanation-strip"><strong>These do not overwrite one another.</strong><span>Consumers can display either expression because calendar basis and scope travel with each claim.</span></div>
        </section>
        <aside className="policy-card">
          <p className="eyebrow">Composition policy</p><h3>Research union</h3>
          <label><span>Identity handling</span><strong>Merge matching anchor IDs</strong></label><label><span>Claim handling</span><strong>Keep attributed variants</strong></label><label><span>Private notes</span><strong>Never imported</strong></label><label><span>Input versions</span><strong>Lock exact releases</strong></label>
          <button className="primary-button" onClick={() => setComposed(true)}>{composed ? 'Output generated ✓' : 'Generate combined output'}</button>
          {composed && <p className="success-note">The illustrative output contains 2 locked inputs, 9 claims, and both scoped date expressions.</p>}
        </aside>
      </div>
    </div>
  );
}

export default App;
