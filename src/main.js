import isMatched from "./isMatched";

function conditions(arr) {
    const matches = isMatched(arr);
    return { matches };
}

export default conditions;
