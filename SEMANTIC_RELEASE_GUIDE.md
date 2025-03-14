# Semantic Release Guide

This guide explains how **Semantic Release** automates version bumps in our project using **Conventional Commits**. It ensures consistent versioning (e.g., `v1.2.3`) and changelog generation based on commit messages.

---

## What is Semantic Release?

Semantic Release automates the release process by:

1. Analyzing commit messages to determine the next version (MAJOR.MINOR.PATCH).
2. Generating release notes.
3. Publishing to npm (or other registries) and tagging in Git.

We follow **Semantic Versioning (SemVer)**:

- **MAJOR** (`X.0.0`): Breaking changes.
- **MINOR** (`0.X.0`): New features (backward-compatible).
- **PATCH** (`0.0.X`): Bug fixes (backward-compatible).

---

## Conventional Commits

We use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format:

```
<type>(<scope>): <description>
```

- `<type>`: The kind of change (e.g., `feat`, `fix`).
- `<scope>`: Optional context (e.g., `docs`, `link`).
- `<description>`: Short summary.

### Key Types and Their Effects

| Type              | Description          | Version Bump    | Example Commit                     |
| ----------------- | -------------------- | --------------- | ---------------------------------- |
| `feat`            | New feature          | Minor (`X.Y.0`) | `feat: add variant prop to Link`   |
| `fix`             | Bug fix              | Patch (`X.Y.Z`) | `fix: correct Link href rendering` |
| `docs`            | Documentation update | None (default)  | `docs: update README examples`     |
| `BREAKING CHANGE` | Breaking change      | Major (`X.0.0`) | See below                          |

---

## Version Bump Examples

### 1. Minor Bump (New Feature)

**Commit:**

```
feat: add support for Tanstack Router in Link component
```

- **Before:** `v1.2.3`
- **After:** `v1.3.0`
- **Why:** Adds a new, backward-compatible feature.

**With Scope:**

```
feat(link): add variant prop
```

- Same effect: `v1.2.3` → `v1.3.0`.

### 2. Patch Bump (Bug Fix)

**Commit:**

```
fix: resolve styling issue in Link on mobile
```

- **Before:** `v1.2.3`
- **After:** `v1.2.4`
- **Why:** Fixes a bug without adding features.

**With Scope:**

```
fix(css): adjust overflow in Link
```

- Same effect: `v1.2.3` → `v1.2.4`.

### 3. Major Bump (Breaking Change)

**Commit:**

```
feat: refactor Link API to remove legacy props

BREAKING CHANGE: Removed `mobile` and `tablet` props; use `style` instead.
```

- **Before:** `v1.2.3`
- **After:** `v2.0.0`
- **Why:** The `BREAKING CHANGE` footer signals a major version bump.

**Shorthand (if configured):**

```
break: rewrite Link component API
```

- Requires custom config (see below).

### 4. Documentation (No Bump by Default)

**Commit:**

```
docs: add usage examples to README
```

- **Before:** `v1.2.3`
- **After:** `v1.2.3` (no change)
- **Why:** Docs don’t affect code functionality.

**With Bump (if configured):**

```
fix(docs): clarify Link setup instructions
```

- **After:** `v1.2.4` (if `fix` triggers patch).

---

## Customizing Behavior

Our Semantic Release config (e.g., `.releaserc`) can override defaults. Example:

```json
{
  "plugins": [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "conventionalcommits",
        "releaseRules": [
          { "type": "feat", "release": "minor" },
          { "type": "fix", "release": "patch" },
          { "type": "docs", "release": "patch" }, // Optional: Bump for docs
          { "type": "break", "release": "major" }, // Custom breaking change keyword
          { "message": "^example.*", "release": "patch" }
        ]
      }
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/git"
  ]
}
```

### Custom Examples

- `docs: enhance README with examples`
  - With `{"type": "docs", "release": "patch"}`: `v1.2.3` → `v1.2.4`.
- `break: drop Node 14 support`
  - With `{"type": "break", "release": "major"}`: `v1.2.3` → `v2.0.0`.

---

## README Updates

Adding content to the `README` is common. Here’s how to handle it:

- **No Bump (Recommended):**

  ```
  docs: expand README with more usage details
  ```

  - Stays `v1.2.3`.
  - Use this for general improvements.

- **Patch Bump (Fixing Misinformation):**

  ```
  fix(docs): add missing variant prop explanation
  ```

  - `v1.2.3` → `v1.2.4`.
  - Use if it corrects a user-facing issue.

- **Minor Bump (New Feature Docs):**
  ```
  feat(docs): document new Link variant feature
  ```
  - `v1.2.3` → `v1.3.0`.
  - Use if tied to a new feature.

---

## Tips

- **Be Consistent:** Stick to `feat`, `fix`, and `docs` unless we customize further.
- **Scope Matters:** Use `(link)` or `(css)` to group changes in release notes.
- **Test First:** Run `npx semantic-release --dry-run` to preview bumps.
- **Breaking Changes:** Always include a `BREAKING CHANGE:` footer for clarity.

---

## Questions?

Ping the team if unsure about a commit’s impact. Happy releasing!
