# Consumer architecture tests

Every core concept should serve more than one consumer or protect information
that would otherwise be lost. This matrix tests the working model before a
schema exists.

| Concept | Calendar application | Parish bulletin | Reader/workbench | typikon-engine | Digital humanities |
|---|---|---|---|---|---|
| Entity | Deduplicate subjects across calendars | Display commemorated people/events | Find associated works | Stable rule targets | Reconcile external prosopography |
| Observance | Show distinct occasions and recurring dates | Select the right feast title | Find occasion-specific material | Candidate occasion for resolution | Study reception/history separately from person |
| Typed scoped claim | Select claims by user context without overwriting others | Explain local rank/reading | Show publisher/edition choice | Consume unresolved jurisdictional inputs | Compare competing assertions |
| Date rule | Project a requested civil year | Print correct dated title | Locate applicable material | Evaluate before collision policy | Distinguish standing rule from annual witness |
| Rank-scheme term | Display source-appropriate rank | Select descriptive label/features | Filter material catalog | Interpret through selected policy | Compare schemes without false numeric equivalence |
| Basic fasting claim | Show applicable source claims | Print local fasting guidance with attribution | Usually optional | Resolve interactions separately | Study change and local variation |
| Lection + appointment | Show citation without bundled prose | Print ordered references | Link authorized text expression | Select readings during resolution | Study lectionary traditions and mappings |
| Work/expression/edition/asset | Optional linked content | Select permitted text | Central catalog function | Reference service material | Textual history and responsibility |
| Localized name claim | User language and fallback | Appropriate local spelling/form | Service-language forms | Stable IDs independent of labels | Orthography, translation, and name history |
| Evidence/source | Explain “according to…” | Footnote or omit by presentation policy | Verify publisher and edition | Trace why an input applied | Foundational source criticism |
| Rights | Decide whether content can be cached | Avoid unauthorized reproduction | Choose accessible/authorized edition | Preserve constraints in output | Separate metadata access from asset access |
| Pack lock | Reproduce past calendar | Reprint the same bulletin | Reopen an editorial project | Reproduce a service-plan input set | Cite exact dataset releases |

## Consumer-specific pass conditions

### Generic calendar application

The loader contains no `if jurisdiction == ...` branches for basic identities,
claims, names, date rules, ranks, fasting claims, or lection appointments. It may
need a selected calendar/paschalion implementation and policy for interpretation.
Unknown extensions produce warnings, not corrupted core records.

### Parish bulletin generator

Given a resolved occurrence trace, it can discover the title, subjects,
readings, tone, fasting claims, and permitted hymn references. It can state the
source/context of a contested value and does not need a full Typikon DSL in the
OOLDS loader.

### Reader or service workbench

It can navigate observance → appointment/material relationship → work → chosen
expression/edition/asset. It does not assume that a public URL or pack license
permits reproducing a translation.

### typikon-engine

It receives stable candidate inputs and source-backed claims, then applies its
own selected rules. Its resolved plan cites claim and pack-lock IDs. OOLDS does
not preselect rank precedence, collision results, transfers, or service order.

### Digital-humanities project

It can cite immutable releases, query historical validity, distinguish persons
from hagiographic works and observances, retain uncertain mappings, and compare
names and claims across sources without privileging current reception.

## Architectural rejection test

A proposed core feature should be reconsidered if it:

- only exists to drive one engine's internal control flow;
- has no portable meaning outside one rank, calendar, or jurisdiction scheme;
- can be expressed as a pack vocabulary or optional extension without loss;
- duplicates a mature text/media standard;
- forces consumers to resolve a genuine disagreement while parsing;
- makes a simple source-backed name or mapping prohibitively difficult to add.

