# Adversarial domain cases

Status: acceptance tests for the conceptual model. They are intentionally more
difficult than a basic calendar feed. A proposed v0.1 model should explain each
case without inventing consensus or losing provenance.

| # | Case | Required representation | Failure exposed |
|---:|---|---|---|
| 1 | Nicholas of Myra has an ordinary commemoration and a translation-of-relics observance. | One person ID; two observance IDs; separate participation, date, rank, and text claims. | Treating a saint and feast row as the same object. |
| 2 | A synaxis commemorates a named group whose membership varies by source. | Stable synaxis observance; optional collective entity; scoped membership and participation claims with evidence. | Baking a disputed member list into identity. |
| 3 | An icon feast has no uniquely identifiable human subject. | Icon/material-object entity or observance with appropriate typed subject; no fake “saint.” | Person-only ontology. |
| 4 | A historical deliverance is commemorated liturgically. | Event entity and observance; sourced relation and localized names. | Assuming every observance is biographical. |
| 5 | A local saint is commemorated in one diocese but absent elsewhere. | One entity and observance; reception/date/rank claims scoped to authority, place, and validity. | `common/local` boolean or absence interpreted as rejection. |
| 6 | Two catalogs may or may not identify the same obscure martyr. | Distinct IDs plus possible/exact/disjoint mapping claims, issuer, evidence, confidence, and review state. | Unqualified `sameAs` or destructive merge. |
| 7 | A formerly single record is discovered to represent two people. | Tombstone or limit old ID; split relation to both successors; preserve citations; no single redirect. | Identifier reuse and history loss. |
| 8 | Two duplicate IDs are merged. | Surviving anchor plus redirects issued by namespace owner, retained deprecated records, and external mapping history. | Deleting the losing ID. |
| 9 | A saint is newly glorified and official texts appear later. | Stable person; new status/reception claim and observance; later expressions/editions with validity and publisher evidence. | Mutating identity or pretending current approval was timeless. |
| 10 | A title is preferred in Greek, another in Church Slavonic, and two English jurisdictions prefer different translations. | Multiple name claims with BCP 47 tags, kind, grammar/transliteration metadata, and contextual preference. | One `name` per language or English canonical name. |
| 11 | A source records genitive and nominative Church Slavonic forms. | Repeatable names/forms using a declared grammatical-feature vocabulary and source attribution. | Treating inflected forms as aliases or corrupt duplicates. |
| 12 | A fixed observance is December 6 Julian, producing different civil dates by century. | Fixed rule with explicit calendar reckoning; occurrences derived for year and civil calendar. | Storing “December 19” as universal fact. |
| 13 | A movable observance is 39 days after Pascha, but communities use different paschalion assumptions. | One or more rule claims with explicit paschalion IDs and contexts. | Naked integer offset or hidden pack default. |
| 14 | An annual official calendar transfers an observance because of a collision, but the standing rule is unknown. | Perennial rule retained; dated annual witness/override; no inferred universal transfer algorithm. | Generalizing one year's output. |
| 15 | Two authorities assign different ranks to the same observance. | Parallel rank claims, each term bound to its rank scheme, scope, source, and validity. | Last-write-wins or comparing unrelated integers. |
| 16 | A rank name stayed the same while its operational service requirements changed by edition. | Stable or versioned vocabulary term plus edition-specific policy; engine behavior versioned separately. | Defining service assembly inside a timeless label. |
| 17 | A lection is a composite of several discontinuous passages. | Stable lection ID and ordered passage segments under a declared reference system/versification. | Storing only a citation string or copyrighted prose. |
| 18 | Psalm numbering differs between Septuagintal and Masoretic traditions. | Explicit canon/reference system and versification for every segment; mappings are sourced. | Assuming chapter/verse coordinates are universal. |
| 19 | Two jurisdictions appoint different Gospel readings at the same service position. | Parallel appointment claims scoped by jurisdiction, service, observance/cycle, source, and validity. | One Gospel field on the day record. |
| 20 | A lection appointment is open data but the linked Bible translation is copyrighted. | Appointment and passages distributable independently; expression asset has its own restrictive rights and may be reference-only. | Pack license inherited blindly by all content. |
| 21 | An ancient hymn work has Greek, Church Slavonic, and English expressions from multiple translators. | Work, expression, edition, asset, language, responsibility, derivation, and per-asset rights. | One multilingual blob or conflating work and file. |
| 22 | A publisher silently updates a web service text. | Source access/edition witness, retrieval date, checksum, supersession relation, and separate expression version. | Mutable URL treated as immutable evidence. |
| 23 | A parish observes a practice not prescribed by the cited diocesan calendar. | Observed-usage witness distinct from prescriptive claim and scoped to the parish/time. | Treating observed and authorized as synonyms. |
| 24 | A source says “according to local custom” without naming the locality. | Claim with incomplete/uncertain scope, exact locator, and explicit uncertainty; no fabricated jurisdiction. | Validators forcing false precision. |
| 25 | Two independently produced packs use the slug `ascension`. | Namespace-expanded IDs and manifest ownership; optional reviewed mapping between them. | Pack-local keys colliding globally. |
| 26 | A pack depends on a rank vocabulary range, but the lock resolves a newer incompatible term set. | Declared dependency constraints, exact lock, content hashes, compatibility error before engine resolution. | Network-latest or silent vocabulary drift. |
| 27 | A consumer cannot evaluate an engine-specific transfer extension. | Preserve/round-trip opaque extension, report unsupported evaluation, continue using independent core data. | Unknown extension causing data loss or false result. |
| 28 | A generated iCalendar feed is imported as evidence. | Feed event has stable external UID and occurrence date; linked to generator/input trace or classified only as dated witness. | Treating recurrence/output as canonical observance identity. |
| 29 | BHG and Pinakes identify a work/witness associated with a saint. | Typed external IDs on work/edition/witness records, with relationships to the person supplied separately. | Treating a hagiographic work number as a person ID. |
| 30 | One archive can expose metadata openly but not redistribute the scanned page. | Open metadata record, reference-only asset, rights/access statement, locator and checksum if available. | All-or-nothing pack licensing. |
| 31 | A church dedication is commemorated annually, and the temple also has a patronal feast. | Distinct dedication event/observance, place or institution entity, and patronal relationship claims; do not collapse the occasions. | Treating a building, dedication, and patron saint as one feast. |
| 32 | A forefeast, afterfeast, and leave-taking surround a principal feast. | Separate observances or cycle positions with typed relationships to the principal observance and explicit date rules. | Modeling them only as rank flags or display-name prefixes. |
| 33 | Several martyrs are commemorated together, while some also have individual observances. | Individual person anchors, a group occasion, scoped membership/participation, and separate individual observances. | One concatenated “saint name” string. |
| 34 | Two saints share the same personal and geographic epithet. | Distinct stable IDs, source-backed biographies and relationships, and ambiguity-preserving search labels. | Name-based deduplication. |
| 35 | A liturgical day begins at Vespers on the previous civil evening. | Liturgical-day boundary policy identified separately from observance date and civil projection. | Equating a liturgical day with a midnight-to-midnight timestamp. |
| 36 | A historical calendar query predates a saint's glorification or a changed local rank. | Claims and reception states have validity intervals; consumer selects an as-of policy explicitly. | Retroactively applying today's data to every historical year. |
| 37 | A parish uses a particular copyrighted translation while its diocese appoints only the lection. | Parish-scoped expression-use claim separate from diocesan appointment; linked asset rights remain enforceable. | Authority, usage, text, and appointment collapsed together. |
| 38 | A feast relaxes a seasonal fast differently in two traditions. | Parallel basic fasting claims in named schemes; season/day/feast interaction remains engine policy. | Universal fasting integer or premature resolution. |
| 39 | Tone is cyclical for one calendar use but explicitly appointed for a feast text. | Tone-cycle scheme and scoped tone claim distinguish derived cycle position from source appointment. | One unexplained `tone` scalar on the day. |
| 40 | A source gives Ascension as a named feast while another encodes only Pascha + 39. | Stable observance identity, equivalent date-rule claim, and external mapping/evidence kept separately. | Treating a calculation key as observance identity. |

## Required loss tests

Before v0.1, fixtures derived from rights-safe minimal facts should prove that:

1. serializing and parsing preserves every identifier, Unicode string, ordered
   lection segment, context dimension, evidence locator, and unknown extension;
2. combining packs never converts two conflicting claims into one value;
3. changing a preferred label does not change references;
4. exact dependency locks reproduce the same effective input graph offline;
5. calendar projection records the rule, calendar, paschalion, engine, and year
   that produced a civil date;
6. a consumer without text assets can still use lection appointments;
7. effective rights can be computed for every included asset, with “unknown”
   reported rather than treated as permissive;
8. merge, split, deprecation, and redirect histories round-trip without dangling
   references.

## Review request

The cases are architecture tests, not claims that the listed practices are
complete or universally described. Domain reviewers should add cases where the
proposed representation itself imposes an alien ecclesial or scholarly model.
