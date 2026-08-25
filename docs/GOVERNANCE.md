# Governance direction

Status: bootstrap policy adopted 2026-08-24; a community charter remains future
work.

## Governing principle

> The project governs representation, not Orthodoxy.

OOLDS maintainers can decide whether an identifier is malformed, a reference is
broken, a claim lacks required evidence, a vocabulary is unavailable, or a pack
violates conformance. They should not decide which jurisdiction's received
practice is universally correct.

The data model must support attributed disagreement. Technical acceptance of a
pack means only that it conforms to the standard; it does not mean OOLDS or its
maintainers endorse its ecclesial, historical, or scholarly claims.

## Proposed roles

- **Technical maintainers:** specification architecture, schemas, validation,
  releases, compatibility, security, and repository administration.
- **Clergy and liturgical reviewers:** review whether distinctions and test
  cases reflect real practice without turning their own tradition into the
  default ontology.
- **Historical and textual reviewers:** identity reconciliation, source
  criticism, work/expression/edition modeling, certainty, and historical
  validity.
- **Language and translation reviewers:** BCP 47 usage, script and orthography,
  grammatical forms, transliteration, expression responsibility, and Unicode
  tests.
- **Dataset and pack maintainers:** govern their own namespaces, sources,
  releases, mappings, claims, and correction processes.
- **Consumer implementers:** test calendar, publishing, research, and Typikon
  use without requiring jurisdiction-specific parsing in the core loader.
- **Release and security stewards:** reproducible artifacts, dependency and
  archive safety, disclosures, and signing policy.

One person may serve in multiple roles, but no technical role creates
ecclesiastical authority.

## Decision boundaries

| Decision | Appropriate owner |
|---|---|
| Core syntax, semantic invariants, conformance errors | OOLDS technical process |
| Meaning and lifecycle of an `oolds` namespace identifier | Delegated OOLDS registry process with domain review |
| Meaning of a pack-owned identifier or vocabulary | That namespace/pack maintainer |
| Whether a pack accurately represents a jurisdiction | The declared publisher/authority and its review process |
| Whether two external IDs are the same | An attributed mapping claim; no automatic central decree |
| Which observance controls after a collision | Selected Typikon policy/engine, not the core project |
| Whether third-party content may be redistributed | Rights holder/license and appropriate legal review |
| Whether a conforming pack is ecclesiastically endorsed | Relevant ecclesiastical authority, never implied by conformance |

## Proposed change process

1. Open an issue or research note with real source evidence and affected
   adversarial cases.
2. For material changes, write a short proposal covering alternatives,
   compatibility, migration, federation, provenance, rights, and test effects.
3. Seek reviews from technical and affected domain perspectives. Silence is not
   cross-jurisdiction consensus.
4. Record consequential accepted decisions as ADRs. Preserve rejected
   alternatives and dissent when they reveal contextual variation.
5. Use normal versioning and deprecation policy; never repair a released format
   or identifier by silently rewriting history.

## Pack independence

- Third parties can publish conforming packs without transferring ownership to
  the core project.
- A pack declares its publisher, maintainers, scope, namespace, evidence, and
  rights.
- The core project may validate mechanics and publish compatibility reports.
- Listing, mirroring, or testing a pack does not confer authority or endorsement.
- A namespace can be removed from a discovery index without making its immutable
  historical releases or identifiers disappear.

## Conflict handling

Technical conflicts should be resolved by published criteria and reproducible
tests. Domain conflicts should normally remain parallel scoped claims. A
maintainer with an institutional, publishing, financial, or authorship interest
in a decision should disclose it and avoid being the sole approver.

## Bootstrap state

- Jon Gentsch (`@jongentsch`) is the initial technical maintainer.
- Consequential architectural changes are recorded as ADRs.
- The working entity/observance/claim architecture can proceed through Phase 2,
  but normative schemas require external liturgical and technical review.
- The project begins in a public personal GitHub repository and may transfer to
  an organization when additional maintainers exist.
- Conformance never implies ecclesiastical endorsement.

The project still needs quorum and voting/fallback rules, appeal and moderation
procedures, trademark/name policy, security contact, release signing authority,
and a code of conduct. Those choices require actual participants and should be
adopted before governance expands beyond the bootstrap maintainer.
