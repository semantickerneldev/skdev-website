# Tip Author's Playbook

## File Structure

Create tip files in the `docs/tips` directory:
```
docs/
└── tips/
    ├── tip1.md
    ├── tip2.md
    └── tip123.md
```

## Front Matter Format

Every tip must have front matter at the top of the file:

```markdown
---
title: "Your Tip Title"            # Required - main title
tip_number: 123                    # Required - must match filename
description: "Brief summary"       # Optional but highly recommended
categories: ['basics', 'security'] # Optional - adds category tags
---
```

### Front Matter Rules

1. **Required Fields:**
   - `title`: Main title of your tip (use quotes)
   - `tip_number`: Must match the number in filename (no quotes needed)

2. **Optional Fields:**
   - `description`: Brief summary shown in listings (use quotes)
   - `categories`: Array of categories (use quotes for each category)

3. **Quoting Rules:**
   - Always quote strings containing:
     - Punctuation (. , ! ? : ; etc.)
     - Special characters (& * # etc.)
     - Spaces
     - Starting numbers
   - Don't quote:
     - Plain numbers
     - Single-word strings (though quoting is safer)

### Examples

```markdown
Good:
---
title: "Memory Management: Advanced Guide"
tip_number: 123
description: "Learn how to manage memory effectively!"
categories: ['basics', 'performance']
---

Also Good:
---
title: "SimpleTitle"
tip_number: 1
description: "Basic description"
categories: ['basics']
---

Problematic:
---
title: Memory Management: Guide    # Error: unquoted colon
tip_number: "123"                 # Unnecessary quotes
description: Basic stuff!         # Should quote if contains !
categories: [basics]              # Should quote array items
---
```

## Available Categories

- `basics`
- `advanced`
- `security`
- `performance`
- `troubleshooting`

Contact the team to suggest new categories.

## Content Guidelines

### 1. Basic Structure

```markdown
---
title: "Your Title Here"
tip_number: 123
description: "Your description here"
categories: ['basics']
---

## Main Heading

Introduction paragraph...

### Sub-section

Content...

### Code Examples

```python
print("Your code here")
```
```

### 2. Writing Style

- Start with a clear introduction
- Use headings to organize content
- Keep paragraphs focused and concise
- Include code examples where relevant
- End with a summary or key takeaways

### 3. Formatting Tips

- Use Level 2 (`##`) for main headings
- Use Level 3 (`###`) for subsections
- Use code blocks for code examples
- Use lists for steps or multiple points
- Add images to `/static/img/tips/` directory

## How Tips Are Displayed

1. **In Directory Listing (`/tips`):**
   - Shows as "Tip X - Title"
   - Displays description below title
   - Shows category tags
   - Includes hover effects
   - Sorted by tip number

2. **Individual Tip Pages:**
   - Full title at top
   - Category tags below title
   - Full content
   - Navigation to previous/next tips

## Common Issues

### 1. Tip Not Showing

Check:
- File is in correct directory
- Filename matches `tipX.md` format
- Front matter has correct YAML syntax
- `tip_number` matches filename number

### 2. Categories Not Showing

Check:
- Categories are in array format: `['category1']`
- Category names are from approved list
- Category names are properly quoted
- Categories are lowercase

### 3. Formatting Issues

Check:
- Front matter has three dashes (`---`) on both sides
- No extra spaces in front matter
- Strings containing special characters are quoted
- Arrays use correct syntax

## Example Complete Tip

```markdown
---
title: "Memory Optimization Guide"
tip_number: 123
description: "Learn essential techniques for optimizing memory usage in high-load scenarios."
categories: ['performance', 'advanced']
---

## Memory Optimization Techniques

This guide covers essential memory optimization techniques...

### Garbage Collection

Understanding garbage collection is crucial for...

### Best Practices

1. Always close resources
2. Use memory pools when appropriate
3. Monitor memory usage

### Code Example

```python
def optimize_memory():
    # Your code here
    pass
```

## Want Help?

- Review existing tips for examples
- Contact documentation team for guidance
- Submit pull request for review
- Open issue to discuss new categories

Remember: The goal is to create clear, helpful content that's easy to find and understand.
