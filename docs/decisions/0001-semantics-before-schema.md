# Decision 0001: stabilize semantics before publishing a schema

- Status: accepted for the research phase
- Date: 2026-08-24

## Context

The inspected systems use incompatible meanings for superficially similar
fields. A “saint” may be a person or a dated commemoration; a “type” may be a
biographical class, display category, or liturgical rank; a “date” may be a
perennial rule or generated civil occurrence; and a “source” may be an
authority, edition, import URL, or annual witness.

Publishing a schema now would make whichever application model was transcribed
first appear normative. Removing those mistakes later would break adopters and
destabilize identifiers.

## Decision

OOLDS will not publish a normative v0.1 schema until the conceptual model,
Typikon boundary, identifier lifecycle, rights requirements, and adversarial
cases complete the Phase 2 review gate.

Illustrative field names and serialization fragments may be used to test
comprehension. They must be labeled non-normative and should not be distributed
as a compatibility target.

## Consequences

- The initial repository is documentation-heavy and intentionally has no
  implementation scaffold.
- Review can change terminology and cardinalities without creating a fake
  migration obligation.
- Tooling work begins later, but it begins against a clearer conformance target.
- Early contributors need guidance toward evidence, cases, and conceptual
  proposals rather than large data imports.

## Revisit condition

This decision is satisfied—not reversed—when Phase 2 records normative answers
to the open questions in the domain model and reviewers approve entry into
Phase 3.

