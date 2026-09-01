# Research corpus and collaborative digests

Status: **Phase 3 conceptual consumer profile; not normative specification**.

This document tests whether OOLDS can support an Orthodox research corpus and
collaborative digest platform without turning application workflow into core
interchange semantics. It does not define user accounts, database tables, API
routes, or a normative digest schema.

## Product hypothesis

An OOLDS-based research service can index people, places, institutions, events,
observances, works, expressions, editions, sources, and citations while
preserving multiple attributable claims about them. Individuals and teams can
curate subsets of that corpus, review and annotate the evidence, and publish
versioned digests that other users or applications can combine reproducibly.

The service can aspire to broad or universal coverage. It must not represent
its aggregate view as one universally authoritative account of Orthodoxy. The
portable object is a graph of identities, sources, claims, mappings, and review
history, not a flattened row containing the project's preferred answer.

## Conceptual boundary

| Concept | Meaning | Portability boundary |
|---|---|---|
| Corpus | An index of anchors, claims, sources, evidence uses, mappings, and released packs | Records may be imported, exported, and cited using OOLDS |
| Workspace | Mutable personal or team state: drafts, notes, assignments, comments, branches, and pending review | Application concern; not automatically part of an OOLDS release |
| Digest | A curated selection and interpretation of corpus material maintained in a workspace | Selection intent may be portable if a profile is adopted; live editing state is not |
| Digest release | An immutable, attributable publication of selected records and claims with exact dependencies and rights | Candidate OOLDS pack/profile with a manifest, version, hashes, and lock |
| Combined view | Composition of exact digest and data-pack releases without destructive conflict resolution | Reproducible OOLDS pack composition |
| Output | A narrative, bibliography, timeline, graph, calendar, feed, PDF, or dataset derived from locked inputs | Projection that cites its inputs and method; not canonical source data |

The critical distinction is:

> A collaborative workspace is mutable. A released digest is immutable and
> reproducible.

Publishing a digest does not freeze the workspace. Later corrections produce a
new release that supersedes the earlier release while leaving old citations
resolvable.

## Corpus behavior

A conforming research corpus should be able to:

- identify a person separately from the observances, works, places, events, and
  institutions associated with that person;
- retain source-specific names, dates, relationships, reception, ranks,
  lections, authorship, and historical assertions as parallel claims;
- attach every material published claim to an agent, source, evidence use,
  context, validity, and review state appropriate to the claim mode;
- distinguish exact, possible, broader, narrower, and rejected identity
  mappings without performing automatic global identity collapse;
- cite immutable source or digest releases even after a mutable website record
  changes;
- index metadata for restricted resources without implying permission to copy
  the protected asset; and
- expose uncertainty and disagreement as queryable data rather than only prose
  hidden in editorial notes.

The corpus operator may offer a convenient canonical URL for an anchor. That
does not make the operator the sole issuer of Orthodox identities. Imported
namespace ownership and typed external identifiers remain visible.

## Contribution and review

The application may support contributors, teams, editors, and reviewers, but
OOLDS records responsibility as evidence rather than inferring authority from
an account role.

- A contributor can draft a new claim, transcription, citation, or mapping.
- A team can review the claim within a declared scholarly, linguistic,
  historical, or ecclesial scope.
- A reviewer can accept, dispute, request correction, or record uncertainty.
- A publisher can include the claim in a digest release.
- A later release can correct or supersede the claim without erasing the
  earlier attestation and review history.

Application permissions answer who may perform an action on the website.
Authority-role claims answer in what capacity an agent made or reviewed an
assertion. The two must not be silently equated.

## Digest composition

A digest release should identify:

- its publisher, contributors, review scope, version, and release time;
- the selected records and claims, including stable identifiers;
- exact dependencies on source packs, vocabulary snapshots, and other digest
  releases;
- content hashes and a deterministic lock;
- the selection or inclusion rationale when it affects interpretation;
- rights and access status for every included or referenced resource; and
- known omissions, unresolved conflicts, and review limitations.

Combining digests is set and graph composition, not last-write-wins merging. If
two digests publish incompatible claims, the combined input contains both. A
consumer may produce a filtered or resolved output under an explicit policy,
but that output records the exact inputs and decision activity.

