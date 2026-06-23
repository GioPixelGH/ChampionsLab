"use client";

import { Component, type ReactNode, type ErrorInfo } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  label?: string; // e.g. "Team Builder" — used in the error message
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", this.props.label ?? "unknown", error, info.componentStack);
  }

  reset = () => this.setState({ error: null });

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    if (this.props.fallback) return this.props.fallback;

    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] gap-5 px-6 text-center">
        <div className="rounded-full bg-red-500/10 p-4">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-1">
            {this.props.label ? `${this.props.label} crashed` : "Something went wrong"}
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            {error.message || "An unexpected error occurred. Try refreshing the page."}
          </p>
        </div>
        <button
          onClick={this.reset}
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Try again
        </button>
        <details className="text-xs text-muted-foreground max-w-md">
          <summary className="cursor-pointer hover:text-foreground">Technical details</summary>
          <pre className="mt-2 text-left whitespace-pre-wrap break-all bg-muted/30 rounded p-3">
            {error.stack}
          </pre>
        </details>
      </div>
    );
  }
}
