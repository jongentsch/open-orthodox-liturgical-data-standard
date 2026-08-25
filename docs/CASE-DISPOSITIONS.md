# Phase 2 adversarial-case dispositions

Status: internal conceptual review complete; Phase 3 fixtures and external
review pending. Case definitions are in
[Adversarial domain cases](ADVERSARIAL-CASES.md).

## Disposition legend

- **CORE PASS:** the core anchor/claim/context/evidence model represents the
  case without a special exception.
- **EXTENSION PASS:** the conceptual boundary is resolved, but a named v0.1
  extension must define domain payload semantics and fixtures.
- **ENGINE BOUNDARY:** OOLDS preserves all inputs/claims; resolution is
  intentionally outside the standard.
- **PHASE 3 OPEN:** one or more competing conceptual encodings must be tested
  before specification prose stabilizes.

## Case matrix

| # | Disposition | Model treatment | Phase 3 obligation |
|---:|---|---|---|
| 1 | CORE PASS | One person anchor, two observance anchors, separate participation/date/rank/material claims | Nicholas overlapping-source fixture |
| 2 | CORE PASS | Synaxis observance plus optional collective anchor; membership and participation are scoped claims | Test differing member lists |
| 3 | CORE PASS | Icon/material-object entity and observance; person participation is optional | Include subjectless and depicted-subject variants |
| 4 | CORE PASS | Historical/sacred-event entity and distinct observance | Test event with no saint target |
| 5 | CORE PASS | Stable entity/observance with reception, name, date, and rank claims scoped to local authority/place | Cross-pack absence must not become rejection |
| 6 | CORE PASS | Distinct entity anchors plus possible/exact/disjoint mapping claims with evidence | Test competing mappings and no automatic closure |
| 7 | CORE PASS | Old ambiguous anchor tombstoned/deprecated; `split into` successors; old claims remain until reviewed | Lossless split fixture |
| 8 | CORE PASS | Namespace-owner redirects to survivor; external mappings remain claims | Same-namespace and cross-namespace merge fixtures |
| 9 | CORE PASS | Person identity persists; reception/glorification, observance, text expression, and validity claims are added over time | Historical as-of query fixture |
| 10 | CORE PASS | Repeatable BCP-47-tagged name claims; preference is scoped by authority/use/validity | Greek, Church Slavonic, and two English preferences |
| 11 | EXTENSION PASS | Name claim plus locked grammatical-feature vocabulary | Church Slavonic nominative/genitive fixture |
| 12 | EXTENSION PASS | Fixed date rule cites calendar reckoning; civil occurrence is a traced projection | Century-bound Julian projection vectors |
| 13 | EXTENSION PASS | Paschal-offset rule cites a versioned paschalion; parallel scoped rule claims may coexist | At least two explicit algorithm/profile IDs |
| 14 | CORE PASS | Standing rule retained; annual publication is a dated witness/override claim | Compare annual witness to perennial inference |
| 15 | CORE PASS | Parallel rank claims, each bound to scheme, issuer, context, validity, and source | Intentional OCA/Greek/Slavic disagreement |
| 16 | ENGINE BOUNDARY | Rank term/version is data; operational service requirements are versioned engine policy | Demonstrate same label with changed policy behavior |
| 17 | EXTENSION PASS | Lection anchor contains ordered native passage segments under declared reference semantics | Composite and discontinuous lection fixture |
| 18 | EXTENSION PASS | Every segment names canon/reference system and versification; mappings are sourced | Septuagint/Masoretic Psalm mapping fixture |
| 19 | CORE PASS | Parallel appointment claims scoped by jurisdiction, service position, and validity | Same observance, competing Gospel appointments |
| 20 | CORE PASS | Lection/reference metadata and Bible expression asset have independent rights | Open appointment plus reference-only copyrighted text |
| 21 | EXTENSION PASS | Work → expression → edition → asset, with language, responsibility, derivation, and rights | One work with Greek, Church Slavonic, and English expressions |
| 22 | CORE PASS | Mutable source states use retrieval time/hash and expression supersession | Two versions at one URL |
| 23 | CORE PASS | Attested-usage claim differs from prescription mode and has parish/time context | Conflicting parish witness and diocesan prescription |
| 24 | CORE PASS | Context `unknown` preserves incomplete scope and exact source wording | Validator must not force a fabricated locality |
| 25 | CORE PASS | Manifest-bound namespace expansion distinguishes identical local slugs | Two `ascension` IDs plus reviewed mapping |
| 26 | CORE PASS | Incompatible dependency/vocabulary lock is a load error, unlike claim disagreement | Version-range and hash-failure fixture |
| 27 | CORE PASS | Unknown extension round-trips; consumer reports unsupported evaluation | Byte/semantic preservation test |
| 28 | CORE PASS | iCalendar UID is typed external ID on dated witness/occurrence; generator trace kept | Import without promoting event to canonical identity |
| 29 | CORE PASS | BHG/Pinakes IDs map to work/edition/witness kinds; person relation is separate | Wrong-kind mapping negative test |
| 30 | CORE PASS | Metadata stays open; scan asset is reference-only with access/rights | Mixed-rights pack fixture |
| 31 | CORE PASS | Place/institution, dedication event, dedication observance, and patronal relationship remain distinct | Dedication and patronal occasion on separate dates |
| 32 | PHASE 3 OPEN | Forefeast/afterfeast/leavetaking can be observance anchors or typed cycle positions depending on independent claims | Test both encodings; define identity threshold |
| 33 | CORE PASS | Individual persons, group/collective occasion, membership claims, and individual observances remain distinct | Group list variation across sources |
| 34 | CORE PASS | Same names never merge IDs; search ambiguity is preserved | Homonymous-person fixture |
| 35 | EXTENSION PASS | Liturgical-day-boundary policy is separate from observance date and civil timestamp | Vespers crossing civil midnight/date fixture |
| 36 | CORE PASS | Claim validity, record lifecycle, and explicit as-of selection remain separate | Before/after glorification and rank-change queries |
| 37 | CORE PASS | Diocesan appointment and parish expression-use claim differ; asset rights remain independent | Reference-only translation fixture |
| 38 | ENGINE BOUNDARY | Parallel fasting inputs use named schemes; seasonal/feast interaction is resolved by selected policy | Two traditions, same collision, different relaxation |
| 39 | EXTENSION PASS | Tone-cycle position and explicit appointed tone are distinct claim families/sources | Derived weekly tone versus feast-text tone |
| 40 | CORE PASS | Observance identity remains distinct from named feast label and date-rule expression | Map named Ascension source to Pascha + 39 claim |

