# Phase 2 glossary

Status: review draft. These definitions constrain the conceptual model but are
not yet normative schema language.

The definition tests below are intentionally stricter than ordinary application
usage. A producer may call a day card a “saint,” but OOLDS must still determine
whether the record identifies a person, an observance, a dated occurrence, or a
presentation assembled from all three.

## Identity and assertion terms

### Identity anchor

A persistent identifier assigned by a namespace owner to a hypothesized
referent so other records can discuss it over time. The anchor asserts only that
the issuer intends references to co-refer; it does not assert universal
recognition, historicity, ecclesial reception, or agreement about attributes.

An anchor is necessary when claims about the referent can change or disagree
without changing what those claims are about.

### Entity

An identity anchor for a person, collective, event, material object, place,
institution, or other subject that can participate in relationships and can be
the subject of one or more observances.

**Distinguishing test:** if two commemorations can concern the same referent,
the referent is an entity and the commemorations are separate observances.

An entity is not a name, biography, feast-day row, hagiographic work, or
presumption of historical certainty.

### Observance

An identity anchor for a distinguishable liturgical commemoration or occasion
that can receive its own names, date rules, ranks, lection appointments,
relationships, reception claims, and service-material associations.

**Distinguishing test:** if two occasions can have different date, rank,
reading, reception, or service claims while concerning the same subject, they
are distinct observances.

An observance may concern zero, one, or many entities. It is not a generated
civil date, an assembled service, or an assertion that every community receives
the occasion.

### Occurrence

A dated projection of an observance or cycle under named calendar, paschalion,
liturgical-day, engine, policy, and pack-lock inputs.

An occurrence is derived output or a dated witness. It never replaces the
standing observance or date-rule claim.

### Claim

An identifiable, attributable proposition about a target. A claim has a typed
payload and can be supported, disputed, superseded, scoped, or temporally
limited without mutating the target's identity.

**Distinguishing test:** if another responsible party could coherently assert a
different value, scope, validity, or interpretation, the information belongs in
a claim rather than the identity anchor.

OOLDS uses typed claims, not unrestricted subject/predicate/object triples. A
name claim, rank claim, participation claim, and lection-appointment claim share
an envelope but have domain-specific payloads and validation.

### Claim family

The semantic kind of proposition and its typed payload contract—for example
name, participation, date assignment, rank, fasting, tone, lection appointment,
classification, reception, or identity mapping.

### Claim mode

What kind of speech act or derivation a claim represents: prescription,
attested usage, descriptive source report, editorial interpretation, or
automated derivation. Mode is independent of review state and certainty.

### Context

An explicit expression limiting where or for whom a claim applies. Common
dimensions include authority role, tradition, jurisdiction/community,
geography, service/use, language/expression, calendar, and paschalion.

An absent value means unspecified, not universal. Context is distinct from the
agent who issued the claim and from the source used as evidence.

### Validity

The interval or temporal statement describing when a claim applies in its
domain. Validity is distinct from when a record was authored, a source was
published, a webpage was retrieved, or a calculation was performed.

### Review state

Editorial process metadata such as unreviewed, reviewed, or disputed. Review
does not transform a local claim into a universal fact.

### Certainty

An attributed assessment of epistemic confidence. Certainty may preserve a
source's own wording and vocabulary. It is independent of review state: a claim
can be carefully reviewed and still genuinely uncertain.

## Provenance and responsibility terms

### Agent

