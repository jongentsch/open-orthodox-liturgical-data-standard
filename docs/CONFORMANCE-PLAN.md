# Conformance and testing plan

Status: pre-schema design. Error codes and commands are illustrative.

## Conformance layers

1. **Structural:** JSON Schema validates document shapes, datatypes, required
   members, and closed core keywords.
2. **Referential:** internal and dependency references resolve; namespaces and
   vocabulary terms exist in the locked pack graph.
3. **Semantic:** dates are possible, validity ranges are coherent, terms belong
   to their schemes, lection coordinates belong to their declared reference
   systems, and required provenance/rights are effective.
4. **Graph:** replacement and dependency cycles, illegal redirects, namespace
   collisions, type-changing identity links, and invalid exact-match assertions
   are detected.
5. **Serialization:** restricted YAML normalizes deterministically; canonical
   JSON round-trips; unknown extensions and Unicode strings are preserved.
6. **Pack:** dependency constraints, exact lock versions, hashes, archive paths,
   compatibility ranges, and optional signatures validate offline.

Structural validity alone must never be advertised as full conformance.

## Diagnostic requirements

Diagnostics should include file/resource, source location where available,
stable error code, offending value, governing scheme or invariant, and a safe
suggestion. For example:

```text
commemorations/nicholas-myra.yaml:42

E-RANK-002: "polyelos" is not a term in rank scheme "oca" version 1.2.
Did you mean "polyeleos"?
```

Suggested code families:

- `E-ID-*` identifiers, namespace ownership, and lifecycle;
- `E-REF-*` broken references and dependency closure;
- `E-VOCAB-*` vocabulary and term errors;
- `E-CAL-*` calendar rules and projections;
- `E-LECTION-*` canon, versification, segments, and appointments;
- `E-CLAIM-*` scope, validity, evidence, and status;
- `E-RIGHTS-*` missing or incompatible effective rights;
- `E-PACK-*` manifests, locks, hashes, and archive safety;
- `E-SER-*` YAML/JSON/Unicode normalization.

Warnings should be reserved for representable uncertainty or recommended
quality, not used to downgrade a genuine conformance failure.

## Test suites

### Structural and negative fixtures

Maintain the smallest document that passes or fails each schema rule. Unknown
extension preservation and forward-compatibility cases are mandatory.

### Referential and graph fixtures

Test missing records, wrong record kind, namespace collision, one-to-one merge,
one-to-many split, redirect cycle, conflicting claims, dependency cycle, and
unavailable vocabulary versions.

### Calendar properties

When calculation tooling exists, use example vectors and property-based tests
for Julian/Gregorian/Revised-Julian conversion, leap years, Paschal offsets,
weekday-relative anchors, liturgical-day boundaries, and range limits. Include
Ascension = Pascha + 39 and Pentecost = Pascha + 49 under each supported
paschalion. Algorithm identifiers and versions are part of every result.

### Lection properties

Test ordered composite and discontinuous passages, book-name mappings,
Septuagint/Masoretic Psalm numbering, Kingdoms/Kings naming, invalid coordinates,
and a lection used without any Bible text expression.

### Serialization properties

Test YAML → normalized model → canonical JSON → model. Include polytonic Greek,
Church Slavonic combining characters, right-to-left scripts, canonically
equivalent Unicode sequences, ambiguous YAML scalars, duplicate keys, aliases,
unknown extension data, and deterministic key/number output.

### Reproducibility

Given the same locked pack bytes, tool and algorithm versions, and request
context, normalized output and its digest must match. Historical queries use an
explicit as-of policy and do not silently apply current claims.

### Consumer contracts

Run the scenarios in [Consumer architecture tests](CONSUMER-TESTS.md), including
at least two independent producers and two consumers before v0.1.

## Schema evolution

- Specification/tooling versions and dataset versions are independent.
- Released schemas and vocabulary snapshots are immutable.
- Compatibility ranges are explicit; a lock selects exact versions and hashes.
- Deprecation preserves parseability for a documented interval.
- Breaking semantic change requires a new major compatibility line, even if the
  JSON shape did not change.
- Migrations are deterministic tools with before/after fixtures and loss reports.
- Historical data is not rewritten merely to match current ecclesial practice.

## What conformance cannot certify

A passing validator establishes representation and declared constraints. It
does not establish historical truth, ecclesiastical authority, copyright
ownership, quality of translation, or liturgical correctness of a generated
service.

