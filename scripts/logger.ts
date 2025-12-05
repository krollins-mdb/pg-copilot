/**
 * logger.ts - Colored console logging utilities
 *
 * Provides a Logger class with standardized, colored output for different message types.
 */

// Colors for terminal output
const colors = {
  red: "\x1b[0;31m",
  green: "\x1b[0;32m",
  yellow: "\x1b[1;33m",
  reset: "\x1b[0m",
} as const;

// Message prefix definitions
export enum Prefix {
  Error = "Error:",
  Success = "Success:",
  Created = "Created:",
  DocumentType = "Document type:",
  Warning = "Warning:",
}

/**
 * Logger class for consistent, colored console output
 */
export class Logger {
  /**
   * Log an error message and exit the process
   * @param prefix - The message prefix (colored red)
   * @param message - The error message
   */
  errorExit({ prefix, message }: { prefix: Prefix; message: string }): never {
    console.error(`${colors.red}${prefix}${colors.reset} ${message}`);
    process.exit(1);
  }

  /**
   * Log a success message
   * @param prefix - The message prefix (colored green)
   * @param message - The success message
   */
  success({ prefix, message }: { prefix: Prefix; message: string }): void {
    console.log(`${colors.green}${prefix}${colors.reset} ${message}`);
  }

  /**
   * Log a warning message
   * @param prefix - The message prefix (colored yellow)
   * @param message - The warning message
   */
  warning({ prefix, message }: { prefix: Prefix; message: string }): void {
    console.log(`${colors.yellow}${prefix}${colors.reset} ${message}`);
  }

  /**
   * Log an info message (no color)
   * @param message - The info message
   */
  info(message: string): void {
    console.log(message);
  }

  /**
   * Log an error message to stderr (no color)
   * @param message - The error message
   */
  error(message: string): void {
    console.error(message);
  }
}
