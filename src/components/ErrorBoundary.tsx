import React, { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 max-w-xl mx-auto my-12 text-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] space-y-4">
          <div className="text-sm font-semibold text-[var(--accent-crimson,#e11d48)]">
            {this.props.fallbackTitle || 'Unable to display this view'}
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            {this.state.error?.message || 'An unexpected error occurred while rendering.'}
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="px-4 py-2 text-xs font-semibold rounded bg-[var(--accent-primary)] text-[var(--bg-surface)] cursor-pointer"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
