#!/usr/bin/env tsx

/**
 * copy-template.ts - Create a new P&G reflection cycle directory structure
 *
 * Usage: npm run new-cycle
 * Or: tsx scripts/copy-template.ts
 *
 * Creates a new cycle directory in reflections/ based on the current date:
 * - First half of year (Jan-Jun): YYYY-h1
 * - Second half of year (Jul-Dec): YYYY-h2
 *
 * Structure created:
 *   reflections/YYYY-hX/
 *     self-reflection.md
 *     inputs/
 *       development-plan.md
 *       feedback.md
 *       project-stakeholder-list.md
 */

import { copyFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import * as readline from "readline";
import { Logger, Prefix } from "./logger.js";

// Logger instance
const logger = new Logger();

// Utility functions
async function promptUser(question: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === "y" || answer.toLowerCase() === "yes");
    });
  });
}

// Get project root directory
function getProjectRoot(): string {
  // For ESM compatibility
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return resolve(__dirname, "..");
}

// Determine cycle name based on current date
function getCycleName(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // getMonth() returns 0-11

  const half = month <= 6 ? "h1" : "h2";
  return `${year}-${half}`;
}

// Main function
async function main() {
  const projectRoot = getProjectRoot();
  const cycleName = getCycleName();

  // Define paths
  const reflectionsDir = resolve(projectRoot, "reflections");
  const cycleDir = join(reflectionsDir, cycleName);
  const inputsDir = join(cycleDir, "inputs");

  const metaDir = resolve(projectRoot, "meta");

  // Template files mapping: [source, destination]
  const templates: Array<[string, string]> = [
    [
      join(metaDir, "reflection.template.md"),
      join(cycleDir, "self-reflection.md"),
    ],
    [
      join(metaDir, "input-development-plan.template.md"),
      join(inputsDir, "development-plan.md"),
    ],
    [
      join(metaDir, "input-feedback.template.md"),
      join(inputsDir, "feedback.md"),
    ],
    [
      join(metaDir, "input-project-stakeholder-list.template.md"),
      join(inputsDir, "project-stakeholder-list.md"),
    ],
  ];

  // Check if cycle directory already exists
  if (existsSync(cycleDir)) {
    logger.warning({
      prefix: Prefix.Warning,
      message: `Cycle directory already exists: ${cycleDir}`,
    });
    const shouldOverwrite = await promptUser(
      "Overwrite existing files? (y/n): "
    );
    if (!shouldOverwrite) {
      console.log("Operation cancelled");
      process.exit(0);
    }
  }

  // Verify all template files exist
  for (const [templatePath] of templates) {
    if (!existsSync(templatePath)) {
      logger.errorExit({
        prefix: Prefix.Error,
        message: `Template file not found: ${templatePath}`,
      });
    }
  }

  // Create directory structure
  try {
    if (!existsSync(reflectionsDir)) {
      mkdirSync(reflectionsDir, { recursive: true });
      logger.success({ prefix: Prefix.Created, message: reflectionsDir });
    }

    if (!existsSync(cycleDir)) {
      mkdirSync(cycleDir, { recursive: true });
      logger.success({ prefix: Prefix.Created, message: cycleDir });
    }

    if (!existsSync(inputsDir)) {
      mkdirSync(inputsDir, { recursive: true });
      logger.success({ prefix: Prefix.Created, message: inputsDir });
    }
  } catch (error) {
    logger.errorExit({
      prefix: Prefix.Error,
      message: `Failed to create directories: ${
        error instanceof Error ? error.message : String(error)
      }`,
    });
  }

  // Copy template files
  try {
    for (const [templatePath, outputPath] of templates) {
      copyFileSync(templatePath, outputPath);

      // Update cycle date in self-reflection.md
      if (outputPath.endsWith("self-reflection.md")) {
        const fs = await import("fs/promises");
        let content = await fs.readFile(outputPath, "utf-8");
        content = content.replace("[year]-[half]", cycleName);
        await fs.writeFile(outputPath, content, "utf-8");
      }

      logger.success({
        prefix: Prefix.Success,
        message: `Created: ${outputPath}`,
      });
    }

    console.log(`\n✨ P&G cycle ${cycleName} created successfully!`);
    console.log(`📁 Location: ${cycleDir}`);
  } catch (error) {
    logger.errorExit({
      prefix: Prefix.Error,
      message: `Failed to copy templates: ${
        error instanceof Error ? error.message : String(error)
      }`,
    });
  }
}

// Run the script
main().catch((error) => {
  logger.errorExit({
    prefix: Prefix.Error,
    message: `Unexpected error: ${
      error instanceof Error ? error.message : String(error)
    }`,
  });
});
