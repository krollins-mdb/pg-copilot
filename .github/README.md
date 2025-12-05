# GitHub Copilot Configuration

This directory contains the configuration files that customize GitHub Copilot's behavior for this workspace.

## Copilot Instructions

**`copilot-instructions.md`** - Foundational instructions that apply to all Copilot interactions in this workspace, whether using custom agents or not. This file:

- Defines the workspace purpose (helping technical writers draft P&G self-reflections)
- Provides baseline guidelines for authenticity and grounding responses in the writer's actual work
- References company process files (Leadership Principles, MongoDB Values, Title Matrix, ERG Guide)
- Lists the available specialized agents and directs users to them
- Establishes key patterns to avoid (generic statements, vague impact, passive voice)

## Custom Agents

**`agents/`** - Contains five specialized custom agents for different aspects of P&G reflection writing. Each agent is defined in an `.agent.md` file and provides focused expertise:

- **`reflection-agent.md`** - Primary writing assistant for drafting responses to the three P&G questions
- **`metrics-agent.md`** - Impact quantification specialist to identify and articulate measurable outcomes
- **`erg-agent.md`** - ERG participation specialist for properly formatting ERG contributions
- **review-agent.md`** - Quality validation checker that performs systematic reviews of completed drafts
- **`lead-agent.md`** - Interactive coach simulating an experienced team lead for strategic guidance and process questions

Each agent file includes:

- YAML frontmatter with name, description, and handoff configurations
- Role and persona definition
- Project knowledge and reference files
- Commands the agent can use
- Specific approach and guidance for their specialty
- Boundaries (what they should/shouldn't do)

## How These Work Together

- **copilot-instructions.md** provides the foundation - baseline knowledge about the P&G process and workspace
- **Custom agents** build on that foundation with specialized workflows and expertise
- **Handoffs** connect the agents, creating a guided workflow while maintaining user control

Users access agents through the agents dropdown in Copilot Chat, and handoff buttons appear after responses to suggest logical next steps in the workflow.
