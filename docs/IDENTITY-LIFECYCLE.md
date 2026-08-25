# Identifier and identity lifecycle

Status: Phase 2 review draft. This document defines issuer and lifecycle
semantics; the exact character-level identifier grammar remains a Phase 4
specification decision.

## Goals

An OOLDS identifier must remain usable when:

- a preferred name or spelling changes;
- an observance date or rank claim changes;
- two independently maintained packs map overlapping referents;
- a record is merged, split, deprecated, or found uncertain;
- a namespace moves to another host;
- all processing occurs offline.

## Identifier contract

1. Every persistent anchor and published claim has one absolute identifier.
2. The identifier is issued and governed by one namespace.
3. Pack-local compact forms expand through explicit manifest prefix mappings.
4. Consumers treat the local portion as opaque. Human-readable slugs are
   permitted but never parsed for names, dates, types, or hierarchy.
5. An issued identifier is never reused.
6. An anchor's top-level record kind is immutable. Reclassification that changes
   kind issues a new identifier and a sourced replacement/mapping claim.
7. Object identifiers are versionless. Pack releases and claim revisions carry
   versions; references continue to name the enduring anchor.
8. Resolution of the namespace URL is optional. The locked pack contains enough
   information to use identifiers offline.

Illustrative compact IDs remain:

```text
oolds:person:nicholas-myra
oolds:observance:nicholas-myra-dec-6
oca:observance:local-example
```

The strings are examples, not reserved identifiers. If a mnemonic slug becomes
misleading, it remains stable or is replaced through lifecycle machinery; it is
never silently renamed.

## Namespace stewardship

A namespace record identifies:

- stable namespace IRI and compact prefix;
- one or more responsible agents and their roles;
- lifecycle and persistence policy;
- contact/discovery information;
- transfer or succession history;
- current status and validity;
- optional signature/trust information.

Only the namespace steward can issue an authoritative redirect or tombstone for
its identifiers. Another pack may assert a mapping, including an exact mapping,
but cannot rewrite the original namespace's lifecycle.

A namespace may transfer stewardship without changing identifiers. The transfer
is a sourced, dated governance event preserved in releases. Loss of a website or
maintainer does not free the namespace for reuse.

## Anchor lifecycle states

| State | Meaning | Reference behavior |
|---|---|---|
| active | Issuer currently maintains the anchor | Normal resolution |
| deprecated | Still resolvable but discouraged; replacement may exist | Preserve and warn; do not discard |
| tombstoned | Issuer retains the ID but no longer supplies an active referent record | Preserve ID, reason, history, and any successors |
| withdrawn | Issuance was erroneous or should not be used, without erasing history | Preserve for audit; do not treat as nonexistent |

Lifecycle state does not express sainthood, reception, historicity, or claim
truth. Those are domain claims.

## Labels, aliases, external IDs, and redirects

- A **name claim** is human language data and can change without identity
  change.
- A **search alias** is still language/usage data, not another canonical ID.
- An **external ID mapping** names an identifier from a different system and
  states the mapped object kind and relation.
- A **redirect** is the original namespace steward's exact one-to-one lifecycle
  instruction.
- A **mapping claim** is an attributed scholarly/editorial assertion and may be
  disputed.

These must not share one `aliases` array.

## Mapping relations

The initial relation vocabulary needs at least:

- exact match;
- close match;
- possible match;
- broader/narrower conceptual match;
- supersedes/replaced by;
- split into;
- derived from;
- disjoint/not the same referent.

SKOS's distinction among exact, close, broader, narrower, and related mappings
is useful, but OOLDS does **not** make exact real-world identity automatically
transitive across arbitrary publishers. A chain of high-confidence mappings can
still contain a mistaken identification. Tools may compute candidate closures
for review but must preserve the original assertions and issuers.

Each mapping claim has:

- source and target IDs with expected record kinds;
- relation term;
- issuer, context, validity, evidence, review, and certainty;
- directionality and symmetry semantics supplied by the relation vocabulary;
- no authority to redirect an ID in another namespace.

## Merge procedure

A same-namespace exact merge is a namespace-owner lifecycle action:

1. select or issue the surviving anchor;
2. publish redirects from each deprecated anchor to the survivor;
3. retain tombstone records, former names, sources, and merge rationale;
4. preserve old claim targets in historical releases;
5. optionally publish new claims retargeted to the survivor with explicit
   derivation from the old claims;
6. report external references that still use deprecated IDs.

Claims are not silently rewritten in an immutable release. A resolver may expose
a canonicalized view while retaining original IDs in the trace.

Cross-namespace “merge” is only a set of mapping claims unless each namespace
owner independently redirects its own ID.

## Split procedure

A split cannot redirect one old ID to a single exact successor:

1. issue a new anchor for every resulting referent;
2. mark the old anchor deprecated or tombstoned with `split into` relations;
3. preserve claims formerly attached to the old anchor;
4. review and derive successor-specific claims individually;
5. leave unallocated claims attached to the old ambiguous anchor until evidence
   supports reassignment;
6. make consumers surface ambiguity rather than choose the first successor.

This handles a hagiographic record discovered to conflate two people without
falsifying the history of earlier datasets.

## Reclassification

If an item modeled as a person is later understood as a collective, event, or
observance, issue the correct-kind anchor and relate it to the former anchor with
a sourced replacement or interpretation mapping. The top-level type of the old
ID remains unchanged so typed consumers are not broken silently.

Changing a vocabulary term within the same entity kind—for example one
biographical classification to another—is an ordinary classification claim
revision and does not require a new entity ID.

## Duplicate detection

Validators can flag candidate duplicates based on shared external IDs, names,
dates, relations, or mapping graphs. They cannot automatically merge them.

A duplicate error is structural only when the same namespace issues the same ID
for incompatible record kinds or two locked resources define incompatible
anchor envelopes. Similar names and dates generate review candidates, not
identity errors.

## Version and reproducibility behavior

- Released packs are immutable.
- A later release can change lifecycle state and add mappings, but cannot mutate
  the bytes or claims of the older release.
- A lock resolves the historical anchor state from exact release hashes.
- A current resolver may additionally report later redirects, clearly separated
  from the locked historical view.
- Generated output records whether it followed redirects and which mapping
  claims or lifecycle release authorized that choice.

## Rejected alternatives

- **Mutable human-readable canonical keys:** label corrections would break
  references.
- **Mandatory UUIDs:** globally unique syntax does not identify the issuer,
  object kind, merge policy, or evidence.
- **One central registry as the only issuer:** creates an online and governance
  bottleneck and prevents independent packs.
- **Unqualified `same_as`:** hides certainty, issuer, relation semantics, and
  disputed identity.
- **Delete-and-recreate corrections:** destroys historical reproducibility.
- **Redirect a split to the “best” successor:** silently assigns ambiguous
  historical claims.

