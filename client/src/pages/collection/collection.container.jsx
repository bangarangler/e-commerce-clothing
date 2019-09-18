import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors.js';
import WithSpinner from '../../components/with-spinner/with-spinner.component.jsx'
import CollectionPage from './collection.component.jsx'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;