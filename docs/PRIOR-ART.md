# Prior-art research

Status: first research pass, 2026-08-24. This is an evidence report, not a
normative specification or a legal opinion.

## Question and method

The research question was not “which project has the most data?” It was:

> Does a mature standard already provide federated Orthodox identities,
> observances distinct from their subjects, contextual claims, calendar and
> lection inputs, multilingual expressions, provenance and rights, and
> composable offline packages—without also prescribing a Typikon engine?

We inspected primary repositories, schemas, fixtures, current API
documentation, and official publisher pages. Repository findings are pinned to
the following commits so that later changes do not rewrite the evidence:

| Repository | Inspected commit |
|---|---|
| `typiconman/ponomar` | [`0af645f`](https://github.com/typiconman/ponomar/tree/0af645f438856f45c22026912d2e4a9ce495e531) |
| `brianglass/orthocal-python` | [`8279499`](https://github.com/brianglass/orthocal-python/tree/8279499f417b7d22a378e14fcfdb6512cff465d7) |
| `jongentsch/typikon-engine` | [`abb8d7d`](https://github.com/jongentsch/typikon-engine/tree/abb8d7d8bca03b3686ddfaf122ec95a9c154008d) |
| `jongentsch/typikon-goarch` | [`67a4d6c`](https://github.com/jongentsch/typikon-goarch/tree/67a4d6cbc3cede4765dccd0ee50de4a410b47390) |
| `jongentsch/typikon-oca` | [`5a28bfa`](https://github.com/jongentsch/typikon-oca/tree/5a28bfa34f1d69cccabfe8c1b80b62a7e1b0fd15) |
| `jongentsch/typikon-antiochian` | [`6df3186`](https://github.com/jongentsch/typikon-antiochian/tree/6df31864c8532f5b58759163da619b70996f6574) |
| `harmolipi/Orthodox-Calendar-API` | [`d8593e7`](https://github.com/harmolipi/Orthodox-Calendar-API/tree/d8593e76be25ce957aaf68b4c6b84882e1f6de33) |

The Digital Chant Stand and Ispovednik are live services, so links there record
the access date rather than an immutable version. Conclusions below separate
observed structures from design inferences.

## Comparison matrix

Legend: **yes** means the feature is explicit and central; **partial** means it
exists with local assumptions or incomplete semantics; **no** means it was not
found in the inspected interface. “Rights” asks about resource-level rights,
not merely a repository code license.

| System | Subject / observance split | Scoped competing claims | Calendar rules rather than only dates | Lection identity separate from prose | Provenance | Resource rights | Offline composition | Primary role |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| Ponomar | partial | partial | yes, with executable conditions | partial | partial | partial | partial | calendar and service suite |
| Orthocal | yes | partial | partial | partial | partial | no | no | OCA-oriented web application |
| typikon-engine packs | no | partial | yes | partial | yes | no | partial | engine inputs and service planning |
| GOARCH Digital Chant Stand | partial | no | output-oriented | component references plus rendered prose | partial | restrictive publisher terms | no neutral pack | worship publishing and assembly |
| Ispovednik API | partial | no | projected API output | partial | no | no | no | ROCOR-oriented calendar API |
| OCA web resources | implicit | no | mostly dated/publisher views | yes in indexes | source credits | mixed/unclear | downloadable files, not neutral packs | official publishing |
| Antiochian data as ingested by Orthocal | no | no | annual witness plus dated output | often bundled text | source URL/date only | unclear | snapshots only | publisher/calendar feed |
| Orthodox-Calendar-API / OCRA lineage | no | no | no, flat recurring rows | bundled text | no | no | a single JSON database | application API |
| Church Slavonic corpora | not applicable | not applicable | not applicable | text identity only | partial | repository-level license | yes | textual corpus |
| OOLDS proposal | **required** | **required** | **required inputs** | **required** | **required** | **required** | **required** | neutral interchange |

This matrix is intentionally strict. A system can be highly useful without
being an interchange standard.

### Concept-level matrix

This second matrix answers the comparison requested by the initial project
brief. “AGES” refers to the inspected Digital Chant Stand artifacts, not an
unpublished internal database. Empty or partial cells are findings about the
inspected interface, not claims that a project's maintainers have never modeled
the concept elsewhere.

| Concept | Ponomar | Orthocal | GOARCH / AGES | Ispovednik | typikon-engine | Proposed OOLDS |
|---|---|---|---|---|---|---|
| Identity | Global numeric `SId`/`CId` | Application database IDs | Structured component/source keys | API-internal integers | Pack-local semantic slugs | Federated immutable IRIs; compact manifest-bound IDs |
| Saint / person | `Saint` record also holds life/service data | Independent `Saint` person | Usually visible through assembled feast/source components | Saint-shaped day item | No independent person anchor | Typed entity anchor |
| Commemoration / observance | `CId` distinguishes occasions in practice | `DayCommemoration`, zero-to-many saints | Date/source/service components imply occasion | Flattened into dated saint/feast payload | `observance` combines occasion and engine material | Stable observance distinct from subjects and claims |
| Date | Fixed day paths plus conditions | `pdist` sentinel model | Dated assembled publication | Gregorian/Julian projected dates | Fixed and Paschal-offset expressions | Identified rule with explicit reckoning; dated occurrence is output |
| Paschal relation | Computed variables and commands | Paschal distance | Reflected in generated services | Movable-feast endpoints | `paschal_offset` | Rule cites versioned paschalion and offset |
| Rank | Implicit numeric scale | `feast_level` integer | Encoded through publisher/service selection, not neutral exchange | Named `liturgicalRank`; separate legacy type | Named rank profile with required service parts | Contextual term in an identified scheme; no universal number |
| Fasting | Rule/application output | Day-level application value | Published calendar/service output | Structured fasting endpoints | Not central in inspected core schemas | Scoped fasting claim in a named scheme; engine resolves interactions |
| Reading / lection | Reading/service structures | `Reading`, `Pericope`, `Composite` | Component keys and rendered Scripture text | Not central in inspected calendar contract | Service/observance references | Stable lection + ordered, versification-aware segments + appointment claim |
| Hymn | Embedded in saint/service corpus | Limited catalog role | Rich stable service-component expressions | Hymnography/content IDs | Service component contributions | Work/expression/edition/asset extension |
| Provenance | Mixed INFO, copyright, author data | Import/model metadata is limited | Source codes, translators, publisher | Source lineage described at API level | Source, scoped claim, dated witness records | Record defaults plus claim evidence, locator, derivation, and review |
| Authority | Often implicit in language/data tree | Three-value tradition overlay | GOARCH publisher and named sources | ROCOR-oriented lineage | Explicit authority record | Agent's authority role within a separate context and validity |
| Text | Lives, Scripture, and service prose included | Bible verses separate; some composite prose | Rendered multilingual worship text | Linked content endpoints | Service resources and generated plans | Metadata works without content; content is a rights-bearing asset |
| Translation / expression | Language-tree files and attributions | Language/translation fields | Language/locale/translator encoded in component keys | Russian/English presentation | Mostly pack-authored scalar strings | Work → expression → edition → asset |
| Rule | Data contains evaluator expressions | Magic `pdist` plus application logic | Publisher assembly hidden behind output | Server-side calculation | Explicit executable rule schemas | Small declarative date profile only; resolution belongs to engines |
| Service | Full assembly suite | Calendar/readings application | Full assembled services | Content lookup, not neutral planning | Service definitions and resolved ordered plans | Identify service/material context; do not assemble |
| Localization | Hierarchical language fallback and grammar | Application localization plus language fields | Greek, English, bilingual expressions | `ru`/`en` API selection | Mostly English scalar labels in inspected packs | Repeatable BCP-47-tagged name claims, grammar and transliteration metadata |
| Rights | Mixed code and file-level notices | MIT code; imported-content rights separate | Worship-use permissions and reserved rights | Not exposed in core API contract | License selection pending | Effective pack/resource/asset rights are required and may be reference-only |
| Offline packaging | Repository language/corpus tree | Database/application deployment | Publisher downloads | Network API | Versioned local packs, but no dependency lock/hashes | Immutable manifests, dependency lock, hashes, optional signatures |

The commonality is real, but the boundaries differ. That is why direct adoption
of any one column would reproduce its application assumptions.

## Orthodox systems and sources

### Ponomar

[Ponomar](https://github.com/typiconman/ponomar) is the broadest inspected
open-source suite: calendar generation, readings, lives, multilingual texts,
service assembly, and music. Its long-lived XML corpus contains several ideas
OOLDS should learn from.

Observed:

- [`Day.xsd`](https://github.com/typiconman/ponomar/blob/0af645f438856f45c22026912d2e4a9ce495e531/Ponomar/xsd/Day.xsd)
  attaches repeated saint references to a day using `SId` and `CId`.
- [`Saint.xsd`](https://github.com/typiconman/ponomar/blob/0af645f438856f45c22026912d2e4a9ce495e531/Ponomar/xsd/Saint.xsd)
  includes names, grammatical forms, biographical information, lives, service
  texts, readings, and source-like metadata.
- The [December 6 day record](https://github.com/typiconman/ponomar/blob/0af645f438856f45c22026912d2e4a9ce495e531/Ponomar/languages/en/xml/12/06.xml)
  and [May 9 day record](https://github.com/typiconman/ponomar/blob/0af645f438856f45c22026912d2e4a9ce495e531/Ponomar/languages/en/xml/05/09.xml)
  reuse Nicholas of Myra's `SId=1635` but use different commemoration IDs. The
  May record includes an `nday` condition and a special transfer instruction.
- The corresponding [saint](https://github.com/typiconman/ponomar/blob/0af645f438856f45c22026912d2e4a9ce495e531/Ponomar/languages/en/xml/lives/1635.xml)
  and [translation-of-relics](https://github.com/typiconman/ponomar/blob/0af645f438856f45c22026912d2e4a9ce495e531/Ponomar/languages/en/xml/lives/163501.xml)
  records demonstrate stable numeric identifiers and observance-specific
  content.
- Language resources are hierarchical and include Church Slavonic, Greek,
  simplified and traditional Chinese, grammar-aware forms, author/year fields,
  and fallback behavior.
- Rank values are application-oriented numeric codes and some source files mix
  data with conditions evaluated by the program.

Reusable ideas: persistent opaque identifiers, independent person and
commemoration references, language fallback, grammatical forms, and explicit
links between calendar and content records.

Do not copy: executable expressions embedded in source data without a portable
semantics; global numeric IDs without issuer namespaces; mixing a person,
observance, service material, prose, and application presentation in one
record; or rank numbers whose scheme is implicit.

The repository is [GPL-3.0](https://github.com/typiconman/ponomar/blob/0af645f438856f45c22026912d2e4a9ce495e531/LICENSE),
but older file-level notices and content attributions still need resource-level
review before reuse. Public source code is evidence for a model, not automatic
permission to relicense its corpus.

### Orthocal

[Orthocal](https://github.com/brianglass/orthocal-python) is an OCA-oriented
Django application and API. Its current domain refactor provides the clearest
independent confirmation of the person/observance distinction.

Observed:

- [`Saint`](https://github.com/brianglass/orthocal-python/blob/8279499f417b7d22a378e14fcfdb6512cff465d7/commemorations/models.py)
  represents a person independently of an occasion.
- `DayCommemoration` represents repose, translation, synaxis, glorification,
  an icon, a relic, or another event; it may concern zero, one, or multiple
  saints. A link table records the participants.
- The fixture links Nicholas, primary key 5586, to both a December 6
  commemoration and a translation-of-relics commemoration. See
  [`commemorations.json`](https://github.com/brianglass/orthocal-python/blob/8279499f417b7d22a378e14fcfdb6512cff465d7/orthocal/fixtures/commemorations.json)
  and the [refactor note](https://github.com/brianglass/orthocal-python/blob/8279499f417b7d22a378e14fcfdb6512cff465d7/docs/saint-model-refactor.md).
- [`Day` and `Reading`](https://github.com/brianglass/orthocal-python/blob/8279499f417b7d22a378e14fcfdb6512cff465d7/calendarium/models.py)
  use `pdist` sentinel ranges to distinguish fixed entries, Paschal offsets,
  floating rules, and Matins Gospels. Both use a sparse common/Greek/Slavic
  tradition overlay.
- `Pericope` gives lections stable identity by book and pericope; `Composite`
  stores a preassembled content field. [`Verse`](https://github.com/brianglass/orthocal-python/blob/8279499f417b7d22a378e14fcfdb6512cff465d7/bible/models.py)
  stores translation text separately by language and translation.

Reusable ideas: subjects independent of observances; observances may concern
groups, icons, relics, or events; sparse overlays; lection identity independent
of verse content.

Do not copy: magic `pdist` numbers; a fixed three-value tradition enumeration;
hard-coded rank integers; application database primary keys as federated IDs;
or composite readings stored only as prose. A portable composite lection must
remain an ordered list of references in a declared canon and versification.

Orthocal's code is [MIT licensed](https://github.com/brianglass/orthocal-python/blob/8279499f417b7d22a378e14fcfdb6512cff465d7/LICENSE).
That does not by itself establish redistribution rights for imported Bible,
hagiographic, icon, or publisher data.

### typikon-engine and jurisdiction packs

[typikon-engine](https://github.com/jongentsch/typikon-engine) is deliberately
an executable rule and service-planning system. Its JSON Schemas and packs are
especially useful for locating OOLDS's boundary.

Observed:

- [`pack.schema.json`](https://github.com/jongentsch/typikon-engine/blob/abb8d7d8bca03b3686ddfaf122ec95a9c154008d/schemas/pack.schema.json)
  declares pack identity, semantic version, calendar configuration, and paths
  to services, observances, ranks, rules, and authorities.
- [`observance.schema.json`](https://github.com/jongentsch/typikon-engine/blob/abb8d7d8bca03b3686ddfaf122ec95a9c154008d/schemas/observance.schema.json)
  combines a named observance, fixed or Paschal-offset date, rank, authority,
  common material, and service contributions. It does not separate a subject
  from multiple observances.
- [`authority.schema.json`](https://github.com/jongentsch/typikon-engine/blob/abb8d7d8bca03b3686ddfaf122ec95a9c154008d/schemas/authority.schema.json)
  usefully distinguishes a source, scoped claim, or dated witness, and records
  locators and access dates.
- [`rank.schema.json`](https://github.com/jongentsch/typikon-engine/blob/abb8d7d8bca03b3686ddfaf122ec95a9c154008d/schemas/rank.schema.json)
  describes the service components required by an engine-specific rank.
- [`plan.schema.json`](https://github.com/jongentsch/typikon-engine/blob/abb8d7d8bca03b3686ddfaf122ec95a9c154008d/schemas/plan.schema.json)
  is an ordered resolved service plan: clearly an output of engine policy.
- The [GOARCH](https://github.com/jongentsch/typikon-goarch),
  [OCA](https://github.com/jongentsch/typikon-oca), and
  [Antiochian](https://github.com/jongentsch/typikon-antiochian) packs reuse
  local slugs such as `ascension` but do not establish a shared namespace.
  Pack records also demonstrate the practical difference between a standing
  source and an annual published witness.

Reusable ideas: versioned pack manifests, declarative dates, explicit authority
records, distinct dated witnesses, and generated plans with validation.

Do not copy into the core: service-component requirements, collision outcomes,
precedence, service assembly, or local pack slugs presented as globally stable
identity. The current manifests also lack dependency constraints, file hashes,
namespace ownership, validity, per-resource rights, and a lockfile.

The inspected engine and packs state that a license is still to be selected.
That is a hard reuse blocker, even when the repository is public.

### GOARCH Digital Chant Stand and Planner

The [Digital Chant Stand](https://digitalchantstand.goarch.org/) publishes
service materials in Greek, English, and bilingual forms. A representative
[May 21, 2026 index](https://digitalchantstand.goarch.org/goa/dcs/indexes/20260521.html)
offers Matins, Liturgy, and other service variants, including print and view
formats.

The bilingual Matins HTML exposes structured component keys for source
collections, dates, language/locale, translator or edition, service element,
mode, actor, and media. This is strong evidence that component-level identity
and language-specific expressions are practical at production scale.

It is not, however, a neutral interchange model. The published artifacts are
assembled services and presentation views. The Digital Chant Stand's
[publisher and rights statement](https://digitalchantstand.goarch.org/goa/dcs/about.html)
and rights statements on service publications grant specific worship use and
reserve other rights; “free to view” is not an open-data license.

The [GOARCH Planner](https://www.goarch.org/chapel/planner) publishes annual
calendar downloads. These are useful dated projections and migration inputs,
not a substitute for perennial rules, source claims, or observance identities.

Reusable ideas: stable component keys, expressions separated by language and
edition, multiple renderings, source-aware assembly, and annual publications as
dated witnesses.

### Ispovednik Orthodox Calendar API

The live [Ispovednik API](https://api.ispovednik.org/) provides saints, movable
feasts, fasting, memorial days, hymnography, canons, akathists, and unified
calendar output. Its [English documentation](https://api.ispovednik.org/docs/en/)
and [OpenAPI 3.1 document](https://api.ispovednik.org/openapi/v1.json) were
inspected.

Observed:

- The calendar follows a stated ROCOR source lineage and supports years 2000
  onward for major calendar endpoints.
- Day responses expose Gregorian and Julian dates and a projected collection of
  saints, icons, fasting, and other display data.
- Saints have internal identifiers. A newer `liturgicalRank` object distinguishes
  rank codes such as great, vigil, polyeleos, doxology, six-stichera, and
  no-sign from a legacy classification taxonomy.
- The documentation explicitly warns that legacy `type` fields are not
  liturgical ranks.
- Content endpoints use internal IDs, but the OpenAPI contract does not expose
  claim-level provenance, resource rights, or federated namespace behavior.

Reusable ideas: separate classification and rank, explicit old/new calendar
dates in a projection, stable content identifiers, and a documented migration
from legacy fields.

Do not copy: API-internal integers as universal IDs, one fixed rank taxonomy as
the Orthodox ontology, or a civil-day response as the canonical source model.

### OCA and Antiochian sources

The [OCA service-text page](https://www.oca.org/liturgics/service-texts) and
[music downloads](https://www.oca.org/liturgics/music-downloads) show official
publisher organization by day, service component, tone, and source. Credits
name multiple translators, monasteries, and editions. OCA's 2025
[service to Saint Olga](https://www.oca.org/files/PDF/Music/Nasts/2025-0527-Service-StOlga.pdf),
published in connection with her glorification, also demonstrates that
identities, approval status, texts, and observances evolve after a data release.

The Antiochian source material inspected through Orthocal includes dated JSON
pages with titles, prose, full reading text, fasting labels, icons, and civil
dates, plus an official annual chart with date, label, Epistle, and Gospel.
These are useful publisher witnesses. They flatten perennial identity and rules
into application or yearly output, and the source pages do not provide an
open-data grant for all included prose and images.

Reusable ideas: publisher authority must be distinct from translator,
contributor, edition, and annual witness; a newly approved observance must not
require changing a person's identifier.

### Orthodox-Calendar-API and OCRA lineage

[`harmolipi/Orthodox-Calendar-API`](https://github.com/harmolipi/Orthodox-Calendar-API)
ships a single
[`calendar_database.json`](https://github.com/harmolipi/Orthodox-Calendar-API/blob/d8593e76be25ce957aaf68b4c6b84882e1f6de33/public/calendar_database.json)
derived from Orthodox Church in America calendar material. Rows combine month,
day, display summary, fasting rank, saints and feasts, Epistle, Gospel, and in
some cases full text. It is a useful example of a legacy flat feed and a likely
migration source. It lacks independent identities, contextual claims, source
lineage per fact, and recurring-rule semantics.

### Church Slavonic text corpora

The Slavonic Computing Initiative's
[`cu-books`](https://github.com/slavonic/cu-books) contains liturgical XML and
validation utilities and is marked deprecated in favor of
[`cu-md-sandbox`](https://github.com/slavonic/cu-md-sandbox). The repository is
MIT licensed and records corrections through an erratum mechanism.

These corpora are important integration targets, but a text corpus does not
solve calendar identity. Their format migration reinforces the need to identify
a work independently of an expression, edition, encoding, and file. OOLDS
should link to such resources, not invent another full textual markup language.
Edition-level rights and source history still need review even where repository
code and encodings use MIT.

## Adjacent standards

No adjacent standard should be treated as a competitor that must be replaced.
Each solves a useful slice of the problem.

| Standard or project | Reuse | Limit for OOLDS |
|---|---|---|
| [JSON Schema 2020-12](https://json-schema.org/draft/2020-12) | Structural schemas, composition, vocabularies | Cannot by itself validate cross-record identity, dependency closure, or ecclesial semantics |
| [JSON-LD 1.1](https://www.w3.org/TR/json-ld11/) | IRI mapping, contexts, graph interchange | RDF should not be required for simple offline authoring; a lossless mapping can be added later |
| [YAML 1.2.2](https://yaml.org/spec/1.2.2/) | Human-editable authoring syntax | Aliases, implicit typing, duplicate keys, and implementation variance require a restricted profile |
| [BCP 47 / RFC 5646](https://www.rfc-editor.org/rfc/rfc5646) | Language, script, region, and variant tags | Does not express grammatical form, transliteration provenance, or preference by ecclesial context |
| [Unicode Normalization UAX #15](https://www.unicode.org/reports/tr15/) | NFC normalization and comparison guidance | Compatibility normalization can destroy meaningful distinctions; typography still needs tests |
| [PROV-O](https://www.w3.org/TR/prov-o/) | Entity, activity, agent, derivation, attribution concepts | Requiring RDF would burden basic producers; borrow the conceptual distinctions |
| [Web Annotation](https://www.w3.org/TR/annotation-model/) | Bodies, targets, selectors, motivation, lifecycle | Better as a later fine-grained annotation extension than mandatory core machinery |
| [SPDX license expressions](https://spdx.github.io/spdx-spec/v2.3/SPDX-license-expressions/) | Machine-readable standard licenses and combinations | Custom liturgical permissions require `LicenseRef`, a rights statement, and a source URL |
| [DataCite Metadata Schema](https://schema.datacite.org/) | Version, contributor, publisher, related-identifier patterns | Dataset citation metadata does not express observances or scoped liturgical claims |
| [CTS URN specification](https://cite-architecture.github.io/ctsurn_spec/) | Naming authority, work hierarchy, passages | Text-centric; not a model for persons, observances, ranks, or calendar rules |
| [OSIS 2.1.1](https://www.crosswire.org/osis/) | Biblical work and passage identifiers, reference systems, language and responsibility metadata | Does not identify a liturgical lection or resolve canon/versification differences automatically |
| [TEI Guidelines](https://tei-c.org/release/doc/tei-p5-doc/en/html/) | Textual editions, headers, responsibility, certainty, source description | Too broad for the core; appropriate as a linked expression/edition format |
| [iCalendar / RFC 5545](https://www.rfc-editor.org/rfc/rfc5545) | Persistent event UIDs, recurrence, instance exceptions, calendar-feed projection | Cannot carry the full source, claim, multi-calendar, precedence, or lection model |
| [Wikidata](https://www.wikidata.org/wiki/Wikidata:Identifiers) | Widely reused external identifiers and redirect history | Community mappings are valuable but cannot be canonical Orthodox identity or authority |
| [Pinakes](https://pinakes.irht.cnrs.fr/) and Diktyon | Stable author, work, and manuscript-witness identifiers | BHG/work and witness identifiers must not be mistaken for person or observance IDs |
| [romcal](https://github.com/romcal/romcal) | Separation of a general calendar, local calendar plugins, localizations, and generated output | Its Roman rank, precedence, season, and calendar ontology is not portable to Orthodox practice |

### Specific synthesis

- Use BCP 47 tags and Unicode NFC, but retain source spellings and do not apply
  NFKC to display text.
- Let OSIS or another declared reference system express passage coordinates,
  but give a liturgical lection its own identity and ordered segments.
- Let TEI, Markdown, OSIS, MEI, images, and audio be linked expressions or
  assets. Do not put their full semantics in the core.
- Borrow PROV's separation of entity, activity, and agent and DataCite's version
  relationships without requiring either serialization.
- Use SPDX expressions when they fit and an explicit rights statement when they
  do not.
- Export iCalendar only after an engine has projected rules into a civil year.
- Make stable external IDs first-class mappings, but model equivalence and
  identity reconciliation as reviewable assertions.

## Anti-patterns found repeatedly

1. A row called “saint” actually represents a feast, story, icon, and dated
   display card at once.
2. Civil dates are stored without the calendar or Paschal rule that produced
   them.
3. Rank is an integer or English label whose scheme is implicit.
4. “Greek,” “Russian,” or “common” is a closed enum rather than a declared
   authority and multidimensional context.
5. Conflicting imports overwrite one another instead of remaining attributed.
6. Full copyrighted Bible or service prose is copied where a passage or work
   reference would be sufficient.
7. Database primary keys or pack-local slugs escape as supposedly global IDs.
8. An annual calendar witness is treated as a perennial rule—or the reverse.
9. Repository licensing is assumed to cover every imported text and image.
10. Generated service plans are treated as source data, making another engine
    unable to reach a different valid conclusion.

## Conclusion

The evidence supports continuing OOLDS, but with a narrower mandate than a new
calendar engine or universal database.

Ponomar proves that stable identities, multilingual resources, and rich service
data can live in an open corpus. Orthocal independently proves that a person and
an observance must be separate. Digital Chant Stand proves the value of stable
component and expression keys. typikon-engine proves the utility of packs,
sources, witnesses, and validated engine outputs. Ispovednik proves that a
well-documented projected API is useful while also exposing the limits of fixed
taxonomies and internal IDs. The adjacent standards provide proven mechanisms
for language, text, provenance, licensing, packages, and projections.

None of them, individually or in combination without a new mapping layer,
provides federated identities + observances + contextual assertions +
provenance/rights + offline package composition while remaining independent of
a Typikon resolver. That is the justified gap.

### Why not simply extend one inspected project?

- **Ponomar** is mature and broad, but its XML corpus, evaluator expressions,
  application behavior, global numeric namespace, and GPL distribution are a
  larger commitment than a neutral mapping layer.
- **Orthocal** has the strongest person/observance split, but it is an
  OCA-oriented Django application whose database sentinels, sparse tradition
  enum, and imported corpus concerns are not a standards governance boundary.
- **Digital Chant Stand** is a publisher and service-generation system with
  production-quality component keys but rights and output semantics that do not
  form an open neutral standard.
- **Ispovednik** is a useful ROCOR-oriented projected API, not an offline
  source-claim and pack format.
- **typikon-engine** is the most natural test consumer and shares some pack and
  provenance needs, but publishing its schemas as OOLDS would couple neutral
  data to service-resolution concepts. Its license is also pending.

The recommendation is therefore a separate, small specification project that
reuses adjacent standards and publishes mappings to existing projects. It
should not create a competing full corpus or demand migrations. If an existing
standards body or multi-project consortium later offers better neutral
governance, the specification can move; the important result is the boundary,
not ownership of the OOLDS name.

The conclusion is provisional. Before schema work, maintainers should invite
review from Orthodox calendar and service publishers, clergy and liturgists,
Church Slavonic and Greek text specialists, library metadata practitioners,
and implementers from at least two jurisdictions.
