import { Component } from 'react'

/** Shows what went wrong instead of a blank page if any part of the app crashes. */
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Baalbek guide crashed:', error, info?.componentStack)
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children
    return (
      <main className="crash" role="alert">
        <p className="eyebrow">Something went wrong</p>
        <h1>The page could not load</h1>
        <p>Try reloading. If it keeps happening, this is the error:</p>
        <pre>{String(error?.stack || error)}</pre>
        <button type="button" className="btn" onClick={() => window.location.reload()}>Reload</button>
      </main>
    )
  }
}