## Summary

| Result | Count |
|---|---:|
| Core pass | 29 |
| Extension pass | 8 |
| Engine boundary | 2 |
| Phase 3 open | 1 |

The one open case is not a model failure. It identifies a threshold question:
when a named cycle position deserves its own persistent observance anchor rather
than only a relationship/position claim. Phase 3 must test real forefeast,
afterfeast, and leave-taking records from at least Greek and Slavic sources.

## Cross-cutting Phase 3 fixture requirements

1. Every fixture states whether a record is an anchor, claim, source, evidence
   use, context, or derived output.
2. No `oolds` production identity is minted for a saint/observance during the
   fixture phase; use clearly reserved example namespaces until registry
   governance exists.
3. At least one fixture uses incomplete provenance and must remain draft rather
   than passing the published profile.
4. At least one pair of valid packs contains overlapping, incompatible claims
   and composes without overwrite.
5. At least one pair fails before composition because its dependency lock or
   namespace ownership conflicts.
6. All language fixtures test NFC and preserve exact source assets where
   normalization is not a substitute for transcription.
7. All generated occurrences identify their locked inputs and calculation
   activity.
8. Rights-safe metadata-only records must remain useful without protected text
   or media bytes.

## Model changes caused by the cases

The adversarial review produced these refinements:

- observances are identity anchors plus reception/attribute claims, not giant
  universal records;
- contexts have explicit `specified`, `unbounded assertion`, and `unknown`
  states;
- claim validity, record lifecycle, source coverage, and retrieval/activity time
  are independent;
- published claims require a provenance basis but can use explicit reusable
  profiles for hand authoring;
- exact identity mappings do not gain automatic global transitivity;
- split records retain ambiguous historical claims rather than assigning them
  to the first successor;
- dependency conflicts and domain-claim disagreements have different validator
  severity;
- liturgical-day boundaries, tone, grammar, text cataloging, calendar rules, and
  lections are optional first-party extension domains rather than core fields.
