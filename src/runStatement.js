import compare from "./compare";

function runStatement(linear) {
    if (linear.length % 2 === 0) {
        throw "Provided condition is not valid!";
    }
    const condition = linear.slice(0, 3);
    const result = compare(condition);
    const next = [result, ...linear.slice(3)];
    if (next.length >= 3) {
        return runStatement(next);
    }
    return result;
}

export default runStatement;
