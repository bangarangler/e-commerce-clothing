import React from 'react'
import { ErrorImageOverlay, ErrorImageText, ErrorImageContainer } from './error-boundary.styles.jsx';

class ErrorBoundary extends React.Component {
  constructor() {
    super()
    this.state = {
      hasErrored: false
    }
  }
  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true }
  }
  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/oCkEbrA.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary;
