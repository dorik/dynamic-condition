import runStatement from "./runStatement";

function isMatched(arr) {
    const result = arr.map(item =>
        Array.isArray(item) ? runStatement(item) : item
    );
    return runStatement(result);
}

export default isMatched;
