# Decision 0007: federate identifiers and preserve merge/split history

- Status: accepted for Phase 2 review
- Date: 2026-08-25

## Decision

Persistent IDs are namespace-issued, versionless, immutable, never reused, and
offline-resolvable through packs. Compact IDs require manifest prefix expansion;
consumers treat local portions as opaque.

Only a namespace steward can redirect or tombstone its IDs. Cross-namespace
equivalence remains an attributed mapping claim. Exact mappings are not assumed
globally transitive.

Merges retain deprecated anchors and redirects. Splits issue multiple successor
anchors, preserve the old ambiguous anchor and claims, and do not choose one
successor automatically. A change of top-level record kind issues a new ID.

## Rejected alternatives

- mutable preferred-name keys;
- mandatory UUIDs as a complete identity solution;
- one mandatory central registry;
- unqualified/transitive `same_as`;
- destructive merge or split migration.

## Consequences

- Historical releases and citations remain reproducible.
- Identity reconciliation stays reviewable and issuer-aware.
- The exact URI/CURIE grammar remains a later syntax decision.

