# P&G Copilot

This repo contains everything you need to get GitHub Copilot to help you draft your P&G self reflection.

Remember that LLMs can be useful tools, but they have limits and you should never implicitly trust their output. Review _everything_ that comes from Copilot.

## What's included

- **Copilot instructions file** ([`.github/copilot-instructions.md`](.github/copilot-instructions.md)): Configures Copilot to understand MongoDB's P&G process
- **Specialized agents** ([`.github/agents/`](.github/agents/)): Custom AI agents for different aspects of reflection writing
- **Company process files**: Reference documents for [Leadership Principles](company-process-files/leadership-principles.md), [MongoDB Values](company-process-files/mongodb-values.md), [Title Matrix](company-process-files/title-matrix.md), and [ERG P&G Guide](company-process-files/erg-pg-self-reflection-guide.md)
- **Reflection templates** ([`meta/`](meta/)): Template files for self-reflection and input documents

## Getting started

1. **Clone this repository** to your local machine
2. **Open the repository directory in VS Code**. Make sure you have the GitHub Copilot extension installed
3. In a terminal at the root of this directory, run `npm install`
4. **Create your reflection directory**. Run the following command in the terminal:
   ```bash
   npm run new-cycle
   ```
   This automatically creates a `reflections/YYYY-hX/` directory with all necessary files based on the current date
5. **Open your reflection file** at `reflections/YYYY-hX/self-reflection.md`
6. **Enable Copilot Chat** by opening the chat panel (Cmd + Shift + I on Mac)

## Workflow with agents

### 1. Set up and gather context

- If you haven't yet, run `npm run new-cycle` to create your cycle directory
- Gather your materials: projects, feedback, notes from 1:1s
- Fill in the input files:
  - `inputs/project-stakeholder-list.md` - List your projects and stakeholders
  - `inputs/feedback.md` - Add feedback you've received
  - `inputs/development-plan.md` - Link or paste your development plan

### 2. Start with strategic guidance

**Use lead-agent** to ask questions and get oriented:

- "I'm a [role/level] starting my reflection. What should I focus on?"
- "How do I structure my response to Question 1?"
- "What's expected at my level?"

**How to use agents:**

1. Open Copilot Chat (Cmd + Shift + I)
2. Click the **agents dropdown** at the bottom of the chat view
3. Select `lead-agent`
4. Ask your questions

### 3. Draft your responses

**Switch to reflection-agent** to draft each question:

- Provide context about your key accomplishments
- Let the agent help structure your responses
- Connect your work to Leadership Principles and Values

**Use handoff buttons:** After each response, you'll see suggested next steps like "Add Metrics" or "Get Coaching" - click these to seamlessly switch agents with context.

### 4. Quantify your impact

**Switch to metrics-agent** (or click the "Add Metrics" handoff button):

- Add measurable outcomes to your accomplishments
- Quantify impact with numbers, percentages, or feedback scores
- Transform vague statements into specific results

### 5. Add ERG contributions (if applicable)

**Switch to erg-agent** (or click the "Add ERG Impact" handoff button):

- Format ERG work using the required structure
- Connect ERG activities to business impact
- Include membership, attendance, and engagement metrics

### 6. Review and refine

**Switch to review-agent** (or click the "Review Draft" handoff button):

- Get systematic quality checks on your draft
- Identify areas needing improvement
- Receive actionable feedback by severity level

### 7. Address feedback and finalize

**Switch back to reflection-agent or lead-agent**:

- Make revisions based on the review feedback
- Discuss any concerns with lead-agent
- Polish for clarity and authenticity

### 8. Export to Google Docs

Once finished:

1. Select all content (Cmd + A) and copy (Cmd + C)
2. Open a new Google Doc
3. Right-click and select **Paste from Markdown** (requires Chrome or a Chromium-based browser)

## About the specialized agents

This workspace includes five custom agents designed for different aspects of P&G reflection writing:

- **lead-agent** - Interactive coach for process questions and strategic guidance
- **reflection-agent** - Primary writing assistant for drafting responses
- **metrics-agent** - Impact quantification specialist
- **erg-agent** - ERG participation formatting specialist
- **review-agent** - Quality validation checker

The "Workflow with agents" section above shows when and how to use each agent. After each agent response, you'll see **handoff buttons** with suggested next steps (like "Add Metrics" or "Get Coaching") that help you transition between agents with context preserved.

## Tips for working with agents

### Provide context

Agents work best when you provide context about your work. For example:

```
I'm a Senior Technical Writer on the Cloud team. This cycle I focused on:
- Migrating legacy documentation to the new platform
- Mentoring two junior writers
- Leading the Q3 docs release
```

### Be specific in your requests

Instead of: "Help me write about my project"
Try: "Help me draft a response to Question 1 that highlights my migration project and demonstrates 'Leaders are obsessed with their customers'"

### Iterate through conversation

Agents work best through back-and-forth dialogue:

1. Provide initial context
2. Get a draft or guidance
3. Ask for refinements: "Make this more concise" or "Add metrics to demonstrate impact"
4. Validate against the [Title Matrix](company-process-files/title-matrix.md) and [Leadership Principles](company-process-files/leadership-principles.md)

### Use handoffs to maintain flow

After each agent response, look for handoff buttons with suggested next steps. These help you:

- Move to the next logical agent without losing context
- Maintain momentum through the workflow
- Get pre-filled prompts you can customize

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

## Best practices

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
