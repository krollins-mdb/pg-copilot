# P&G Copilot

This repo contains everything you need to get GitHub Copilot to help you draft your P&G self reflection.

Remember that LLMs can be useful tools, but they have limits and you should never implicitly trust their output. Review _everything_ that comes from Copilot.

## What's included

- **Copilot instructions file** ([`.github/copilot-instructions.md`](.github/copilot-instructions.md)): Configures Copilot to understand MongoDB's P&G process
- **Specialized agents** ([`.github/agents/`](.github/agents/)): Custom AI agents for different aspects of reflection writing
- **Company process files**: Reference documents for [Leadership Principles](company-process-files/leadership-principles.md), [MongoDB Values](company-process-files/mongodb-values.md), [Title Matrix](company-process-files/title-matrix.md), and [ERG P&G Guide](company-process-files/erg-pg-self-reflection-guide.md)
- **Reflection template** ([`[cycle]-reflection.md`]([cycle]-reflection.md)): Your working document for this cycle's self reflection

## Specialized agents

This workspace includes five specialized agents to help with different aspects of your P&G reflection:

### Writing & Drafting Agents

- **reflection-agent** - Primary writing assistant for drafting your three P&G questions. Connects your work to Leadership Principles and Values, ensures authenticity, and asks clarifying questions when context is needed.

- **metrics-agent** - Impact quantification specialist. Helps identify and articulate measurable outcomes, asks probing questions to uncover metrics, and transforms vague statements into quantified impact.

- **erg-agent** - ERG participation specialist. Uses the required format structure, connects ERG work to business impact, and ensures proper quantification of ERG contributions.

### Review & Coaching Agents

- **review-agent** - Quality validation checker. Performs systematic checks for structure, metrics, level-appropriate content, and common anti-patterns. Provides actionable feedback organized by severity (Critical/Important/Suggestions).

- **lead-agent** - Interactive coach simulating an experienced team lead. Answers process questions, helps frame difficult situations, provides strategic advice, and explains Leadership Principles in practical contexts.

### Suggested agent workflow

1. **lead-agent** - Ask questions about the P&G process and get strategic guidance as you begin
2. **reflection-agent** - Draft responses to each of the three questions
3. **metrics-agent** - Add measurable impact and quantify your accomplishments
4. **erg-agent** - Format ERG contributions (if applicable)
5. **review-agent** - Run a final quality check before submission
6. **lead-agent** - Discuss any feedback or concerns before finalizing

### How to use custom agents

To use a custom agent in VS Code:

1. Open the GitHub Copilot Chat window (Cmd + Shift + I on Mac)
2. Click the **agents dropdown** at the bottom of the chat view
3. Select the custom agent you want to use (e.g., `reflection-agent`, `metrics-agent`)
4. Type your question or request in the chat box

The selected agent will remain active for your conversation until you switch to a different agent using the dropdown menu.

### Using handoffs for guided workflows

The agents include **handoff buttons** that appear after each response, allowing you to seamlessly transition to the next relevant agent with context. For example:

- After drafting with **reflection-agent**, you'll see buttons to:

  - **Add Metrics** → Switch to `metrics-agent` to quantify your impact
  - **Get Coaching** → Switch to `lead-agent` for strategic feedback

- After adding metrics with **metrics-agent**, you'll see buttons to:

  - **Add ERG Impact** → Switch to `erg-agent` if you have ERG contributions
  - **Review Draft** → Switch to `review-agent` for quality checks

- After review with **review-agent**, you'll see buttons to:
  - **Make Revisions** → Switch to `reflection-agent` to address feedback
  - **Discuss Feedback** → Switch to `lead-agent` to discuss the review

These handoff buttons create a guided workflow while giving you control to review and approve each step. The prompts are pre-filled but not automatically sent, so you can modify them before proceeding.

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