For example, a Greek-source digest and a Slavic-source digest may share a
person anchor while supplying different observance reception, rank, date, and
name-preference claims. A combined research view can show both traditions,
their citations, and their review histories. It must not replace them with one
unattributed synthetic value.

## Privacy, access, and rights

Private workspaces may contain embargoed notes, personal information,
unlicensed scans, or research whose author has not approved publication. A
public digest release must be constructed from an explicit publication set; it
must never be a dump of everything visible to the publishing user.

The release process must:

- exclude private notes, comments, credentials, and unpublished attachments;
- include protected text or media only when redistribution is permitted;
- preserve metadata-only or reference-only records when the underlying asset
  cannot be distributed;
- avoid treating access to a workspace as evidence of a reusable license;
- state whether evidence is publicly retrievable, restricted, embargoed, or
  unavailable; and
- retain enough citation metadata to explain a claim without fabricating open
  access to its evidence.

## Phase 3 conceptual fixtures

The following fixtures extend the forty domain cases without renumbering or
changing their Phase 2 dispositions.

| ID | Scenario | Required result | Failure exposed |
|---|---|---|---|
| R1 | A researcher drafts a claim and private note, then publishes only the claim | Workspace-only material is absent from the release; the published claim has attribution, evidence, and review state | Treating a workspace as a public data pack |
| R2 | Two team members propose incompatible identifications for the same obscure martyr | Both proposals, evidence, authors, and review outcomes remain; no permission level decides identity truth | Turning editorial role into domain authority |
| R3 | A released digest is corrected after another project cited it | A new immutable release supersedes the old one; the cited version remains retrievable and hash-verifiable | Mutating a publication in place |
| R4 | Greek and Slavic digests publish conflicting rank, date, and name-preference claims | Composition retains all claims with scope and provenance; a combined view can filter without overwriting | Last-write-wins digest composition |
| R5 | A digest cites an archive scan that cannot be redistributed | The release includes a reference-only asset and citation metadata, not the protected bytes | Inheriting pack openness onto every source asset |
| R6 | A public claim was developed from an embargoed workspace attachment | Publication exposes only authorized claim/evidence metadata and accurately records restricted access | Leaking private or embargoed research during export |
| R7 | A personal digest becomes a team digest and later changes publisher | Digest-release identity, publisher responsibility, contributor attribution, and source-namespace ownership remain distinct | Reassigning authorship or identifiers when governance changes |
| R8 | A combined output uses three digest releases and a resolution policy | The output records exact release IDs, hashes, lock, policy, and decision trace and can be reproduced offline | An uncitable synthetic result with hidden inputs |
| R9 | Two corpus operators map their local IDs to one another with different confidence | Mapping claims coexist with issuer, evidence, confidence, and review state; neither operator silently owns the other namespace | A central portal becoming an automatic global identity authority |
| R10 | A narrative digest quotes a restricted translation but exports an open data pack | Narrative rights and data-pack rights are evaluated separately; the open pack contains only permitted metadata or excerpts | Assuming one license covers presentation, data, and source assets |

## Phase 3 pass conditions

This consumer profile passes conceptual review when:

1. the R1-R10 fixtures can be represented without adding user-interface state
   to core identity or claim records;
2. a digest release can be cited and reconstructed from its manifest and lock;
3. composing valid digests preserves conflicting claims, attribution, review
   scope, uncertainty, and rights;
4. private or restricted workspace material cannot enter a public release by
   implicit inheritance;
5. a released digest can be superseded without changing the bytes or meaning of
   a cited prior release;
6. corpus search and display labels do not create identity equivalence;
7. a second application can import a digest release without reproducing the
   originating website's account or workflow model; and
8. combined outputs identify the exact releases and explicit resolution
   activity that produced them.

## Outside the core specification

OOLDS should not standardize the entire research application. The following
remain product or deployment concerns unless interoperability evidence later
justifies a narrow optional profile:

- authentication, invitations, teams, and permissions;
- comments, notifications, assignments, and editorial queues;
- autosave, branches, merge interfaces, and conflict-resolution user
  experience;
- search ranking, recommendations, reputation, and moderation;
- private storage, subscription, and hosting policy; and
- narrative page layout or content-management behavior.

The v0.1 question is narrower: can independently operated research tools
exchange and combine released scholarly data without losing identity,
disagreement, provenance, review scope, reproducibility, or rights?
