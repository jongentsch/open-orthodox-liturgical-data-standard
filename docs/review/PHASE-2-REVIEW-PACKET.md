# Phase 2 external review packet

Status: ready for reviewer recruitment. This packet requests critique; it does
not ask reviewers to endorse OOLDS as an ecclesial authority.

## Review objective

Determine whether the proposed common language can represent Orthodox
liturgical identities and attributed variation without importing one
jurisdiction's ontology or a Typikon engine's decisions into the core.

The specific hypothesis is:

> Minimal entity and observance identity anchors plus typed, scoped,
> source-backed claims can preserve overlapping Orthodox datasets without
> forcing agreement about rank, date, reception, readings, historical identity,
> or authority.

## Reading order

1. [Vision](../../VISION.md) and [Principles](../../PRINCIPLES.md)
2. [Glossary](../GLOSSARY.md)
3. [Conceptual contracts](../MODEL-CONTRACTS.md)
4. [Identifier lifecycle](../IDENTITY-LIFECYCLE.md)
5. [Provenance](../PROVENANCE.md)
6. [Localization](../LOCALIZATION.md)
7. [Typikon boundary](../TYPIKON-BOUNDARY.md)
8. [Case dispositions](../CASE-DISPOSITIONS.md)
9. [Rights and licensing](../RIGHTS-AND-LICENSING.md)

The [prior-art report](../PRIOR-ART.md) provides evidence for the distinctions
but is not required for a first conceptual review.

## Decisions under review

- Entity and observance are minimal identity anchors.
- Recognition and attributes are typed claims with exactly one target, one
  effective issuer, and one effective context expression.
- Published claims require at least one provenance basis.
- Missing context or validity means unspecified, not universal or eternal.
- Claim mode, review, lifecycle, certainty, and validity are independent.
- Authority is an agent's sourced role in context, not a synonym for tradition
  or jurisdiction.
- Namespace owners govern their own redirects; cross-namespace identity remains
  mapped claims.
- Rank, calendar/paschalion, grammar, lection-reference, tone, and similar
  semantics use versioned vocabularies/extensions.
- Typikon resolution selects among claims but is not part of the interchange
  core.

## Questions for every reviewer

1. Which real case cannot be represented without loss or a misleading claim?
2. Which distinction is unnecessary or too burdensome for human editors?
3. Where does the model accidentally encode an ecclesiological conclusion?
4. Where could missing data be mistaken for universal agreement or denial?
5. Which term is misleading in Greek, Church Slavonic, Arabic, Russian,
   Romanian, Serbian, Georgian, or another liturgical context?
6. Does any identifier lifecycle step destroy a citable historical state?
7. Could a generic consumer parse the records without jurisdiction-specific
   branches?
8. What should be removed from v0.1?

## Perspective-specific review

### Clergy and liturgics

- Does observance identity remain meaningful across jurisdictions?
- Are forefeast, afterfeast, leave-taking, synaxis, dedication, translation,
  local reception, and annual transfer modeled without prejudging resolution?
- Are prescription and attested usage properly distinguished?
- Does the Typikon boundary leave enough data for a real resolver?

### Greek and Church Slavonic language/text specialists

- Are BCP 47, script, orthography, grammatical forms, and transliteration
  separated correctly?
- Does NFC normalization preserve the relevant distinctions when exact source
  assets are retained?
- Does name preference remain contextual rather than Anglocentric?
- Which language-specific features need early controlled vocabularies?

### Historians, librarians, and textual scholars

- Are person, collective, event, observance, work, expression, edition, asset,
  and witness boundaries defensible?
- Are uncertainty, source locators, mutable web states, identity mappings, and
  split/merge histories citable?
- Is the source/evidence/authority separation compatible with catalog practice?

### Pack/data maintainers

- Can repeated source/context metadata be authored through explicit profiles
  without dangerous hidden defaults?
- Can a namespace commit to the lifecycle rules?
- Are rights and dependency requirements feasible for offline releases?
- Which existing IDs can be mapped without relabeling the native corpus?

### Application and engine implementers

- Can the cardinalities map cleanly to files, relational tables, and graphs?
- Can unknown extensions round-trip?
- Are dependency errors distinguishable from valid claim conflicts?
- Can a calendar UI, research tool, and Typikon engine select context without
  the loader hard-coding OCA/GOARCH/Russian/Antiochian branches?

### Licensing review

- Does the multi-license category boundary remain clear in schemas, generated
  examples, and reference fixtures?
- Are CC0 factual records separable from authored descriptions and translations?
- Is the resource-level model sufficient for metadata-only restricted sources?

## Requested response format

```text
Reviewer perspective:
Materials reviewed:

Blocking issues:
- [document/section/case] issue, real example, and proposed correction

Non-blocking issues:
- ...

Missing adversarial cases:
- ...

Terminology concerns:
- ...

Verdict:
- ready for Phase 3 fixtures / revise and re-review / outside my scope
```

## Evidence standard for review comments

Whenever practical, provide a primary source, edition, official annual calendar,
service publication, schema/API record, or reproducible application behavior.
A reviewer may report confidential or pastoral knowledge, but the eventual
public decision must state what can be cited and what remains an unattributed
design caution.

## Exit checklist

Phase 2 cannot close until the repository records review from:

- at least two Orthodox jurisdictions or liturgical traditions;
- a clergy/liturgics reviewer familiar with collision and transfer;
- Greek and Church Slavonic textual/language expertise;
- library/archive or textual-scholarship expertise;
- two independent application or engine implementers;
- an appropriate licensing review.

For each blocking issue, maintainers will record an accepted correction,
documented deferral with loss analysis, or reasoned rejection. Reviewer silence
does not count as consensus.

Actual reviews and dispositions are tracked in the [review
log](REVIEW-LOG.md).
