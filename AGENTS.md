# AGENTS.md

## Repository expectations

- Before proposing code changes, identify the real entry points, affected files, and likely blast radius.
- Keep diffs small and avoid touching unrelated files.
- Prefer fixing the cause over patching symptoms when the cause is clear.
- After changing behavior, run the minimum relevant validation for that behavior.
- Summaries must clearly separate facts, assumptions, risks, and completed changes.

## Multi-agent policy

- Use explorer to map execution paths and affected files.
- Use reviewer to look for regressions, security issues, and test gaps.
- Use worker only after the scope and plan are clear.
- Avoid parallel write-heavy work unless explicitly requested.

## Maintenance rule

- If the same mistake or correction appears repeatedly, update this file so the guidance persists.
