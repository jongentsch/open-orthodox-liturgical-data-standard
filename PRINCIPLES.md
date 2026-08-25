# Design principles

These principles are proposed constraints for the model and its governance.
Changing one should require a recorded design decision and evidence from real
data.

1. **Distinguish subjects, observances, claims, evidence, and outputs.** A saint
   is not a feast; a feast is not a dated calendar occurrence; a source is not
   the claim derived from it; an engine result is not the source record.

2. **Preserve disagreement.** Conflicting claims may both be valid within their
   stated contexts. Combining packs must not silently overwrite a lower-priority
   record or manufacture consensus.

3. **Model who says what, where, when, and on what evidence.** Authority,
   jurisdiction, tradition, locale, edition, time validity, source, and review
   status are different dimensions.

4. **Keep identity stable and content versioned.** Object identifiers are never
   reused or changed because a preferred label changes. Packs and records can be
   versioned independently. Merges and splits remain auditable.

5. **Federate namespaces.** A central OOLDS namespace may be convenient, but
   interoperability must not depend on a central service or one institution's
   identifier assignments.

6. **Treat equivalence as an assertion.** External mappings, redirects, close
   matches, and disputed identifications carry an issuer, evidence, and status.
   A `sameAs` link is not harmless metadata.

7. **Make hidden assumptions explicit.** Calendar reckoning, paschalion,
   versification, rank scheme, language, script, transliteration system, and
   vocabulary owner must never be inferred from an English label or pack name.

8. **Do not make English the ontology.** Machine identifiers are
   language-neutral. Labels are repeatable language-tagged expressions, and
   multiple preferred forms can coexist in different contexts.

9. **Prefer references over copied prose.** Lection appointments point to
   ordered passages in an explicit reference system. Text, translation, audio,
   notation, and images are separately identified assets with separate rights.

10. **Put rights where the content lives.** Repository visibility and a code
    license do not establish permission to redistribute every fixture, text,
    translation, icon, or recording in it.

11. **Work offline first.** A pack is self-describing, versioned, checksumable,
    and resolvable without a network. Online registries and content negotiation
    are optional conveniences.

12. **Keep the core small.** Put cross-domain identity and assertion mechanics
    in the core; specialized text, manuscript, music, or rubrical semantics
    belong in profiles, extension schemas, or controlled vocabularies.

13. **Separate structural and semantic validation.** A schema can validate
    shapes and datatypes. Cross-record identity, dependency closure, calendar
    semantics, vocabulary ownership, and rights completeness require additional
    conformance rules.

14. **Make simple contributions simple.** A contributor should be able to add a
    sourced name or mapping without understanding every advanced feature.
    Complexity belongs in optional fields and tooling, not hidden defaults.

15. **Stabilize semantics before syntax.** No JSON, YAML, JSON-LD, or database
    representation becomes normative until the concepts and loss tests are
    agreed.

