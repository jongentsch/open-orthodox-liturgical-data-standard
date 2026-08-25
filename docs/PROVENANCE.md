# Provenance, evidence, authority, and review

Status: Phase 2 review draft. Provenance is required for published claims but is
kept authorable through explicit reusable profiles.

## Provenance question

For every published material claim, a consumer must be able to answer:

> Who is responsible for this encoded assertion, what kind of assertion is it,
> what evidence or act supports it, where precisely can that evidence be found,
> and when does the assertion apply?

OOLDS borrows the Entity/Activity/Agent separation and qualified attribution
idea from [W3C PROV-O](https://www.w3.org/TR/prov-o/) without requiring RDF
serialization.

## Distinct records

### Agent

Identifies a person, organization, community, or software process. An agent can
author, edit, translate, publish, review, observe, calculate, or act in an
authority role. These roles are relationships, not permanent agent types.

### Authority-role assignment

States that an agent acts in a named capacity within a context and validity
period, supported by evidence. The core records the assertion without deciding
whether the authority is universally recognized.

### Source

Identifies a resource with enough metadata to distinguish the cited edition or
state. Candidate metadata includes:

- source type;
- titles and language-tagged citation labels;
- author, editor, translator, compiler, publisher, and other responsible roles;
- edition/version, publication date, volume/issue, pages or sections;
- persistent identifiers and stable URL;
- mutable URL retrieval date and content hash/snapshot relationship;
- jurisdiction or intended scope as claims, not title parsing;
- effective rights and access statement.

The complete bibliographic profile can be an extension or mapping to DataCite,
library records, TEI headers, or another catalog. Core provenance retains stable
identity and exact evidence use.

### Evidence use

Connects one claim to exactly one source or derivation activity. It records:

- locator appropriate to the source (page, section, XML ID, JSON pointer,
  timestamp, API request, or another typed locator);
- retrieval date/hash for mutable online resources;
- extraction method (direct transcription, structured import, editorial
  interpretation, witness observation, or calculation);
- responsible agent;
- optional source wording when rights permit, otherwise a paraphrase or digest;
- review state and notes.

Using several source passages creates several evidence uses rather than one
ambiguous locator string.

### Derivation activity

Records identified inputs, responsible software/agent, algorithm or policy
version, start/end time as relevant, and output. A calculated occurrence cites
the date rule, calendar/paschalion definition, pack lock, and engine activity.

## Published-claim provenance requirements

| Claim mode | Minimum provenance basis |
|---|---|
| prescription | Identified issuance/source plus responsible authority role |
| attested usage | Identified witness/observer, context, and time or source coverage |
| descriptive report | Source evidence use with locator when the source is larger than the assertion |
| editorial interpretation | Responsible editor plus one or more evidence uses and rationale/derivation note |
| automated derivation | Identified activity, exact inputs, algorithm/tool version, and reproducibility metadata |

A draft may lack an external source but still has an effective responsible
agent. Publishing changes the validation profile; it does not manufacture an
authority role.

## Record-level defaults versus claim-level provenance

Pack and resource records may define named profiles for repeated issuer,
contributor, source, context, review, and rights metadata. Every claim references
the profile explicitly, and normalization expands the effective values.

Permitted defaults reduce repetition. They do not allow:

- provenance to exist only in comments, directory names, or commit messages;
- one source declaration to imply the same locator for every fact in a file;
- pack publisher to become the issuer of imported claims automatically;
- pack scope to turn an unknown claim context into a universal one;
- a repository license to override an asset's rights.

For simple hand-authored data, one short profile reference plus a locator is the
target authoring burden.

## Annual and mutable witnesses

An annual publisher calendar is a source whose coverage is that year. It can
support a dated occurrence or annual instruction claim. Inferring a perennial
rule requires a separate editorial-interpretation claim with its own evidence
and certainty.

A mutable webpage or API response is cited with retrieval time and, where
possible, a content hash, archived snapshot, ETag/version, or saved response
asset. Later changes create another source state; they do not rewrite the old
evidence.

## Authority and source are independent

- A source can be authoritative within a scope, merely observational, scholarly,
  derivative, or of unknown standing.
- An authoritative agent can publish through several sources.
- A publisher can distribute a work without being its translator or the
  ecclesiastical issuer of its underlying prescription.
- A parish usage witness does not become a diocesan prescription.
- A pack maintainer is responsible for the encoding but not automatically the
  originator of imported claims.

These distinctions prevent software convenience from encoding ecclesiological
conclusions.

## Review workflow

Review events identify reviewer, time, scope, source release, and outcome. The
claim's review state is a derived current view of those events and remains
independent of certainty and lifecycle.

- `unreviewed`: no qualifying review event is recorded;
- `reviewed`: at least one declared review process accepted the encoding/claim;
- `disputed`: a recorded review or counterclaim identifies a substantive
  disagreement.

Review profiles should state whether review covered transcription accuracy,
source interpretation, language, identity, liturgical practice, rights, or only
structural conformance. “Reviewed” without review scope is weak metadata.

## Supersession and correction

A correction creates a new claim, cites the old claim through a supersession
relation, and records the reason/evidence. Immutable released claims remain
citable. Withdrawal does not erase the old proposition or its role in generated
historical output.

Different issuers cannot supersede one another's claims by declaration. They can
publish counterclaims, dispute relationships, or their own policy selecting
among them.

## Rights coupling

Evidence metadata can usually be open even when the source content is not.
Locators, identifiers, factual extraction, and rights statements remain useful
without copying protected prose or media.

Every included asset has an effective rights record under
[Rights and licensing](RIGHTS-AND-LICENSING.md). Evidence excerpts must be
rights-safe; a hash, paraphrase, or external locator can substitute when copying
is not permitted.

## Conformance implications

Semantic validation should distinguish:

- missing effective issuer;
- published claim with no provenance basis;
- source reference without a resolvable locked record;
- mutable URL evidence with no retrieval state;
- locator incompatible with source type;
- derivation missing input or tool version;
- authority role with no context or validity basis;
- source rights missing for included bytes;
- review state claimed without a qualifying review event.

These errors establish metadata completeness, not truth or ecclesial authority.

