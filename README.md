# P&G Copilot

This repo contains everything you need to get GitHub Copilot to help you draft your P&G self reflection.

Remember that LLMs can be useful tools, but they have limits and you should never implicitly trust their output. Review _everything_ that comes from Copilot.

## What's included

- **Copilot instructions file** ([`.github/copilot-instructions.md`](.github/copilot-instructions.md)): Configures Copilot to understand MongoDB's P&G process
- **Company process files**: Reference documents for [Leadership Principles](company-process-files/leadership-principles.md), [MongoDB Values](company-process-files/mongodb-values.md), [Title Matrix](company-process-files/title-matrix.md), and [ERG P&G Guide](company-process-files/erg-pg-self-reflection-guide.md)
- **Reflection template** ([`[cycle]-reflection.md`]([cycle]-reflection.md)): Your working document for this cycle's self reflection

## Getting started

1. **Clone this repository** to your local machine.
2. **Open the repository directory in VS Code**. Make sure you have the GitHub Copilot extension installed.
3. **Rename the template file** from `[cycle]-reflection.md` to match your current cycle (for example, `2025-h2-reflection.md`).
4. **Enable Copilot Chat** by opening the chat panel (Cmd + Shift + I).
5. **Set Copilot to agentic mode** by opening the mode dropdown under the chat input box and selecting "Agent".

## Example workflow

1. **Gather your materials**: Projects, feedback, notes from 1:1s
2. **Fill in the basics**: Add to your project list and feedback sections in the template file
3. **Start a conversation**: "I need to write my H1 2025 reflection. I'm a Senior Technical Writer. Let's start with Question 1."
4. **Provide context**: Share your key accomplishments and areas of focus
5. **Draft iteratively**: Work through each question with Copilot
6. **Polish**: Ask Copilot to help with clarity, conciseness, and impact
7. **Validate**: Do a final read ensure to everything is accurate and authentic to your experience

## How to use Copilot in agentic mode

Copilot works best when you treat it as a collaborative partner. Here's are some tips for working with Copilot's agentic capabilities:

### Start with context

Before asking Copilot to help with your reflection, provide context about your work. For example:

```
I'm a Senior Technical Writer on the Cloud team. This cycle I focused on:
- Migrating legacy documentation to the new platform
- Mentoring two junior writers
- Leading the Q3 docs release
```

### Ask questions about the process

With the instructions file and supporting company docs, Copilot has knowledge of parts of the P&G process. You can ask:

- "What leadership principles should I highlight for project X?"
- "How do I structure my response for Question 1?"
- "What MongoDB values align with my mentorship work?"
- "What are the expectations for a Senior Technical Writer in the title matrix?"

### Use Copilot to draft sections

Start by adding your project list and accomplishments to your reflection file. Then ask Copilot:

- "Help me draft a response to Question 1 that highlights my work on `[project]` and demonstrates `[leadership principle]`"
- "Based on my project list and stakeholder feedback, suggest 2-3 strengths I demonstrated this cycle"
- "Review my response and suggest how to better align it with MongoDB values"

### Iterate and refine

Copilot works best through conversation:

1. **Draft**: Ask Copilot to create an initial draft
2. **Review**: Read critically and identify what needs adjustment
3. **Refine**: Ask specific questions like "Make this more concise" or "Add metrics to demonstrate impact"
4. **Validate**: Cross-reference with the [Title Matrix](company-process-files/title-matrix.md) and [Leadership Principles](company-process-files/leadership-principles.md)

## Effective prompts for your reflection

### For Question 1 (Strengths and Performance)

```
Based on my project list, help me identify 2-3 strengths. For each strength:
- Name the specific strength
- Provide a concrete example from my work
- Connect it to a leadership principle
- Include measurable impact where possible
```

### For Question 2 (Growth Opportunities)

```
I struggled with `[challenge]`. Help me frame this as a growth opportunity that:
- Shows self-awareness
- Identifies the root cause
- Connects to a leadership principle I can develop
- Suggests concrete next steps
```

### For Question 3 (Development Progress)

```
Review my development plan goals and help me:
- Assess progress on each goal
- Provide specific examples of how I worked toward them
- Identify which leadership principles helped (or would help) me grow
```

## Find your past work

Before you start writing, gather evidence of your accomplishments from JIRA and GitHub.

### JIRA tickets

Use this JQL query to find tickets you've completed in the past 180 days:

```
assignee = currentUser() AND resolution in (Done, Fixed) AND (created > -180d OR updated > -180d) order by updatedDate DESC
```

### GitHub pull requests

Use this GitHub search query to find your past PRs:

```
is:pr author:<YourGitHubUsername> archived:false created:2025-01-01..2025-06-01
```

Replace `<YourGitHubUsername>` with your GitHub username and adjust the date range to match your review cycle.

## Import content from Google Docs and Google Sheets

### From Google Docs

1. In your Google Doc, go to **File > Download > Markdown (.md)**
2. Save the markdown file to your `pg-copilot` workspace folder
3. In Copilot Chat, reference the file using `#`. When you type `#`, you should see an autocomplete that lists files in the repo. Begin typing the document name to narrow the list.
4. Ask Copilot: "Based on #file:project-notes.md, help me draft a response to Question 1 that highlights my accomplishments"

**Why markdown?** Downloading as markdown preserves formatting and allows Copilot to reference the entire document context directly, which produces better results than pasting snippets. LLMs typically understand markdown content better than other formats.

### From Google Sheets

1. In your Google Sheet, go to **File > Download > Comma Separated Values (.csv)**
2. Save the CSV file to your `pg-copilot` workspace folder
3. In Copilot Chat, reference the file using `#`. When you type `#`, you should see an autocomplete that lists files in the repo. Begin typing the document name to narrow the list.
4. Ask Copilot: "Based on #file:projects.csv, suggest which projects demonstrate leadership principles X, Y, and Z"

**Why CSV?** CSV format allows Copilot to parse your structured data (dates, metrics, deliverables) and provide more accurate analysis of your project work.

## Export markdown content to Google Docs

Once you've finished drafting your reflection in the `[cycle]-reflection.md` file, you can transfer it to Google Docs. This is only supported in a Chromium-based browser (Chrome, Edge, Brave, etc.)

1. **Copy your reflection**: Select all content in your reflection file (Cmd + A) and copy it (Cmd + C)
2. **Open a new Google Doc**
3. **Paste from markdown**: Right-click in the document and select **Paste from Markdown** from the context menu

## Tips for best results

✅ **Do:**

- Be specific in your prompts
- Provide context about your role and level
- Reference specific leadership principles and values
- Ask Copilot to include metrics and measurable outcomes
- Iterate multiple times on each section
- Cross-reference Copilot's suggestions with the [Title Matrix](company-process-files/title-matrix.md)

❌ **Don't:**

- Accept Copilot's first draft without review
- Let Copilot make up projects or accomplishments
- Forget to add your own examples and specific details
- Skip reviewing against MongoDB's actual values and principles
- Use generic language—personalize everything
