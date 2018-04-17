import { connect } from 'react-redux';
import selectionOne from './localOne';

// This function takes the store and returns an object
// that's passed to the props of the component
function mapStoreToProps(store) {
    return {
        hello:store
    };
}

// this might look odd but, connect returns a function,
// that is then called with the compnent itself

export default connect(mapStoreToProps)(selectionOne);