# Roadmap to v0.1

The roadmap is gate-based rather than date-based. A large schema or reference
implementation is not progress if the conceptual boundary is wrong.

## Phase 1 — research foundation

Status: **first pass complete; external review pending**.

Deliverables in this repository:

- project vision, non-goals, and principles;
- primary-source prior-art report and comparison matrix;
- research-derived domain model;
- explicit Typikon-engine boundary;
- adversarial cases and loss tests;
- gated v0.1 roadmap.

Exit gate:

- source links and findings are reproducible;
- missing or inaccurately characterized major projects are corrected;
- rights uncertainty is recorded rather than papered over;
- reviewers agree that the proposed interoperability gap is real.

## Phase 2 — domain model review

Status: **internal review draft complete; required external review pending**.

Deliverables:

- glossary with necessary and sufficient distinctions;
- entity/observance/claim/context/evidence cardinalities;
- identifier, merge, split, redirect, and mapping lifecycle;
- model for language, script, grammatical forms, and transliteration;
- provenance and rights requirements;
- decision on claim modes and validity semantics;
- disposition of every adversarial case;
- recorded decisions for rejected alternatives.

Required review perspectives:

- at least two Orthodox jurisdictions or liturgical traditions;
- a clergy/liturgics reviewer familiar with real collision and transfer cases;
- Greek and Church Slavonic textual expertise;
- library/archive metadata and textual-scholarship expertise;
- two independent application or engine implementers;
- a licensing review appropriate to the chosen project and data licenses.

Exit gate:

- no core concept depends on an English label, closed jurisdiction list, one
  rank scale, one calendar, one paschalion, or one Bible versification;
- merge/split and conflicting-claim tests are lossless;
- the Typikon boundary is accepted by at least two independent implementers;
- simple contributions remain simple enough for hand authoring.

## Phase 3 — adversarial conceptual fixtures

Create a small research corpus before stabilizing syntax. These fixtures are
conceptual records or tables, not normative YAML.

Deliverables:

- 30–50 rights-safe cases selected from the adversarial-case catalog;
- explicit encodings of Nicholas and his multiple observances, Nativity,
  Pascha, Ascension, Pentecost, Annunciation, a forefeast/afterfeast/leavetaking,
  a synaxis, group of martyrs, icon feast, dedication, local and newly glorified
  saints, disputed identity, composite lection, Psalm versification difference,
  and annual instruction;
- overlapping claims from at least one OCA/Slavic and one Greek/GOARCH source,
  with Antiochian and ROCOR witnesses where they expose additional structure;
- walk-throughs for the calendar, parish bulletin, reader/workbench,
  typikon-engine, and digital-humanities consumers;
- a loss ledger showing information preserved, intentionally deferred, or still
  impossible to represent.

Exit gate:

- each fixture distinguishes common identity from source-backed local claims;
- no fixture copies text or media without a rights basis;
- failures cause model revision rather than fixture-specific escape fields;
- reviewers agree the model is ready to become specification prose.

## Phase 4 — v0.1 specification architecture

Deliverables:

- core terminology, identity, claim, context, provenance, and rights documents;
- extension and controlled-vocabulary mechanism;
- identifier and namespace policy;
- pack manifest, dependency, lockfile, and resource-index design;
- calendar, lection, localization, and versioning documents;
- conformance levels, compatibility rules, migrations, and error taxonomy;
- canonical JSON decision and restricted YAML authoring profile decision;
- JSON-LD mapping feasibility proof;
- mature project governance, contribution process, security contact, and review
  of the already selected license stack against real release contents.

Proposed specification family:

1. Core identity and claims
2. Pack and lock format
3. Calendar rules and occurrence trace
4. Lections and appointments
5. Text catalog and assets
6. Vocabulary publication policy
7. Conformance and test vectors

Exit gate:

- every normative feature has an owner document;
- unknown extensions can be preserved without hiding core identity or rights;
- namespace ownership and offline resolution are testable;
- project and sample-data licensing are explicit;
- all conceptual fixtures have a normative representation or an explicit
  deferral.

## Phase 5 — machine-readable prototype and reference tooling

Only now create versioned schemas and executable tooling.

Deliverables:

- minimal JSON Schemas for core and pack manifest;
- first calendar and lection extension schemas;
- semantic validation rules outside JSON Schema;
- rights-safe positive and negative machine fixtures;
- canonicalization, YAML-to-JSON, JSON round-trip, and Unicode test vectors;
- fixtures containing conflicting packs and unknown extensions;
- migration examples from Ponomar, Orthocal, one official annual witness, and a
  Church Slavonic text catalog, using only data whose inclusion is permitted;
- command-line structural/semantic validator with human-facing diagnostics;
- pack builder and deterministic lockfile resolver;
- namespace and mapping audit command;
- projection-trace verifier, but not a normative Typikon implementation;
- reproducible release and checksum process.

Exit gate:

- two independent parsers round-trip the fixtures losslessly;
- invalid dependency, namespace, calendar, versification, provenance, and rights
  cases fail predictably;
- no fixture or tool silently assumes online lookup;
- tools run offline on Linux, macOS, and Windows;
- a second implementation agrees on canonical fixtures and hashes;
- security review covers archive traversal, decompression limits, remote URL
  handling, signatures, and untrusted extensions;
- schema and tooling complexity remain proportional to the v0.1 use cases.

## Phase 6 — interoperability pilots

Pilot mappings should be developed with, not merely copied from, maintainers or
publishers where possible.

Candidate pilots:

- Ponomar identity and language mapping;
- Orthocal person/commemoration and lection mapping;
- typikon-engine pack input and generated-plan trace;
- Ispovednik projected-day import as a dated witness;
- GOARCH or OCA component catalog references without redistributing restricted
  text;
- Church Slavonic work/expression/asset catalog;
- two jurisdiction packs containing an intentional rank or reading conflict.

Exit gate:

- at least two producers and two consumers exchange packs;
- conflicts survive composition and can be explained to users;
- no pilot requires central-network access;
- rights review confirms what is included, linked, or excluded.

## Phase 7 — v0.1 release candidate

Release contents:

- stable v0.1 core, pack, calendar, lection, and conformance documents;
- versioned schemas and vocabulary snapshots;
- validator and pack tooling;
- rights-safe conformance corpus;
- migration guides and compatibility policy;
- governance, release, deprecation, and vulnerability processes.

Release gate:

- all forty adversarial cases have normative dispositions and tests where
  machine-testable;
- no unresolved critical issue threatens identifier stability or lossless
  round-trip behavior;
- at least two independent implementations pass the suite;
- specification and tooling licenses are approved;
- every included dataset or asset has an auditable rights basis;
- known limitations and deferred rule profiles are explicit.

## Deferred until after v0.1

- a centrally curated universal entity registry;
- a universal precedence, fasting, or transfer language;
- full service assembly semantics;
- fine-grained TEI/Web Annotation profiles;
- music notation interchange beyond asset cataloging;
- network discovery, content negotiation, and hosted registry APIs;
- cryptographic trust policy beyond basic optional signatures;
- automatic identity reconciliation without human-reviewed evidence.

Deferral does not mean these features are unimportant. It protects the stable
interchange core from becoming an unfinished universal liturgical platform.