A person, organization, community, or software process that bears
responsibility for a claim, source, publication, mapping, derivation, or review.
This follows the useful responsibility distinction in
[PROV-O](https://www.w3.org/TR/prov-o/) without requiring RDF.

### Authority role

A sourced and time-bounded relationship in which an agent acts with a stated
capacity within a context. “Publisher,” “diocesan liturgical authority,”
“translator,” and “editor” are different roles.

Authority is not a synonym for jurisdiction, tradition, source, or truth. The
core model records the claimed role without deciding ecclesiological questions.

### Source

An identifiable resource consulted or cited: publication, manuscript, decree,
calendar, database release, webpage, API response, correspondence, or another
witness.

A source is not automatically authoritative, and its publisher is not
automatically the issuer of every claim extracted from it.

### Evidence use

The qualified link from a claim to a source or derivation activity, including a
locator, retrieval information where needed, extraction method, and responsible
agent.

The same source can support different claims at different locators, and the same
claim can cite several evidence uses.

### Witness

A source or source record that attests a concrete historical or annual outcome,
such as a published 2026 calendar. A witness may support an inference about a
standing rule, but it is not automatically that rule.

### Derivation activity

An identified transformation or computation that uses input claims/resources
and produces another claim or projection. It records tool/engine version,
policy, time, and inputs as appropriate.

## Language and text terms

### Name claim

A claim that a target is called by a particular Unicode string in a declared
language, orthographic, grammatical, transliteration, and usage context.

There is no globally preferred name. Preference is a scoped usage claim.

### Work

An identity anchor for an intellectual or liturgical work independent of a
particular language, translation, edition, or file.

### Expression

A language-, recension-, translation-, arrangement-, or notation-specific
realization of a work.

### Edition

An edited or published realization of one or more expressions with stated
responsibility, version, and source history.

### Asset

A concrete file, byte stream, API representation, or externally hosted media
object with media type, location, integrity metadata where available, and its
own rights.

### Lection

A liturgical reading identity consisting of one or more ordered scriptural
passage references under declared reference-system and versification semantics.
It is independent of any Bible translation text.

### Appointment claim

A claim that a lection is appointed for an observance, cycle, service, or
service position in a stated context and validity period.

## Federation and packaging terms

### Namespace

An identifier space governed by a declared owner/steward. A namespace controls
the lifecycle of identifiers it issues. Other parties may publish mapping
claims but cannot redirect someone else's identifier.

### External identifier

An identifier issued by another system and attached through a typed mapping.
BHG/work identifiers, Pinakes records, Wikidata items, Ponomar IDs, and
application database IDs remain distinguishable by issuer and object kind.

### Identity mapping

A claim relating two identifiers with a typed relation such as exact, close,
possible, broader, narrower, supersedes, or disjoint. OOLDS borrows the useful
distinction between exact and close mappings from
[SKOS](https://www.w3.org/TR/skos-reference) but does not inherit SKOS
transitivity automatically for real-world identity.

### Vocabulary

An identified, versioned concept scheme published by an owner. Rank schemes,
entity kinds, participation roles, calendars, paschalions, canons, and
versifications are vocabularies or algorithm catalogs, not English enums in the
core schema.

### Term

A persistent member of a vocabulary. Its identifier is stable; its labels and
definitions can be multilingual and versioned.

### Pack

A logical independently maintained dataset with a stable identity, declared
scope, namespaces, dependencies, maintainers, and rights.

### Pack release

An immutable version of a pack with a resource index and cryptographic hashes.

### Lock

A reproducibility record selecting exact pack, vocabulary, algorithm, and
schema versions and hashes. A lock contains no unversioned “latest” reference.

### Projection

Derived dated or ordered output, such as a civil calendar, iCalendar feed, or
service plan, accompanied by sufficient input and engine trace to reproduce it.

## Terms that must not be silently collapsed

| Keep distinct | Reason |
|---|---|
| Entity / observance / occurrence | Subject, recurring occasion, and dated projection have different identity |
| Claim / source / evidence use | Proposition, cited resource, and qualified citation are different things |
| Agent / authority role / jurisdiction / tradition | Responsibility, capacity, governance scope, and liturgical lineage are different dimensions |
| Work / expression / edition / asset | Intellectual identity, realization, publication, and bytes have different provenance and rights |
| Rank term / descriptive feature / engine consequence | Similar labels do not prove cross-tradition equivalence or precedence |
| Date rule / annual witness / civil projection | Standing pattern, attested outcome, and calculation are not interchangeable |
| Review state / certainty / claim mode / lifecycle | Editorial process, confidence, speech act, and publication status answer different questions |
| Missing claim / explicit denial | Absence of data is not a negative ecclesial or historical assertion |

