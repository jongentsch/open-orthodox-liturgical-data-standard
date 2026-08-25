# Boundary between OOLDS and a Typikon engine

## Decision

OOLDS exchanges identified, attributed inputs and traceable outputs. A Typikon
engine interprets those inputs under a selected ecclesial policy and produces a
calendar, observance selection, fasting result, or service plan.

The standard must be rich enough that an engine does not have to scrape prose
or guess hidden calendar/rank schemes. It must not make one engine's resolution
algorithm normative for every Orthodox tradition.

## Boundary table

| Concern | OOLDS responsibility | Engine responsibility |
|---|---|---|
| Person, group, event, icon, relic identity | Stable identifiers, lifecycle, mappings | None beyond consuming references |
| Observance identity | Stable record and attributed participation claims | Decide whether/how it is selected in a concrete context |
| Date | Exchange explicit fixed, Paschal-relative, or supported profile rules; retain annual witnesses | Evaluate rules for a year and calendar; apply local exceptions |
| Rank | Exchange a term in an identified rank scheme with scope and evidence | Interpret operational consequences and precedence |
| Collision | Preserve all candidate observances and source claims | Choose combination, suppression, transfer, or override under policy |
| Transfer | Preserve source instruction, annual witness, or portable rule if a profile defines it | Execute transfers and resolve secondary collisions |
| Fasting | Exchange source-backed rule/term claims in named schemes | Combine day, season, feast, weekday, and local dispensations |
| Lections | Identify ordered passages and scoped appointments | Choose, combine, transfer, or omit readings for the resolved service |
| Service material | Identify works, expressions, components, and source relationships | Assemble and order service components |
| Language | Preserve labels and expressions with exact tags and responsibility | Select fallback and presentation language for a user |
| Authority and provenance | Identify agents, sources, evidence, claim modes, and validity | Select a policy about which claims are applicable or preferred |
| Rights | Declare effective rights for included and linked resources | Enforce application/distribution policy; do not infer missing rights |
| Output | Define an optional trace envelope for derived occurrences/plans | Produce the result and derivation trace |

## Three meanings of “rule”

The word *rule* currently causes avoidable confusion. The architecture should
name three different things:

1. **Referential date expression:** “month 12, day 6 in the Julian calendar” or
   “39 days after Pascha under paschalion X.” This is interoperable data and a
   candidate calendar-extension feature.
2. **Source instruction:** a rubric or annual publisher statement saying what
   should happen under certain conditions. OOLDS can identify and cite it even
   when there is no portable executable form.
3. **Resolution policy:** an executable precedence, collision, transfer,
   fasting, or service-assembly algorithm. This belongs to an engine or a
   separately versioned engine-policy language.

Ponomar's `Cmd` expressions and typikon-engine's rule and plan schemas show that
all three are useful. Treating them as one universal expression language would
couple OOLDS to an implementation and imply false consensus about rubrics.

## Data an engine should receive

A resolved input set can contain:

- the selected pack lock and namespaces;
- entities and observances;
- all applicable and conflicting typed claims;
- vocabulary and algorithm identifiers;
- source and evidence records;
- rights metadata;
- calendar and lection extension records;
- explicit user or community context.

The pack resolver checks identity, dependencies, hashes, schema versions, and
vocabulary availability. It does **not** choose which ecclesial claim is true.

## Data an engine should return

A traceable projection should include:

- engine name and exact version;
- policy pack IDs, versions, and hashes;
- data pack lock or its digest;
- requested civil/liturgical date range and calendar assumptions;
- selected and unselected observance IDs;
- claim IDs used for each rank, date, reading, fasting, or service decision;
- warnings, unresolved conflicts, and unsupported rule profiles;
- generated occurrences or ordered service components;
- generation timestamp and deterministic-input digest.

This trace is evidence of a computation, not a new universal claim. A publisher
may later cite it as an annual witness, with responsibility and status.

## What a conforming consumer must not assume

- Pack order implies ecclesial authority.
- A higher integer means a higher rank across schemes.
- “Common” means universal.
- A source's publication date is the claim's validity period.
- A Gregorian response date is the observance's perennial rule.
- A translated display title identifies a unique person or observance.
- One annual calendar proves the standing rule that produced it.
- A missing conflicting claim is consent.
- A public URL grants permission to redistribute its contents.

## Extensibility without leakage

An engine may publish an extension vocabulary for its policies or an executable
rule language. OOLDS packs can declare that extension and carry the opaque
payload without making it core. Another consumer must be able to preserve and
round-trip an unknown extension, report that it cannot evaluate it, and still
use the rest of the pack.

Core records should therefore expose stable targets, contexts, and evidence
outside the opaque engine payload. An extension must not hide the only identity
or rights information inside executable code.

## Conformance implication

OOLDS conformance and Typikon conformance are separate claims:

- **OOLDS structural conformance:** records satisfy the selected core and
  extension schemas.
- **OOLDS semantic conformance:** identifiers, references, scopes, vocabularies,
  dependencies, hashes, and required provenance/rights constraints are valid.
- **Engine support:** a tool declares which calendar, vocabulary, and rule
  profiles it evaluates.
- **Ecclesial policy conformance:** an authority may separately state that a
  particular engine policy implements its practice.

No generic OOLDS validator should certify the final liturgical correctness of a
service plan.

