import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/action";

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={() => this.props.onIncrementCounter(1)}
                />
                <CounterControl
                    label="Decrement"
                    clicked={() => this.props.onIncrementCounter(-1)}
                />
                <CounterControl
                    label="Add 5"
                    clicked={() => this.props.onIncrementCounter(+5)}
                />
                <CounterControl
                    label="Subtract 5"
                    clicked={() => this.props.onIncrementCounter(-5)}
                />
                <hr />
                <button onClick={() => this.props.onStoreResult()}>
                    Store Result
                </button>
                <ul>
                    {this.props.storedResults.map(storedResult => {
                        return (
                            <li
                                key={storedResult.id}
                                onClick={() =>
                                    this.props.onDeleteResult(storedResult.id)
                                }
                            >
                                {storedResult.id + " " + storedResult.value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: value =>
            dispatch({ type: actionTypes.INCREMENT, value: value }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: resultId =>
            dispatch({ type: actionTypes.DELETE_RESULT, resultId: resultId })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
