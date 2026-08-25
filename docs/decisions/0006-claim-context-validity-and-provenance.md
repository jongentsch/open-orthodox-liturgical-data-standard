# Decision 0006: separate claim context, validity, mode, review, and provenance

- Status: accepted for Phase 2 review
- Date: 2026-08-25

## Decision

Each normalized claim has exactly one primary target, one typed payload, one
effective issuer, and one effective context expression.

Context has explicit `specified`, `unbounded assertion`, or `unknown` scope
semantics. Missing dimensions are unspecified, not universal. Present
dimensions intersect; alternatives that would create ambiguous cross-products
use separate claims.

Claim mode, lifecycle, review state, certainty, and validity are independent.
The model preserves four timelines: applicability, record lifecycle, source
coverage/publication, and evidence retrieval/derivation.

A published claim requires at least one provenance basis. Explicit reusable
profiles may supply repeated issuer, context, source, review, and rights values;
normalization expands them. File layout and pack order never supply hidden
semantics.

## Rejected alternatives

- missing context means common/universal;
- one overloaded `status`;
- pack publisher automatically owns every imported claim;
- every scalar manually repeats a massive provenance object;
- last-write-wins pack composition.

## Consequences

- Historical and annual witnesses remain distinguishable from perennial claims.
- Valid incompatible claims compose; dependency/namespace failures do not.
- Draft and published validation profiles differ.

