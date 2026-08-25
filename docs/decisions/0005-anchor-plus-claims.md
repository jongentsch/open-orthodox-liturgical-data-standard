# Decision 0005: use minimal identity anchors plus typed claims

- Status: accepted for Phase 2 review
- Date: 2026-08-25

## Context

Making every property part of an entity or observance record implies one
universal name, date, rank, subject list, or reception state. Making the
observance only a transient claim makes it difficult to refer stably to the same
occasion across changing sources and jurisdictions.

## Decision

Entity and observance records are minimal persistent identity anchors. The
anchor represents the namespace issuer's intent that references co-refer; it
does not assert universal recognition, historicity, or attributes.

Names, participation, reception, date assignment, rank, fasting, tone, lection
appointment, classification, and identity equivalence are typed claims.

An observance may have zero participation claims. This permits subjectless
events, unresolved imports, and disputed identifications without inventing a
person.

## Rejected alternatives

- rich universal entity/observance records;
- observance represented only as an unidentifiable claim occurrence;
- one application day card used as person + feast + projection;
- unrestricted generic triples for every property.

## Consequences

- Stable references survive claim changes and disagreements.
- Published anchors need human-reviewable labels or mappings as a quality rule,
  but incomplete anchors remain representable.
- Authoring requires claim profiles to avoid repetitive provenance.

